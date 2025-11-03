import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend("re_EqzgBVe5_3RH6tkRsdvf97nDLJvkRB8di");
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, specialty, occupation, preference, modality, experience } = data;
    if (!name || !specialty) {
      return new Response(
        JSON.stringify({ success: false, message: "Nombre y especialidad son requeridos" }),
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
            <h2 style="margin:0">Nuevo contacto - Conversemos</h2>
          </div>
          <div class="content">
            <div class="row"><div class="label">Nombre</div><div class="value">${name}</div></div>
            <div class="row"><div class="label">Especialidad</div><div class="value">${specialty}</div></div>
            <div class="row"><div class="label">Ocupación</div><div class="value">${occupation || "No especificado"}</div></div>
            <div class="row"><div class="label">Preferencia</div><div class="value">${preference || "No especificado"}</div></div>
            <div class="row"><div class="label">Modalidad</div><div class="value">${modality || "No especificado"}</div></div>
            <div class="row"><div class="label">Experiencia deseada</div><div class="value">${experience || "No especificado"}</div></div>
            <hr/>
            <p style="font-size:12px; color:#666">Enviado desde el formulario "Conversemos" del sitio Biotraining</p>
          </div>
        </body>
      </html>
    `;
    const res = await resend.emails.send({
      from: "Biotraining <onboarding@resend.dev>",
      to: ["ktalweb.peru@gmail.com"],
      subject: `Nuevo contacto - Conversemos: ${name}`,
      html
    });
    if (res.error) {
      console.error("Resend error", res.error);
      return new Response(JSON.stringify({ success: false, message: "Error enviando email" }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true, message: "Enviado" }), { status: 200 });
  } catch (err) {
    console.error("send-conversemos error", err);
    return new Response(JSON.stringify({ success: false, message: "Error interno" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
