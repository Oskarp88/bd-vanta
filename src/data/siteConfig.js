// Datos públicos confirmados. Completar las entradas vacías solo con datos verificados.
// productionUrl será la URL pública completa (https://...) cuando se confirme.
// socialImagePath será la ruta de un JPG/WebP real en public/, por ejemplo /og-image.jpg.
export const siteConfig = {
  brandName: 'BD Vanta',
  tagline: 'Desarrollo Web · Aplicaciones · Software a Medida',
  email: 'oskyburgos81@gmail.com',
  phoneDisplay: '+57 300 685 6444',
  whatsappNumber: '573006856444',
  whatsappUrl: 'https://wa.me/573006856444',
  linkedin: 'https://www.linkedin.com/in/oscarburgos/',
  github: 'https://github.com/Oskarp88',
  portfolio: 'https://oscarburgosportafolio.vercel.app',
  productionUrl: '',
  domainCandidate: 'bdvanta.com',
  socialImagePath: null,
  facebook: '',
  instagram: '',
};

export const socialLinks = [
  ['WhatsApp', siteConfig.whatsappUrl],
  ['LinkedIn', siteConfig.linkedin],
  ['GitHub', siteConfig.github],
  ['Facebook', siteConfig.facebook],
  ['Instagram', siteConfig.instagram],
].filter(([, url]) => Boolean(url));
