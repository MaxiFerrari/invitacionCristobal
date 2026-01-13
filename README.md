# 🎂 Invitación Digital - Cumpleaños de Cristóbal

Invitación digital mobile-first con temática **Stranger Things** para el cumpleaños de Cristóbal (10 años).

## 🚀 Stack Técnico

- **Vite** - Build tool ultrarrápido
- **React 19** - Última versión de React
- **CSS Modules** - Estilos modulares y scoped
- **Mobile First** - Optimizado para 390-420px

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

## 🎨 Características

### Visual

- 👹 Demogorgon SVG personalizado con animaciones
- 🔴 Paleta de colores: negro, rojo oscuro, bordó, neón
- ✨ Efectos visuales: partículas, glow, parpadeo
- 💡 Luces navideñas animadas estilo Stranger Things
- 🌊 Animación de olas en el aviso de pileta

### Sonido

- 🔊 Audio ambiental estilo Stranger Things
- 🎛️ Toggle ON/OFF con control del usuario
- 🔉 Volumen bajo por defecto
- ✅ Sin autoplay (respeta políticas del navegador)

### UX

- 📱 Mobile-first responsive design
- ♿ Accesibilidad con ARIA labels
- 📤 Optimizado para compartir por WhatsApp

## 📁 Estructura del Proyecto

```
invitacionCristobal/
├── public/
│   ├── assets/
│   │   └── stranger-things-ambient.mp3  # Agregar audio aquí
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── BirthdayInvitation.jsx
│   │   └── Demogorgon.jsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── BirthdayInvitation.module.css
│   │   └── Demogorgon.module.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎵 Agregar Audio

Para que funcione el audio ambiental:

1. Descarga o crea un archivo de audio `.mp3` con sonidos de sintetizador oscuro
2. Colócalo en `/public/assets/stranger-things-ambient.mp3`
3. Asegúrate de que el archivo tenga licencia libre o sea de tu creación

**Opciones gratuitas:**

- [Freesound.org](https://freesound.org) - Buscar "dark synth ambient"
- [Pixabay Music](https://pixabay.com/music/) - Música libre de regalías

## 📌 Datos del Evento

- **Nombre:** Cristóbal
- **Edad:** 10 años
- **Dirección:** Godoy Cruz 320, Casa 14
- **Ciudad:** San Miguel de Tucumán
- **Temática:** Stranger Things
- **Aviso:** ¡Hay pileta! Traer toallón y malla

## 🔧 Personalización

Para modificar los datos del cumpleaños, edita el objeto `birthdayData` en:
`src/components/BirthdayInvitation.jsx`

```javascript
const birthdayData = {
  name: "Cristóbal",
  age: 10,
  address: "Godoy Cruz 320, Casa 14",
  city: "San Miguel de Tucumán",
  theme: "Stranger Things",
  poolWarning: "🏊 Hay pileta – Traer toallón y malla",
};
```

## 📱 Compartir por WhatsApp

Una vez desplegada la invitación:

1. Copia el URL de la invitación
2. Envíalo por WhatsApp
3. La preview mostrará:
   - Título: "🎂 Cumpleaños de Cristóbal - 10 años"
   - Descripción: "¡Estás invitado al cumpleaños más stranger del Upside Down!"

## 📄 Licencia

Proyecto creado con ❤️ para el cumpleaños de Cristóbal.

---

**¡Te esperamos en el Upside Down! 👹**
