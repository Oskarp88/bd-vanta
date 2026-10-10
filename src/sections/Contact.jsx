import { useEffect, useState } from 'react';
import { Button, Icon, SectionHeading } from '../components/UI';
import { contactInfo, images, services } from '../data/content';

export default function Contact() {
  const [project, setProject] = useState('');
  const [summary, setSummary] = useState('');
  useEffect(() => {
    const select = (event) => { setProject(event.detail); setSummary(''); };
    window.addEventListener('select-service', select);
    return () => window.removeEventListener('select-service', select);
  }, []);
  function prepare(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name').trim();
    const message = data.get('message').trim();
    if (!name || !message) { event.currentTarget.querySelector(!name ? '#name' : '#message').focus(); return; }
    setSummary(`Hola, soy ${name}.\n\nQuisiera solicitar una cotización para:\n${project}\n\nDetalles:\n${message}\n\nCorreo de contacto:\n${data.get('email').trim()}\n\nQuedo atento. Gracias.`);
  }
  return <section id="contacto" className="section contact"><div className="container contact-grid"><div className="contact-copy"><SectionHeading eyebrow="05 / EMPECEMOS ALGO BUENO" title={<>Tu próximo paso digital<br /><span className="accent">empieza con una conversación.</span></>} text="Cuéntame qué tienes en mente. Atiendo cotizaciones para negocios, emprendedores y profesionales." /><Button href={contactInfo.whatsapp} external><Icon name="chat" size={19} /> Hablemos por WhatsApp</Button><div className="contact-details"><a href={`mailto:${contactInfo.email}`}><Icon name="mail" size={18} />{contactInfo.email}</a><a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="chat" size={18} />{contactInfo.phone}</a></div><img className="contact-art" src={images.contact} alt="Ilustración de una conversación para planear un proyecto digital" loading="lazy" decoding="async" width="720" height="540" /></div>
    <form className="contact-form" onSubmit={prepare} onChange={() => setSummary('')}><span className="form-kicker"><span /> CUÉNTAME SOBRE TU PROYECTO</span><h3>Las buenas ideas empiezan aquí.</h3><p>Comparte algunos detalles para preparar nuestra conversación.</p><div className="form-row"><div><label htmlFor="name">Tu nombre <span>*</span></label><input id="name" name="name" placeholder="¿Cómo te llamas?" autoComplete="name" required maxLength={100} pattern=".*\S.*" /></div><div><label htmlFor="email">Correo electrónico <span>*</span></label><input id="email" name="email" type="email" placeholder="tu@correo.com" autoComplete="email" required maxLength={200} /></div></div><label htmlFor="project">Tipo de proyecto <span>*</span></label><select id="project" name="project" value={project} onChange={event => setProject(event.target.value)} required><option value="" disabled>Selecciona una opción</option>{services.map(service => <option key={service.title}>{service.title}</option>)}<option>Quiero asesoría para definir mi idea</option></select><label htmlFor="message">Cuéntame tu idea <span>*</span></label><textarea id="message" name="message" rows="5" placeholder="¿Qué necesita tu negocio? ¿Qué te gustaría crear o mejorar?" required minLength={10} maxLength={2000} /><button className="button button-primary form-submit" type="submit">Solicitar mi cotización <Icon size={18} /></button><p className="form-disclaimer">Revisarás el mensaje antes de enviarlo por WhatsApp. No se enviará nada automáticamente.</p>
      {summary && <div className="form-result" role="status"><strong>Tu consulta está lista. Aún no se ha enviado.</strong><p className="message-preview">{summary}</p><a className="button button-primary" href={`${contactInfo.whatsapp}?text=${encodeURIComponent(summary)}`} target="_blank" rel="noopener noreferrer">Continuar en WhatsApp <Icon size={18} /></a></div>}
    </form></div></section>;
}
