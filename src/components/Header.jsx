import { useEffect, useState } from 'react';
import { Brand, Button } from './UI';
import { navigation } from '../data/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function closeOnEscape(event) { if (event.key === 'Escape') { setOpen(false); document.querySelector('.menu-toggle')?.focus(); } }
    if (open) document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);
  return <header className="header"><div className="container header-inner"><Brand />
    <button className={`menu-toggle ${open ? 'is-open' : ''}`} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}><span /><span /></button>
    <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Navegación principal">
      {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <Button onClick={() => setOpen(false)}>Solicitar cotización</Button>
    </nav>
  </div></header>;
}
