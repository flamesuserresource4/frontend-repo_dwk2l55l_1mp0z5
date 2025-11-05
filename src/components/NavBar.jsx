import React from 'react';
import { useI18n } from './i18n';

export default function NavBar() {
  const { lang, setLang, t } = useI18n();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-[#005EFF] to-[#2E2E2E]" />
          <span className="font-bold text-gray-900">{t('brand')}</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#services" className="hover:text-gray-900">{t('nav.services')}</a>
          <a href="#about" className="hover:text-gray-900">{t('nav.about')}</a>
          <a href="#gallery" className="hover:text-gray-900">{t('nav.gallery')}</a>
          <a href="#contact" className="hover:text-gray-900">{t('nav.contact')}</a>
          <a href="#blog" className="hover:text-gray-900">{t('nav.blog')}</a>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="px-3 py-1.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <a href="#quote" className="hidden sm:inline-flex items-center rounded-md bg-[#FF6B35] px-4 py-2 text-white font-semibold shadow-sm hover:brightness-110">
            {t('nav.quote')}
          </a>
        </div>
      </div>
    </header>
  );
}
