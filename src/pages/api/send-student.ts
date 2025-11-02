import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

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

    const res = await resend.emails.send({
      from: 'Biotraining <onboarding@resend.dev>',
      to: ['ktalweb.peru@gmail.com'],
      subject: `Inscripción: ${fullName}`,
      html,
    });

    if ((res as any).error) {
      console.error('Resend error', (res as any).error);
      return new Response(JSON.stringify({ success: false, message: 'Error enviando email' }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Enviado' }), { status: 200 });
  } catch (err) {
    console.error('send-student error', err);
    return new Response(JSON.stringify({ success: false, message: 'Error interno' }), { status: 500 });
  }
};
