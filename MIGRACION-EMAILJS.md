# Resumen de Migración: Resend → EmailJS

## 📋 Cambios Realizados

### 1. Dependencias Actualizadas

#### ✅ Instalado
- `@emailjs/browser` - Librería oficial de EmailJS para envío de emails

#### ❌ Desinstalado
- `resend` - Librería anterior para envío de emails

### 2. Archivos API Actualizados

Se actualizaron **4 archivos API** para usar EmailJS en lugar de Resend:

#### 📁 `src/pages/api/send-conversemos.ts`
- **Formulario**: "Conversemos" (ContactForm - Sección principal)
- **Template ID**: `EMAILJS_TEMPLATE_CONVERSEMOS`
- **Campos**: name, specialty, occupation, preference, modality, experience

#### 📁 `src/pages/api/send-enterprise.ts`
- **Formulario**: Capacitación Empresarial (EnterpriseContactModal)
- **Template ID**: `EMAILJS_TEMPLATE_ENTERPRISE`
- **Campos**: company_name, contact, email, collaborators, training_area

#### 📁 `src/pages/api/send-student.ts`
- **Formulario**: Inscripción de Estudiantes (StudentContactModal)
- **Template ID**: `EMAILJS_TEMPLATE_STUDENT`
- **Campos**: full_name, student_type, speciality, work_area, course_interest

#### 📁 `src/pages/api/send-email.ts`
- **Formulario**: Formulario de Intereses (ContactForm alternativo)
- **Template ID**: `EMAILJS_TEMPLATE_CONVERSEMOS` (reutiliza el mismo)
- **Campos**: nombre, especialidad, ocupacion, formato, modalidad, experiencia

### 3. Configuración de Variables de Entorno

#### Archivo `.env`
```env
EMAILJS_SERVICE_ID=service_5nkb8y7
EMAILJS_PUBLIC_KEY=your_public_key_here
EMAILJS_TEMPLATE_CONVERSEMOS=your_template_id_conversemos
EMAILJS_TEMPLATE_ENTERPRISE=your_template_id_enterprise
EMAILJS_TEMPLATE_STUDENT=your_template_id_student
```

#### Archivo `.env.example`
Se actualizó con las nuevas variables de EmailJS como plantilla

### 4. Documentación Creada

#### 📄 `EMAILJS-CONFIG.md`
Guía completa de configuración que incluye:
- ✅ Requisitos y configuración inicial
- ✅ Pasos para crear cuenta en EmailJS
- ✅ Configuración de los 3 templates con ejemplos HTML
- ✅ Instrucciones de obtención de Template IDs
- ✅ Guía de verificación y troubleshooting
- ✅ Notas importantes y limitaciones

## 🔧 Configuración Técnica

### Service ID
- **ID Configurado**: `service_5nkb8y7`
- **Email Destino**: `ktalweb.peru@gmail.com`

### Estructura de EmailJS

```
EmailJS
├── Service: service_5nkb8y7
├── Public Key: (configurar en .env)
└── Templates (3):
    ├── Template Conversemos → EMAILJS_TEMPLATE_CONVERSEMOS
    ├── Template Enterprise → EMAILJS_TEMPLATE_ENTERPRISE
    └── Template Student → EMAILJS_TEMPLATE_STUDENT
```

## 📊 Mapeo de Formularios

| Formulario | Componente React | Endpoint API | Template EmailJS |
|------------|------------------|--------------|------------------|
| Conversemos | `ContactForm.tsx` | `/api/send-conversemos` | TEMPLATE_CONVERSEMOS |
| Empresarial | `EnterpriseContactModal.tsx` | `/api/send-enterprise` | TEMPLATE_ENTERPRISE |
| Estudiante | `StudentContactModal.tsx` | `/api/send-student` | TEMPLATE_STUDENT |
| Intereses | `ContactForm.tsx` | `/api/send-email` | TEMPLATE_CONVERSEMOS |

## ⚙️ Funcionalidad de los Endpoints

Todos los endpoints siguen el mismo patrón:

1. **Validación**: Verifican campos requeridos
2. **Configuración**: Obtienen credenciales de EmailJS desde `.env`
3. **Preparación**: Crean `templateParams` con los datos del formulario
4. **Envío**: Usan `emailjs.send()` para enviar el email
5. **Respuesta**: Retornan éxito o error en formato JSON

### Ejemplo de Código (send-conversemos.ts)
```typescript
import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.EMAILJS_SERVICE_ID || 'service_5nkb8y7';
const templateId = import.meta.env.EMAILJS_TEMPLATE_CONVERSEMOS;
const publicKey = import.meta.env.EMAILJS_PUBLIC_KEY;

const templateParams = {
  to_email: 'ktalweb.peru@gmail.com',
  from_name: 'Biotraining - Formulario Conversemos',
  subject: `Nuevo contacto - Conversemos: ${name}`,
  name: name,
  specialty: specialty,
  // ... más campos
};

const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
```

## 🚀 Siguientes Pasos

### Para completar la migración:

1. **Crear cuenta en EmailJS**
   - Ir a https://www.emailjs.com/
   - Registrarse o iniciar sesión

2. **Configurar Service**
   - Conectar servicio de email (Gmail, Outlook, etc.)
   - Verificar que el Service ID sea `service_5nkb8y7`

3. **Crear 3 Templates**
   - Template para "Conversemos" (ver ejemplos en EMAILJS-CONFIG.md)
   - Template para "Empresarial"
   - Template para "Estudiante"

4. **Obtener credenciales**
   - Copiar Public Key del dashboard
   - Copiar los 3 Template IDs

5. **Actualizar .env**
   - Pegar Public Key
   - Pegar los 3 Template IDs

6. **Probar**
   - Ejecutar `npm run dev`
   - Probar cada uno de los 3 formularios
   - Verificar recepción de emails

## ⚠️ Notas Importantes

- Los componentes React **NO** requieren cambios
- Los formularios siguen usando los mismos endpoints
- EmailJS tiene límite de **200 emails/mes** en plan gratuito
- El HTML de los templates se configura directamente en EmailJS
- Todos los formularios envían a: `ktalweb.peru@gmail.com`

## 📝 Archivos No Modificados

Los siguientes archivos **NO** requieren cambios:
- ✅ `src/components/react/ContactForm.tsx`
- ✅ `src/components/react/EnterpriseContactModal.tsx`
- ✅ `src/components/react/StudentContactModal.tsx`
- ✅ `src/components/react/Conversemos.tsx`

Estos componentes continúan funcionando igual porque solo realizan `fetch()` a los endpoints API.

## 🔄 Comparativa: Antes vs Después

### Antes (Resend)
```typescript
import { Resend } from 'resend';
const resend = new Resend(import.meta.env.RESEND_API_KEY);
await resend.emails.send({
  from: 'Biotraining <onboarding@resend.dev>',
  to: ['ktalweb.peru@gmail.com'],
  subject: 'Asunto',
  html: '<html>...</html>'
});
```

### Después (EmailJS)
```typescript
import emailjs from '@emailjs/browser';
await emailjs.send(
  serviceId,
  templateId,
  templateParams,
  publicKey
);
```

## ✅ Ventajas de EmailJS

- ✅ Templates HTML editables desde el dashboard
- ✅ Sin necesidad de escribir HTML en código
- ✅ Fácil gestión de múltiples plantillas
- ✅ Interfaz visual para configuración
- ✅ Mejor separación entre código y diseño

## 📞 Soporte

Para más información consultar:
- **Guía de configuración**: `EMAILJS-CONFIG.md`
- **Documentación EmailJS**: https://www.emailjs.com/docs/
- **Variables de entorno**: `.env.example`

---

**Fecha de migración**: 2 de Noviembre, 2025  
**Estado**: ✅ Migración completada - Pendiente configuración de credenciales EmailJS
