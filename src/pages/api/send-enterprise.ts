import type { APIRoute } from 'astro';
import emailjs from '@emailjs/nodejs';

export const prerender = false;

const SERVICE_ID = 'service_5nkb8y7';
const PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.EMAILJS_PRIVATE_KEY;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { companyName, contact, email, collaborators, trainingArea } = data;

    if (!companyName || !email) {
      return new Response(
        JSON.stringify({ success: false, message: 'Nombre de empresa y email son requeridos' }),
        { status: 400 }
      );
    }

    const html = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .header{ background: linear-gradient(90deg,#AB323D 0%,#E1525F 45%); color:#fff; padding:20px; border-radius:8px 8px 0 0}
            .content{ padding:20px; background:#f9f9f9; border-radius:0 0 8px 8px }
            .row{ margin-bottom:12px }
            .label{ font-weight:700; color:#AB323D; text-transform:uppercase; font-size:12px }
            .value{ font-size:14px }
          </style>
        </head>
        <body>
          <div class="header">
            <h2 style="margin:0">Nuevo contacto - Capacitación empresarial</h2>
          </div>
          <div class="content">
            <div class="row"><div class="label">Empresa</div><div class="value">${companyName}</div></div>
            <div class="row"><div class="label">Contacto</div><div class="value">${contact || 'No especificado'}</div></div>
            <div class="row"><div class="label">Email</div><div class="value">${email}</div></div>
            <div class="row"><div class="label">Colaboradores</div><div class="value">${collaborators || 'No especificado'}</div></div>
            <div class="row"><div class="label">Área de capacitación</div><div class="value">${trainingArea || 'No especificado'}</div></div>
            <hr/>
            <p style="font-size:12px; color:#666">Enviado desde el formulario de capacitación empresarial</p>
          </div>
        </body>
      </html>
    `;

    const templateParams = {
      to_email: 'ktalweb.peru@gmail.com',
      subject: `Contacto empresarial: ${companyName}`,
      message: html,
      companyName,
      contact: contact || 'No especificado',
      email,
      collaborators: collaborators || 'No especificado',
      trainingArea: trainingArea || 'No especificado',
    };

    const res = await emailjs.send(
      SERVICE_ID,
      import.meta.env.EMAILJS_TEMPLATE_ENTERPRISE,
      templateParams,
      {
        publicKey: PUBLIC_KEY,
        privateKey: PRIVATE_KEY,
      }
    );

    if (res.status !== 200) {
      console.error('EmailJS error', res);
      return new Response(JSON.stringify({ success: false, message: 'Error enviando email' }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Enviado' }), { status: 200 });
  } catch (err) {
    console.error('send-enterprise error', err);
    return new Response(JSON.stringify({ success: false, message: 'Error interno' }), { status: 500 });
  }
};
