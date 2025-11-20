// components/Footer.tsx
'use client';

import Image from 'next/image';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#54903e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-4">
              <Image
                src="/Logo branca sem fundo.png"
                alt="D8 Locações"
                width={420}
                height={220}
                className="h-24 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-green-50 mb-6 max-w-md">
              Especialistas em locação de equipamentos estéticos de alta performance.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/d8.loc/" 
                target="_blank"             // <-- ISSO faz abrir em nova guia
                rel="noopener noreferrer"   // <-- ISSO é segurança obrigatória
                className="w-10 h-10 border border-green-200 text-white hover:bg-white hover:text-[#54903e] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-green-200">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="text-green-50 hover:text-white transition">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('equipamentos')} className="text-green-50 hover:text-white transition">
                  Máquinas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre-nos')} className="text-green-50 hover:text-white transition">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="text-green-50 hover:text-white transition">
                  Contato
                </button>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-green-100">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+5531999257898" className="text-green-50 hover:text-white transition flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +55 (31) 99925-7898
                </a>
              </li>
              <li>
                <a href="mailto:contato@d8locacoes.com.br" className="text-green-50 hover:text-white transition flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  d8locacoes@gmail.com
                </a>
              </li>
              <li className="text-green-50 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Curvelo, Minas Gerais, Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Business Hours - Minimalista */}
        <div className="border-t border-green-600 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-green-100 uppercase tracking-wider">Horário de Atendimento</span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-50">Segunda a Sexta:</span>
                <span className="font-semibold text-white">08:00 - 18:00</span>
              </div>
              <div className="w-px h-5 bg-green-600"></div>
              <div className="flex items-center gap-2">
                <span className="text-green-50">Sábados e Domingos</span>
                <span className="font-semibold text-red-400">Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Area - SEO */}
        <div className="border-t border-green-600 py-8">
          <div className="text-center">
            <p className="text-sm text-green-100 mb-3 uppercase tracking-wider font-semibold">
              Área de Atendimento
            </p>
            <p className="text-green-50 text-base">
              Atendemos somente em Minas Gerais.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-600 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-green-100">
            <p>
             &copy; 2022 D8 Locações. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}