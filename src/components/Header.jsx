import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">

          {/* Logo y Nombre con estilo Stitch */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Icono minimalista (Símbolo de la persona/jinete) */}
            <svg
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="currentColor"
              className="text-black"
            >
              <circle cx="7" cy="3" r="2.5" />
              <path d="M7 6.5c-2.5 0-4.5 2-4.5 4.5v5h2v6h5v-6h2v-5c0-2.5-2-4.5-4.5-4.5z" />
            </svg>

            <span className="text-sm md:text-base font-serif font-bold tracking-[0.3em] uppercase text-black">
              Horses For Sport International
            </span>
          </Link>

          {/* Espacio vacío (ya que quitamos el View Catalogue) */}
          <div className="hidden md:block">
            {/* Aquí podrías poner un botón de menú minimalista si lo necesitas luego */}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;