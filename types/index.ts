// types/index.ts

export interface Machinery {
  id: string;
  name: string;
  category: string;
  description: string;
  specs: {
    // --- Novos campos para Estética (D8 Locações) ---
    anvisa?: string;
    tipoLaser?: string;
    comprimentoOnda?: string;
    energiaPulso?: string;
    duracaoPulso?: string;
    frequencia?: string;
    sistemaRefrigeracao?: string;
    tamanhoSpot?: string;
    tela?: string;
    
    // --- Campos originais (Mantidos por garantia) ---
    weight?: string;
    power?: string;
    capacity?: string;
    width?: string;
    torque?: string;
    maxSpeed?: string;
    slope?: string;
    maxLoad?: string;
    grossWeight?: string;
    dimensions?: string;
    length?: string;
    height?: string;
    transmission?: string;
    traction?: string;
    motor?: string;
    emissions?: string;
    drumDiameter?: string;
    amplitude?: string;
    fuelTank?: string;
    configuration?: string;
    mobility?: string;
    pumpFlow?: string;
    sprayWidth?: string;
    platformLength?: string;
    platformWidth?: string;
    loadingSystem?: string;

    // Permite qualquer outro campo extra que a gente inventar
    [key: string]: string | undefined; 
  };
  image: string;
  images?: string[]; // Galeria de imagens adicionais
  available: boolean;
  pdfUrl?: string; // URL do PDF com especificações técnicas
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  machinery?: string;
  message: string;
}