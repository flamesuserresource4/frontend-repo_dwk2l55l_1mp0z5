import React from 'react';
import { Home, Truck, Building2, Palette, ShieldCheck, Flag, Clock } from 'lucide-react';
import { useI18n } from './i18n';

export function Partners() {
  const { t } = useI18n();
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-gray-500 text-sm mb-6">{t('hero.trusted')}</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 opacity-70">
          {["Cemex","Quikrete","Hilti","Bosch","Cat"].map((x) => (
            <div key={x} className="h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center text-gray-500 font-semibold">
              {x}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('about.title')}</h2>
          <p className="text-gray-700 leading-relaxed">{t('about.body')}</p>
        </div>
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
          <img src="https://images.unsplash.com/photo-1569443693539-175ea9f007e8?q=80&w=1400&auto=format&fit=crop" alt="team finishing concrete" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#005EFF]/20 to-[#FF6B35]/10" />
        </div>
      </div>
      <div className="h-10 bg-gradient-to-r from-transparent via-[#D6D6D6] to-transparent" />
    </section>
  );
}

export function Services() {
  const { t } = useI18n();
  const cards = [
    { icon: Home, title: t('services.residential'), desc: t('services.residentialDesc'), color: 'from-[#D6D6D6] to-white' },
    { icon: Truck, title: t('services.driveway'), desc: t('services.drivewayDesc'), color: 'from-white to-[#D6D6D6]' },
    { icon: Building2, title: t('services.commercial'), desc: t('services.commercialDesc'), color: 'from-[#D6D6D6] to-white' },
    { icon: Palette, title: t('services.decorative'), desc: t('services.decorativeDesc'), color: 'from-white to-[#D6D6D6]' },
  ];
  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">{t('services.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className={`group rounded-xl border border-gray-200 bg-gradient-to-br ${color} p-6 shadow-sm hover:shadow-md transition`}> 
              <div className="h-12 w-12 rounded-lg bg-[#2E2E2E] text-white flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const { t } = useI18n();
  const stats = [
    { Icon: Clock, label: t('why.years') },
    { Icon: Flag, label: t('why.local') },
    { Icon: ShieldCheck, label: t('why.insured') },
    { Icon: Palette, label: t('why.custom') },
  ];
  return (
    <section className="bg-[#0A1F44] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('why.title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ Icon, label }) => (
            <div key={label} className="rounded-lg bg-white/5 border border-white/10 p-6">
              <Icon className="h-6 w-6 mb-3 text-[#FF6B35]" />
              <p className="font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const { t } = useI18n();
  const steps = [t('process.step1'), t('process.step2'), t('process.step3'), t('process.step4')];
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">{t('process.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <div key={s} className="relative">
              <div className="rounded-xl border border-gray-200 p-6 bg-gradient-to-br from-white to-gray-50 shadow-sm">
                <div className="h-8 w-8 rounded-full bg-[#FF6B35] text-white flex items-center justify-center font-bold mb-3">{i+1}</div>
                <p className="font-medium text-gray-800">{s}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-12px] w-6 h-[2px] bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Banner() {
  const { t } = useI18n();
  return (
    <section className="bg-[#FF6B35] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center font-semibold tracking-wide">
        {t('banner.text')}
      </div>
    </section>
  );
}

export function QuoteForm() {
  const { t } = useI18n();
  return (
    <section id="quote" className="bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('quote.title')}</h2>
          <p className="text-gray-600 mb-4">{t('banner.text')}</p>
          <p className="text-gray-700"><span className="font-semibold">{t('phoneLabel')}:</span> (555) 123-4567</p>
        </div>
        <form className="bg-[#FF6B35]/95 rounded-xl p-6 shadow-xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="rounded-md px-3 py-2 text-gray-900" placeholder={t('quote.name')} />
            <input className="rounded-md px-3 py-2 text-gray-900" placeholder={t('quote.email')} />
            <input className="rounded-md px-3 py-2 text-gray-900" placeholder={t('quote.phone')} />
            <select className="rounded-md px-3 py-2 text-gray-900">
              <option>{t('quote.types.residential')}</option>
              <option>{t('quote.types.driveway')}</option>
              <option>{t('quote.types.commercial')}</option>
              <option>{t('quote.types.decorative')}</option>
            </select>
          </div>
          <textarea className="mt-4 w-full rounded-md px-3 py-2 text-gray-900" rows={4} placeholder={t('quote.message')} />
          <button type="button" className="mt-4 inline-flex items-center justify-center rounded-md bg-[#2E2E2E] px-5 py-2.5 font-semibold hover:brightness-110">
            {t('quote.submit')}
          </button>
          <p className="mt-3 text-sm text-white/90">{t('quote.alt')} <span className="font-semibold">(555) 123-4567</span></p>
        </form>
      </div>
    </section>
  );
}

export function TestimonialsGalleryFAQBlog() {
  const { t } = useI18n();
  return (
    <section className="bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t('testimonials.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[t('testimonials.t1'), t('testimonials.t2')].map((q, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-6 bg-gradient-to-br from-white to-gray-50 shadow-sm">
                <p className="text-gray-700">“{q}”</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t('gallery.title')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', label: t('gallery.g1') },
              { src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', label: t('gallery.g2') },
              { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop', label: t('gallery.g3') },
              { src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', label: t('gallery.g4') },
            ].map((g) => (
              <figure key={g.label} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow">
                <img src={g.src} alt={g.label} className="w-full h-full object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white text-sm">{g.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div id="faq">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('faq.title')}</h2>
          <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 overflow-hidden">
            {[
              { q: t('faq.q1'), a: t('faq.a1') },
              { q: t('faq.q2'), a: t('faq.a2') },
              { q: t('faq.q3'), a: t('faq.a3') },
            ].map(({ q, a }) => (
              <details key={q} className="group open:bg-gray-50">
                <summary className="cursor-pointer list-none p-4 font-medium text-gray-800 flex items-center justify-between">
                  {q}
                  <span className="ml-4 text-gray-500 group-open:rotate-45 transition">+</span>
                </summary>
                <div className="px-4 pb-4 text-gray-600">{a}</div>
              </details>
            ))}
          </div>
        </div>

        <div id="blog">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('blog.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[t('blog.b1'), t('blog.b2'), t('blog.b3')].map((b) => (
              <article key={b} className="rounded-xl border border-gray-200 p-6 bg-gradient-to-br from-white to-gray-50 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{b}</h3>
                <p className="text-sm text-gray-600">Actionable advice and inspiration for homeowners and builders.</p>
                <a href="#" className="mt-3 inline-block text-[#005EFF] font-medium">Read more →</a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-[#2E2E2E] text-gray-200" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-[#005EFF] to-[#FF6B35]" />
            <span className="font-bold">SolidCraft</span>
          </div>
          <p className="text-sm opacity-80 max-w-sm">{t('footer.tagline')}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">{t('nav.services')}</a></li>
            <li><a href="#about" className="hover:text-white">{t('nav.about')}</a></li>
            <li><a href="#gallery" className="hover:text-white">{t('nav.gallery')}</a></li>
            <li><a href="#quote" className="hover:text-white">{t('nav.quote')}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm">(555) 123-4567</p>
          <p className="text-sm">info@solidcraftconcrete.com</p>
          <p className="text-sm mt-2 opacity-80">{t('footer.address')}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-gray-400">© {new Date().getFullYear()} SolidCraft. {t('footer.rights')}</div>
      </div>
    </footer>
  );
}
