import { Button, Icon } from '../components/UI';
import { contactInfo, images } from '../data/content';
import { siteConfig } from '../data/siteConfig';

export default function Hero() {
  return <section id="inicio" className="hero"><div className="container hero-grid"><div className="hero-copy">
    <div className="availability"><span /> {siteConfig.brandName} · Soluciones digitales</div>
    <h1>Tu negocio tiene<br />potencial.<br /><span>Hagámoslo digital.</span></h1>
    <p className="hero-subtitle">{siteConfig.tagline}</p>
    <p className="hero-description">Impulsa tu negocio con soluciones digitales a medida. Desarrollo páginas web, aplicaciones y sistemas para ayudarte a vender más, organizar tus procesos y conectar con tus clientes.</p>
    <div className="hero-actions"><Button>Solicitar cotización</Button><Button href={contactInfo.whatsapp} external secondary>Hablemos por WhatsApp</Button></div>
    <div className="hero-benefits"><span><Icon name="check" size={15} /> Atención directa</span><span><Icon name="check" size={15} /> Desarrollo a medida</span><span><Icon name="check" size={15} /> Web, móvil y backend</span></div>
  </div><div className="hero-visual"><div className="hero-orbit" /><span className="visual-label"><span /> IDEAS QUE SE CONVIERTEN EN SOLUCIONES</span><img src={images.hero} alt="Ilustración de un desarrollador creando soluciones web, móviles y sistemas" width="1448" height="1086" fetchPriority="high" /><div className="visual-note"><span className="note-icon"><Icon name="code" /></span><div>De tu idea a una solución real<small>Tecnología con propósito.</small></div><span className="note-spark">✦</span></div></div></div>
    <div className="container hero-bottom"><span>PARA NEGOCIOS QUE QUIEREN DAR EL SIGUIENTE PASO</span><a href="#servicios">Explora lo que podemos crear <span>↓</span></a></div>
  </section>;
}
