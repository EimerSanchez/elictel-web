# Elictel - Landing Page

![Elictel](public/images/hero_background_1765498160172.png)

## 🚀 Descripción

Landing page profesional para **Elictel**, empresa con más de 16 años de experiencia en soluciones integrales de tecnología y transformación digital en Colombia.

### ✨ Características

- ✅ **Diseño Moderno y Responsivo** - Optimizado para todos los dispositivos
- ✅ **Internacionalización** - Soporte para Español e Inglés
- ✅ **Animaciones Fluidas** - Implementado con Framer Motion
- ✅ **SEO Optimizado** - Meta tags, Open Graph, Schema.org
- ✅ **Formulario de Contacto** - Integración con Formspree
- ✅ **WhatsApp Integration** - Botones de contacto directo
- ✅ **Accesibilidad** - ARIA labels y navegación por teclado
- ✅ **Performance** - Code splitting y lazy loading

## 🛠️ Tecnologías

- **React 18** - Framework de UI
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Librería de animaciones
- **Lucide React** - Iconos modernos
- **Formspree** - Gestión de formularios

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🔧 Configuración

### Formspree

1. Crea una cuenta en [Formspree](https://formspree.io/)
2. Crea un nuevo formulario y obtén tu Form ID
3. Reemplaza `YOUR_FORM_ID` en `src/components/ContactSection.jsx`:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

### Google Analytics (Opcional)

Descomenta y configura el código de Google Analytics en `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

## 📁 Estructura del Proyecto

```
Elictel/
├── public/
│   ├── images/           # Imágenes del sitio
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/       # Componentes React
│   │   ├── Navigation.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   │   └── ContactSection.jsx
│   ├── context/
│   │   └── LanguageContext.jsx
│   ├── data/
│   │   ├── companyData.js
│   │   ├── servicesData.js
│   │   └── translations.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Personalización

### Colores de Marca

Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  elictel: {
    blue: '#2563eb',
    darkBlue: '#1e40af',
    lightBlue: '#60a5fa',
    gray: '#1f2937',
  }
}
```

### Contenido

Todo el contenido está centralizado en `src/data/`:
- `companyData.js` - Información de la empresa
- `servicesData.js` - Servicios ofrecidos
- `translations.js` - Traducciones ES/EN

## 📱 Información de Contacto

- **Dirección:** Calle 39 No. 15-13 Oficina 203, Bogotá, Colombia
- **Teléfono:** +57 300 3250842
- **Email:** gerencia@elictel.com.co
- **Web:** www.elictel.com.co

## 🚀 Despliegue

### Netlify

```bash
npm run build
# Arrastra la carpeta 'dist' a Netlify
```

### Vercel

```bash
npm run build
vercel --prod
```

### GitHub Pages

```bash
npm run build
# Configura GitHub Pages para servir desde la carpeta 'dist'
```

## 📄 Licencia

© 2025 Elictel. Todos los derechos reservados.

## 🤝 Soporte

Para soporte técnico, contacta a: gerencia@elictel.com.co
