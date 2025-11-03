# Configuración de Formspree

## Pasos para configurar los formularios

### 1. Crear cuenta en Formspree
1. Ve a [https://formspree.io](https://formspree.io)
2. Crea una cuenta gratuita o inicia sesión

### 2. Crear los 3 formularios

Necesitas crear 3 formularios diferentes:

#### A. Formulario "Conversemos"
1. En Formspree, crea un nuevo formulario llamado "Conversemos"
2. Copia el **Form ID** (formato: `xxxxx`)
3. Pégalo en `.env` como: `PUBLIC_FORMSPREE_CONVERSEMOS=xxxxx`

**Campos que recibirás:**
- name (Nombre y apellidos)
- specialty (Especialidad)
- occupation (Ocupación actual)
- preference (Preferencia de formato)
- modality (Preferencia de modalidad)
- experience (Experiencia práctica deseada)

#### B. Formulario "Empresas"
1. Crea un nuevo formulario llamado "Empresas"
2. Copia el **Form ID**
3. Pégalo en `.env` como: `PUBLIC_FORMSPREE_ENTERPRISE=xxxxx`

**Campos que recibirás:**
- companyName (Nombre de la empresa)
- contact (Contacto telefónico)
- email (Correo electrónico)
- collaborators (Número de colaboradores)
- trainingArea (Área de capacitación)

#### C. Formulario "Estudiantes"
1. Crea un nuevo formulario llamado "Estudiantes"
2. Copia el **Form ID**
3. Pégalo en `.env` como: `PUBLIC_FORMSPREE_STUDENT=xxxxx`

**Campos que recibirás:**
- fullName (Nombres y apellidos)
- studentType (Estudiante o profesional)
- speciality (Especialidad)
- workArea (Diagnóstico o investigación)
- courseInterest (Curso de interés)

### 3. Configurar variables de entorno

#### En desarrollo local:
Edita el archivo `.env` en la raíz del proyecto:
```env
PUBLIC_FORMSPREE_CONVERSEMOS=tu_form_id_aqui
PUBLIC_FORMSPREE_ENTERPRISE=tu_form_id_aqui
PUBLIC_FORMSPREE_STUDENT=tu_form_id_aqui
```

#### En Vercel (producción):
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega las 3 variables:
   - Name: `PUBLIC_FORMSPREE_CONVERSEMOS` → Value: `tu_form_id`
   - Name: `PUBLIC_FORMSPREE_ENTERPRISE` → Value: `tu_form_id`
   - Name: `PUBLIC_FORMSPREE_STUDENT` → Value: `tu_form_id`
4. Aplica a: **Production, Preview, Development**

### 4. Configuración de notificaciones (Opcional)

En cada formulario de Formspree puedes:
- Configurar el email donde recibirás las notificaciones
- Personalizar el mensaje de confirmación
- Agregar integraciones (Slack, Google Sheets, etc.)
- Ver estadísticas de envíos

### 5. Plan gratuito de Formspree

El plan gratuito incluye:
- ✅ 50 envíos por mes
- ✅ Almacenamiento de envíos
- ✅ Protección anti-spam
- ✅ Notificaciones por email

Si necesitas más envíos, considera actualizar al plan pago.

## Despliegue

Una vez configuradas las variables de entorno:

```bash
# Construir el proyecto
npm run build

# Hacer commit y push
git add .
git commit -m "Migrar a Formspree para formularios"
git push
```

Vercel desplegará automáticamente tu aplicación como sitio estático.

## Ventajas de esta migración

✅ **Sin serverless**: Sitio completamente estático (más rápido y barato)
✅ **Sin configuración compleja**: Formspree maneja todo el backend
✅ **Fácil mantenimiento**: No necesitas administrar APIs ni bases de datos
✅ **Gratis para empezar**: 50 envíos/mes sin costo
✅ **Protección anti-spam**: Incluida por defecto
✅ **Notificaciones**: Recibes emails automáticamente
