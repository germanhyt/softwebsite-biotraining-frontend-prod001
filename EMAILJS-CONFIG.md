# Configuración de EmailJS para Biotraining

Este documento explica cómo está configurado EmailJS para los 3 formularios de contacto del sitio web de Biotraining.

## ✅ Configuración Actual (Frontend)

EmailJS se usa **directamente desde React** (frontend), sin necesidad de endpoints API en el servidor.

### Credenciales Configuradas

```typescript
// src/config/emailjs.config.ts
export const EMAILJS_CONFIG = {
  serviceId: 'service_5nkb8y7',
  templateId: 'template_c8zcx8d',
  publicKey: 'gpq7fMTIE7-uWo9Hm',
  toEmail: 'ktalweb.peru@gmail.com',
};
```

## 📋 Formularios Implementados

Todos los formularios usan **el mismo template** (`template_c8zcx8d`) pero con diferentes campos:

### 1. Formulario "Conversemos" (`ContactForm.tsx`)
**Ubicación**: Sección principal de la página  
**Campos enviados**:
- `nombre` - Nombre completo
- `especialidad` - Especialidad
- `ocupacion` - Ocupación actual
- `formato` - Preferencia de formato (virtual/presencial/híbrido)
- `modalidad` - Modalidad (en vivo/grabado/mixto)
- `experiencia` - Experiencia práctica deseada

### 2. Formulario "Empresarial" (`EnterpriseContactModal.tsx`)
**Ubicación**: Modal de capacitación empresarial  
**Campos enviados**:
- `company_name` - Nombre de la empresa
- `contact` - Número de contacto
- `email` - Correo electrónico
- `collaborators` - Número de colaboradores
- `training_area` - Área de capacitación

### 3. Formulario "Estudiante" (`StudentContactModal.tsx`)
**Ubicación**: Modal de inscripción de cursos  
**Campos enviados**:
- `full_name` - Nombre completo
- `student_type` - Tipo (estudiante/profesional)
- `speciality` - Especialidad
- `work_area` - Área de trabajo (diagnóstico/investigación)
- `course_interest` - Curso de interés

## 🔧 Template de EmailJS

Debes configurar **1 template** en EmailJS (`template_c8zcx8d`) que incluya **todas las variables** de los 3 formularios:

### Variables del Template

```
{{to_email}} - Email destino
{{from_name}} - Identificador del formulario
{{nombre}} - Para formulario Conversemos
{{especialidad}} - Para formulario Conversemos
{{ocupacion}} - Para formulario Conversemos
{{formato}} - Para formulario Conversemos
{{modalidad}} - Para formulario Conversemos
{{experiencia}} - Para formulario Conversemos
{{company_name}} - Para formulario Empresarial
{{contact}} - Para formulario Empresarial
{{email}} - Para formulario Empresarial
{{collaborators}} - Para formulario Empresarial
{{training_area}} - Para formulario Empresarial
{{full_name}} - Para formulario Estudiante
{{student_type}} - Para formulario Estudiante
{{speciality}} - Para formulario Estudiante
{{work_area}} - Para formulario Estudiante
{{course_interest}} - Para formulario Estudiante
```

### Ejemplo de Template HTML

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .header { background: linear-gradient(90deg,#AB323D 0%,#E1525F 45%); color:#fff; padding:20px; }
    .content { padding:20px; background:#f9f9f9; }
    .field { margin-bottom:15px; }
    .label { font-weight:700; color:#AB323D; text-transform:uppercase; font-size:12px; }
  </style>
</head>
<body>
  <div class="header">
    <h2>{{from_name}}</h2>
  </div>
  <div class="content">
    <!-- Campos del formulario Conversemos -->
    {{#if nombre}}
      <div class="field"><div class="label">Nombre</div><div>{{nombre}}</div></div>
      <div class="field"><div class="label">Especialidad</div><div>{{especialidad}}</div></div>
      <div class="field"><div class="label">Ocupación</div><div>{{ocupacion}}</div></div>
      <div class="field"><div class="label">Formato</div><div>{{formato}}</div></div>
      <div class="field"><div class="label">Modalidad</div><div>{{modalidad}}</div></div>
      <div class="field"><div class="label">Experiencia</div><div>{{experiencia}}</div></div>
    {{/if}}
    
    <!-- Campos del formulario Empresarial -->
    {{#if company_name}}
      <div class="field"><div class="label">Empresa</div><div>{{company_name}}</div></div>
      <div class="field"><div class="label">Contacto</div><div>{{contact}}</div></div>
      <div class="field"><div class="label">Email</div><div>{{email}}</div></div>
      <div class="field"><div class="label">Colaboradores</div><div>{{collaborators}}</div></div>
      <div class="field"><div class="label">Área</div><div>{{training_area}}</div></div>
    {{/if}}
    
    <!-- Campos del formulario Estudiante -->
    {{#if full_name}}
      <div class="field"><div class="label">Nombre</div><div>{{full_name}}</div></div>
      <div class="field"><div class="label">Tipo</div><div>{{student_type}}</div></div>
      <div class="field"><div class="label">Especialidad</div><div>{{speciality}}</div></div>
      <div class="field"><div class="label">Área</div><div>{{work_area}}</div></div>
      <div class="field"><div class="label">Curso</div><div>{{course_interest}}</div></div>
    {{/if}}
  </div>
</body>
</html>
```

## 🚀 Implementación

### Arquitectura

```
Frontend (React)
├── ContactForm.tsx
├── EnterpriseContactModal.tsx
├── StudentContactModal.tsx
└── emailjs.config.ts (configuración centralizada)
    ↓
    Llama directamente a EmailJS API
    ↓
EmailJS Service (service_5nkb8y7)
    ↓
Template (template_c8zcx8d)
    ↓
Email enviado a: ktalweb.peru@gmail.com
```

### Ventajas de esta implementación

✅ **Sin servidor**: No requiere endpoints API  
✅ **Más simple**: Menos código, menos archivos  
✅ **Más rápido**: Comunicación directa con EmailJS  
✅ **Centralizado**: Toda la config en un solo archivo  
✅ **Un solo template**: Más fácil de mantener

## 📝 Código de Ejemplo

```typescript
// Importar configuración y EmailJS
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs.config';

// Preparar datos
const templateParams = {
  to_email: EMAILJS_CONFIG.toEmail,
  from_name: 'Biotraining - Formulario X',
  // ... campos específicos del formulario
};

// Enviar email
await emailjs.send(
  EMAILJS_CONFIG.serviceId,
  EMAILJS_CONFIG.templateId,
  templateParams,
  EMAILJS_CONFIG.publicKey
);
```

## ⚙️ Modificar Configuración

Para cambiar las credenciales, edita:
```
src/config/emailjs.config.ts
```

## 🔍 Verificación

1. Abre la consola del navegador
2. Completa cualquiera de los 3 formularios
3. Verifica que no haya errores en la consola
4. Revisa el email en `ktalweb.peru@gmail.com`

## 📞 Soporte

- **Documentación EmailJS**: https://www.emailjs.com/docs/
- **Dashboard**: https://dashboard.emailjs.com/

## 📌 Notas

- EmailJS tiene un límite de **200 emails/mes** en el plan gratuito
- Los formularios validan campos antes de enviar
- Se muestra alerta de éxito/error con SweetAlert2
- El template debe soportar todos los campos de los 3 formularios

## 📋 Requisitos

1. Cuenta en [EmailJS](https://www.emailjs.com/)
2. Service ID: `service_5nkb8y7` (ya configurado)
3. Public Key (obténlo desde tu dashboard de EmailJS)
4. 3 Templates (uno para cada formulario)

## 🔧 Configuración Inicial

### 1. Crear una cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta o inicia sesión
3. Conecta tu servicio de email (Gmail, Outlook, etc.)

### 2. Obtener el Public Key

1. En el dashboard de EmailJS, ve a **Account** > **General**
2. Copia tu **Public Key**
3. Actualiza el archivo `.env` con este valor

### 3. Crear los Templates

Debes crear **3 templates** en EmailJS, uno para cada formulario:

#### Template 1: Formulario "Conversemos" (ContactForm)
**Variables del template:**
- `{{to_email}}` - Email de destino (ktalweb.peru@gmail.com)
- `{{from_name}}` - Nombre del remitente (Biotraining - Formulario Conversemos)
- `{{subject}}` - Asunto del email
- `{{name}}` - Nombre del usuario
- `{{specialty}}` - Especialidad
- `{{occupation}}` - Ocupación
- `{{preference}}` - Preferencia de formato
- `{{modality}}` - Modalidad preferida
- `{{experience}}` - Experiencia deseada

**Ejemplo de contenido HTML:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .header { background: linear-gradient(90deg,#AB323D 0%,#E1525F 45%); color:#fff; padding:20px; }
    .content { padding:20px; background:#f9f9f9; }
    .field { margin-bottom:15px; }
    .label { font-weight:700; color:#AB323D; text-transform:uppercase; font-size:12px; }
  </style>
</head>
<body>
  <div class="header">
    <h2>Nuevo contacto - Conversemos</h2>
  </div>
  <div class="content">
    <div class="field">
      <div class="label">Nombre</div>
      <div>{{name}}</div>
    </div>
    <div class="field">
      <div class="label">Especialidad</div>
      <div>{{specialty}}</div>
    </div>
    <div class="field">
      <div class="label">Ocupación</div>
      <div>{{occupation}}</div>
    </div>
    <div class="field">
      <div class="label">Preferencia</div>
      <div>{{preference}}</div>
    </div>
    <div class="field">
      <div class="label">Modalidad</div>
      <div>{{modality}}</div>
    </div>
    <div class="field">
      <div class="label">Experiencia deseada</div>
      <div>{{experience}}</div>
    </div>
  </div>
</body>
</html>
```

#### Template 2: Formulario "Empresarial" (EnterpriseContactModal)
**Variables del template:**
- `{{to_email}}` - Email de destino
- `{{from_name}}` - Nombre del remitente (Biotraining - Capacitación Empresarial)
- `{{subject}}` - Asunto
- `{{company_name}}` - Nombre de la empresa
- `{{contact}}` - Contacto
- `{{email}}` - Email del contacto
- `{{collaborators}}` - Número de colaboradores
- `{{training_area}}` - Área de capacitación

**Ejemplo de contenido HTML:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .header { background: linear-gradient(90deg,#AB323D 0%,#E1525F 45%); color:#fff; padding:20px; }
    .content { padding:20px; background:#f9f9f9; }
    .field { margin-bottom:15px; }
    .label { font-weight:700; color:#AB323D; text-transform:uppercase; font-size:12px; }
  </style>
</head>
<body>
  <div class="header">
    <h2>Nuevo contacto - Capacitación Empresarial</h2>
  </div>
  <div class="content">
    <div class="field">
      <div class="label">Empresa</div>
      <div>{{company_name}}</div>
    </div>
    <div class="field">
      <div class="label">Contacto</div>
      <div>{{contact}}</div>
    </div>
    <div class="field">
      <div class="label">Email</div>
      <div>{{email}}</div>
    </div>
    <div class="field">
      <div class="label">Colaboradores</div>
      <div>{{collaborators}}</div>
    </div>
    <div class="field">
      <div class="label">Área de capacitación</div>
      <div>{{training_area}}</div>
    </div>
  </div>
</body>
</html>
```

#### Template 3: Formulario "Estudiante" (StudentContactModal)
**Variables del template:**
- `{{to_email}}` - Email de destino
- `{{from_name}}` - Nombre del remitente (Biotraining - Inscripción)
- `{{subject}}` - Asunto
- `{{full_name}}` - Nombre completo
- `{{student_type}}` - Tipo (estudiante/profesional)
- `{{speciality}}` - Especialidad
- `{{work_area}}` - Área de trabajo
- `{{course_interest}}` - Curso de interés

**Ejemplo de contenido HTML:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .header { background: linear-gradient(90deg,#AB323D 0%,#E1525F 45%); color:#fff; padding:20px; }
    .content { padding:20px; background:#f9f9f9; }
    .field { margin-bottom:15px; }
    .label { font-weight:700; color:#AB323D; text-transform:uppercase; font-size:12px; }
  </style>
</head>
<body>
  <div class="header">
    <h2>Nuevo contacto - Inscripción</h2>
  </div>
  <div class="content">
    <div class="field">
      <div class="label">Nombre completo</div>
      <div>{{full_name}}</div>
    </div>
    <div class="field">
      <div class="label">Tipo</div>
      <div>{{student_type}}</div>
    </div>
    <div class="field">
      <div class="label">Especialidad</div>
      <div>{{speciality}}</div>
    </div>
    <div class="field">
      <div class="label">Área de trabajo</div>
      <div>{{work_area}}</div>
    </div>
    <div class="field">
      <div class="label">Curso de interés</div>
      <div>{{course_interest}}</div>
    </div>
  </div>
</body>
</html>
```

### 4. Configurar el archivo `.env`

Actualiza tu archivo `.env` con los valores correspondientes:

```env
# EmailJS Configuration
EMAILJS_SERVICE_ID=service_5nkb8y7
EMAILJS_PUBLIC_KEY=tu_public_key_aqui
# Template IDs para cada formulario
EMAILJS_TEMPLATE_CONVERSEMOS=template_id_del_formulario_conversemos
EMAILJS_TEMPLATE_ENTERPRISE=template_id_del_formulario_empresarial
EMAILJS_TEMPLATE_STUDENT=template_id_del_formulario_estudiante
```

## 📝 Pasos para obtener los Template IDs

1. En EmailJS, ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Configura el template con las variables mencionadas arriba
4. Copia el **Template ID** que se genera automáticamente
5. Pégalo en el archivo `.env` correspondiente

## 🚀 Despliegue

Una vez configurado todo:

1. Verifica que todas las variables estén correctamente en el archivo `.env`
2. Ejecuta el proyecto: `npm run dev`
3. Prueba cada uno de los 3 formularios para asegurarte de que funcionan correctamente

## ✅ Verificación

Para verificar que todo funciona correctamente:

1. Completa el formulario "Conversemos" en la página principal
2. Completa el formulario "Empresarial" desde el modal de empresas
3. Completa el formulario "Estudiante" desde el modal de inscripción de cursos
4. Verifica que los emails lleguen a `ktalweb.peru@gmail.com`

## 🔍 Troubleshooting

### Error: "Configuración de email incompleta"
- Verifica que todas las variables de entorno estén correctamente configuradas en `.env`
- Asegúrate de que los Template IDs sean correctos

### Los emails no llegan
- Verifica que el Service ID esté activo en EmailJS
- Revisa la configuración del servicio de email conectado
- Verifica los logs en el dashboard de EmailJS

### Error al enviar
- Verifica que el Public Key sea correcto
- Asegúrate de que los templates tengan las variables correctas
- Revisa la consola del navegador para errores específicos

## 📞 Soporte

Si tienes problemas con EmailJS:
- Documentación oficial: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- FAQ: [https://www.emailjs.com/docs/faq/](https://www.emailjs.com/docs/faq/)

## 📌 Notas Importantes

- **Service ID**: `service_5nkb8y7` (ya configurado)
- **Email destino**: `ktalweb.peru@gmail.com` (configurado en cada endpoint)
- Los formularios usan el mismo Service ID pero diferentes Template IDs
- EmailJS tiene un límite gratuito de 200 emails/mes en el plan gratuito

## 🔄 Migración desde Resend

La migración de Resend a EmailJS ya está completa. Los cambios incluyen:

- ✅ Instalación de `@emailjs/browser`
- ✅ Desinstalación de `resend`
- ✅ Actualización de 4 endpoints API:
  - `send-conversemos.ts`
  - `send-enterprise.ts`
  - `send-student.ts`
  - `send-email.ts`
- ✅ Actualización del archivo `.env`

Los formularios React no requieren cambios ya que siguen usando los mismos endpoints API.
