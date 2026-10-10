import { useId, useState } from 'react';
import { Icon, SectionHeading } from '../components/UI';
import { faqs } from '../data/content';

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <details onToggle={event => setOpen(event.currentTarget.open)}>
      <summary aria-expanded={open} aria-controls={id}>
        {question}<Icon name="plus" size={19} />
      </summary>
      <p id={id}>{answer}</p>
    </details>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="section faq">
      <div className="container faq-grid">
        <div>
          <SectionHeading eyebrow="04 / RESOLVAMOS TUS DUDAS" title={<>Antes de dar<br />el primer paso.</>} text="Estas son algunas preguntas que suelen surgir al comenzar un proyecto." />
          <div className="scope-note">
            <strong>Cómo acordamos el trabajo</strong>
            <p>Definimos el alcance, el tiempo estimado y el valor antes de empezar. Si aparecen cambios adicionales, los revisamos juntos. El soporte posterior depende de lo acordado en la propuesta.</p>
          </div>
          <a className="text-link" href="#contacto">Háblame de tu proyecto <Icon size={18} /></a>
        </div>
        <div className="faq-list">{faqs.map(([question, answer]) => <FaqItem key={question} question={question} answer={answer} />)}</div>
      </div>
    </section>
  );
}
