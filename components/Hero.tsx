// components/Hero.tsx
'use client';
export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-white scroll-mt-0"
    >

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 leading-tight tracking-wide animate-fade-in">
            D8 Locações:{' '}
            <span className="text-[#54903e] font-normal">
              Tecnologia Avançada
            </span>
            {' '}para sua Clínica
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl leading-relaxed animate-fade-in delay-200">
            Locação de equipamentos de alta performance para estética.
          </p>
          <div className="animate-fade-in delay-300">
            <button
              onClick={() => scrollToSection('equipamentos')}
              className="group inline-flex items-center justify-center bg-[#54903e] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver Catálogo
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}