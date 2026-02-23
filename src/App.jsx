import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import HorseDetailPage from './pages/HorseDetailPage';
import ContactPage from './pages/ContactPage';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/caballo/:id" element={<HorseDetailPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;