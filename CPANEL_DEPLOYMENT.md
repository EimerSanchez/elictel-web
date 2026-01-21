# Guía de Despliegue en cPanel - Elictel

Para subir tu sitio a un hosting con cPanel, debes seguir estos pasos. Dado que es una aplicación de React (Vite), lo que subimos es el resultado de la "construcción" (build), no el código fuente directamente.

## 1. Generar la carpeta de producción

Primero, debes generar los archivos optimizados para el servidor. Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
npm run build
```

Esto creará una carpeta llamada **`dist`** en tu proyecto. **Esta es la carpeta que contiene todo lo que el hosting necesita.**

---

## 2. Preparar el archivo de configuración (.htaccess)

Para que las rutas y el servidor funcionen correctamente en un hosting Linux/cPanel, es recomendable crear un archivo llamado `.htaccess` dentro de la carpeta `public` antes de hacer el build, o subirlo directamente a la carpeta `public_html` de tu cPanel.

He creado uno para ti con la configuración básica.

---

## 3. Subir los archivos a cPanel

Tienes dos formas principales:

### Opción A: A través del Administrador de Archivos (Recomendado)
1. Comprime el **contenido** de la carpeta `dist` en un archivo `.zip`.
2. Entra a tu **cPanel** > **Administrador de Archivos**.
3. Ve a la carpeta **`public_html`** (o la carpeta de tu dominio).
4. Haz clic en **Cargar** y sube el archivo `.zip`.
5. Selecciona el archivo subido y haz clic en **Extraer**.
6. Asegúrate de que los archivos (`index.html`, carpeta `assets`, etc.) estén directamente en `public_html` y no dentro de otra carpeta `dist`.

### Opción B: A través de FTP (FileZilla)
1. Conéctate a tu hosting mediante FTP.
2. Arrastra el contenido de tu carpeta local `dist` a la carpeta remota `public_html`.

---

## 4. Consideraciones Importantes

### El sitio está en una subcarpeta
Si el sitio no va en la raíz (ej: `elictel.com.co/web/`) y va en una subcarpeta, debes editar el archivo `vite.config.js` antes de hacer el build:

```javascript
// vite.config.js
export default defineConfig({
  base: '/nombre-de-tu-subcarpeta/', 
  // ... resto de la configuración
})
```

### Formulario de Contacto
Recuerda que para que el formulario funcione, debes haber configurado tu **ID de Formspree** en el componente `ContactSection.jsx` antes de generar el build.

### Certificado SSL (HTTPS)
Asegúrate de que tu hosting tenga activado el certificado SSL (Let's Encrypt o similar) para que el sitio cargue seguro.
