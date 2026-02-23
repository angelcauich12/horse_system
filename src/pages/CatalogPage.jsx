import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HorseCard from '@/components/HorseCard';
import horsesData from '@/data/horsesData';
import { Button } from '@/components/ui/button';

const CatalogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique breeds
  const breeds = useMemo(() => {
    const uniqueBreeds = [...new Set(horsesData.map(horse => horse.breed))];
    return uniqueBreeds.sort();
  }, []);

  // Filter horses
  const filteredHorses = useMemo(() => {
    return horsesData.filter(horse => {
      // Search filter
      const matchesSearch = horse.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          horse.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          horse.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Breed filter
      const matchesBreed = selectedBreed === 'all' || horse.breed === selectedBreed;

      // Price filter
      let matchesPrice = true;
      if (priceRange === 'low') {
        matchesPrice = horse.price < 8000;
      } else if (priceRange === 'medium') {
        matchesPrice = horse.price >= 8000 && horse.price < 12000;
      } else if (priceRange === 'high') {
        matchesPrice = horse.price >= 12000;
      }

      return matchesSearch && matchesBreed && matchesPrice;
    });
  }, [searchTerm, selectedBreed, priceRange]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedBreed('all');
    setPriceRange('all');
  };

  return (
    <>
      <Helmet>
        <title>Catálogo de Caballos - Hacienda | Ver Todos los Caballos en Venta</title>
        <meta name="description" content="Explora nuestro catálogo completo de caballos en venta. Filtra por raza, precio y características. Encuentra tu caballo perfecto en Hacienda." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <Header />

        {/* Page Header */}
        <section className="pt-32 pb-12 px-4 bg-gradient-to-r from-amber-700 to-amber-900">
          <div className="container mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Catálogo de Caballos
              </h1>
              <p className="text-xl text-amber-100 max-w-2xl mx-auto">
                Explora nuestra colección exclusiva de caballos de calidad superior
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-4 bg-white shadow-md sticky top-16 z-40">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar por nombre, raza..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-900 bg-white"
                />
              </div>

              {/* Filter Toggle Button (Mobile) */}
              <Button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white"
              >
                <SlidersHorizontal className="w-5 h-5" />
                {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
              </Button>

              {/* Filters */}
              <div className={`w-full lg:w-auto flex flex-col lg:flex-row gap-4 ${showFilters ? 'flex' : 'hidden lg:flex'}`}>
                {/* Breed Filter */}
                <select
                  value={selectedBreed}
                  onChange={(e) => setSelectedBreed(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-900 bg-white"
                >
                  <option value="all">Todas las razas</option>
                  {breeds.map(breed => (
                    <option key={breed} value={breed}>{breed}</option>
                  ))}
                </select>

                {/* Price Filter */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-900 bg-white"
                >
                  <option value="all">Todos los precios</option>
                  <option value="low">Menos de $8,000</option>
                  <option value="medium">$8,000 - $12,000</option>
                  <option value="high">Más de $12,000</option>
                </select>

                {/* Reset Button */}
                <Button
                  onClick={resetFilters}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center gap-2"
                >
                  <Filter className="w-5 h-5" />
                  Limpiar
                </Button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-center lg:text-left">
              <p className="text-gray-600">
                Mostrando <span className="font-bold text-amber-700">{filteredHorses.length}</span> de {horsesData.length} caballos
              </p>
            </div>
          </div>
        </section>

        {/* Horses Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            {filteredHorses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {filteredHorses.map((horse, index) => (
                  <motion.div
                    key={horse.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <HorseCard horse={horse} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-20"
              >
                <p className="text-2xl text-gray-600 mb-4">No se encontraron caballos</p>
                <p className="text-gray-500 mb-6">Intenta ajustar tus filtros de búsqueda</p>
                <Button
                  onClick={resetFilters}
                  className="bg-amber-700 hover:bg-amber-800 text-white"
                >
                  Restablecer Filtros
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CatalogPage;