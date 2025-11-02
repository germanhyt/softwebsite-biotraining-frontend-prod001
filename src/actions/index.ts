import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  // Acción para "Conversemos"
  sendConversemos: defineAction({
    accept: 'json',
    input: z.object({
      name: z.string().min(1, 'Nombre es requerido'),
      specialty: z.string().min(1, 'Especialidad es requerida'),
      occupation: z.string().optional(),
      preference: z.string().optional(),
      modality: z.string().optional(),
      experience: z.string().optional(),
    }),
    handler: async ({ name, specialty, occupation, preference, modality, experience }) => {
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

      const { data, error } = await resend.emails.send({
        from: 'Biotraining <onboarding@resend.dev>',
        to: ['ktalweb.peru@gmail.com'],
        subject: `Nuevo contacto - Conversemos: ${name}`,
        html,
      });

      if (error) {
        throw new Error(`Error al enviar el email: ${error.message}`);
      }

      return { success: true, message: 'Email enviado correctamente', data };
    },
  }),

  // Acción para inscripción de estudiantes
  sendStudent: defineAction({
    accept: 'json',
    input: z.object({
      fullName: z.string().min(1, 'Nombre completo es requerido'),
      studentType: z.string().min(1, 'Tipo es requerido'),
      speciality: z.string().optional(),
      workArea: z.string().optional(),
      courseInterest: z.string().optional(),
    }),
    handler: async ({ fullName, studentType, speciality, workArea, courseInterest }) => {
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

      const { data, error } = await resend.emails.send({
        from: 'Biotraining <onboarding@resend.dev>',
        to: ['ktalweb.peru@gmail.com'],
        subject: `Nueva inscripción: ${fullName}`,
        html,
      });

      if (error) {
        throw new Error(`Error al enviar el email: ${error.message}`);
      }

      return { success: true, message: 'Email enviado correctamente', data };
    },
  }),

  // Acción para empresas
  sendEnterprise: defineAction({
    accept: 'json',
    input: z.object({
      companyName: z.string().min(1, 'Nombre de empresa es requerido'),
      contact: z.string().optional(),
      email: z.string().email('Email inválido'),
      collaborators: z.string().optional(),
      trainingArea: z.string().optional(),
    }),
    handler: async ({ companyName, contact, email, collaborators, trainingArea }) => {
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

      const { data, error } = await resend.emails.send({
        from: 'Biotraining <onboarding@resend.dev>',
        to: ['ktalweb.peru@gmail.com'],
        subject: `Capacitación empresarial: ${companyName}`,
        html,
      });

      if (error) {
        throw new Error(`Error al enviar el email: ${error.message}`);
      }

      return { success: true, message: 'Email enviado correctamente', data };
    },
  }),

  // Acción para contacto general (send-email)
  sendContacto: defineAction({
    accept: 'json',
    input: z.object({
      nombre: z.string().min(1, 'Nombre es requerido'),
      especialidad: z.string().min(1, 'Especialidad es requerida'),
      ocupacion: z.string().optional(),
      formato: z.string().optional(),
      modalidad: z.string().optional(),
      experiencia: z.string().optional(),
    }),
    handler: async ({ nombre, especialidad, ocupacion, formato, modalidad, experiencia }) => {
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
                padding: 30px 20px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: #f9f9f9;
                padding: 30px 20px;
                border-radius: 0 0 8px 8px;
              }
              .info-row {
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 1px solid #e0e0e0;
              }
              .label {
                font-weight: 700;
                color: #AB323D;
                text-transform: uppercase;
                font-size: 12px;
                margin-bottom: 5px;
              }
              .value {
                font-size: 16px;
                color: #333;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 2px solid #AB323D;
                text-align: center;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">Nuevo Contacto</h1>
              <p style="margin: 10px 0 0 0; font-size: 14px;">Biotraining Academy</p>
            </div>
            <div class="content">
              <div class="info-row">
                <div class="label">Nombre</div>
                <div class="value">${nombre}</div>
              </div>
              <div class="info-row">
                <div class="label">Especialidad</div>
                <div class="value">${especialidad}</div>
              </div>
              ${ocupacion ? `
              <div class="info-row">
                <div class="label">Ocupación</div>
                <div class="value">${ocupacion}</div>
              </div>
              ` : ''}
              ${formato ? `
              <div class="info-row">
                <div class="label">Formato de preferencia</div>
                <div class="value">${formato}</div>
              </div>
              ` : ''}
              ${modalidad ? `
              <div class="info-row">
                <div class="label">Modalidad</div>
                <div class="value">${modalidad}</div>
              </div>
              ` : ''}
              ${experiencia ? `
              <div class="info-row">
                <div class="label">Experiencia deseada</div>
                <div class="value">${experiencia}</div>
              </div>
              ` : ''}
              <div class="footer">
                <p>Este correo fue enviado desde el formulario de contacto de www.biotraining.pe</p>
              </div>
            </div>
          </body>
        </html>
      `;

      const { data, error } = await resend.emails.send({
        from: 'Biotraining <onboarding@resend.dev>',
        to: ['ktalweb.peru@gmail.com'],
        subject: `Nuevo contacto: ${nombre}`,
        html,
      });

      if (error) {
        throw new Error(`Error al enviar el email: ${error.message}`);
      }

      return { success: true, message: 'Email enviado correctamente', data };
    },
  }),
};
