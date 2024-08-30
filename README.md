# GitHub Search App

Esta es una aplicación de búsqueda de usuarios y repositorios de GitHub desarrollada como parte del test técnico para Zebrands. Utiliza la API de GitHub para realizar búsquedas y muestra los resultados de una manera amigable.

## 🚀 Demo en Vivo

[Enlace a la Aplicación Desplegada](https://github-search-app-nu.vercel.app/)

## 📋 Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)

## 🛠️ Instalación

Sigue estos pasos para clonar y ejecutar la aplicación localmente:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Kal-elSam/github-search-app
   cd github-search-app

   ```

2. Instala las dependencias:

npm install

3. Ejecuta el servidor de desarrollo:

npm run dev

4. Abre tu navegador y navega a http://localhost:3000.

## 🌟 Características

- **Búsqueda de usuarios de GitHub**.
- **Búsqueda de repositorios de GitHub**.
- **Resultados de búsqueda** mostrados en tarjetas estilizadas utilizando NextUI y TailwindCSS.
- **Experiencia móvil-primera** (mobile-first).

## 🧑‍💻 Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Next.js**: Framework de React para aplicaciones web.
- **NextUI v2**: Biblioteca de componentes para React.
- **TailwindCSS**: Framework de CSS para el diseño.
- **Axios**: Cliente HTTP para realizar solicitudes a la API de GitHub.
- **TypeScript**: Superconjunto de JavaScript que añade tipado estático.
- **React Icons**: Biblioteca de iconos para React.


## 🏗️ Estructura del Proyecto

### 📂 Organización General

1. **Separación de responsabilidades**:  
   Hemos organizado el proyecto en diferentes carpetas donde cada una maneja una responsabilidad específica. Esto sigue el principio de separación de responsabilidades, asegurando que cada componente o módulo tenga un único propósito claro.

2. **División entre componentes y páginas**:  
   - La carpeta `components/` contiene componentes reutilizables como `SearchBar.tsx` y `UserResults.tsx`. Estos componentes pueden ser utilizados en múltiples páginas, promoviendo la reutilización del código y la consistencia en la interfaz de usuario.
   - La carpeta `app/` contiene las páginas que manejan diferentes funcionalidades, como `user-search` y `repo-search`. Esto sigue la convención de Next.js para definir rutas automáticamente, facilitando la navegación en la aplicación.

3. **Servicios para la lógica de negocio**:  
   - En `services/githubService.ts` se encuentra la lógica de interacción con la API de GitHub. Esta separación permite desacoplar la lógica de negocio de la presentación, haciendo que el código sea más modular y fácil de probar.

4. **Estilos globales y consistentes**:  
   - Utilizamos una combinación de `NextUI` y `TailwindCSS` para aplicar estilos a los componentes. Esto proporciona flexibilidad en el diseño mientras se mantiene una apariencia coherente en toda la aplicación.
   - Los estilos globales están centralizados en `styles/globals.css`, garantizando consistencia en la interfaz de usuario.

5. **Uso de TypeScript**:  
   - Todo el proyecto está escrito en TypeScript, lo que mejora la mantenibilidad y robustez del código. El tipado estático ayuda a prevenir errores comunes y proporciona una mejor autocompletación y documentación durante el desarrollo.

6. **Enfoque Mobile-First**:  
   - La aplicación ha sido diseñada siguiendo un enfoque "mobile-first", asegurando que sea accesible y fácil de usar en dispositivos móviles antes de adaptarla a pantallas más grandes.

### 📝 Buenas Prácticas Utilizadas

- **Modularidad**: La separación clara entre componentes, servicios y páginas asegura que cada parte del código tenga un propósito específico.
- **Reutilización de Código**: Componentes reutilizables para evitar la duplicación de código y asegurar una experiencia de usuario consistente.
- **Separation of Concerns (SoC)**: La lógica de negocio está desacoplada de la presentación para facilitar la escalabilidad y mantenibilidad del proyecto.
- **Tipado Estático con TypeScript**: Utilizar TypeScript reduce errores y mejora la calidad del código.
- **Consistencia en los Estilos**: Utilización de NextUI y TailwindCSS para mantener una apariencia coherente y optimizar el rendimiento del desarrollo.
- **Enfoque Responsive**: Un diseño "mobile-first" garantiza que la aplicación sea accesible y fácil de usar en dispositivos móviles.

## 📝 Decisiones de Diseño

- **NextUI y TailwindCSS**: Se eligió NextUI para aprovechar sus componentes estilizados y TailwindCSS para mayor flexibilidad en el diseño.
- **TypeScript**: Mejora la mantenibilidad y robustez del código con tipado estático.
- **Axios**: Cliente HTTP eficiente para realizar solicitudes a la API de GitHub.

## 📄 Licencia

Este proyecto es solo para fines de evaluación técnica y no debe ser utilizado con fines comerciales sin permiso.

Hecho con ❤️ por Samuel Gomez
