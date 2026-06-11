import type { APIRoute } from "astro";
import { z } from "zod";
import { Resend } from "resend";

export const prerender = false;

const schema = z
  .object({
    nom: z.string().optional(),
    email: z.string().email("E-mail invalide"),
  telephone: z.string().optional(),
  type_vehicule: z.string().optional(),
  duree: z.string().optional(),
  message: z.string().optional(),
  // Champs réservation / devis
  date_debut: z.string().optional(),
  date_fin: z.string().optional(),
  adresse_livraison: z.string().optional(),
  adresse_recuperation: z.string().optional(),
  // Champs devis B2B
  societe: z.string().optional(),
  siret: z.string().optional(),
  nom_contact: z.string().optional(),
  nombre_vehicules: z.string().optional(),
  usage: z.string().optional(),
  "bot-field": z.string().max(0, "Bot détecté").optional(),
  "bot-field-resa": z.string().max(0, "Bot détecté").optional(),
})
.refine((d) => (d.nom ?? d.nom_contact ?? "").trim().length >= 2, {
  message: "Nom trop court",
  path: ["nom"],
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

  const {
    email, telephone, type_vehicule, duree, message,
    date_debut, date_fin, adresse_livraison, adresse_recuperation,
    societe, siret, nom_contact, nombre_vehicules, usage,
  } = parsed.data;
  const nom = (parsed.data.nom_contact ?? parsed.data.nom ?? "").trim();

  const resend = new Resend(apiKey);

  const row = (label: string, val: string | undefined, alt = "—", bg = "") =>
    val ? `<tr style="background:${bg}"><td style="padding:8px;color:#64748b;width:160px">${label}</td><td style="padding:8px">${val}</td></tr>` : "";

  const htmlInterne = `
    <h2 style="font-family:sans-serif;color:#065f46">Nouvelle demande — LocPro Mobilité</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;color:#64748b;width:160px">Nom</td><td style="padding:8px;font-weight:600">${nom}</td></tr>
      <tr style="background:#f8fafc"><td style="padding:8px;color:#64748b">E-mail</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
      ${row("Téléphone", telephone || "—")}
      ${row("Société", societe, "", "#f8fafc")}
      ${row("SIRET", siret)}
      ${row("Contact B2B", nom_contact, "", "#f8fafc")}
      ${type_vehicule ? `<tr style="background:#f8fafc"><td style="padding:8px;color:#64748b">Véhicule</td><td style="padding:8px">${typeLabel[type_vehicule] ?? type_vehicule}</td></tr>` : ""}
      ${row("Nb. véhicules", nombre_vehicules)}
      ${row("Durée", duree ? (dureeLabel[duree] ?? duree) : undefined, "", "#f8fafc")}
      ${row("Date de départ", date_debut)}
      ${row("Date de retour", date_fin, "", "#f8fafc")}
      ${row("Adresse livraison", adresse_livraison)}
      ${row("Adresse récupération", adresse_recuperation, "", "#f8fafc")}
      ${row("Usage prévu", usage)}
      ${message ? `<tr><td style="padding:8px;color:#64748b;vertical-align:top">Message</td><td style="padding:8px;white-space:pre-wrap">${message}</td></tr>` : ""}
    </table>
  `;

  const isDevis = !!(societe || nombre_vehicules);
  const isReservation = !!(date_debut || adresse_livraison);
  const formType = isDevis ? "devis" : isReservation ? "reservation" : "contact";

  const recapLines = [
    type_vehicule ? `Véhicule : ${typeLabel[type_vehicule] ?? type_vehicule}` : "",
    duree ? `Durée : ${dureeLabel[duree] ?? duree}` : "",
    societe ? `Société : ${societe}` : "",
    nombre_vehicules ? `Nb. véhicules : ${nombre_vehicules}` : "",
    date_debut ? `Départ : ${date_debut}` : "",
    date_fin ? `Retour : ${date_fin}` : "",
    adresse_livraison ? `Livraison : ${adresse_livraison}` : "",
    adresse_recuperation ? `Récupération : ${adresse_recuperation}` : "",
  ].filter(Boolean).join("<br>");

  const confirmContent: Record<string, { subject: string; title: string; body: string; delay: string }> = {
    reservation: {
      subject: "Confirmation de votre demande de réservation — LocPro Mobilité",
      title: "Votre réservation est en cours de traitement",
      body: "Nous vérifions la disponibilité de votre véhicule et vous confirmons sous <strong>2 heures</strong> en semaine.",
      delay: "2 h",
    },
    devis: {
      subject: "Confirmation de votre demande de devis B2B — LocPro Mobilité",
      title: "Votre demande de devis a bien été reçue",
      body: "Notre équipe commerciale prépare une proposition personnalisée. Réponse sous <strong>48 h ouvrées</strong>.",
      delay: "48 h",
    },
    contact: {
      subject: "Votre message a bien été reçu — LocPro Mobilité",
      title: "Merci pour votre message",
      body: "Notre équipe vous répondra sous <strong>24 h ouvrées</strong>.",
      delay: "24 h",
    },
  };

  const c = confirmContent[formType];

  const htmlConfirmation = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
      <h2 style="color:#065f46">${c.title}</h2>
      <p>Bonjour ${nom_contact ?? nom},</p>
      <p>${c.body}</p>
      ${recapLines ? `<p style="color:#64748b;font-size:13px;margin-top:16px"><strong>Récapitulatif :</strong><br>${recapLines}</p>` : ""}
      <p style="margin-top:20px"><a href="https://locpromobility.fr/catalogue" style="color:#059669;font-weight:600">Voir le catalogue →</a></p>
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
      subject: `[Demande] ${nom} — ${type_vehicule ? (typeLabel[type_vehicule] ?? type_vehicule) : societe ?? "Devis B2B"}`,
      html: htmlInterne,
    });

    // Confirmation à l'expéditeur
    await resend.emails.send({
      from: "LocPro Mobilité <contact@locpromobility.fr>",
      to: email,
      subject: c.subject,
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
