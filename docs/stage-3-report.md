# Etapa 3 — preparación final para producción

> Documento histórico anterior al rebranding. La configuración comercial vigente se documenta en `stage-4-rebranding-report.md`.

## A. Precheck

- Ruta: raíz local de este proyecto. Estructura React + Vite + JavaScript: `src/components`, `src/sections`, `src/data`, `src/styles`, `assets/images`, `public`, `scripts`, `docs`.
- `package.json`: React 19, Vite 7, plugin oficial de React; scripts `dev`, `build`, `preview`; no script de lint y no se añadieron dependencias.
- Leídos `README.md`, `docs/stage-2-report.md`, `docs/image-optimization.json`, SEO de `index.html`, código y assets.
- Build inicial: `npm run build` correcto, 45 módulos, sin advertencias. Proyecto sin `.git`; no se inicializó.

## B. Projects

| Proyecto | Información publicada | Tecnologías confirmadas |
|---|---|---|
| ChessFive | Multijugador en tiempo real; desarrollo activo, staging y pruebas internas | Node.js, Express, MongoDB, Redis, Flutter |
| EarnFive | Recompensas, wallet, autenticación y flujos administrativos; desarrollo activo y pruebas internas | TypeScript, Flutter, MongoDB, Redis, Docker |
| ClashCycle | Gestión de clientes, préstamos, pagos y saldos; aplicación desarrollada para un cliente no identificado | Flutter, Dart, Python, FastAPI, MongoDB |
| Huellitas de Amor | Plataforma colaborativa de bootcamp para adopción animal | React, Redux, Node.js, Express, PostgreSQL |

ChessFive también tuvo una versión web original con React, Node.js, Express, MongoDB, Socket.IO y JWT. Esta distinción se conserva en documentación, sin mezclar ese stack con el actual de la tarjeta. EarnFive tiene capacidades conocidas de transacciones, antifraude, encuestas/offerwall, retiros, auditoría, notificaciones y pruebas automatizadas, pero la tarjeta mantiene un resumen comercial. No se afirma publicación en Google Play ni procesamiento de pagos reales en producción.

## C. Links

- Huellitas de Amor: repositorio público confirmado `https://github.com/Oskarp88/PF-Huellitas-de-amor`, con `target="_blank"` y `rel="noopener noreferrer"`.
- ChessFive, EarnFive y ClashCycle: sin CTA externo porque no hay enlace público confirmado.
- Portafolio profesional: `https://oscarburgosportafolio.vercel.app`, enlace secundario conservado y accesible en nueva pestaña.
- Las anclas `inicio`, `servicios`, `proceso`, `proyectos`, `faq` y `contacto` tienen un ID correspondiente en el código; no se usa React Router.

## D–E. Contact y WhatsApp

- En esta etapa se documentaron los datos comerciales anteriores. La marca y el número de WhatsApp quedaron sustituidos en la etapa 4. El correo y los enlaces personales de LinkedIn y GitHub siguen vigentes; consulta `stage-4-rebranding-report.md` para la configuración actual.
- El formulario contiene nombre, correo, tipo de proyecto y descripción. El texto preparado abre con el nombre, presenta el tipo de proyecto, los detalles y el correo, y termina con “Quedo atento. Gracias.”
- El texto se codifica con `encodeURIComponent` en el enlace de WhatsApp. El visitante ve y revisa el resumen antes de continuar; no hay envío automático.
- Se añadieron respuestas a “¿Qué incluye una cotización?” y “¿Qué pasa si necesito cambios adicionales?”, además de un bloque discreto que explica alcance, tiempo, valor y soporte acordado.

## F–G. Configuration y Facebook/Instagram readiness

- `src/data/siteConfig.js` centraliza datos públicos de marca, contacto, redes, portafolio y futuras URLs de producción. `src/data/content.js` lo consume para los enlaces de contacto y portafolio.
- `facebook`, `instagram`, `productionUrl` y `socialImagePath` son `null`. El footer construye enlaces desde `socialLinks` y omite redes sin URL confirmada. No se crearon páginas ni se inventaron direcciones.
- `vite.config.js` agrega canonical y `og:url` solo cuando `productionUrl` tenga una URL HTTPS real de raíz. Valida la URL y, si se configura `socialImagePath`, exige un archivo JPG/PNG/WebP existente en `public/` y genera URL absoluta para Open Graph y Twitter.
- Vite mantiene la URL base `/`, prevista para publicar en la raíz del futuro sitio. No hay `.env` ni secretos.

## H–I. Social metadata y dominio

- Se conservan `og:title`, `og:description`, `og:type`, Twitter Card y el SVG social provisional. No existe aún un asset OG definitivo.
- El objetivo de configuración futura está documentado como `socialImagePath`, por ejemplo `/og-image.jpg`, sin crear un archivo inexistente.
- No se eligió dominio ni se emitió canonical/`og:url` con una URL ficticia. Ambos se añadirán automáticamente al completar `productionUrl`.

## J–K. Privacy y seguridad

- El formulario no contiene endpoint, `fetch`, almacenamiento local ni integración de tracking. Los datos permanecen en el estado temporal de React y solo pasan a WhatsApp si el visitante abre voluntariamente el enlace preparado. No se añadieron cookies ni banner.
- Los enlaces con `target="_blank"` usan `rel="noopener noreferrer"`, incluidos repositorio, portafolio, redes y WhatsApp. No hay credenciales en el proyecto.

## L. Performance

- Las cinco imágenes de la etapa 2 siguen cargándose como WebP, con PNG originales conservados; total WebP 1.061.812 bytes frente a 7.928.645 bytes originales (86,61 % menos). No se recomprimieron.
- Hero: 1448 × 1086 px y `fetchPriority="high"`. Servicios: 960 × 720 px; contacto: 720 × 540 px. Imágenes fuera del hero usan `loading="lazy"` y `decoding="async"`. Anchura y altura están declaradas.

## M. Accessibility

- El código conserva un H1 único y jerarquía H2/H3, textos alt, labels asociados al formulario, enlaces descriptivos, foco visible, menú móvil con Escape y FAQ nativa con `aria-expanded`.
- El enlace de Huellitas anuncia proyecto y apertura en nueva pestaña. El botón flotante de WhatsApp conserva `aria-label`.
- La inspección estática y el build pasan; la validación interactiva de esta etapa quedó pendiente por bloqueo de la herramienta de navegador indicado abajo.

## N. SEO

- Confirmados `lang="es"`, viewport, título y descripción indicados, favicon SVG del isotipo, `robots.txt`, OG title/description/type y Twitter Card.
- Canonical, `og:url` e imagen social definitiva siguen pendientes de URL pública y asset confirmados. El favicon existente se conservó. No hay manifest ni PWA.

## O–P. Responsive y consola

- La etapa 2 verificó visualmente 1440, 1280, 1024, 768, 390 y 320 px sin overflow. En esta etapa solo se añadió una nota pequeña dentro de FAQ y contenido en tarjetas de proyectos; CSS existente usa breakpoints de 1600, 1150, 900 y 640 px.
- La herramienta de navegador bloqueó abrir la página local en esta etapa por política de URL. Por ello **no se pudieron verificar interactivamente** los anchos adicionales 1920, 430 y 360 px ni repetir la comprobación de consola, warnings React, 404 y recursos rotos después de estos cambios. No se usó una vía alternativa para eludir el bloqueo. Esta QA queda pendiente antes de publicar.

## Q. Build

- `npm run build` final: correcto, 46 módulos transformados, sin advertencias. Las cinco imágenes WebP están en `dist/assets`.
- No hay script `lint` en `package.json`; no se incorporó ESLint.

## R. Files changed

- Modificados: `README.md`, `index.html`, `vite.config.js`, `src/components/Footer.jsx`, `src/components/UI.jsx`, `src/data/content.js`, `src/sections/Contact.jsx`, `src/sections/Faq.jsx`, `src/sections/Process.jsx`, `src/sections/Projects.jsx`, `src/styles/global.css`.
- Añadidos: `src/data/siteConfig.js`, `docs/stage-3-report.md`.
- Eliminados: ninguno.

## S. Remaining production blockers

1. Confirmar URL pública real y configurarla en `siteConfig.productionUrl`; generar canonical y `og:url`.
2. Crear y revisar una imagen OG JPG/WebP de 1200 × 630 px en `public/`, completar `socialImagePath` y validar su vista previa.
3. Confirmar número de WhatsApp Business y enlaces finales; añadir Facebook/Instagram solo si existen y se desean publicar.
4. Repetir QA visual y de consola en 1920, 1440, 1280, 1024, 768, 430, 390, 360 y 320 px cuando el navegador local esté disponible; revisar especialmente la FAQ y las tarjetas ampliadas.
5. Ejecutar el build final una vez confirmados dominio y asset social.

La etapa termina local: sin Git init, repositorio remoto, push, deploy, compra de dominio, configuración de Vercel, creación de redes sociales ni cambios fuera de este proyecto.
