# Etapa 2 — pulido comercial y optimización

## A. Precheck

- Ruta: raíz local de este proyecto.
- Estructura inicial: `src/components`, `src/sections`, `src/data`, `src/styles`, `assets/images`, `public`, `docs`, React + Vite con JavaScript.
- `package.json`: React 19, Vite 7, plugin oficial de React; sin dependencias nuevas en esta etapa.
- Git: no existe `.git` local. No había cambios ajenos detectables en este proyecto; el build inicial coincidió con el build de la etapa 1.
- Build inicial: `npm run build` correcto, 44 módulos, sin advertencias.
- Assets: cinco PNG RGBA de 1448 × 1086 px, usados en hero, servicios y contacto. Sus hash iniciales se guardaron en `docs/stage-2-baseline.json` y `docs/image-optimization.json`.

## B–D. Hero, servicios y espaciado

- Hero: se conservaron titular, subtítulo, CTA, marca y paleta. A 768 px se redujo la escala de la ilustración y se ajustó la nota para dejar aire entre imagen y texto. Las versiones móvil y escritorio mantienen la composición original.
- Servicios: se conservaron las cuatro tarjetas. La tarjeta de páginas web muestra la imagen completa; la de landing pages usa un encuadre ampliado del monitor principal, una sombra degradada y una breve etiqueta visual. `object-fit` mantiene la proporción de la imagen. Se afinó el copy de páginas web y de landing pages para distinguir sus beneficios.
- Espaciado: padding general de sección de 108 a 96 px en escritorio; el proceso pasa de 108 a 80 px arriba y abajo y reduce la separación de su encabezado. Breakpoints ajustados a 68 px en tablet y 60 px en móvil para esa sección. No se comprimieron tarjetas ni controles.

## E–K. Conversión y contenido

- Proyectos: ChessFive, EarnFive, ClashCycle y Huellitas de Amor incluyen ahora un bloque breve **Qué resuelve**, con las soluciones indicadas en el encargo. Las tecnologías concretas de cada proyecto siguen sin atribuirse hasta confirmarlas.
- Portafolio: enlace secundario, después de las cuatro tarjetas, a `https://oscarburgosportafolio.vercel.app`, en pestaña nueva con `noopener noreferrer` y aviso accesible.
- FAQ: siete preguntas, incluida **¿Necesito tener claro exactamente lo que quiero?**. Los `<details>` nativos mantienen uso por teclado, estados abierto/cerrado y `aria-expanded` sincronizado mediante `onToggle`.
- Contacto: botón **Solicitar mi cotización** y aclaración breve sobre revisión previa en WhatsApp. El mensaje preparado distingue nombre, tipo de proyecto, correo y descripción; no se envía automáticamente. Se comprobó validación de campos obligatorios y correo, preselección de servicio y limpieza del resumen al editar.
- WhatsApp flotante: enlace fijo de 52 px en la esquina inferior derecha, con icono SVG, `aria-label` y foco visible. Se oculta al detectar texto, imágenes o controles en esa esquina; en el footer hay otro enlace visible a WhatsApp.
- Footer: frase final **Tecnología diseñada para hacer crecer buenas ideas.**
- Tecnologías: Frontend (React, JavaScript, HTML, CSS); Backend (Node.js, TypeScript, NestJS, Express.js, Python, FastAPI, REST APIs); Mobile (Flutter, Dart); Databases (PostgreSQL, MongoDB, Redis); Tools (Docker, Git, GitHub).
- Ventajas: se conserva la sección y se precisa “Desarrollo limpio y mantenible”. Se mejoró la legibilidad de textos pequeños en móvil.

## L. Imágenes

PNG fuente: 1448 × 1086 px, RGBA. Copias WebP para producción: calidad 90, canal alfa preservado, tamaño reducido donde el uso lo permite. Tamaños decimales redondeados a kB; cifras exactas en `image-optimization.json`.

| Imagen y uso | Antes PNG | Después WebP | Dimensiones WebP | Ahorro |
|---|---:|---:|---:|---:|
| hero-desarrollador · hero | 1.758 kB | 395 kB | 1448 × 1086 | 77,55 % |
| servicio-desarrollo-web · web y landing | 1.489 kB | 168 kB | 960 × 720 | 88,73 % |
| servicio-apps-moviles · apps | 1.636 kB | 194 kB | 960 × 720 | 88,14 % |
| servicio-sistemas-backend · sistemas | 1.539 kB | 196 kB | 960 × 720 | 87,27 % |
| contacto-cotizacion · contacto | 1.506 kB | 109 kB | 720 × 540 | 92,75 % |

**Total:** 7.928.645 → 1.061.812 bytes; **6.866.833 bytes menos (86,61 %)**. No se modificaron los originales. Script reproducible: `scripts/optimize_images.py` (Pillow solo para mantenimiento, no para ejecutar la web).

## M–O. Responsive, accesibilidad y SEO

- Anchos revisados: 1440, 1280, 1024, 768, 390 y 320 px. Las ocho secciones permanecen, sin overflow horizontal ni texto, CTA o controles fuera de pantalla. Las columnas de servicios pasan de 4 a 2 y a 1; proyectos de 2 a 1; contacto de 2 a 1.
- Evidencia: `docs/stage-2/responsive.json` y capturas `pagina-<ancho>.png`, además de `hero-tablet-768.png`, `hero-final-1440.png` y `servicios-1440.png`.
- Navegación por teclado: menú móvil abre/cierra y Escape devuelve foco al botón; la nueva FAQ abre con Enter, cierra con Espacio y actualiza `aria-expanded`. Un solo H1, todas las imágenes con alt y todos los campos con label. El foco visible usa la paleta actual. El enlace para saltar al contenido apunta al `<main>` enfocable.
- SEO: idioma español, viewport, título y descripción indicados, favicon, Open Graph, Twitter Card y `robots.txt` con `Allow: /`. Canonical y `og:url` quedan anotados en `index.html` para configurar cuando exista dominio real. La imagen social SVG sigue siendo provisional.

## P–S. Comprobación, archivos y publicación

- Build final: `npm run build` correcto, 45 módulos, **sin advertencias**; cinco WebP incluidos en `dist/assets`.
- Servidor Vite local: comprobado en `http://127.0.0.1:5173/`; consola del navegador sin errores ni advertencias durante las pruebas.
- `git diff --check`: no procede, porque no hay repositorio Git local.
- Modificados: `README.md`, `index.html`, `src/App.jsx`, `src/components/Footer.jsx`, `src/components/UI.jsx`, `src/data/content.js`, `src/sections/Contact.jsx`, `src/sections/Faq.jsx`, `src/sections/Hero.jsx`, `src/sections/Projects.jsx`, `src/sections/Services.jsx`, `src/styles/global.css`.
- Agregados: `src/components/FloatingWhatsApp.jsx`, `scripts/optimize_images.py`, `public/robots.txt`, cinco WebP en `assets/images/optimized`, documentación y capturas en `docs/`.
- Eliminados: ninguno.
- Pendientes de publicación: confirmar tecnologías y enlaces reales de cada proyecto; dominio para canonical/`og:url`; imagen social PNG/JPG con URL absoluta; condiciones finales de soporte y privacidad si el formulario llega a usar backend.
- Sin push, deploy, cambios fuera de este proyecto, cambio de stack ni rediseño total.
