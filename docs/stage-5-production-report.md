# Etapa 5 — publicación controlada de BD Vanta

## A. Precheck

- Proyecto: raíz de este repositorio, React 19 + Vite 7. `package.json`, README e informes de etapas 2–4 revisados antes de Git.
- No existía `.git` local al comenzar. `npm run build` inicial: correcto, 46 módulos y sin advertencias de Vite. La ejecución dentro del sandbox falló por `EPERM`; la compilación autorizada fuera de él pasó.
- Imagen social real localizada en `public/bd-vanta-og-image.png`, una ruta equivalente dentro de `public/` a la sugerida. PNG íntegro de 1731 × 909 px y 1.716.659 bytes, inspeccionado visualmente.
- Auditoría de archivos: sin `.env`, tokens o claves destinados a versionarse; se retiraron rutas absolutas locales innecesarias de informes históricos. `.gitignore` excluye `node_modules`, `dist`, `.env`, `.env.*`, `.vercel`, `.DS_Store` y `Thumbs.db`.

## B. Git init

- Repositorio inicializado en `main`. El staging se revisó antes del primer commit. `node_modules`, `dist`, archivos de entorno y otros residuos no estaban staged; `git diff --cached --check` pasó.

## C. First commit

- `6dbba804958b90b8eaa057d2f0dcf4f26ca502c1` — `Initial BD Vanta production-ready website`.
- La identidad técnica `Oskarp88` y el correo comercial confirmado se aplicaron solo al comando de commit, sin cambiar la configuración global de Git.

## D. GitHub repo

- Repositorio público creado vacío en https://github.com/Oskarp88/bd-vanta, con descripción comercial. No se añadió README, `.gitignore` ni licencia desde GitHub.
- `origin` apunta únicamente a `https://github.com/Oskarp88/bd-vanta.git`.

## E. Push

- Primer push normal de `main` y `git fetch origin` correctos; 0 ahead, 0 behind. GitHub muestra README, assets, `package.json`, `src`, `public` y `docs`.
- El segundo push normal subió el commit SEO. No se usó force push, rebase ni reset destructivo.

## F. Vercel

- Proyecto `bd-vanta` importado desde `Oskarp88/bd-vanta`, rama `main`, raíz `./`, preset Vite, sin variables de entorno ni ajustes avanzados.
- El primer despliegue quedó `Ready`, asociado al commit `6dbba80`. El segundo despliegue quedó `Ready`, asociado al commit `ecfcf5f`, con build de 46 módulos y salida `dist`.
- Detalle del segundo despliegue: https://vercel.com/oskarp88s-projects/bd-vanta/28fQDELQVuW5wDKwUbDgwmQDx6Tv.

## G. Production URL

- URL pública real asignada y comprobada: https://bd-vanta.vercel.app/.
- La URL es un alias de producción del segundo despliegue; no se infirió a partir del nombre del proyecto.

## H. SEO update

- `src/data/siteConfig.js` contiene `productionUrl: 'https://bd-vanta.vercel.app/'` y `socialImagePath: '/bd-vanta-og-image.png'`.
- El build genera `canonical`, `og:url`, `og:image` y `twitter:image` absolutos. Se actualizó README y se aclaró el comentario del fallback social de `index.html`.

## I. Second commit

- `ecfcf5f195f56c1c60ad40f24c39ce275122b262` — `Configure production URL and social metadata`.
- `npm run build` y `git diff --check` pasaron antes del commit. El push activó automáticamente el segundo despliegue de Vercel.

## J. Domain

- El usuario confirmó que `bdvanta.com` no está comprado. No se añadió a Vercel, no se cambió DNS y `productionUrl` conserva la URL real de Vercel.

## K. Production QA

- Se verificaron navbar BD Vanta, navegación y CTA; hero e ilustración; cuatro servicios y sus CTA; proceso de cinco pasos, ventajas, cuatro proyectos y enlace al portafolio; tecnologías, FAQ, contacto, footer y WhatsApp flotante.
- El formulario con datos ficticios produjo el mensaje profesional solicitado y un enlace a `https://wa.me/573006856444` con texto codificado. No se abrió WhatsApp ni se envió mensaje. Los campos siguen marcados como obligatorios en HTML.
- Las seis imágenes de la página, incluida la de contacto con carga diferida, cargaron correctamente. La imagen social pública respondió HTTP 200 como `image/png`, con 1.716.659 bytes. Favicon SVG y `robots.txt` respondieron HTTP 200.

## L. Responsive

- Probados en producción 1920, 1440, 1280, 1024, 768, 430, 390, 360 y 320 px; en todos, `scrollWidth` y `body.scrollWidth` no superaron `clientWidth`.
- Inspección visual a 1440 y 320 px; el menú móvil abre y cierra y la FAQ se expande.

## M. Console

- La consola de la web pública no mostró errores ni advertencias; las imágenes cargaron y no se encontraron enlaces vacíos, al número antiguo o recursos HTTP inseguros en el DOM.
- Los logs del build de Vercel contienen una advertencia no bloqueante de npm: el script `postinstall` de `esbuild@0.28.2` aún no está cubierto por `allowScripts`. Vite compiló 46 módulos, el despliegue terminó y no se modificaron dependencias ni configuración de seguridad para ocultar el aviso.

## N. SEO

- Producción confirma `title` BD Vanta, meta description solicitada, `lang="es"`, `og:title`, `og:description`, `og:type=website`, `twitter:card=summary_large_image`, títulos y descripciones de Twitter.
- `canonical` y `og:url`: `https://bd-vanta.vercel.app/`.
- `og:image` y `twitter:image`: `https://bd-vanta.vercel.app/bd-vanta-og-image.png`. El PNG público respondió HTTP 200. Favicon y `robots.txt` respondieron HTTP 200.

## O. WhatsApp

- Enlaces de hero, contacto, footer y flotante apuntan a `https://wa.me/573006856444`. El enlace del formulario usa ese número y agrega el resumen solo tras la acción del visitante. No se enviaron mensajes.

## P. Security

- `git ls-files` no incluye `.env`, `node_modules`, `dist` ni `.vercel`. Búsquedas en archivos rastreados no detectaron tokens, claves privadas ni rutas personales locales.
- La petición pública a `/.env` respondió HTTP 404. La web no muestra dirección residencial, ciudad exacta ni mapa.
- No se configuraron variables de entorno, no se inventaron redes sociales y no se tocó un registrador de dominios.

## Q. Final Git status

- Tras el segundo push, `main` y `origin/main` estaban sincronizadas: 0 ahead, 0 behind y árbol limpio.
- Este informe se versiona en un commit adicional de documentación. El estado definitivo de Git se comprueba de nuevo después de su push y se comunica en el cierre de la etapa.

## R. Remaining blockers

- Ninguno para la publicación en `bd-vanta.vercel.app`.
- Opcional: comprar y conectar `bdvanta.com`; solo tras comprobarlo activo, cambiar `productionUrl` y repetir SEO/build/QA.
- Facebook e Instagram continúan vacíos hasta contar con URLs oficiales.
