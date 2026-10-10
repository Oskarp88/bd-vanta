# Etapa 4 — rebranding completo a BD Vanta

## A. Precheck

- Ruta confirmada: raíz local de este proyecto.
- Estructura revisada: React 19 + Vite 7 + JavaScript, `src/components`, `src/sections`, `src/data`, `src/styles`, `assets/images`, `public`, `scripts` y `docs`.
- Revisados `package.json`, `siteConfig.js`, `content.js`, componentes, `index.html`, assets, `README.md` e informes de etapas 2 y 3.
- `npm run build` inicial: correcto, Vite 7.3.6, 46 módulos transformados. El primer intento dentro del sandbox falló por `EPERM` al resolver `src/main.jsx`; la ejecución autorizada fuera del sandbox pasó sin advertencias.
- El proyecto no contiene `.git`. No se inicializó Git.

## B. Brand migration

- Marca pública: **BD Vanta**. Descriptor: **Desarrollo Web · Aplicaciones · Software a Medida**.
- Referencias comerciales de la marca anterior localizadas en `siteConfig.js`, `UI.jsx`, `index.html`, `social-preview.svg`, `README.md` y el paquete npm. Se actualizaron. `Process.jsx` dependía del nombre personal en `siteConfig`; el bloque ahora presenta BD Vanta.
- La referencia histórica de marca y contacto en `stage-3-report.md` se sustituyó por una nota de vigencia que remite a este informe. La búsqueda final de texto de la marca y el nombre anteriores no devuelve coincidencias en los archivos fuente ni en la documentación textual.
- La ruta del proyecto y URLs del portafolio, LinkedIn y GitHub conservan el identificador personal porque representan experiencia profesional confirmada. No se presentan como marca comercial de BD Vanta.
- `package.json` y `package-lock.json` usan `bd-vanta` como nombre de paquete. Stack y dependencias sin cambios.

## C. Contact migration

- Teléfono visible: `+57 300 685 6444`; WhatsApp: `573006856444` y `https://wa.me/573006856444`; correo temporal: `oskyburgos81@gmail.com`.
- El teléfono anterior se encontró en `siteConfig.js` y el informe histórico de etapa 3. Se eliminó de ambos. La búsqueda final de sus variantes con y sin prefijo no devuelve coincidencias.
- LinkedIn, GitHub y portafolio personal confirmados se conservaron. Facebook e Instagram permanecen vacíos y no se renderizan.

## D. WhatsApp

- Hero, contacto, footer y botón flotante obtienen el nuevo enlace de `siteConfig.js` por medio de `contactInfo` o `socialLinks`.
- El formulario conserva nombre, tipo de proyecto, detalles y correo en el orden solicitado, termina con “Quedo atento. Gracias.” y muestra un resumen antes de abrir WhatsApp. No envía automáticamente.
- Prueba local con datos ficticios: el enlace generado usa el nuevo número y un mensaje codificado correctamente. No se abrió ni envió la consulta a WhatsApp.

## E. Header / Hero

- Navbar muestra BD Vanta con monograma BD, navegación original y CTA “Solicitar cotización”. El nombre accesible del enlace de marca es “BD Vanta, inicio”.
- Hero conserva titular, descriptor y ambos CTA. La etiqueta superior ahora menciona BD Vanta. El WhatsApp apunta al número nuevo.

## F. Services

- Se conservan los cuatro servicios y sus textos y beneficios. Los títulos se alinearon con el catálogo confirmado: Página web profesional, Landing page, Aplicaciones móviles a medida y Software a medida. La preselección en el formulario sigue funcionando.

## G. Projects

- Se conservan ChessFive, EarnFive, ClashCycle y Huellitas de Amor, sus bloques “Qué resuelve”, tecnologías y estados confirmados. Siguen como ejemplos de experiencia técnica, sin atribuirlos como productos de BD Vanta.
- Se mantiene “Ver mi portafolio profesional” con la URL personal confirmada.

## H. Contact

- Se muestran el correo temporal y el teléfono comercial nuevo. El botón directo y el formulario usan la URL de WhatsApp nueva.

## I. Footer

- Muestra BD Vanta, el descriptor oficial y “Tecnología diseñada para hacer crecer buenas ideas.” Sus enlaces de contacto derivan de la configuración central.

## J. SEO

- `title`, descripción, `og:site_name`, `og:title`, `og:description`, textos alternativos sociales y Twitter se actualizaron a BD Vanta.
- Canonical y `og:url` siguen ausentes porque `productionUrl` está vacío. `bdvanta.com` es solo un candidato. La vista social SVG ahora muestra BD Vanta, pero sigue siendo provisional; falta un JPG/WebP/PNG definitivo de 1200 × 630 px con URL pública.

## K. Manifest

- No existe manifest ni funcionalidad PWA. No se añadió uno. El favicon SVG hecho en código ahora representa el monograma BD.

## L. Assets

- Las cinco ilustraciones WebP de hero, servicios y contacto se inspeccionaron visualmente: no contienen texto de la marca anterior. Se conservaron junto con los PNG originales.
- No se encontró un logo gráfico BD Vanta dentro del proyecto. El monograma del encabezado y el favicon son soluciones temporales hechas en código; pueden sustituirse al recibir el logo final. `social-preview.svg` cambió su texto a BD Vanta.
- Las capturas de etapas anteriores en `docs/` son evidencia histórica y pueden mostrar la identidad previa; no son assets publicados por la web.

## M. Privacy

- No se añadió dirección residencial, ciudad, mapa, analítica ni almacenamiento de datos del formulario. Los datos del formulario solo se colocan en el enlace a WhatsApp cuando el visitante decide continuar.

## N. Accessibility

- Se comprobó un solo H1, nombres accesibles de marca y botón flotante, `alt` de ilustraciones, labels del formulario y CTA descriptivos.
- Se probó apertura/cierre del menú móvil y apertura de FAQ. Se conservaron foco visible, cierre del menú por Escape y la lógica que oculta el botón flotante cuando puede tapar contenido.

## O. Responsive

- Prueba en navegador local a 1920, 1440, 1280, 1024, 768, 430, 390, 360 y 320 px. En cada ancho, el ancho desplazable del documento no superó el ancho visible. Se inspeccionaron visualmente hero y marca en 1440 y 320 px; el menú pasa a versión móvil en los anchos pequeños.
- Las secciones mantienen su contenido y la ilustración del hero. No se detectó overflow horizontal.

## P. Console

- Consola del navegador local sin errores ni advertencias tras cargar y recargar la página. Las cinco ilustraciones WebP cargaron; la ilustración diferida de contacto cargó al llegar a esa sección. No se observaron recursos rotos.

## Q. Build

- `npm run build` final: correcto, Vite 7.3.6, 46 módulos transformados, sin errores ni advertencias. Los cinco WebP se incluyeron en `dist/assets`.
- No hay script `lint` en `package.json`; no se añadieron herramientas.

## R. Files changed

- `package.json`, `package-lock.json`, `index.html`, `public/favicon.svg`, `public/social-preview.svg`, `src/data/siteConfig.js`, `src/data/content.js`, `src/components/UI.jsx`, `src/components/Footer.jsx`, `src/sections/Hero.jsx`, `src/sections/Process.jsx`, `src/styles/global.css`, `README.md`, `docs/stage-3-report.md`.
- Añadido: `docs/stage-4-rebranding-report.md`.

## S. Remaining production blockers

1. Confirmar una URL de producción real y, si se compra/configura, conectar `bdvanta.com`; entonces completar `productionUrl`, canonical y `og:url`.
2. Incorporar el logo gráfico final si se desea sustituir el monograma temporal.
3. Preparar imagen Open Graph definitiva y configurar `socialImagePath`.
4. Añadir Facebook e Instagram solo después de confirmar sus URLs.
5. Repetir prueba final de enlaces y build tras la configuración de producción.

Esta etapa es exclusivamente local: sin `git init`, push, deploy, configuración de Vercel, compra de dominio, redes sociales inventadas ni cambios fuera del proyecto.
