import hero from '../../assets/images/optimized/hero-desarrollador.webp';
import web from '../../assets/images/optimized/servicio-desarrollo-web.webp';
import mobile from '../../assets/images/optimized/servicio-apps-moviles.webp';
import backend from '../../assets/images/optimized/servicio-sistemas-backend.webp';
import contact from '../../assets/images/optimized/contacto-cotizacion.webp';
import { siteConfig } from './siteConfig';

export const images = { hero, web, mobile, backend, contact };
export const contactInfo = {
  email: siteConfig.email, phone: siteConfig.phoneDisplay,
  whatsapp: siteConfig.whatsappUrl,
  linkedin: siteConfig.linkedin, github: siteConfig.github,
};
export const navigation = [['Inicio', 'inicio'], ['Servicios', 'servicios'], ['Proceso', 'proceso'], ['Proyectos', 'proyectos'], ['FAQ', 'faq'], ['Contacto', 'contacto']];
export const portfolioUrl = siteConfig.portfolio;
export const services = [
  { title: 'Página web profesional', text: 'Presenta tu negocio, tus servicios y lo que te hace diferente en un sitio que inspire confianza.', benefits: ['Diseño adaptado a tu marca', 'Experiencia en cualquier pantalla', 'Contenido organizado para encontrarte'], image: web, alt: 'Ilustración de un sitio web en diferentes dispositivos', icon: 'web', visual: 'website', label: 'TU NEGOCIO, EN INTERNET' },
  { title: 'Landing page', text: 'Una página para una oferta concreta: dirige la atención de tus campañas hacia una consulta o solicitud.', benefits: ['Enfoque en campañas y productos', 'Llamados a la acción claros', 'Contacto por formulario o WhatsApp'], image: web, alt: 'Detalle de una página con una oferta y un llamado a la acción', icon: 'target', visual: 'landing', label: 'DE VISITAS A OPORTUNIDADES' },
  { title: 'Aplicaciones móviles a medida', text: 'Acerca tus servicios a tus clientes con una app intuitiva, pensada para las necesidades de tu negocio.', benefits: ['Una experiencia para Android e iOS', 'Interfaces prácticas y modernas', 'Funciones a la medida de tu idea'], image: mobile, alt: 'Ilustración de aplicaciones móviles', icon: 'mobile', visual: 'mobile', label: 'TU IDEA, AL ALCANCE DE LA MANO' },
  { title: 'Software a medida', text: 'Menos tareas repetitivas. Más control. Herramientas que se adaptan a la forma en que trabaja tu equipo.', benefits: ['Inventarios, clientes y reportes', 'Paneles, APIs y automatizaciones', 'Flujos de pagos y gestión interna'], image: backend, alt: 'Ilustración de sistemas, servidores y conexiones de datos', icon: 'layers', label: 'PROCESOS MÁS INTELIGENTES' },
];
export const steps = [
  ['Cuéntame tu idea', 'Hablamos de tu negocio, tus objetivos y lo que necesitas resolver.'],
  ['Analizo tu necesidad', 'Definimos las funciones y la solución que mejor se ajusta a tu proyecto.'],
  ['Recibes una propuesta', 'Conoces el alcance, los tiempos y la inversión antes de empezar.'],
  ['Desarrollo la solución', 'Construyo tu proyecto con avances compartidos y comunicación directa.'],
  ['Entrega y soporte', 'Revisamos el resultado y te acompaño según el soporte acordado.'],
];
export const advantages = [
  ['Atención directa', 'Hablas con quien diseña y desarrolla tu solución, de principio a fin.', 'chat'],
  ['Hecho para tu negocio', 'El alcance parte de tus necesidades y objetivos reales.', 'target'],
  ['Diseño responsive', 'Una experiencia cuidada en móviles, tabletas y computadores.', 'mobile'],
  ['Desarrollo limpio y mantenible', 'Una base organizada para mantener y hacer crecer tu proyecto.', 'code'],
  ['Acompañamiento cercano', 'Te explico las decisiones y comparto los avances del desarrollo.', 'layers'],
  ['Claridad en cada etapa', 'Expectativas, entregables y prioridades definidos desde el inicio.', 'check'],
];
// Solo se publican tecnologías y enlaces confirmados. El stack original de la
// versión web de ChessFive se documenta en docs/stage-3-report.md.
export const projects = [
  { name: 'ChessFive', category: 'PLATAFORMA WEB', symbol: '♞', color: 'mint', description: 'Ajedrez multijugador en desarrollo activo, en staging y pruebas internas.', solution: 'Conectar jugadores y gestionar partidas multijugador en tiempo real.', tags: ['Tiempo real', 'Multijugador'], technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Flutter'], url: null },
  { name: 'EarnFive', category: 'PLATAFORMA DE RECOMPENSAS', symbol: 'E', color: 'blue', description: 'Plataforma de recompensas en desarrollo activo y pruebas internas.', solution: 'Centralizar autenticación, wallet, recompensas y flujos administrativos en una sola plataforma.', tags: ['Wallet', 'Autenticación', 'Administración'], technologies: ['TypeScript', 'Flutter', 'MongoDB', 'Redis', 'Docker'], url: null },
  { name: 'ClashCycle', category: 'APLICACIÓN MÓVIL', symbol: '↗', color: 'violet', description: 'Aplicación móvil para gestionar préstamos personales, desarrollada para un cliente.', solution: 'Centralizar clientes, préstamos, pagos y saldos desde una aplicación móvil.', tags: ['Gestión de clientes', 'Pagos y saldos'], technologies: ['Flutter', 'Dart', 'Python', 'FastAPI', 'MongoDB'], url: null },
  { name: 'Huellitas de Amor', category: 'PLATAFORMA WEB', symbol: '♡', color: 'orange', description: 'Proyecto colaborativo de bootcamp orientado a adopción animal.', solution: 'Facilitar la conexión entre animales en adopción y posibles adoptantes.', tags: ['Adopción animal', 'Conexión y comunidad'], technologies: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL'], url: 'https://github.com/Oskarp88/PF-Huellitas-de-amor', urlLabel: 'Ver repositorio público' },
];
export const technologies = [
  ['Frontend', ['React', 'JavaScript', 'HTML', 'CSS']],
  ['Backend', ['Node.js', 'TypeScript', 'NestJS', 'Express.js', 'Python', 'FastAPI', 'REST APIs']],
  ['Mobile', ['Flutter', 'Dart']],
  ['Databases', ['PostgreSQL', 'MongoDB', 'Redis']],
  ['Tools', ['Docker', 'Git', 'GitHub']],
];
export const faqs = [
  ['¿Necesito tener claro exactamente lo que quiero?', 'No. Puedes contarme el problema o la idea que tienes y te ayudo a definir qué tipo de solución digital se adapta mejor a tu negocio.'],
  ['¿Qué tipo de proyectos desarrollas?', 'Desarrollo páginas web, landing pages, aplicaciones móviles y sistemas a medida. Partimos del problema que quieres resolver para definir la solución adecuada.'],
  ['¿Trabajas con negocios pequeños o emprendedores?', 'Sí. Trabajo con negocios, profesionales y emprendedores. Podemos definir una primera versión con las funciones esenciales y planear nuevas etapas según tus prioridades.'],
  ['¿También haces sistemas personalizados?', 'Sí. Puedo desarrollar paneles administrativos, gestión de inventarios, clientes, reportes, APIs y automatizaciones. El alcance se define de acuerdo con tus procesos y las integraciones necesarias.'],
  ['¿Cuánto tarda un proyecto?', 'Depende del alcance, las funciones y el contenido disponible. Después de conocer tu idea, te comparto un cronograma estimado con las etapas y entregables del proyecto.'],
  ['¿Qué incluye una cotización?', 'La propuesta define alcance, funcionalidades, tiempo estimado y valor del proyecto antes de comenzar.'],
  ['¿Qué pasa si necesito cambios adicionales?', 'Los cambios fuera del alcance inicial se revisan contigo antes de implementarlos y pueden requerir ajustes en tiempo o presupuesto.'],
  ['¿Cómo se cotiza un desarrollo?', 'Primero conversamos sobre tus objetivos y requisitos. Con esa información preparo una propuesta que detalla el alcance, los entregables, el tiempo estimado y la inversión.'],
  ['¿Ofreces soporte después de la entrega?', 'Sí. Las condiciones y el periodo de soporte se acuerdan en la propuesta. También podemos evaluar mantenimiento o nuevas funcionalidades cuando tu negocio lo necesite.'],
];
