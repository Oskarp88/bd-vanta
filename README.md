# BD Vanta

Sitio comercial para servicios de desarrollo web, aplicaciones móviles y software a medida. Construido con React, JavaScript y Vite. No requiere backend ni credenciales.

- Producción: https://bd-vanta.vercel.app/
- Repositorio: https://github.com/Oskarp88/bd-vanta
- Dominio `bdvanta.com`: candidato, no comprado ni conectado.

## Requisitos y ejecución

Node.js 20.19+ o 22.12+ (verificado con Node 24) y npm.

```sh
npm install
npm run dev
```

Abre la dirección local indicada por Vite, normalmente http://127.0.0.1:5173.

```sh
npm run build
npm run preview
```

El build queda en `dist/`. Preview permite revisar ese build localmente. Para instalaciones reproducibles después de clonar, usar `npm ci` con el lockfile incluido.

## Estructura

```text
assets/images/          PNG originales proporcionados (conservados)
  optimized/            Copias WebP usadas por Vite en producción
public/                 Favicon BD Vanta, robots.txt e imagen Open Graph
scripts/                Conversión reproducible de imágenes con Pillow
docs/                   Informes por etapa, optimización y capturas de revisión
src/
  components/           Header, Footer y elementos reutilizables
  sections/             Hero, servicios, proceso, proyectos, FAQ y contacto
  data/content.js       Textos, navegación, servicios, proyectos y contactos
  data/siteConfig.js    Marca, contactos, redes y URL de producción
  styles/global.css     Variables, estilos y puntos de adaptación responsive
  App.jsx               Composición de la página
  main.jsx              Entrada de React
index.html              Idioma, título, descripción y Open Graph
vite.config.js          Configuración del entorno
```

## Funcionalidad

- Navegación por anclas, menú móvil con cierre por Escape y enlace para saltar al contenido.
- Servicios, proceso de cinco pasos, ventajas, cuatro proyectos, tecnologías y FAQ con acordeones nativos accesibles.
- Los CTA de servicios preseleccionan el tipo de proyecto en el formulario.
- Validación HTML de campos obligatorios y correo. El formulario prepara un resumen local y muestra un enlace para continuar en WhatsApp; el visitante confirma el envío allí.
- No se guardan datos, no se envían correos y no hay integraciones de backend, analítica ni rastreadores.
- WhatsApp, correo, LinkedIn y GitHub usan los datos proporcionados.
- Imágenes secundarias con carga diferida; imagen principal priorizada; reducción de movimiento respetada.
- Acceso flotante a WhatsApp con detección de contenido en esa esquina: se oculta cuando puede tapar texto o controles; los enlaces normales siguen disponibles.
- Bloques “Qué resuelve” en los cuatro proyectos, enlace externo al portafolio y nueve preguntas frecuentes.
- Tecnologías confirmadas en los cuatro proyectos; solo Huellitas de Amor enlaza a un repositorio público confirmado.
- Alcance, cambios y soporte explicados en FAQ con lenguaje comercial claro.

## Edición y decisiones

El contenido está centralizado en `src/data/content.js`. Los PNG originales se conservan y la web usa copias WebP optimizadas. El monograma BD del encabezado y el favicon se construyen con código y se pueden sustituir por el logo gráfico final. Se usan iconos SVG propios y CSS sin bibliotecas visuales pesadas. La tipografía Manrope / DM Sans se carga desde Google Fonts con fallback sans-serif; puede autoalojarse antes de publicar.

Las copias WebP son 86,61 % más ligeras en conjunto: de 7.928.645 a 1.061.812 bytes. `docs/image-optimization.json` registra dimensiones, tamaño y hash SHA-256 de cada original. Se generaron con Pillow y `python scripts/optimize_images.py`; Pillow solo hace falta si se vuelven a optimizar, no para instalar o compilar la web. El script no modifica los PNG originales.

Los proyectos usan identidades tipográficas, descripciones y tecnologías confirmadas. ChessFive y EarnFive se identifican como proyectos en desarrollo y pruebas internas. ClashCycle se presenta como trabajo para un cliente sin identificarlo. Huellitas de Amor se presenta como proyecto colaborativo de bootcamp y muestra su repositorio público. No se atribuyen métricas, testimonios ni enlaces privados.

## Datos configurables

Edita `src/data/siteConfig.js` para actualizar marca, descriptor, correo, teléfono, WhatsApp, LinkedIn, GitHub y portafolio. Los datos actuales son BD Vanta, `+57 300 685 6444`, `https://wa.me/573006856444` y `oskyburgos81@gmail.com`. LinkedIn, GitHub y el portafolio profesional son enlaces personales confirmados que muestran la experiencia detrás del negocio. Los enlaces sociales del footer se generan desde ese archivo: `facebook` e `instagram` permanecen vacíos y solo aparecen cuando se confirme una URL. El contenido de servicios, proyectos, tecnologías y FAQ sigue en `src/data/content.js`.

`productionUrl` contiene la URL real de Vercel y `socialImagePath` apunta a `/bd-vanta-og-image.png` (1731 × 909 px) dentro de `public/`. Durante el build, `vite.config.js` genera canonical, `og:url`, `og:image` y `twitter:image` con URLs absolutas. `domainCandidate` registra `bdvanta.com` como posibilidad, sin asumir que esté comprado, conectado o publicado. La URL base de Vite permanece `/`. No hay `.env` ni secretos.

## Estado de producción y pendientes

- GitHub público en `Oskarp88/bd-vanta`; Vercel conectado a `main` con preset Vite, build `npm run build` y salida `dist`.
- La URL pública de Vercel es `https://bd-vanta.vercel.app/`. Canonical, `og:url` e imagen social absoluta se generan a partir de esa URL.
- `bdvanta.com` no está comprado. Conectarlo solo si se adquiere y se confirma que responde en producción; entonces actualizar `productionUrl` y volver a verificar SEO.
- Facebook e Instagram siguen pendientes de URLs confirmadas.
- Si en el futuro se conecta el formulario a un servidor, implementar validación del lado servidor, protección contra spam y los textos de privacidad correspondientes.

## Mantenimiento de producción

- [x] Confirmar URL de producción de Vercel
- [x] Configurar canonical y `og:url` mediante `productionUrl`
- [x] Configurar imagen Open Graph definitiva mediante `socialImagePath`
- [ ] Conectar `bdvanta.com` si se compra y configura
- [ ] Añadir Facebook si existe una página confirmada
- [ ] Añadir Instagram si aplica
- [ ] Repetir la prueba de enlaces y el build cuando cambie la configuración de producción

Los despliegues de producción se crean automáticamente al subir cambios a `main`. La configuración actual no necesita variables de entorno.

## Verificación realizada

- Dependencias instaladas: auditoría de npm sin vulnerabilidades reportadas.
- `npm run build`: compilación inicial de la etapa 4 correcta con Vite 7.3.6 y 46 módulos transformados. Revisar `docs/stage-4-rebranding-report.md` para el resultado final.
- Página revisada en navegador en 1920, 1440, 1280, 1024, 768, 430, 390, 360 y 320 px, sin desbordamiento horizontal detectado.
- Menú móvil: apertura y cierre al seleccionar un enlace comprobados.
- FAQ: apertura de respuesta comprobada.
- Formulario: servicio preseleccionado desde una tarjeta y resumen generado con datos ficticios para el WhatsApp comercial nuevo; no se envió ningún mensaje.
- Consola del navegador sin errores ni advertencias durante la prueba.
- La captura `docs/vista-desktop.png` pertenece a una etapa anterior y se conserva como evidencia histórica; la marca vigente se documenta en `docs/stage-4-rebranding-report.md`.
