'use client';

import { useState } from 'react';
import { machineryData } from '@/data/machinery';
import MachineryCard from './Machinery/MachineryCard';

export default function Machinery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Pega todas as categorias únicas
  const allCategories = ['all', ...new Set(machineryData.map(m => m.category))];
  
  const categories = allCategories.map(cat => ({
    id: cat,
    name: cat === 'all' ? 'Todas' : cat
  }));

  // Filtra as máquinas
  const filteredMachinery = selectedCategory === 'all' 
    ? machineryData 
    : machineryData.filter(m => m.category === selectedCategory);

  return (
    <section 
      id="equipamentos" 
      className="min-h-screen flex flex-col bg-gray-50 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Nossos Equipamentos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tecnologia de última geração para potencializar seus resultados estéticos.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                selectedCategory === category.id
                  ? 'bg-[#54903e] text-white shadow-md' // Verde D8 Ativo
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Contador */}
        <div className="text-center mb-10">
          <p className="text-sm text-gray-500">
            {filteredMachinery.length} {filteredMachinery.length === 1 ? 'máquina disponível' : 'máquinas disponíveis'}
          </p>
        </div>

        
        {/* Usamos 'flex' e 'justify-center' para centralizar os itens independente da quantidade */}
        <div className="flex flex-wrap justify-center gap-8">
          {filteredMachinery.length > 0 ? (
            filteredMachinery.map((machinery) => (
              <div 
                key={machinery.id}
                // Define a largura: 100% no celular, 45% no tablet, 30% no PC (para caber 3)
                // O 'max-w-sm' impede que fique gigante em telas grandes se tiver só 1
                className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-md flex-shrink-0"
              >
                <MachineryCard machinery={machinery} />
              </div>
            ))
          ) : (
            <div className="text-center py-20 w-full">
              <p className="text-gray-400 text-lg">
                Nenhuma máquina encontrada nesta categoria.
              </p>
              <button 
                onClick={() => setSelectedCategory('all')}
                className="mt-4 text-[#54903e] font-medium hover:underline"
              >
                Ver todas as máquinas
              </button>
            </div>
          )}
        </div>
        {/* ------------------------------------------- */}

      </div>
    </section>
  );
}