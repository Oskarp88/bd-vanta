import { Icon, SectionHeading } from '../components/UI';
import { services } from '../data/content';

export default function Services() {
  return (
    <section id="servicios" className="section services">
      <div className="container">
        <div className="heading-row">
          <SectionHeading
            eyebrow="01 / LO QUE PUEDO HACER POR TI"
            title={<>Soluciones digitales.<br /><span className="muted-heading">Resultados para tu negocio.</span></>}
          />
          <p>Cada negocio es diferente.<br />Tu solución digital también debería serlo.</p>
        </div>
        <div className="service-grid">
          {services.map((service, i) => (
            <article className={`service-card service-${service.visual || 'backend'}`} key={service.title}>
              <div className="service-art">
                <span className="service-number">0{i + 1}</span>
                <img src={service.image} alt={service.alt} loading="lazy" decoding="async" width="960" height="720" />
                {service.visual === 'landing' && (
                  <span className="service-art-caption" aria-hidden="true"><Icon name="target" size={17} /> Una oferta. Un objetivo.</span>
                )}
              </div>
              <div className="service-body">
                <span className="card-kicker">{service.label}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>{service.benefits.map(benefit => <li key={benefit}><Icon name="check" size={15} />{benefit}</li>)}</ul>
                <a
                  className="text-link"
                  href="#contacto"
                  aria-label={`Háblame de tu proyecto: ${service.title}`}
                  onClick={() => window.dispatchEvent(new CustomEvent('select-service', { detail: service.title }))}
                >
                  Háblame de tu proyecto <Icon size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
