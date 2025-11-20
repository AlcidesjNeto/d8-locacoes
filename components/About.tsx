// components/About.tsx
'use client';

export default function About() {
  return (
    <section 
      id="sobre-nos" 
      className="min-h-screen flex items-center bg-white scroll-mt-0 py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo de Texto */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a <span className="text-[#54903e]">D8 Locações</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Nós, da <strong>D8 Locações</strong>, somos uma empresa especializada no aluguel de equipamentos estéticos de alta tecnologia. Nascemos para impulsionar empreendedores e profissionais da saúde e beleza que buscam excelência.
              </p>
              <p>
                Estamos no mercado desde <strong>2022</strong>, e desde então, temos nos dedicado a fornecer as melhores opções de máquinas do mundo, ajudando nossos parceiros a entregar resultados transformadores para seus próprios clientes.
              </p>
              <p>
                Nosso objetivo vai além da locação: queremos crescer junto com você. Por isso, nosso foco é na <strong>humanização, suporte total e educação</strong> contínua.
              </p>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="text-4xl font-bold text-[#54903e] mb-2">3+</div>
                <div className="text-sm text-gray-600 font-medium">Anos de História</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="text-4xl font-bold text-[#54903e] mb-2">30+</div>
                <div className="text-sm text-gray-600 font-medium">Clientes Satisfeitos</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="text-4xl font-bold text-[#54903e] mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Comprometimento</div>
              </div>
            </div>
          </div>

          {/* Grid de Diferenciais (Cores Dinâmicas) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Humanização - Verde D8 */}
            <div className="bg-[#54903e] text-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Humanização</h3>
              <p className="text-green-50 text-sm leading-relaxed">
                Atendimento próximo e personalizado. Entendemos a sua necessidade porque somos parceiros do seu negócio.
              </p>
            </div>

            {/* Suporte - Cinza Escuro (Profissionalismo) */}
            <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-3">Suporte Total</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Assistência técnica ágil e treinamento completo para que você opere com total segurança.
              </p>
            </div>

            {/* Educação - Dourado/Ocre (Conhecimento) */}
            <div className="bg-yellow-600 text-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">Educação</h3>
              <p className="text-yellow-50 text-sm leading-relaxed">
                Não apenas alugamos: ensinamos. Compartilhamos conhecimento para você extrair o máximo da máquina.
              </p>
            </div>

            {/* Tecnologia - Azul Petróleo (Inovação) */}
            <div className="bg-cyan-700 text-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Inovação</h3>
              <p className="text-cyan-50 text-sm leading-relaxed">
                Trabalhamos apenas com equipamentos de ponta, garantindo que você esteja sempre à frente no mercado.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}