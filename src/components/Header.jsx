import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rabbit as Horse } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/catalogo',
    label: 'Catálogo'
  }, {
    path: '/contacto',
    label: 'Contacto'
  }];
  const isActive = path => location.pathname === path;
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Horse className="w-8 h-8 text-amber-700 group-hover:text-amber-800 transition-colors" />
            <span className="text-2xl font-bold text-amber-900 group-hover:text-amber-800 transition-colors">Hacienda Yokdzonot
          </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-lg font-medium transition-all relative ${isActive(link.path) ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'}`}>
                {link.label}
                {isActive(link.path) && <motion.div layoutId="activeNav" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-700" transition={{
              type: 'spring',
              stiffness: 380,
              damping: 30
            }} />}
              </Link>)}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-700 hover:text-amber-700 transition-colors" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="md:hidden overflow-hidden">
              <div className="flex flex-col gap-4 pt-4 pb-2">
                {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)} className={`text-lg font-medium transition-colors ${isActive(link.path) ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'}`}>
                    {link.label}
                  </Link>)}
              </div>
            </motion.div>}
        </AnimatePresence>
      </nav>
    </header>;
};
export default Header;