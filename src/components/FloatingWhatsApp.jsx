import { useEffect, useRef, useState } from 'react';
import { contactInfo } from '../data/content';
import { Icon } from './UI';

// Ocultar el acceso cuando esta esquina tiene contenido. Los enlaces normales
// siguen disponibles y el atajo nunca cubre texto ni controles.
const contentSelector = [
  'a', 'button', 'input', 'select', 'textarea', 'label', 'summary',
  'p', 'h1', 'h2', 'h3', 'li', 'img', '.eyebrow', '.hero-benefits',
  '.tags', '.tech-grid span', '.footer-bottom', '.availability',
  '.visual-note', '.visual-label', '.card-kicker', '.form-kicker',
].join(',');

export default function FloatingWhatsApp() {
  const link = useRef(null);
  const [obstructed, setObstructed] = useState(true);

  useEffect(() => {
    let frame = 0;
    function checkPosition() {
      frame = 0;
      const button = link.current;
      if (!button) return;
      const box = button.getBoundingClientRect();
      const overlaps = [...document.querySelectorAll(contentSelector)].some(element => {
        if (element === button || button.contains(element) || !element.getClientRects().length) return false;
        const rect = element.getBoundingClientRect();
        return rect.bottom > box.top - 8 && rect.top < box.bottom + 8 &&
          rect.right > box.left - 8 && rect.left < box.right + 8;
      });
      // No retirar el foco si el visitante está usando el atajo con teclado.
      if (document.activeElement !== button) setObstructed(overlaps);
    }
    function scheduleCheck() {
      if (!frame) frame = requestAnimationFrame(checkPosition);
    }
    const observer = new ResizeObserver(scheduleCheck);
    observer.observe(document.body);
    window.addEventListener('scroll', scheduleCheck, { passive: true });
    window.addEventListener('resize', scheduleCheck);
    document.addEventListener('toggle', scheduleCheck, true);
    document.addEventListener('focusout', scheduleCheck);
    scheduleCheck();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleCheck);
      window.removeEventListener('resize', scheduleCheck);
      document.removeEventListener('toggle', scheduleCheck, true);
      document.removeEventListener('focusout', scheduleCheck);
    };
  }, []);

  return (
    <a
      ref={link}
      className={`floating-whatsapp${obstructed ? ' is-obstructed' : ''}`}
      href={contactInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablemos por WhatsApp (abre en una pestaña nueva)"
      title="Hablemos por WhatsApp"
      aria-hidden={obstructed ? true : undefined}
      tabIndex={obstructed ? -1 : undefined}
    >
      <Icon name="whatsapp" size={27} />
    </a>
  );
}
