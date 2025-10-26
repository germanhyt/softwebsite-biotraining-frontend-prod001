import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validación básica
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Enviar email usando Resend
    const data = await resend.emails.send({
      from: import.meta.env.EMAIL_FROM,
      to: import.meta.env.EMAIL_TO,
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .container {
              background: linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%);
              padding: 2px;
              border-radius: 12px;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 10px;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
            }
            .header h1 {
              color: #0ea5e9;
              margin: 0;
              font-size: 28px;
            }
            .info-block {
              background: #f8fafc;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
              border-left: 4px solid #0ea5e9;
            }
            .label {
              font-weight: bold;
              color: #0ea5e9;
              margin-bottom: 5px;
            }
            .value {
              color: #334155;
              margin-bottom: 15px;
            }
            .message-box {
              background: #f1f5f9;
              padding: 20px;
              border-radius: 8px;
              margin-top: 20px;
              border: 1px solid #e2e8f0;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 2px solid #e2e8f0;
              color: #64748b;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="content">
              <div class="header">
                <h1>📧 Nuevo Mensaje de Contacto</h1>
              </div>
              
              <div class="info-block">
                <div class="label">👤 Nombre:</div>
                <div class="value">${name}</div>
                
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></div>
                
                ${phone ? `
                  <div class="label">📱 Teléfono:</div>
                  <div class="value">${phone}</div>
                ` : ''}
                
                <div class="label">📋 Asunto:</div>
                <div class="value">${subject}</div>
              </div>
              
              <div class="label">💬 Mensaje:</div>
              <div class="message-box">
                ${message.replace(/\n/g, '<br>')}
              </div>
              
              <div class="footer">
                <p>Este mensaje fue enviado desde el formulario de contacto de BioTraining</p>
                <p style="margin: 5px 0;">© ${new Date().getFullYear()} BioTraining</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error al enviar email:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Error al enviar el mensaje',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
