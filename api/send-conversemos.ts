import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, specialty, occupation, preference, modality, experience } = req.body;

    if (!name || !specialty) {
      return res.status(400).json({ success: false, message: 'Nombre y especialidad son requeridos' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

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
            <h2 style="margin:0">Nuevo contacto - Conversemos</h2>
          </div>
          <div class="content">
            <div class="row"><div class="label">Nombre</div><div class="value">${name}</div></div>
            <div class="row"><div class="label">Especialidad</div><div class="value">${specialty}</div></div>
            <div class="row"><div class="label">Ocupación</div><div class="value">${occupation || 'No especificado'}</div></div>
            <div class="row"><div class="label">Preferencia</div><div class="value">${preference || 'No especificado'}</div></div>
            <div class="row"><div class="label">Modalidad</div><div class="value">${modality || 'No especificado'}</div></div>
            <div class="row"><div class="label">Experiencia deseada</div><div class="value">${experience || 'No especificado'}</div></div>
            <hr/>
            <p style="font-size:12px; color:#666">Enviado desde el formulario "Conversemos" del sitio Biotraining</p>
          </div>
        </body>
      </html>
    `;

    const result = await resend.emails.send({
      from: 'Biotraining <onboarding@resend.dev>',
      to: ['info@biotraining.pe'],
      subject: `Nuevo contacto - Conversemos: ${name}`,
      html,
    });

    if ((result as any).error) {
      console.error('Resend error', (result as any).error);
      return res.status(500).json({ success: false, message: 'Error enviando email' });
    }

    return res.status(200).json({ success: true, message: 'Enviado' });
  } catch (err) {
    console.error('send-conversemos error', err);
    return res.status(500).json({ success: false, message: 'Error interno' });
  }
}
