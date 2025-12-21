# Around The U.S. (React + Vite) 📸

Este es un proyecto interactivo desarrollado con **React**, donde los usuarios pueden explorar una galería de fotos, editar su perfil y gestionar tarjetas de lugares. El proyecto se migró de JavaScript puro (Vanilla JS) a React para mejorar la modularidad y la escalabilidad.

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de UI.
- **Vite** - Herramienta de construcción rápida.
- **CSS3** - Diseño responsivo y animaciones (metodología BEM).
- **JSX** - Sintaxis de componentes.

## ✨ Características actuales

- **Gestión de Popups Genéricos:** Se desarrolló un componente `Popup` reutilizable que adapta su diseño mediante lógica condicional (si recibe un título se comporta como formulario, si no, se comporta como visor de imágenes).
- **Componente Card:** Generación dinámica de tarjetas mediante el método `.map()`.
- **Renderizado Dinámico:** Los popups se gestionan mediante un único estado en `Main.jsx`, permitiendo abrir formularios o imágenes con la misma lógica.
- **Diseño Responsivo:** Adaptable a dispositivos móviles y escritorio.
