# Plantillas EmailJS - Templates de Ejemplo

Este archivo contiene las plantillas HTML que puedes copiar y pegar directamente en EmailJS.

---

## 📧 Template 1: Contacto General (biotraining_contact_form)

### Configuración del Template en EmailJS:

**Template Name**: `biotraining_contact_form`

**To Email**: `{{to_email}}`

**Subject**: `{{subject}}`

**Content** (Opción Simple - Solo HTML):
```html
{{{message}}}
```

**Content** (Opción Personalizada):
```html
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
      <div class="value">{{nombre}}</div>
    </div>
    
    <div class="field">
      <div class="label">Especialidad</div>
      <div class="value">{{especialidad}}</div>
    </div>
    
    <div class="field">
      <div class="label">Ocupación Actual</div>
      <div class="value">{{ocupacion}}</div>
    </div>
    
    <div class="field">
      <div class="label">Preferencia de Formato</div>
      <div class="value">{{formato}}</div>
    </div>
    
    <div class="field">
      <div class="label">Preferencia de Modalidad</div>
      <div class="value">{{modalidad}}</div>
    </div>
    
    <div class="field">
      <div class="label">Experiencia Práctica Deseada</div>
      <div class="value">{{experiencia}}</div>
    </div>
    
    <div class="footer">
      <p>Este mensaje fue enviado desde el formulario de contacto de Biotraining Academy</p>
      <p>© 2025 Biotraining. Todos los derechos reservados.</p>
    </div>
  </div>
</body>
</html>
```

---

## 📧 Template 2: Estudiantes (biotraining_student_form)

### Configuración del Template en EmailJS:

**Template Name**: `biotraining_student_form`

**To Email**: `{{to_email}}`

**Subject**: `{{subject}}`

**Content** (Recomendado - usa el HTML que ya viene en el código):
```html
{{{message}}}
```

**Content** (Alternativa - Template personalizado):
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .header{ 
      background: linear-gradient(90deg,#AB323D 0%,#E1525F 45%); 
      color:#fff; 
      padding:20px; 
      border-radius:8px 8px 0 0;
    }
    .content{ 
      padding:20px; 
      background:#f9f9f9; 
      border-radius:0 0 8px 8px;
    }
    .row{ margin-bottom:12px; }
    .label{ 
      font-weight:700; 
      color:#AB323D; 
      text-transform:uppercase; 
      font-size:12px;
    }
    .value{ font-size:14px; }
  </style>
</head>
<body>
  <div class="header">
    <h2 style="margin:0">Nuevo contacto - Inscripción</h2>
  </div>
  <div class="content">
    <div class="row">
      <div class="label">Nombre completo</div>
      <div class="value">{{fullName}}</div>
    </div>
    <div class="row">
      <div class="label">Tipo</div>
      <div class="value">{{studentType}}</div>
    </div>
    <div class="row">
      <div class="label">Especialidad</div>
      <div class="value">{{speciality}}</div>
    </div>
    <div class="row">
      <div class="label">Área de trabajo</div>
      <div class="value">{{workArea}}</div>
    </div>
    <div class="row">
      <div class="label">Curso de interés</div>
      <div class="value">{{courseInterest}}</div>
    </div>
    <hr/>
    <p style="font-size:12px; color:#666">
      Enviado desde el formulario de inscripción (Cursos)
    </p>
  </div>
</body>
</html>
```

---

## 📧 Template 3: Empresas (biotraining_enterprise_form)

### Configuración del Template en EmailJS:

**Template Name**: `biotraining_enterprise_form`

**To Email**: `{{to_email}}`

**Subject**: `{{subject}}`

**Content** (Recomendado):
```html
{{{message}}}
```

**Content** (Alternativa):
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .header{ 
      background: linear-gradient(90deg,#AB323D 0%,#E1525F 45%); 
      color:#fff; 
      padding:20px; 
      border-radius:8px 8px 0 0;
    }
    .content{ 
      padding:20px; 
      background:#f9f9f9; 
      border-radius:0 0 8px 8px;
    }
    .row{ margin-bottom:12px; }
    .label{ 
      font-weight:700; 
      color:#AB323D; 
      text-transform:uppercase; 
      font-size:12px;
    }
    .value{ font-size:14px; }
  </style>
</head>
<body>
  <div class="header">
    <h2 style="margin:0">Nuevo contacto - Capacitación empresarial</h2>
  </div>
  <div class="content">
    <div class="row">
      <div class="label">Empresa</div>
      <div class="value">{{companyName}}</div>
    </div>
    <div class="row">
      <div class="label">Contacto</div>
      <div class="value">{{contact}}</div>
    </div>
    <div class="row">
      <div class="label">Email</div>
      <div class="value">{{email}}</div>
    </div>
    <div class="row">
      <div class="label">Colaboradores</div>
      <div class="value">{{collaborators}}</div>
    </div>
    <div class="row">
      <div class="label">Área de capacitación</div>
      <div class="value">{{trainingArea}}</div>
    </div>
    <hr/>
    <p style="font-size:12px; color:#666">
      Enviado desde el formulario de capacitación empresarial
    </p>
  </div>
</body>
</html>
```

---

## 📧 Template 4: Conversemos (biotraining_conversemos_form)

### Configuración del Template en EmailJS:

**Template Name**: `biotraining_conversemos_form`

**To Email**: `{{to_email}}`

**Subject**: `{{subject}}`

**Content** (Recomendado):
```html
{{{message}}}
```

**Content** (Alternativa):
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .header{ 
      background: linear-gradient(90deg,#AB323D 0%,#E1525F 45%); 
      color:#fff; 
      padding:20px; 
      border-radius:8px 8px 0 0;
    }
    .content{ 
      padding:20px; 
      background:#f9f9f9; 
      border-radius:0 0 8px 8px;
    }
    .row{ margin-bottom:12px; }
    .label{ 
      font-weight:700; 
      color:#AB323D; 
      text-transform:uppercase; 
      font-size:12px;
    }
    .value{ font-size:14px; }
  </style>
</head>
<body>
  <div class="header">
    <h2 style="margin:0">Nuevo contacto - Conversemos</h2>
  </div>
  <div class="content">
    <div class="row">
      <div class="label">Nombre</div>
      <div class="value">{{name}}</div>
    </div>
    <div class="row">
      <div class="label">Especialidad</div>
      <div class="value">{{specialty}}</div>
    </div>
    <div class="row">
      <div class="label">Ocupación</div>
      <div class="value">{{occupation}}</div>
    </div>
    <div class="row">
      <div class="label">Preferencia</div>
      <div class="value">{{preference}}</div>
    </div>
    <div class="row">
      <div class="label">Modalidad</div>
      <div class="value">{{modality}}</div>
    </div>
    <div class="row">
      <div class="label">Experiencia deseada</div>
      <div class="value">{{experience}}</div>
    </div>
    <hr/>
    <p style="font-size:12px; color:#666">
      Enviado desde el formulario "Conversemos" del sitio Biotraining
    </p>
  </div>
</body>
</html>
```

---

## 💡 Recomendación

**Para facilitar la configuración**, te recomiendo usar la opción simple `{{{message}}}` en todos los templates, ya que el código backend ya genera el HTML completo con todos los estilos.

Solo necesitas:

1. Crear el template en EmailJS
2. Configurar:
   - **To Email**: `{{to_email}}`
   - **Subject**: `{{subject}}`
   - **Content**: `{{{message}}}`
3. Copiar el Template ID y agregarlo al archivo `.env`

¡Así de simple! El HTML ya viene formateado desde el backend. 🎉
