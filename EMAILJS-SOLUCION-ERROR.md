# Solución al error "The recipients address is empty"

## Problema
EmailJS requiere que el email destinatario esté configurado en el **Template Settings** del dashboard, no desde el código.

## Solución

### Opción 1: Configurar To Email en el Template (RECOMENDADO)

1. Ve a https://dashboard.emailjs.com/admin/templates/template_c8zcx8d
2. En "Template Settings", campo "To Email" escribe: `ktalweb.peru@gmail.com`
3. En "Subject" escribe: `{{from_name}} - Nuevo contacto`
4. Guarda el template

### Opción 2: Usar variable dinámica en el Template

Si quieres enviar a diferentes emails según el formulario:

**En el Template Settings:**
- To Email: `{{to_email}}`

**En el código, agrega nuevamente:**
```typescript
const templateParams = {
  to_email: 'ktalweb.peru@gmail.com', // ← Agregar esta línea
  from_name: 'Biotraining - ...',
  // ... resto de campos
};
```

### Opción 3: Configurar múltiples destinatarios

En el Template Settings:
- To Email: `ktalweb.peru@gmail.com, otro@email.com`

## Verificación

Para verificar que está configurado correctamente:

1. Ve a tu template en EmailJS
2. Haz clic en "Test it"
3. Envía un email de prueba
4. Si llega, el template está bien configurado

## Template HTML sugerido

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: linear-gradient(90deg, #AB323D 0%, #E1525F 45%); color: white; padding: 20px; }
    .content { padding: 20px; background: #f9f9f9; }
    .field { margin: 10px 0; padding: 10px; background: white; border-left: 4px solid #E1525F; }
    .label { font-weight: bold; color: #AB323D; }
  </style>
</head>
<body>
  <div class="header">
    <h2>{{from_name}}</h2>
  </div>
  <div class="content">
    {{#if nombre}}
      <div class="field"><span class="label">Nombre:</span> {{nombre}}</div>
      <div class="field"><span class="label">Especialidad:</span> {{especialidad}}</div>
      <div class="field"><span class="label">Ocupación:</span> {{ocupacion}}</div>
      <div class="field"><span class="label">Formato:</span> {{formato}}</div>
      <div class="field"><span class="label">Modalidad:</span> {{modalidad}}</div>
      <div class="field"><span class="label">Experiencia:</span> {{experiencia}}</div>
    {{/if}}
    
    {{#if company_name}}
      <div class="field"><span class="label">Empresa:</span> {{company_name}}</div>
      <div class="field"><span class="label">Contacto:</span> {{contact}}</div>
      <div class="field"><span class="label">Email:</span> {{email}}</div>
      <div class="field"><span class="label">Colaboradores:</span> {{collaborators}}</div>
      <div class="field"><span class="label">Área:</span> {{training_area}}</div>
    {{/if}}
    
    {{#if full_name}}
      <div class="field"><span class="label">Nombre:</span> {{full_name}}</div>
      <div class="field"><span class="label">Tipo:</span> {{student_type}}</div>
      <div class="field"><span class="label">Especialidad:</span> {{speciality}}</div>
      <div class="field"><span class="label">Área:</span> {{work_area}}</div>
      <div class="field"><span class="label">Curso:</span> {{course_interest}}</div>
    {{/if}}
  </div>
</body>
</html>
```

## Configuración completa del Template

```
Template ID: template_c8zcx8d
Service: service_5nkb8y7
To Email: ktalweb.peru@gmail.com
From Name: Biotraining
Subject: {{from_name}} - Nuevo contacto
Content: [HTML de arriba]
```
