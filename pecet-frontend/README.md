# 🌐 Proyecto Frontend - Aplicación React

Este proyecto es el **frontend** de la aplicación web del PECET para búsqueda de activos de conocimiento desarrollada con **React**. Está diseñado con una arquitectura modular que incluye componentes reutilizables, páginas, estilos personalizados y recursos estáticos.

## 🚀 Tecnologías utilizadas

- React (con Vite o Create React App)

- Node.js + npm

- CSS Modules

- React Router DOM 🧭

- Framer Motion (para animaciones) 💡 

- Recursos estáticos (imágenes, íconos, etc.) 🖼️

- (Opcional) Bootstrap / Tailwind / Axios si los estás usando

---

## 📁 Estructura del proyecto

El proyecto está organizado de la siguiente manera:

```
project/
│
├── assets/         # Imágenes, íconos, logos, etc.
├── components/     # Componentes reutilizables (Navbar, Footer, etc.)
├── pages/          # Vistas principales de la app (Home, Buscar, Dashboard, etc.)
├── styles/         # Archivos CSS Modules (.module.css)
├── App.jsx         # Componente principal con rutas
├── main.jsx        # Punto de entrada de React
├── index.html      # HTML base
├── package.json    # Dependencias y scripts
└── README.md       # Este archivo
```

---

## ⚙️ Instalación y ejecución

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## 🧠 Scripts disponibles

```
npm run dev       # Ejecuta la app en modo desarrollo
npm run build     # Compila para producción en /dist
npm run preview   # Previsualiza el build (si usas Vite)
```

## 🧩 Funcionalidades implementadas

- 🌐 Navegación con React Router (/, /buscar, /dashboard)

- 🖼️ Navbar animado con logo clickeable

- 🎨 Estilos personalizados con CSS Modules

- ⚡ Animaciones suaves con Framer Motion

- ✅ Buenas prácticas en estructura y modularización

## 📌 Notas adicionales

- Este frontend puede conectarse con un backend vía API (ej. Node.js, Express, FastAPI, etc.).

- Asegúrate de configurar correctamente los entornos (.env) si estás usando rutas o variables de entorno.

---
