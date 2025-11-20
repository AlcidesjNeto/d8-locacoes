// components/Header.tsx
'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (isScrollingRef.current) {
        return;
      }

      const sections = ['inicio', 'equipamentos', 'sobre-nos', 'contato'];
      const scrollOffset = 100;
      const scrollPosition = window.scrollY + scrollOffset;
      
      let currentSection = 'inicio';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    isScrollingRef.current = true;
    setActiveSection(sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
    setIsMenuOpen(false);
  };

  const isActive = (section: string) => activeSection === section;

  const openWhatsApp = () => {
    window.open('https://wa.me/5531999257898?text=Olá! Gostaria de um orçamento.', '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <button onClick={() => scrollToSection('inicio')} className="flex items-center group relative h-full py-2">
            <div className="relative h-16 w-48">
               <Image
                 src="/logo.png.png"
                 alt="D8 Locações Logo"
                 fill
                 className="object-contain object-left"
                 priority
               />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {[
              { id: 'inicio', label: 'Início' },
              { id: 'equipamentos', label: 'Máquinas' },
              { id: 'sobre-nos', label: 'Sobre Nós' },
              { id: 'contato', label: 'Contato' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-md text-sm transition-colors duration-300 ${
                  isActive(item.id)
                    ? 'text-[#54903e] font-bold'
                    : 'text-gray-700 hover:text-[#54903e] font-medium'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Area (Telefone + Botão) */}
          <div className="hidden md:flex items-center gap-5">
            
            {/* 1. Ícone de Telefone (Abre WhatsApp) */}
            <button 
              onClick={openWhatsApp} 
              className="text-[#54903e] hover:text-[#467a32] transition-transform hover:scale-110 p-1"
              aria-label="Chamar no WhatsApp"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>

            {/* 2. Botão Orçar Agora (Rola até o formulário) */}
            <button
              onClick={() => scrollToSection('contato')} 
              className="bg-[#54903e] text-white px-6 py-2.5 rounded-lg hover:bg-[#467a32] transition-all font-semibold shadow-sm hover:shadow-md transform hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Orçar Agora
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
            aria-label="Abrir menu"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'equipamentos', label: 'Máquinas' },
                { id: 'sobre-nos', label: 'Sobre Nós' },
                { id: 'contato', label: 'Contato' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-md text-left transition-colors duration-300 ${
                    isActive(item.id)
                      ? 'bg-green-50 text-[#54903e] font-bold'
                      : 'text-gray-700 hover:bg-gray-50 font-medium'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Área Mobile */}
              <div className="border-t pt-4 mt-2 border-gray-200 px-4 flex flex-col gap-3">
                {/* Ícone Telefone no Mobile */}
                <button 
                  onClick={openWhatsApp}
                  className="flex items-center justify-center gap-2 text-[#54903e] font-semibold p-2 border border-[#54903e] rounded-md w-full"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Falar no WhatsApp
                </button>
                {/* Botão Orçar Agora Mobile */}
                <button
                  onClick={() => scrollToSection('contato')}
                  className="w-full bg-[#54903e] text-white px-6 py-3 rounded-md hover:bg-[#467a32] transition text-center font-semibold flex items-center justify-center gap-2"
                >
                  Orçar Agora
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}