// data/machinery.ts
import { Machinery } from '@/types';

export const machineryData: Machinery[] = [
  {
    id: 'fiber-deep',
    name: 'Fiber Deep',
    category: 'Depilação a Laser',
    description: 'Tecnologia avançada em depilação a laser. Equipamento de alta performance projetado para oferecer tratamentos rápidos, indolores e eficazes em todos os fototipos de pele. Ideal para clínicas que buscam excelência e resultados duradouros.',
    specs: {
      anvisa: '80726740010', // <--- Fiber Deep
      potencia: '1200W',
      comprimentoOnda: '810nm / 940nm / 1064nm',
      sistemaRefrigeracao: 'Água + Ar',
      frequencia: '1-10Hz',
      tamanhoSpot: '12x20mm',
      tela: 'Touch Screen LCD'
    },
    image: '/images/maquinaria/optimized/FiberDeep/1.png', 
    images: [
      '/images/maquinaria/optimized/FiberDeep/1.png',
      '/images/maquinaria/optimized/FiberDeep/2.png',
    ],
    available: true,
    pdfUrl: '/images/maquinaria/optimized/FiberDeep/ficha_tecnica.pdf'
  },
  {
    id: 'inkie',
    name: 'Inkie Laser',
    category: 'Remoção de Tatuagem',
    description: 'A solução definitiva para remoção de tatuagens e micropigmentação. O Inkie Laser utiliza tecnologia Q-Switched ND:YAG para fragmentar pigmentos com precisão e segurança, preservando a integridade da pele.',
    specs: {
      anvisa: '80832470003', // <--- Inkie (Corrigido)
      tipoLaser: 'Q-Switched ND:YAG',
      comprimentoOnda: '1064nm / 532nm',
      energiaPulso: 'Até 2000mj',
      duracaoPulso: '6ns',
      frequencia: '1-10Hz',
      sistemaRefrigeracao: 'Água + Ar'
    },
    image: '/images/maquinaria/optimized/Inkie/3.png',
    images: [
      '/images/maquinaria/optimized/Inkie/3.png',
      '/images/maquinaria/optimized/Inkie/4.png',
    ],
    available: true,
    pdfUrl: '/images/maquinaria/optimized/Inkie/ficha_tecnica.pdf'
  }
];

// Helpers
export function getMachineryById(id: string): Machinery | undefined {
  return machineryData.find(m => m.id === id);
}
export function getMachineryByCategory(category: string): Machinery[] {
  return machineryData.filter(m => m.category === category);
}
export function getCategories(): string[] {
  return [...new Set(machineryData.map(m => m.category))];
}