import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Heart, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HorseCard from '@/components/HorseCard';
import horsesData from '@/data/horsesData';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  // Now displaying all 4 horses as featured, since the data set is small and focused
  const featuredHorses = horsesData.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Hacienda - Caballos de Excelencia | Criadores desde 1985</title>
        <meta name="description" content="Descubre caballos de raza excepcional en Hacienda. Criadores especializados en Quarter Horse, Thoroughbred, Arabian y más. Visita nuestro catálogo." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <Header />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1662664670865-4f0fa65bbad3"
              alt="Beautiful horse ranch with horses grazing in golden sunset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Caballos de <span className="text-amber-400">Excelencia</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Criadores apasionados desde 1985. Descubre nuestra selección de caballos de raza pura, entrenados con dedicación y amor.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-6">
              <Link to="/catalogo" className="w-full sm:w-auto flex justify-center">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all hover:scale-105 flex items-center gap-2">
                 Ver Catálogo
                </Button>
              </Link>
              <Link to="/contacto" className="w-full sm:w-auto flex justify-center">
                <Button className="bg-white hover:bg-gray-100 text-amber-900 px-8 py-6 text-lg font-semibold rounded-lg transition-all hover:scale-105">
                  Contactar
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Welcome Message */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Bienvenido a Hacienda
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                En Hacienda, nos dedicamos a la cría y entrenamiento de caballos excepcionales. Con más de 35 años de experiencia, ofrecemos ejemplares de las mejores razas, criados con pasión y cuidado profesional. Cada caballo en nuestra hacienda recibe atención personalizada y entrenamiento de alta calidad.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="space-y-3">
                  <Award className="w-12 h-12 text-amber-600 mx-auto" />
                  <h3 className="text-xl font-bold text-gray-900">Calidad Superior</h3>
                  <p className="text-gray-600">Caballos de pedigrí certificado</p>
                </div>
                <div className="space-y-3">
                  <Heart className="w-12 h-12 text-amber-600 mx-auto" />
                  <h3 className="text-xl font-bold text-gray-900">Cuidado Dedicado</h3>
                  <p className="text-gray-600">Atención personalizada diaria</p>
                </div>
                <div className="space-y-3">
                  <Star className="w-12 h-12 text-amber-600 mx-auto" />
                  <h3 className="text-xl font-bold text-gray-900">35+ Años</h3>
                  <p className="text-gray-600">De experiencia en el sector</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Horses */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Caballos Destacados
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre nuestra selección de caballos premium, cada uno con características excepcionales y entrenamiento profesional.
              </p>
            </motion.div>

            {/* Optimized grid for 4 items: 1 column on mobile, 2 columns on desktop/larger */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredHorses.map((horse, index) => (
                <motion.div
                  key={horse.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <HorseCard horse={horse} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link to="/catalogo">
                <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105 flex items-center gap-2 mx-auto">
                  Ver Catálogo Completo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Buscas tu Compañero Perfecto?
              </h2>
              <p className="text-xl mb-8 text-amber-100">
                Nuestro equipo está listo para ayudarte a encontrar el caballo ideal para ti. Contáctanos hoy y comienza tu aventura ecuestre.
              </p>
              <Link to="/contacto">
                <Button className="bg-white hover:bg-gray-100 text-amber-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105">
                  Contáctanos Ahora
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;