import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Footer = ({ horseName = "Orion" }) => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "18052945336"; // Tu número sin símbolos
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola, estoy interesado en recibir información sobre ${horseName}`;

  return (
    <footer className="bg-white pt-24 pb-12 px-6 md:px-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto text-center">

        {/* --- SECCIÓN INQUIRE (SIN BOTÓN) --- */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 italic">
            Inquire About {horseName}
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            Private viewings and detailed veterinary reports are available upon qualified request.
          </p>

          {/* Contact Links */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* WhatsApp Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-300">
                <MessageCircle size={18} className="text-slate-600 group-hover:text-white" />
              </div>
              <span className="text-sm font-bold tracking-[0.2em] text-slate-800 uppercase">
                +1 805 294 5336
              </span>
            </a>

            {/* Email Link */}
            <a
              href="mailto:stoholder@gmail.com"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-300">
                <Mail size={18} className="text-slate-600 group-hover:text-white" />
              </div>
              <span className="text-sm font-bold tracking-[0.2em] text-slate-800 uppercase">
                stoholder@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* --- SECCIÓN BRAND & NAV (LA LÍNEA FINAL) --- */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo Estilo Stitch */}
          <div className="text-lg font-serif font-bold tracking-[0.4em] uppercase text-black">
            Horses For Sport International
          </div>

          {/* Nav Links Minimalistas */}
          {/* <div className="flex gap-8">
            {['Collection', 'Stallions', 'Legacy', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] tracking-[0.2em] uppercase text-slate-400 hover:text-slate-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div> */}

          {/* Copyright */}
          <div className="text-[10px] tracking-[0.1em] uppercase text-slate-300">
            © {currentYear} HACIENDA YOKDZONOT. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;