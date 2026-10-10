import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Process from './sections/Process';
import Projects from './sections/Projects';
import Faq from './sections/Faq';
import Contact from './sections/Contact';

export default function App() {
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><Header /><main id="contenido" tabIndex={-1}><Hero /><Services /><Process /><Projects /><Faq /><Contact /></main><Footer /><FloatingWhatsApp /></>;
}
