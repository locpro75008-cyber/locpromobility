import { z } from 'zod';
import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const schema = z.object({
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
  "bot-field-resa": z.string().max(0, "Bot détecté").optional()
}).refine((d) => (d.nom ?? d.nom_contact ?? "").trim().length >= 2, {
  message: "Nom trop court",
  path: ["nom"]
});
const dureeLabel = {
  court: "Court terme (< 1 semaine)",
  moyen: "Moyen terme (1 sem. – 3 mois)",
  long: "Long terme (> 3 mois)"
};
const typeLabel = {
  "velo-electrique": "Vélo électrique",
  cargo: "Cargo",
  trottinette: "Trottinette",
  gyropode: "Gyropode",
  autre: "Autre"
};
const POST = async ({ request }) => {
  const apiKey = "re_7iRZCMqy_JQGCmi89tgrP77U63bF1Uupv";
  let body;
  try {
    const ct = request.headers.get("content-type") ?? "";
    if (ct.includes("application/json")) {
      body = await request.json();
    } else {
      const fd = await request.formData();
      body = Object.fromEntries(
        [...fd.entries()].map(([k, v]) => [k, String(v)])
      );
    }
  } catch {
    return new Response(
      JSON.stringify({ error: "Requête invalide." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  if (body["bot-field"]) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return new Response(JSON.stringify({ error: "Données invalides.", errors }), {
      status: 422,
      headers: { "Content-Type": "application/json" }
    });
  }
  const {
    email,
    telephone,
    type_vehicule,
    duree,
    message,
    date_debut,
    date_fin,
    adresse_livraison,
    adresse_recuperation,
    societe,
    siret,
    nom_contact,
    nombre_vehicules,
    usage
  } = parsed.data;
  const nom = (parsed.data.nom_contact ?? parsed.data.nom ?? "").trim();
  const resend = new Resend(apiKey);
  const row = (label, val, alt = "—", bg = "") => val ? `<tr style="background:${bg}"><td style="padding:8px;color:#64748b;width:160px">${label}</td><td style="padding:8px">${val}</td></tr>` : "";
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
      ${row("Durée", duree ? dureeLabel[duree] ?? duree : void 0, "", "#f8fafc")}
      ${row("Date de départ", date_debut)}
      ${row("Date de retour", date_fin, "", "#f8fafc")}
      ${row("Adresse livraison", adresse_livraison)}
      ${row("Adresse récupération", adresse_recuperation, "", "#f8fafc")}
      ${row("Usage prévu", usage)}
      ${message ? `<tr><td style="padding:8px;color:#64748b;vertical-align:top">Message</td><td style="padding:8px;white-space:pre-wrap">${message}</td></tr>` : ""}
    </table>
  `;
  const recapLines = [
    type_vehicule ? `Véhicule : ${typeLabel[type_vehicule] ?? type_vehicule}` : "",
    duree ? `Durée : ${dureeLabel[duree] ?? duree}` : "",
    date_debut ? `Départ : ${date_debut}` : "",
    date_fin ? `Retour : ${date_fin}` : "",
    adresse_livraison ? `Livraison : ${adresse_livraison}` : "",
    adresse_recuperation ? `Récupération : ${adresse_recuperation}` : ""
  ].filter(Boolean).join("<br>");
  const htmlConfirmation = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
      <h2 style="color:#065f46">Merci ${nom_contact ?? nom} !</h2>
      <p>Votre demande a bien été reçue. Notre équipe vous répondra sous <strong>24 h ouvrées</strong>.</p>
      <p style="color:#64748b;font-size:13px">Récapitulatif :<br>${recapLines}</p>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0">
      <p style="font-size:12px;color:#94a3b8">
        LocPro Mobilité — 60 rue François 1er, 75008 Paris<br>
        <a href="tel:+33170955661">01 70 95 56 61</a> · <a href="mailto:contact@locpromobility.fr">contact@locpromobility.fr</a>
      </p>
    </div>
  `;
  try {
    await resend.emails.send({
      from: "LocPro Mobilité <contact@locpromobility.fr>",
      to: "contact@locpromobility.fr",
      replyTo: email,
      subject: `[Demande] ${nom} — ${type_vehicule ? typeLabel[type_vehicule] ?? type_vehicule : societe ?? "Devis B2B"}`,
      html: htmlInterne
    });
    await resend.emails.send({
      from: "LocPro Mobilité <contact@locpromobility.fr>",
      to: email,
      subject: "Votre demande a bien été reçue — LocPro Mobilité",
      html: htmlConfirmation
    });
  } catch (err) {
    console.error("Resend error:", err);
    return new Response(
      JSON.stringify({ error: "Erreur lors de l'envoi, réessayez ou appelez-nous." }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
