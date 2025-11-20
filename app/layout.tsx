import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import TopBar from '@/components/TopBar'; // <--- Importando a barra nova

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // Título da Aba do Navegador
  title: 'D8 Locações | Aluguel de Equipamentos Estéticos',
  description: 'Locação de equipamentos de alta tecnologia para estética em Minas Gerais. Fiber Deep, Inkie Laser e muito mais. Potencialize seus resultados.',
  keywords: 'aluguel laser, locação estética, fiber deep, inkie laser, depilação a laser, remoção de tatuagem, minas gerais, curvelo, locação equipamentos médicos',
  
  // Configuração para WhatsApp e Facebook (Open Graph)
  openGraph: {
    title: 'D8 Locações - Tecnologia Avançada para sua Clínica',
    description: 'Locação de equipamentos de alta performance. Fiber Deep e Inkie Laser disponíveis para sua agenda.',
    url: 'https://d8locacoes.com.br', // Seu futuro site
    siteName: 'D8 Locações',
    locale: 'pt_BR',
    type: 'website',
  },

  // Configuração para Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'D8 Locações | Equipamentos Estéticos',
    description: 'Locação de Fiber Deep e Inkie Laser em Minas Gerais.',
  },

  // Ícone da Aba (Favicon)
  icons: {
    icon: '/logo.png.png', // Usando sua logo como ícone
    // Se você criar um favicon específico depois, mude aqui para '/favicon.ico'
  },

  // Cor da barra do navegador no celular
  themeColor: '#54903e', 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#54903e" />
        
        {/* Dados Estruturados para o Google (SEO Local) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'D8 Locações',
              description: 'Locação de equipamentos estéticos de alta performance',
              url: 'https://d8locacoes.com.br',
              areaServed: [
                { '@type': 'State', name: 'Minas Gerais' },
                { '@type': 'City', name: 'Curvelo' },
                { '@type': 'City', name: 'Belo Horizonte' }
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Curvelo',
                addressRegion: 'MG',
                addressCountry: 'BR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+55-31-99925-7898',
                contactType: 'customer service'
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <TopBar />  {/* <--- AQUI ESTÁ A BARRINHA NO TOPO */}
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}