import type { APIRoute } from "astro";
import { z } from "zod";
import { Resend } from "resend";

export const prerender = false;

const schema = z.object({
  nom: z.string().min(2, "Nom trop court"),
  email: z.string().email("E-mail invalide"),
  telephone: z.string().optional(),
  type_vehicule: z.string().min(1, "Type de véhicule requis"),
  duree: z.string().min(1, "Durée requise"),
  message: z.string().min(10, "Message trop court"),
  "bot-field": z.string().max(0, "Bot détecté").optional(),
});

const dureeLabel: Record<string, string> = {
  court: "Court terme (< 1 semaine)",
  moyen: "Moyen terme (1 sem. – 3 mois)",
  long: "Long terme (> 3 mois)",
};

const typeLabel: Record<string, string> = {
  "velo-electrique": "Vélo électrique",
  cargo: "Cargo",
  trottinette: "Trottinette",
  gyropode: "Gyropode",
  autre: "Autre",
};

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "Serveur mal configuré (clé API manquante)." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  let body: Record<string, string>;
  try {
    const ct = request.headers.get("content-type") ?? "";
    if (ct.includes("application/json")) {
      body = await request.json();
    } else {
      const fd = await request.formData();
      body = Object.fromEntries(
        [...fd.entries()].map(([k, v]) => [k, String(v)]),
      );
    }
  } catch {
    return new Response(
      JSON.stringify({ error: "Requête invalide." }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  // Honeypot
  if (body["bot-field"]) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return new Response(JSON.stringify({ error: "Données invalides.", errors }), {
      status: 422,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { nom, email, telephone, type_vehicule, duree, message } = parsed.data;

  const resend = new Resend(apiKey);

  const htmlInterne = `
    <h2 style="font-family:sans-serif;color:#065f46">Nouvelle demande de contact</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;color:#64748b;width:160px">Nom</td><td style="padding:8px;font-weight:600">${nom}</td></tr>
      <tr style="background:#f8fafc"><td style="padding:8px;color:#64748b">E-mail</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:8px;color:#64748b">Téléphone</td><td style="padding:8px">${telephone || "—"}</td></tr>
      <tr style="background:#f8fafc"><td style="padding:8px;color:#64748b">Véhicule</td><td style="padding:8px">${typeLabel[type_vehicule] ?? type_vehicule}</td></tr>
      <tr><td style="padding:8px;color:#64748b">Durée</td><td style="padding:8px">${dureeLabel[duree] ?? duree}</td></tr>
      <tr style="background:#f8fafc"><td style="padding:8px;color:#64748b;vertical-align:top">Message</td><td style="padding:8px;white-space:pre-wrap">${message}</td></tr>
    </table>
  `;

  const htmlConfirmation = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
      <h2 style="color:#065f46">Merci ${nom} !</h2>
      <p>Votre message a bien été reçu. Notre équipe vous répondra sous <strong>24 h ouvrées</strong>.</p>
      <p style="color:#64748b;font-size:13px">Récapitulatif :<br>
        Véhicule : ${typeLabel[type_vehicule] ?? type_vehicule}<br>
        Durée souhaitée : ${dureeLabel[duree] ?? duree}
      </p>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0">
      <p style="font-size:12px;color:#94a3b8">
        LocPro Mobilité — 60 rue François 1er, 75008 Paris<br>
        <a href="tel:+33170955661">01 70 95 56 61</a> · <a href="mailto:contact@locpromobility.fr">contact@locpromobility.fr</a>
      </p>
    </div>
  `;

  try {
    // Notification interne
    await resend.emails.send({
      from: "LocPro Mobilité <contact@locpromobility.fr>",
      to: "contact@locpromobility.fr",
      replyTo: email,
      subject: `[Contact] ${nom} — ${typeLabel[type_vehicule] ?? type_vehicule}`,
      html: htmlInterne,
    });

    // Confirmation à l'expéditeur
    await resend.emails.send({
      from: "LocPro Mobilité <contact@locpromobility.fr>",
      to: email,
      subject: "Votre demande a bien été reçue — LocPro Mobilité",
      html: htmlConfirmation,
    });
  } catch (err) {
    console.error("Resend error:", err);
    return new Response(
      JSON.stringify({ error: "Erreur lors de l'envoi, réessayez ou appelez-nous." }),
      { status: 502, headers: { "Content-Type": "application/json" } },
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
