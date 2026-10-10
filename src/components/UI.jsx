import { siteConfig } from '../data/siteConfig';

export function Icon({ name = 'arrow', size = 22, ...props }) {
  const paths = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    code: <><path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-6 18" /></>,
    web: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
    mobile: <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 5h4m-3 14h2" /></>,
    layers: <><path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    chat: <><path d="M21 11.5a9 9 0 0 1-9 9 10 10 0 0 1-4-.9L3 21l1.4-5a9 9 0 1 1 16.6-4.5Z" /><path d="M8 10h8M8 14h5" /></>,
    whatsapp: <><path d="M21 11.5a9 9 0 0 1-9 9 10 10 0 0 1-4-.9L3 21l1.4-5a9 9 0 1 1 16.6-4.5Z" /><path d="m8 7 2 3-1 1c1 2 2 3 4 4l1-1 3 1c0 2-1 3-3 2-4-1-7-4-8-8 0-1 1-2 2-2Z" /></>,
    plus: <><path d="M5 12h14M12 5v14" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7 9 6 9-6" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.arrow}</svg>;
}
export function Brand() {
  return <a className="brand" href="#inicio" aria-label={`${siteConfig.brandName}, inicio`}><span className="brand-icon" aria-hidden="true">BD</span><span className="brand-name">{siteConfig.brandName}</span></a>;
}
export function SectionHeading({ eyebrow, title, text, centered = false }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}
export function Button({ children, href = '#contacto', secondary = false, external = false, ...props }) {
  return <a className={`button ${secondary ? 'button-secondary' : 'button-primary'}`} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>{children}<Icon size={18} /></a>;
}
