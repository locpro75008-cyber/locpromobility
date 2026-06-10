export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const headers = { "Content-Type": "application/json" };

  let email: string;
  try {
    const body = await request.json();
    email = (body.email || "").trim().toLowerCase();
  } catch {
    return new Response(JSON.stringify({ error: "Corps de requête invalide." }), { status: 400, headers });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: "Adresse e-mail invalide." }), { status: 400, headers });
  }

  const apiKey = import.meta.env.BREVO_API_KEY;
  if (!apiKey) {
    // Si pas de clé configurée, on accepte silencieusement (dev / avant config)
    console.warn("[newsletter] BREVO_API_KEY manquante — inscription ignorée.");
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  }

  const listId = parseInt(import.meta.env.BREVO_LIST_ID || "2", 10);

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
        attributes: {
          SOURCE: "newsletter_site",
        },
      }),
    });

    if (res.ok || res.status === 204) {
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
    }

    // Contact déjà existant (409) → on considère quand même comme succès
    if (res.status === 409) {
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
    }

    const data = await res.json().catch(() => ({}));
    console.error("[newsletter] Erreur Brevo:", res.status, data);
    return new Response(
      JSON.stringify({ error: "Erreur lors de l'inscription. Réessayez." }),
      { status: 500, headers }
    );
  } catch (err) {
    console.error("[newsletter] Exception:", err);
    return new Response(JSON.stringify({ error: "Erreur serveur." }), { status: 500, headers });
  }
};
