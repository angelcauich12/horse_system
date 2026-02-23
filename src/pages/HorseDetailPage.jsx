
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Calendar, Ruler, Palette, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import PedigreeTable from '@/components/PedigreeTable';
import horsesData from '@/data/horsesData';
import { Button } from '@/components/ui/button';

const HorseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const horse = horsesData.find(h => h.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [id]);

  if (!horse) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Caballo no encontrado</h2>
            <Link to="/catalogo">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                Volver al Catálogo
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const galleryImages = horse.gallery && horse.gallery.length > 0 ? horse.gallery : [horse.image];

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      <Helmet>
        <title>{horse.name} - {horse.breed} en Venta | Hacienda</title>
        <meta name="description" content={`${horse.name}, ${horse.breed} de ${horse.age} años. ${horse.description.substring(0, 150)}... Precio: $${horse.price.toLocaleString()}`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <Header />

        <section className="pt-24 pb-4 px-4">
          <div className="container mx-auto">
            <Button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800">
              <ArrowLeft className="w-5 h-5" />
              Volver
            </Button>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-gray-100">
                  <img key={currentImageIndex} src={galleryImages[currentImageIndex]} alt={`${horse.name} - View ${currentImageIndex + 1}`} className="w-full h-full object-cover transition-opacity duration-300" />

                  {galleryImages.length > 1 && (
                    <>
                      <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10" aria-label="Previous image">
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                      </button>
                      <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10" aria-label="Next image">
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                      </button>
                    </>
                  )}

                  {galleryImages.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
                      {currentImageIndex + 1} / {galleryImages.length}
                    </div>
                  )}
                </motion.div>

                {galleryImages.length > 1 && (
                  <div className="grid grid-cols-5 gap-2">
                    {galleryImages.map((img, index) => (
                      <button key={index} onClick={() => setCurrentImageIndex(index)} className={`aspect-square rounded-lg overflow-hidden transition-all border-2 ${currentImageIndex === index ? 'border-amber-600 scale-95 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                        <img src={img} alt={`Thumbnail ${index + 1} of ${horse.name}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    {horse.name}
                  </h1>
                  <p className="text-2xl text-amber-700 font-semibold mb-6">
                    ${horse.price.toLocaleString()}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-5 h-5 text-amber-700" />
                        <span className="text-sm font-medium text-gray-600">Edad</span>
                      </div>
                      <p className="text-xl font-bold text-gray-900">{horse.age} años</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Heart className="w-5 h-5 text-amber-700" />
                        <span className="text-sm font-medium text-gray-600">Raza</span>
                      </div>
                      <p className="text-xl font-bold text-gray-900">{horse.breed}</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Ruler className="w-5 h-5 text-amber-700" />
                        <span className="text-sm font-medium text-gray-600">Altura</span>
                      </div>
                      <p className="text-xl font-bold text-gray-900">{horse.height}</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Palette className="w-5 h-5 text-amber-700" />
                        <span className="text-sm font-medium text-gray-600">Color</span>
                      </div>
                      <p className="text-xl font-bold text-gray-900">{horse.color}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">Descripción</h2>
                      <p className="text-gray-700 leading-relaxed">{horse.description}</p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">Información Adicional</h2>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex justify-between py-2 border-b border-gray-200">
                          <span className="font-medium">Género:</span>
                          <span>{horse.gender}</span>
                        </li>
                        <li className="flex justify-between py-2 border-b border-gray-200">
                          <span className="font-medium">Raza:</span>
                          <span>{horse.breed}</span>
                        </li>
                        <li className="flex justify-between py-2 border-b border-gray-200">
                          <span className="font-medium">Color:</span>
                          <span>{horse.color}</span>
                        </li>
                        <li className="flex justify-between py-2">
                          <span className="font-medium">Altura:</span>
                          <span>{horse.height}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Pedigree Section */}
            {horse.pedigree && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">Genealogía y Pedigree</h2>
                <PedigreeTable pedigree={horse.pedigree} />
              </motion.div>
            )}

          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
          <div className="container mx-auto max-w-2xl">
            <ContactForm selectedHorse={horse.name} />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HorseDetailPage;
