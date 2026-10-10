import { Icon, SectionHeading } from '../components/UI';
import { advantages, steps } from '../data/content';
import { siteConfig } from '../data/siteConfig';

export default function Process() {
  return <><section id="proceso" className="section process"><div className="container"><SectionHeading centered eyebrow="02 / UN PROCESO CLARO" title="De una buena idea a una gran solución." text="Sin complicaciones. Con comunicación y un objetivo compartido en cada etapa." /><ol className="process-grid">{steps.map(([title, text], i) => <li key={title}><span className="step-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>
    <section className="section why"><div className="container why-grid"><div><SectionHeading eyebrow="TECNOLOGÍA CON UN LADO HUMANO" title={<>Tu proyecto merece<br />un aliado, <span className="accent">no solo código.</span></>} text={`En ${siteConfig.brandName} transformo una necesidad de tu negocio en una herramienta útil, con trato cercano y atención a los detalles.`} /><a className="text-link" href="#contacto">Conversemos sobre tu idea <Icon size={18} /></a></div><div className="advantages">{advantages.map(([title, text, icon]) => <article key={title}><span className="advantage-icon"><Icon name={icon} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section></>;
}
