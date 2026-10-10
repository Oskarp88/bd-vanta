import { Icon, SectionHeading } from '../components/UI';
import { portfolioUrl, projects, technologies } from '../data/content';

export default function Projects() {
  return (
    <>
      <section id="proyectos" className="section projects">
        <div className="container">
          <div className="heading-row">
            <SectionHeading eyebrow="03 / EXPERIENCIA EN ACCIÓN" title={<>Ideas que ya tienen<br /><span className="muted-heading">vida digital.</span></>} />
            <p>Proyectos que reflejan mi experiencia<br />resolviendo necesidades diferentes.</p>
          </div>
          <div className="project-grid">
            {projects.map(project => (
              <article className={`project-card ${project.color}`} key={project.name}>
                <div className="project-top">
                  <span className="project-symbol" aria-hidden="true">{project.symbol}</span>
                  <span>{project.category}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-solution"><span>Qué resuelve</span><p>{project.solution}</p></div>
                <div className="tags">{[...project.tags, ...project.technologies].map(tag => <span key={tag}>{tag}</span>)}</div>
                {project.url && <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.urlLabel || 'Ver proyecto'}: ${project.name} (abre en una pestaña nueva)`}>{project.urlLabel || 'Ver proyecto'} <Icon /></a>}
              </article>
            ))}
          </div>
          <div className="portfolio-cta">
            <a className="text-link" href={portfolioUrl} target="_blank" rel="noopener noreferrer">
              Ver mi portafolio profesional <Icon size={17} />
              <span className="sr-only">(abre en una pestaña nueva)</span>
            </a>
          </div>
        </div>
      </section>
      <section className="section tech">
        <div className="container">
          <SectionHeading centered eyebrow="LAS HERRAMIENTAS DETRÁS DE TU SOLUCIÓN" title="Tecnología elegida con criterio." text="Selecciono las herramientas según lo que tu proyecto necesita, pensando también en su crecimiento." />
          <div className="tech-grid">
            {technologies.map(([category, items]) => <div key={category}><h3>{category}</h3><div>{items.map(item => <span key={item}>{item}</span>)}</div></div>)}
          </div>
        </div>
      </section>
    </>
  );
}
