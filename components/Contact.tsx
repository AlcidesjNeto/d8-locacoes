// components/Contact.tsx
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contato" className="bg-gray-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Estamos prontos para atender suas necessidades. Conheça nossas formas de contato.
          </p>

          {/* Botão Instagram */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.instagram.com/d8.loc/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white border-2 border-[#54903e] text-[#54903e] hover:bg-[#54903e] hover:text-white transition-all duration-300 font-semibold shadow-sm gap-2 group"
            >
              <svg 
                className="w-6 h-6 fill-current" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Siga a D8 no Instagram
            </a>
          </div>
        </div>

        {/* Cards de Contato */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          
          {/* WhatsApp Card */}
          <a href="https://wa.me/5531999257898" target="_blank" rel="noopener noreferrer" className="group bg-white p-6 rounded-lg shadow-md hover:bg-[#54903e] transition-colors duration-300">
            <svg 
              className="h-10 w-10 mx-auto text-[#54903e] group-hover:text-white transition-colors duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-white">WhatsApp</h3>
            <p className="mt-1 text-sm text-gray-600 group-hover:text-white">+55 (31) 99925-7898</p>
          </a>

          {/* Email Card */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=d8locacoes@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group bg-white p-6 rounded-lg shadow-md hover:bg-[#54903e] transition-colors duration-300"
          >
            <svg className="h-10 w-10 mx-auto text-[#54903e] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-white">Email</h3>
            <p className="mt-1 text-gray-600 group-hover:text-white">d8locacoes@gmail.com</p>
          </a>

          {/* Localização Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <svg className="h-10 w-10 mx-auto text-[#54903e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
               <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
               <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Localização</h3>
            <p className="mt-1 text-gray-600">Curvelo, Minas Gerais, Brasil</p>
          </div>

          {/* Horário Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <svg className="h-10 w-10 mx-auto text-[#54903e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Horário de Atendimento</h3>
            <p className="mt-1 text-gray-600">Segunda a Sexta: 08:00 - 18:00</p>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="mt-20 max-w-lg mx-auto">
          <div className="text-center mb-10">
             <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">Ou nos envie uma mensagem</h3>
          </div>
          {/* AQUI ESTÁ SEU LINK DO FORMSPREE */}
          <form action="https://formspree.io/f/xrbjkdan" method="POST" className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="full-name" className="sr-only">
                Nome
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                autoComplete="name"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#54903e] focus:border-[#54903e] border-gray-300 rounded-md"
                placeholder="Nome"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#54903e] focus:border-[#54903e] border-gray-300 rounded-md"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Telefone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#54903e] focus:border-[#54903e] border-gray-300 rounded-md"
                placeholder="Telefone"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#54903e] focus:border-[#54903e] border border-gray-300 rounded-md"
                placeholder="Mensagem"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#54903e] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#54903e] transition-colors"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}