'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Machinery } from '@/types';
import MachineryModal from './MachineryModal';

interface MachineryCardProps {
  machinery: Machinery;
}

export default function MachineryCard({ machinery }: MachineryCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Traduções das especificações
  const specLabels: Record<string, string> = {
    anvisa: 'Registro ANVISA',
    potencia: 'Potência',
    comprimentoOnda: 'Comprimento de Onda',
    sistemaRefrigeracao: 'Refrigeração',
    frequencia: 'Frequência',
    tamanhoSpot: 'Tamanho do Spot',
    tela: 'Tela',
    tipoLaser: 'Tipo de Laser',
    energiaPulso: 'Energia',
    duracaoPulso: 'Duração',
    weight: 'Peso',
    power: 'Potência',
    capacity: 'Capacidade',
  };

  const handleWhatsApp = () => {
    const phoneNumber = '5531999257898';
    const message = `Olá! Tenho interesse na locação da máquina: ${machinery.name}. Poderiam me passar mais informações e um orçamento?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full w-full max-w-full">
        
        {/* Imagem */}
        <div 
          className="relative aspect-square w-full max-w-full bg-white p-6 overflow-hidden cursor-pointer flex-shrink-0"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={machinery.image}
            alt={machinery.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw"
            className="object-contain transition-transform duration-700 group-hover:scale-105"
            priority={false}
          />

          {/* Status Disponível */}
          <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
            machinery.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}>
            {machinery.available ? 'Disponível' : 'Indisponível'}
          </div>
          
          {/* --- BALÕES DE CATEGORIA (Lógica da Inkie) --- */}
          <div className="absolute top-3 left-3 flex flex-col gap-1 items-start z-10">
            {machinery.id === 'inkie' ? (
              <>
                {/* Balão 1 */}
                <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium border border-gray-100 shadow-sm">
                  Remoção de Tatuagem
                </div>
                {/* Balão 2 */}
                <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium border border-gray-100 shadow-sm">
                  Remoção de Pigmento
                </div>
              </>
            ) : (
              // Para as outras máquinas, mostra só o padrão
              <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium border border-gray-100 shadow-sm">
                {machinery.category}
              </div>
            )}
          </div>
          {/* ------------------------------------------- */}

        </div>
        
        {/* Conteúdo */}
        <div className="p-5 flex flex-col flex-grow w-full border-t border-gray-50">
          <h3 
            className="text-xl font-bold text-gray-900 mb-2 cursor-pointer hover:text-[#54903e] transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            {machinery.name}
          </h3>
          
          <p className="text-gray-600 mb-4 text-sm line-clamp-2 h-10">
            {machinery.description}
          </p>
          
          {/* Especificações */}
          <div className="space-y-2 mb-6 flex-grow">
            {Object.entries(machinery.specs).slice(0, 3).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between text-xs bg-gray-50 rounded px-3 py-2">
                <span className="text-gray-500 font-medium uppercase tracking-wide">
                   {specLabels[key] || key}
                </span>
                <span className="text-gray-900 font-semibold text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>
          
          {/* Botões */}
          <div className="flex flex-col gap-2 mt-auto">
            
            {/* Ver Detalhes */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-gray-900 transition-all shadow-md text-center"
            >
              Ver Detalhes
            </button>
            
            {/* Ficha Técnica (Só aparece se tiver PDF) */}
            {machinery.pdfUrl && (
              <a
                href={machinery.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-gray-200 text-gray-600 px-4 py-3 rounded-lg text-sm font-semibold hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all text-center flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Baixar Ficha Técnica
              </a>
            )}

            {/* Solicitar Orçamento (Destaque) */}
            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#54903e] text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-[#467a32] transition-all shadow-md text-center flex items-center justify-center gap-2"
            >
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
               </svg>
               Solicitar Orçamento
            </button>
          </div>

        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <MachineryModal
          machinery={machinery}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}