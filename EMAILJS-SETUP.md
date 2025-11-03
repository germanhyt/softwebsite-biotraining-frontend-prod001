# Guía de Configuración EmailJS

## Migración de Resend a EmailJS

Este proyecto ha sido migrado de Resend a EmailJS para el envío de correos electrónicos desde los formularios de contacto.

### Service ID
- **Service ID**: `service_5nkb8y7`

---

## 📋 Requisitos Previos

1. Cuenta en [EmailJS](https://www.emailjs.com/)
2. Acceso al dashboard de EmailJS

---

## 🔧 Configuración Paso a Paso

### 1. Obtener las Credenciales (Public & Private Keys)

1. Inicia sesión en [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Ve a **Account** > **General**
3. Copia tu **Public Key** y **Private Key**
4. Guárdalas para agregarlas al archivo `.env`

### 2. Crear los Email Templates

Necesitas crear **4 templates** en EmailJS, uno para cada formulario:

#### Template 1: Formulario de Contacto General (EMAILJS_TEMPLATE_CONTACT)

**Nombre sugerido**: `biotraining_contact_form`

**Variables del template**:
```
{{to_email}}
{{subject}}
{{message}}
{{nombre}}
{{especialidad}}
{{ocupacion}}
{{formato}}
{{modalidad}}
{{experiencia}}
```

**Configuración del template**:
- **To Email**: `{{to_email}}` (ktalweb.peru@gmail.com)
- **Subject**: `{{subject}}`
- **Content**: Usa `{{{message}}}` (con 3 llaves para HTML) o crea tu propio diseño usando las variables individuales

---

#### Template 2: Formulario de Estudiantes (EMAILJS_TEMPLATE_STUDENT)

**Nombre sugerido**: `biotraining_student_form`

**Variables del template**:
```
{{to_email}}
{{subject}}
{{message}}
{{fullName}}
{{studentType}}
{{speciality}}
{{workArea}}
{{courseInterest}}
```

**Configuración del template**:
- **To Email**: `{{to_email}}`
- **Subject**: `{{subject}}`
- **Content**: `{{{message}}}`

---

#### Template 3: Formulario de Empresas (EMAILJS_TEMPLATE_ENTERPRISE)

**Nombre sugerido**: `biotraining_enterprise_form`

**Variables del template**:
```
{{to_email}}
{{subject}}
{{message}}
{{companyName}}
{{contact}}
{{email}}
{{collaborators}}
{{trainingArea}}
```

**Configuración del template**:
- **To Email**: `{{to_email}}`
- **Subject**: `{{subject}}`
- **Content**: `{{{message}}}`

---

#### Template 4: Formulario Conversemos (EMAILJS_TEMPLATE_CONVERSEMOS)

**Nombre sugerido**: `biotraining_conversemos_form`

**Variables del template**:
```
{{to_email}}
{{subject}}
{{message}}
{{name}}
{{specialty}}
{{occupation}}
{{preference}}
{{modality}}
{{experience}}
```

**Configuración del template**:
- **To Email**: `{{to_email}}`
- **Subject**: `{{subject}}`
- **Content**: `{{{message}}}`

---

### 3. Configurar el archivo `.env`

Copia el archivo `.env.example` a `.env`:

```bash
cp .env.example .env
```

Luego edita el archivo `.env` y agrega tus credenciales:

```env
# EmailJS Configuration
EMAILJS_PUBLIC_KEY=tu_public_key_real
EMAILJS_PRIVATE_KEY=tu_private_key_real

# Template IDs (usa los IDs que EmailJS te asigna)
EMAILJS_TEMPLATE_CONTACT=template_xxxxxxx
EMAILJS_TEMPLATE_STUDENT=template_yyyyyyy
EMAILJS_TEMPLATE_ENTERPRISE=template_zzzzzzz
EMAILJS_TEMPLATE_CONVERSEMOS=template_aaaaaaa
```

---

## 📝 Notas Importantes

### Diferencias con Resend

1. **HTML en Templates**: EmailJS permite enviar HTML directamente en el parámetro `message`. Usa `{{{message}}}` (3 llaves) en el template para renderizar HTML.

2. **Variables individuales**: Además del HTML completo, también se envían todas las variables del formulario por separado, lo que te permite personalizar el template en EmailJS sin modificar el código.

3. **Email del remitente**: EmailJS utiliza tu servicio de email configurado (Gmail, Outlook, etc.) como remitente, no necesitas configurar un dominio como en Resend.

### Estructura de los Formularios

Los 4 formularios que envían emails son:

1. **ContactForm** (`/api/send-email`) - Formulario de contacto general
2. **StudentContactModal** (`/api/send-student`) - Inscripción de estudiantes/profesionales
3. **EnterpriseContactModal** (`/api/send-enterprise`) - Contacto empresarial
4. **Conversemos** (`/api/send-conversemos`) - Formulario "Conversemos"

---

## 🧪 Pruebas

Después de configurar todo:

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Prueba cada formulario en la aplicación

3. Verifica que los correos lleguen a `ktalweb.peru@gmail.com`

4. Revisa los logs de EmailJS en el dashboard para depurar si hay errores

---

## 🔐 Seguridad

- **Nunca** compartas tus claves públicas y privadas de EmailJS
- Asegúrate de que el archivo `.env` esté en `.gitignore`
- Las claves privadas solo deben usarse en el backend (API routes)

---

## 📦 Dependencias

El proyecto utiliza:
- `@emailjs/nodejs` - SDK oficial de EmailJS para Node.js

---

## 🆘 Soporte

Si tienes problemas:

1. Revisa los logs en la consola del servidor
2. Verifica los logs de EmailJS en el dashboard
3. Asegúrate de que todos los Template IDs sean correctos
4. Confirma que el Service ID sea `service_5nkb8y7`
5. Verifica que las variables de entorno estén cargadas correctamente

---

## 📚 Recursos

- [Documentación de EmailJS](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [EmailJS Node.js SDK](https://www.emailjs.com/docs/sdk/node/)
