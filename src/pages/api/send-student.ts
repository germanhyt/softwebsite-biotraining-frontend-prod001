import type { APIRoute } from 'astro';
import emailjs from '@emailjs/nodejs';

export const prerender = false;

const SERVICE_ID = 'service_5nkb8y7';
const PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.EMAILJS_PRIVATE_KEY;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { fullName, studentType, speciality, workArea, courseInterest } = data;

    if (!fullName || !studentType) {
      return new Response(
        JSON.stringify({ success: false, message: 'Nombre y tipo son requeridos' }),
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
            <h2 style="margin:0">Nuevo contacto - Inscripción</h2>
          </div>
          <div class="content">
            <div class="row"><div class="label">Nombre completo</div><div class="value">${fullName}</div></div>
            <div class="row"><div class="label">Tipo</div><div class="value">${studentType}</div></div>
            <div class="row"><div class="label">Especialidad</div><div class="value">${speciality || 'No especificado'}</div></div>
            <div class="row"><div class="label">Área de trabajo</div><div class="value">${workArea || 'No especificado'}</div></div>
            <div class="row"><div class="label">Curso de interés</div><div class="value">${courseInterest || 'No especificado'}</div></div>
            <hr/>
            <p style="font-size:12px; color:#666">Enviado desde el formulario de inscripción (Cursos)</p>
          </div>
        </body>
      </html>
    `;

    const templateParams = {
      to_email: 'ktalweb.peru@gmail.com',
      subject: `Inscripción: ${fullName}`,
      message: html,
      fullName,
      studentType,
      speciality: speciality || 'No especificado',
      workArea: workArea || 'No especificado',
      courseInterest: courseInterest || 'No especificado',
    };

    const res = await emailjs.send(
      SERVICE_ID,
      import.meta.env.EMAILJS_TEMPLATE_STUDENT,
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
    console.error('send-student error', err);
    return new Response(JSON.stringify({ success: false, message: 'Error interno' }), { status: 500 });
  }
};
