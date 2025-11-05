import React from 'react';
import Spline from '@splinetool/react-spline';
import { useI18n } from './i18n';

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none" />
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          {t('hero.headline')}
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-8">
          {t('hero.sub')}
        </p>
        <div className="flex items-center gap-4">
          <a href="#quote" className="inline-flex items-center justify-center rounded-md bg-[#FF6B35] px-6 py-3 text-white font-semibold shadow-lg shadow-orange-500/20 hover:brightness-110 transition">
            {t('hero.cta')}
          </a>
          <span className="text-sm opacity-80">{t('hero.trusted')}</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#2E2E2E] to-transparent pointer-events-none" />
    </section>
  );
}
