import React, { createContext, useContext, useMemo, useState } from 'react';

const I18nContext = createContext({ lang: 'en', setLang: () => {}, t: (key) => key });

const translations = {
  en: {
    brand: 'SolidCraft Concrete',
    nav: {
      services: 'Services',
      about: 'About',
      gallery: 'Projects',
      contact: 'Contact',
      blog: 'Blog',
      quote: 'Request a Free Quote',
    },
    hero: {
      headline: 'Strong Foundations. Lasting Impressions.',
      sub: 'Expert concrete services for homes, driveways, and commercial projects.',
      cta: 'Request a Free Quote',
      trusted: 'Trusted by local partners',
    },
    about: {
      title: 'We Build With Precision and Pride.',
      body:
        'With over 20 years of experience, we deliver quality concrete work for every type of project — from solid foundations to decorative surfaces that elevate your space.',
    },
    services: {
      title: 'Our Services',
      residential: 'Residential Concrete',
      residentialDesc: 'Patios, slabs, walkways, and home foundations.',
      driveway: 'Driveways & Sidewalks',
      drivewayDesc: 'Durable, smooth finishes built to last.',
      commercial: 'Commercial Concrete',
      commercialDesc: 'Parking lots, floor slabs, and industrial projects.',
      decorative: 'Decorative Concrete',
      decorativeDesc: 'Stamped, stained, or polished surfaces for unique finishes.',
    },
    why: {
      title: 'Why Choose Us',
      years: '20+ Years Experience',
      local: 'Locally Owned & Operated',
      insured: 'Licensed & Insured',
      custom: 'Custom Designs Available',
    },
    process: {
      title: 'Our Process, From Start to Finish.',
      step1: 'Consultation & Estimate',
      step2: 'Site Preparation',
      step3: 'Concrete Pour & Finishing',
      step4: 'Final Inspection & Care',
    },
    banner: {
      text: 'We ensure strong foundations and beautiful finishes.',
    },
    quote: {
      title: 'Request a Quote',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      type: 'Project Type',
      message: 'Message',
      submit: 'Get My Quote',
      alt: 'Prefer to call? Reach us at',
      types: {
        residential: 'Residential',
        driveway: 'Driveway / Sidewalk',
        commercial: 'Commercial',
        decorative: 'Decorative',
      },
    },
    testimonials: {
      title: 'What Our Clients Say',
      t1: 'Our new decorative patio turned out amazing — exactly what we wanted.',
      t2: 'Professional crew, on time, and the driveway looks fantastic.',
    },
    gallery: {
      title: 'Project Gallery',
      g1: 'Residential Patio',
      g2: 'Commercial Slab',
      g3: 'Stamped Driveway',
      g4: 'Decorative Pool Deck',
    },
    faq: {
      title: 'Frequently Asked Questions',
      q1: 'Do you offer free estimates?',
      a1: 'Yes, we provide free, no-obligation estimates for all projects.',
      q2: 'How long does concrete take to cure?',
      a2: 'Concrete reaches most of its strength within 7 days and continues curing up to 28 days.',
      q3: 'Can you match my existing design?',
      a3: 'Absolutely. We can match finishes and patterns to complement your current space.',
    },
    blog: {
      title: 'From the Blog',
      b1: '5 Tips to Maintain Your Driveway',
      b2: 'Concrete Finishes That Add Curb Appeal',
      b3: 'How to Choose Between Stamped and Stained Concrete',
    },
    footer: {
      tagline: 'Concrete built to endure. Designs made to inspire.',
      address: '123 Masonry Ave, Suite 100, Your City, ST',
      rights: 'All rights reserved.'
    },
    phoneLabel: 'Call us',
  },
  es: {
    brand: 'SolidCraft Concreto',
    nav: {
      services: 'Servicios',
      about: 'Nosotros',
      gallery: 'Proyectos',
      contact: 'Contacto',
      blog: 'Blog',
      quote: 'Solicita tu cotización gratis',
    },
    hero: {
      headline: 'Cimientos fuertes. Impresiones duraderas.',
      sub: 'Expertos en concreto para hogares, entradas y proyectos comerciales.',
      cta: 'Solicita tu cotización gratis',
      trusted: 'Confiado por socios locales',
    },
    about: {
      title: 'Construimos con precisión y orgullo.',
      body:
        'Con más de 20 años de experiencia, entregamos trabajos de concreto de calidad para todo tipo de proyectos — desde cimientos sólidos hasta superficies decorativas que elevan tu espacio.',
    },
    services: {
      title: 'Nuestros Servicios',
      residential: 'Concreto Residencial',
      residentialDesc: 'Patios, losas, pasarelas y cimientos para el hogar.',
      driveway: 'Entradas y Banquetas',
      drivewayDesc: 'Acabados duraderos y uniformes hechos para durar.',
      commercial: 'Concreto Comercial',
      commercialDesc: 'Estacionamientos, losas de piso y proyectos industriales.',
      decorative: 'Concreto Decorativo',
      decorativeDesc: 'Superficies estampadas, teñidas o pulidas para acabados únicos.',
    },
    why: {
      title: 'Por qué elegirnos',
      years: '20+ Años de Experiencia',
      local: 'Empresa Local',
      insured: 'Con Licencia y Asegurado',
      custom: 'Diseños Personalizados',
    },
    process: {
      title: 'Nuestro proceso, de principio a fin.',
      step1: 'Consulta y Cotización',
      step2: 'Preparación del Sitio',
      step3: 'Vaciado y Acabado',
      step4: 'Inspección Final y Cuidado',
    },
    banner: {
      text: 'Aseguramos cimientos fuertes y acabados hermosos.',
    },
    quote: {
      title: 'Solicita una cotización',
      name: 'Nombre',
      email: 'Correo',
      phone: 'Teléfono',
      type: 'Tipo de Proyecto',
      message: 'Mensaje',
      submit: 'Obtener mi cotización',
      alt: '¿Prefieres llamar? Contáctanos al',
      types: {
        residential: 'Residencial',
        driveway: 'Entrada / Banqueta',
        commercial: 'Comercial',
        decorative: 'Decorativo',
      },
    },
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      t1: 'Nuestro nuevo patio decorativo quedó increíble — exactamente lo que queríamos.',
      t2: 'Equipo profesional, puntuales y la entrada quedó excelente.',
    },
    gallery: {
      title: 'Galería de Proyectos',
      g1: 'Patio Residencial',
      g2: 'Losa Comercial',
      g3: 'Entrada Estampada',
      g4: 'Deck de Alberca Decorativo',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      q1: '¿Ofrecen cotizaciones gratuitas?',
      a1: 'Sí, brindamos cotizaciones gratuitas y sin compromiso para todos los proyectos.',
      q2: '¿Cuánto tarda en secar el concreto?',
      a2: 'El concreto alcanza la mayor parte de su resistencia en 7 días y continúa curando hasta 28 días.',
      q3: '¿Pueden igualar el diseño que ya tengo?',
      a3: 'Claro. Podemos igualar acabados y patrones para complementar tu espacio actual.',
    },
    blog: {
      title: 'Del Blog',
      b1: '5 tips para mantener tu entrada',
      b2: 'Acabados de concreto que aumentan el atractivo exterior',
      b3: 'Cómo elegir entre concreto estampado y teñido',
    },
    footer: {
      tagline: 'Concreto hecho para durar. Diseños hechos para inspirar.',
      address: 'Av. Cantera 123, Piso 1, Tu Ciudad, ST',
      rights: 'Todos los derechos reservados.'
    },
    phoneLabel: 'Llámanos',
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const value = useMemo(() => ({
    lang,
    setLang,
    t: (key) => {
      const parts = key.split('.');
      let cur = translations[lang];
      for (const p of parts) {
        cur = cur?.[p];
      }
      return cur ?? key;
    },
  }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
