import type { APIRoute } from 'astro';
import emailjs from '@emailjs/nodejs';

export const prerender = false;

const SERVICE_ID = 'service_5nkb8y7';
const PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.EMAILJS_PRIVATE_KEY;

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

    // Crear el HTML para el template
    const html = `
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
      `;

    // Parámetros del template de EmailJS
    const templateParams = {
      to_email: 'ktalweb.peru@gmail.com',
      subject: `Nuevo contacto: ${nombre}`,
      message: html,
      nombre,
      especialidad,
      ocupacion: ocupacion || 'No especificado',
      formato: formato || 'No especificado',
      modalidad: modalidad || 'No especificado',
      experiencia: experiencia || 'No especificado',
    };

    // Enviar email con EmailJS
    const emailResult = await emailjs.send(
      SERVICE_ID,
      import.meta.env.EMAILJS_TEMPLATE_CONTACT,
      templateParams,
      {
        publicKey: PUBLIC_KEY,
        privateKey: PRIVATE_KEY,
      }
    );

    if (emailResult.status !== 200) {
      console.error('Error al enviar email:', emailResult);
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
