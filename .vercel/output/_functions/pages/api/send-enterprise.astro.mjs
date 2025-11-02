import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend("re_93TJLU5c_AC57YASkmiQMpE7N2aFeE7ig");
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { companyName, contact, email, collaborators, trainingArea } = data;
    if (!companyName || !email) {
      return new Response(
        JSON.stringify({ success: false, message: "Nombre de empresa y email son requeridos" }),
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
            <div class="row"><div class="label">Contacto</div><div class="value">${contact || "No especificado"}</div></div>
            <div class="row"><div class="label">Email</div><div class="value">${email}</div></div>
            <div class="row"><div class="label">Colaboradores</div><div class="value">${collaborators || "No especificado"}</div></div>
            <div class="row"><div class="label">Área de capacitación</div><div class="value">${trainingArea || "No especificado"}</div></div>
            <hr/>
            <p style="font-size:12px; color:#666">Enviado desde el formulario de capacitación empresarial</p>
          </div>
        </body>
      </html>
    `;
    const res = await resend.emails.send({
      from: "Biotraining <onboarding@resend.dev>",
      to: ["ktalweb.peru@gmail.com"],
      subject: `Contacto empresarial: ${companyName}`,
      html
    });
    if (res.error) {
      console.error("Resend error", res.error);
      return new Response(JSON.stringify({ success: false, message: "Error enviando email" }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true, message: "Enviado" }), { status: 200 });
  } catch (err) {
    console.error("send-enterprise error", err);
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
