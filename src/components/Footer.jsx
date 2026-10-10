import { Brand } from './UI';
import { contactInfo, navigation } from '../data/content';
import { siteConfig, socialLinks } from '../data/siteConfig';

export default function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-main"><div><Brand /><p>{siteConfig.tagline}</p></div><div><h3>Explora</h3><div className="footer-nav">{navigation.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div></div><div><h3>Conectemos</h3><div className="footer-social">{socialLinks.map(([label, url]) => <a href={url} target="_blank" rel="noopener noreferrer" key={label}>{label} ↗</a>)}<a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.brandName}. Todos los derechos reservados.</span><span>Tecnología diseñada para hacer crecer buenas ideas.</span></div></div></footer>;
}
