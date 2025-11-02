import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { 
      nombre, 
      especialidad, 
      ocupacion, 
      formato, 
      modalidad, 
      experiencia 
    } = data;

    // Validaciones básicas
    if (!nombre || !especialidad) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Nombre y especialidad son requeridos',
        }),
        { status: 400 }
      );
    }

    // Enviar email
    const emailResult = await resend.emails.send({
      from: 'Biotraining <onboarding@resend.dev>',
      to: ['ktalweb.peru@gmail.com'],
      subject: `Nuevo contacto: ${nombre}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(90deg, #AB323D 0%, #E1525F 45%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 5px;
                border-left: 4px solid #E1525F;
              }
              .label {
                font-weight: bold;
                color: #AB323D;
                font-size: 14px;
                text-transform: uppercase;
                margin-bottom: 5px;
              }
              .value {
                font-size: 16px;
                color: #333;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #E1525F;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">Nuevo Contacto - Biotraining</h1>
              <p style="margin: 10px 0 0 0;">Formulario de Intereses</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nombre Completo</div>
                <div class="value">${nombre}</div>
              </div>
              
              <div class="field">
                <div class="label">Especialidad</div>
                <div class="value">${especialidad}</div>
              </div>
              
              <div class="field">
                <div class="label">Ocupación Actual</div>
                <div class="value">${ocupacion || 'No especificado'}</div>
              </div>
              
              <div class="field">
                <div class="label">Preferencia de Formato</div>
                <div class="value">${formato || 'No especificado'}</div>
              </div>
              
              <div class="field">
                <div class="label">Preferencia de Modalidad</div>
                <div class="value">${modalidad || 'No especificado'}</div>
              </div>
              
              <div class="field">
                <div class="label">Experiencia Práctica Deseada</div>
                <div class="value">${experiencia || 'No especificado'}</div>
              </div>
              
              <div class="footer">
                <p>Este mensaje fue enviado desde el formulario de contacto de Biotraining Academy</p>
                <p>© 2025 Biotraining. Todos los derechos reservados.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (emailResult.error) {
      console.error('Error al enviar email:', emailResult.error);
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Error al enviar el email',
        }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Formulario enviado correctamente',
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en el endpoint:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error interno del servidor',
      }),
      { status: 500 }
    );
  }
};
