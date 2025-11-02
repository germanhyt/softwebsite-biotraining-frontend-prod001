# 📨 Migración a EmailJS - Resumen

## ✅ Cambios Realizados

### 1. Dependencias
- ❌ Desinstalado: `resend`
- ✅ Instalado: `@emailjs/nodejs`

### 2. Archivos Actualizados

#### APIs modificadas (4 archivos):
1. `src/pages/api/send-email.ts` - Formulario de contacto general
2. `src/pages/api/send-student.ts` - Inscripción de estudiantes
3. `src/pages/api/send-enterprise.ts` - Contacto empresarial
4. `src/pages/api/send-conversemos.ts` - Formulario "Conversemos"

#### Configuración:
- `.env.example` - Actualizado con variables de EmailJS
- `EMAILJS-SETUP.md` - Guía completa de configuración
- `EMAILJS-TEMPLATES.md` - Plantillas para copiar/pegar

---

## 🔑 Variables de Entorno Requeridas

Necesitas configurar en tu archivo `.env`:

```env
EMAILJS_PUBLIC_KEY=tu_public_key
EMAILJS_PRIVATE_KEY=tu_private_key
EMAILJS_TEMPLATE_CONTACT=template_id_1
EMAILJS_TEMPLATE_STUDENT=template_id_2
EMAILJS_TEMPLATE_ENTERPRISE=template_id_3
EMAILJS_TEMPLATE_CONVERSEMOS=template_id_4
```

---

## 🚀 Próximos Pasos

### 1. Obtener credenciales de EmailJS
   - Ve a https://dashboard.emailjs.com/
   - En **Account > General**, copia tu **Public Key** y **Private Key**

### 2. Crear 4 templates en EmailJS
   - **Template 1**: `biotraining_contact_form`
   - **Template 2**: `biotraining_student_form`
   - **Template 3**: `biotraining_enterprise_form`
   - **Template 4**: `biotraining_conversemos_form`

   Para cada template:
   - **To Email**: `{{to_email}}`
   - **Subject**: `{{subject}}`
   - **Content**: `{{{message}}}` ← (3 llaves para HTML)

### 3. Configurar archivo `.env`
   ```bash
   cp .env.example .env
   ```
   Luego edita `.env` con tus credenciales reales.

### 4. Probar la aplicación
   ```bash
   npm run dev
   ```
   Prueba cada uno de los 4 formularios.

---

## 📖 Documentación

- **Setup completo**: Ver `EMAILJS-SETUP.md`
- **Templates HTML**: Ver `EMAILJS-TEMPLATES.md`

---

## 💡 Información Técnica

### Service ID (ya configurado)
```
service_5nkb8y7
```

### Estructura de envío
Cada formulario envía:
1. HTML completo pre-renderizado (variable `message`)
2. Variables individuales de cada campo
3. Destinatario: `ktalweb.peru@gmail.com`

### Validación
Todos los endpoints mantienen las mismas validaciones que con Resend.

---

## 🎯 Ventajas de EmailJS vs Resend

✅ Más fácil de configurar
✅ No requiere dominio verificado
✅ Interfaz visual para templates
✅ Gratis hasta 200 emails/mes
✅ Soporte para múltiples servicios de email (Gmail, Outlook, etc.)

---

## 📧 Soporte

Si tienes dudas, revisa:
1. `EMAILJS-SETUP.md` - Guía detallada
2. `EMAILJS-TEMPLATES.md` - Ejemplos de templates
3. [Documentación oficial de EmailJS](https://www.emailjs.com/docs/)
