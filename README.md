# GitHub Search App

Esta es una aplicación de búsqueda de usuarios y repositorios de GitHub desarrollada como parte del test técnico para Zebrands. Utiliza la API de GitHub para realizar búsquedas y muestra los resultados de una manera amigable.

## 🚀 Demo en Vivo

[Enlace a la Aplicación Desplegada](https://your-deployment-url.com)

## 📋 Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)

## 🛠️ Instalación

Sigue estos pasos para clonar y ejecutar la aplicación localmente:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/github-search-app.git
   cd github-search-app

   ```

2. Instala las dependencias:

npm install

3. Ejecuta el servidor de desarrollo:

npm run dev

4. Abre tu navegador y navega a http://localhost:3000.

## 🌟 Características

Búsqueda de usuarios de GitHub.
Búsqueda de repositorios de GitHub.
Resultados de búsqueda mostrados en tarjetas estilizadas utilizando NextUI y TailwindCSS.
Experiencia móvil-primera (mobile-first).

## 🧑‍💻 Tecnologías Utilizadas

React: Biblioteca de JavaScript para construir interfaces de usuario.
Next.js: Framework de React para aplicaciones web.
NextUI v2: Biblioteca de componentes para React.
TailwindCSS: Framework de CSS para el diseño.
Axios: Cliente HTTP para realizar solicitudes a la API de GitHub.
TypeScript: Superconjunto de JavaScript que añade tipado estático.
React Icons: Biblioteca de iconos para React.

## 📂 Estructura del Proyecto

/src
/app
/user-search
page.tsx # Página para buscar usuarios de GitHub
/repo-search
page.tsx # Página para buscar repositorios de GitHub
/components
SearchBar.tsx # Componente reutilizable para la barra de búsqueda
UserResults.tsx # Componente para mostrar resultados de usuarios
RepoResults.tsx # Componente para mostrar resultados de repositorios
/services
githubService.ts # Servicios para interactuar con la API de GitHub
/styles
globals.css # Estilos globales de la aplicación
/pages
\_app.tsx # Configuración global de la aplicación
index.tsx # Página principal con navegación a las búsquedas

## 📝 Decisiones de Diseño

NextUI y TailwindCSS: Se eligió NextUI para aprovechar sus componentes estilizados y TailwindCSS para mayor flexibilidad en el diseño.
TypeScript: Mejora la mantenibilidad y robustez del código con tipado estático.
Axios: Cliente HTTP eficiente para realizar solicitudes a la API de GitHub.

## 📄 Licencia

Este proyecto es solo para fines de evaluación técnica y no debe ser utilizado con fines comerciales sin permiso.

Hecho con ❤️ por Samuel Gomez
