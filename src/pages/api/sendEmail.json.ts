import type { APIRoute } from "astro";
import { Resend } from "resend";
import {
  RESEND_API_KEY,
  SEND_EMAIL_FROM,
  SEND_EMAIL_TO,
} from "astro:env/server";

const resend = new Resend(RESEND_API_KEY);
const subject = "ALEJOIDE.TECH | Nuevo contacto";
const from = SEND_EMAIL_FROM;
const to = SEND_EMAIL_TO;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const service = data.get("service") ?? "No especificado";
  const message = data.get("message");

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "Faltan campos obligatorios." }),
      { status: 400 }
    );
  }

  const html = `
    <h1 style="color:#48c7a8;font-family:monospace;">ALEJOIDE.TECH — Nuevo contacto</h1>
    <p><b>Nombre:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Servicio:</b> ${service}</p>
    <p><b>Mensaje:</b><br>${String(message).replace(/\n/g, "<br>")}</p>
  `;

  const send = await resend.emails.send({ from, to, subject, html });

  if (send.data) {
    return new Response(JSON.stringify({ message: "Mensaje enviado." }), {
      status: 200,
    });
  } else {
    return new Response(
      JSON.stringify({ message: send.error?.message ?? "Error interno." }),
      { status: 500 }
    );
  }
};
