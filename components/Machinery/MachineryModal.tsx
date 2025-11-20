'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Machinery } from '@/types';

interface MachineryModalProps {
  machinery: Machinery;
  isOpen: boolean;
  onClose: () => void;
}

export default function MachineryModal({ machinery, isOpen, onClose }: MachineryModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSelectedImage(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const images = machinery.images || [machinery.image];

  // TRADUÇÃO
  const specLabels: Record<string, string> = {
    anvisa: 'Registro ANVISA',
    potencia: 'Potência',
    comprimentoOnda: 'Comprimento de Onda',
    sistemaRefrigeracao: 'Refrigeração',
    frequencia: 'Frequência',
    tamanhoSpot: 'Tamanho do Spot',
    tela: 'Tela',
    tipoLaser: 'Tipo de Laser',
    energiaPulso: 'Energia do Pulso',
    duracaoPulso: 'Duração do Pulso',
    weight: 'Peso',
    power: 'Potência',
    capacity: 'Capacidade',
    width: 'Largura',
    torque: 'Torque',
    maxSpeed: 'Velocidade Máx.',
    slope: 'Inclinação',
    maxLoad: 'Carga Máxima',
    grossWeight: 'Peso Bruto',
    dimensions: 'Dimensões',
    length: 'Comprimento',
    height: 'Altura',
    transmission: 'Transmissão',
    traction: 'Tração',
    motor: 'Motor',
    emissions: 'Emissões',
    drumDiameter: 'Diâmetro Tambor',
    amplitude: 'Amplitude',
    fuelTank: 'Tanque Combustível',
    configuration: 'Configuração',
    mobility: 'Mobilidade',
    pumpFlow: 'Vazão da Bomba',
    sprayWidth: 'Largura de Aspersão',
    platformLength: 'Comp. Plataforma',
    platformWidth: 'Largura Plataforma',
    loadingSystem: 'Sistema de Carga',
  };

  const handleWhatsApp = () => {
    const phoneNumber = '5531999257898'; 
    const message = `Olá! Tenho interesse na locação da máquina: ${machinery.name}. Poderiam me passar mais informações?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const modalContent = (
    <div className="fixed inset-0 z-[60] overflow-y-auto">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="flex min-h-full items-center justify-center p-4 md:p-6">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full mx-auto overflow-hidden transform transition-all flex flex-col md:flex-row max-h-[90vh]">
          
          <button onClick={onClose} className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Lado Esquerdo: Imagens */}
          <div className="w-full md:w-1/2 bg-gray-50 p-6 md:p-8 flex flex-col justify-center border-r border-gray-100 overflow-y-auto">
            <div className="relative aspect-square w-full bg-white rounded-xl shadow-sm mb-4 p-4 border border-gray-100">
              <Image src={images[selectedImage]} alt={machinery.name} fill className="object-contain" priority />
              
              {!machinery.available && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  Indisponível
                </div>
              )}
            </div>

            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, idx) => (
                  <button key={idx} onClick={() => setSelectedImage(idx)} className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#54903e] ring-2 ring-[#54903e]/20' : 'border-gray-200 hover:border-gray-300'} bg-white p-1`}>
                    <Image src={img} alt={`${machinery.name} ${idx + 1}`} fill className="object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Lado Direito: Detalhes */}
          <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto bg-white">
            
            {/* Categorias (Com lógica de 2 balões para Inkie) */}
            <div className="flex flex-wrap gap-2 mb-4">
              {machinery.id === 'inkie' ? (
                <>
                  <div className="inline-block bg-green-50 text-[#54903e] px-3 py-1 rounded-full text-sm font-semibold border border-green-100">
                    Remoção de Tatuagem
                  </div>
                  <div className="inline-block bg-green-50 text-[#54903e] px-3 py-1 rounded-full text-sm font-semibold border border-green-100">
                    Remoção de Pigmento
                  </div>
                </>
              ) : (
                <div className="inline-block bg-green-50 text-[#54903e] px-3 py-1 rounded-full text-sm font-semibold border border-green-100">
                  {machinery.category}
                </div>
              )}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{machinery.name}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">{machinery.description}</p>

            {/* Especificações */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#54903e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                Especificações Técnicas
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(machinery.specs).map(([key, value]) => {
                  if (!value) return null;
                  return (
                    <div key={key} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-green-100 transition-colors">
                      <div className="text-sm text-gray-600 font-medium">{specLabels[key] || key}</div>
                      <div className="font-semibold text-gray-900 text-right">{value}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Diferenciais */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#54903e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Diferenciais
              </h3>
              <ul className="space-y-3">
                {/* Item Anvisa Automático */}
                {machinery.specs.anvisa && (
                    <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#54903e] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-gray-700 font-medium">Registro ANVISA Ativo</span>
                    </li>
                )}
                {[
                  "Manutenção preventiva em dia",
                  "Treinamento operacional incluso",
                  "Suporte técnico especializado",
                  "Logística ágil e segura"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#54903e] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BOTÕES (ORDEM CORRIGIDA) */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t border-gray-100">
              
              {/* 1. Solicitar Orçamento (PRIMEIRO) */}
              <button onClick={handleWhatsApp} className="flex-1 bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-bold hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.231-.298.347-.497.115-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Solicitar Orçamento
              </button>
              
              {/* 2. Ficha Técnica (SEGUNDO) */}
              {machinery.pdfUrl && (
                <a href={machinery.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex-1 border-2 border-gray-200 text-gray-700 px-6 py-3.5 rounded-xl font-bold hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all text-center flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Ficha Técnica PDF
                </a>
              )}
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center justify-center text-sm text-blue-800 font-medium">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Resposta rápida: Atendemos em menos de 2 horas
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return createPortal(modalContent, document.body);
}