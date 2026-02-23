import React from 'react';
import { Link } from 'react-router-dom';
import { Rabbit as Horse, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Horse className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-bold">Hacienda</span>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed">
              Criadores de caballos de excelencia desde 1985. Dedicados a la cría, entrenamiento y venta de caballos de calidad superior.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <span className="text-xl font-semibold text-amber-400">Contacto</span>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <p className="text-amber-100 text-sm">
                  Camino Real 1234<br />
                  Valle Verde, Estado 12345
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-amber-100 text-sm hover:text-white transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="mailto:info@hacienda.com" className="text-amber-100 text-sm hover:text-white transition-colors">
                  info@hacienda.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media & Links */}
          <div className="space-y-4">
            <span className="text-xl font-semibold text-amber-400">Síguenos</span>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-800 hover:bg-amber-700 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-800 hover:bg-amber-700 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-800 hover:bg-amber-700 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="pt-4 space-y-2">
              <Link to="/catalogo" className="block text-amber-100 hover:text-white text-sm transition-colors">
                Ver Catálogo
              </Link>
              <Link to="/contacto" className="block text-amber-100 hover:text-white text-sm transition-colors">
                Contactar
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-800 mt-8 pt-6 text-center">
          <p className="text-amber-200 text-sm">
            &copy; {currentYear} Hacienda. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;