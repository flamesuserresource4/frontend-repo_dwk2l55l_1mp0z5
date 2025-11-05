import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import { Partners, About, Services, WhyChooseUs, Process, Banner, QuoteForm, TestimonialsGalleryFAQBlog, Footer } from './components/Sections';
import { LanguageProvider } from './components/i18n';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#2E2E2E] text-gray-900">
        <NavBar />
        <main className="pt-16 bg-[#2E2E2E]">
          <Hero />
          <Partners />
          <About />
          <Services />
          <WhyChooseUs />
          <Process />
          <Banner />
          <QuoteForm />
          <TestimonialsGalleryFAQBlog />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
