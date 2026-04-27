import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Estilos
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Header from '../components/Header';
import Footer from '../components/Footer';
import horsesData from '@/data/horsesData';

const HomePage = () => {
  return (
    <>
      <Header />

      {/* Contenedor principal del Swiper: Ocupa toda la pantalla */}
      <main className="h-screen w-full bg-white">
        <Swiper
          direction={'horizontal'}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Mousewheel]}
          className="h-full w-full"
        >
          {horsesData.map((horse, index) => (
            <SwiperSlide key={index} className="overflow-y-auto overflow-x-hidden custom-scrollbar">

              {/* SECCIÓN 1: HERO (IMAGEN FULL SCREEN) */}
              <section className="relative h-screen w-full flex-shrink-0">
                <div className="absolute inset-0">
                  <img
                    src={horse.image}
                    alt={horse.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
                </div>

                <div className="relative h-full flex flex-col justify-end pb-32 px-6 md:px-20">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-6xl md:text-8xl font-serif text-white mb-4 italic leading-tight">
                      {horse.name}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-xl font-light tracking-wide">
                      {horse.subtitle}
                    </p>
                  </motion.div>
                </div>

                {/* Indicador para bajar (Visual de Stitch) */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-pulse flex flex-col items-center gap-2">
                  <span className="text-[10px] tracking-[0.3em] uppercase">Scroll Info</span>
                  <ChevronDown size={20} />
                </div>
              </section>

              {/* SECCIÓN 2: INTRODUCCIÓN (EL DISEÑO DE TU IMAGEN) */}
              <section className="bg-white py-24 px-6 md:px-20 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">

                  {/* Texto Superior */}
                  <div className="mb-20">
                    <span className="text-[15px] tracking-[0.3em] uppercase text-amber-600 font-bold mb-6 block">
                      Introduction
                    </span>
                    <h3 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
                      A Legacy in the Making
                    </h3>
                    <p className="text-lg md:text-2xl text-slate-500 max-w-4xl leading-relaxed font-light">
                      {horse.description}
                    </p>
                  </div>

                  {/* Grid de Especificaciones Estilo Stitch */}
                  <div className="bg-[#F8F8F8] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 py-12 px-10 rounded-sm">
                    {[
                      { label: "Name", value: horse.name },
                      { label: "Year", value: horse.year || "2021" },
                      { label: "Sex", value: horse.sex || "Gelding" },
                      { label: "Color", value: horse.color || "Bay" },
                      { label: "Registry", value: horse.registry || "SLS" },
                      { label: "Discipline", value: horse.discipline || "Show Jumping" }
                    ].map((item, i) => (
                      <div key={i} className="border-l border-gray-300 pl-6 h-fit">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 block mb-2 font-medium">
                          {item.label}
                        </span>
                        <span className="text-lg font-bold text-slate-900 tracking-tight">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>


              {/* --- SECCIÓN LINAJE (EL ÁRBOL) --- */}
              <section className="bg-[#F9FAFB] py-24 px-6 md:px-20">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-center text-3xl font-serif text-slate-800 mb-16">Elite Lineage</h3>

                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">

                    {/* Subject (El Caballo Actual) */}
                    <div className="bg-white p-8 shadow-sm border border-slate-100 w-full max-w-[280px] text-center">
                      <span className="text-[10px] tracking-widest uppercase text-amber-600 block mb-2">Subject</span>
                      <h4 className="text-xl font-serif text-slate-900 uppercase tracking-tight">{horse.name}</h4>
                    </div>

                    {/* Línea conectora (Solo visible en desktop) */}
                    <div className="hidden md:block w-12 h-[1px] bg-slate-300"></div>

                    {/* Padres (Sire & Dam) */}
                    <div className="flex flex-col gap-6 w-full max-w-[320px]">
                      {/* Padre */}
                      <div className="bg-white p-6 shadow-sm border border-slate-100">
                        <span className="text-[10px] tracking-widest uppercase text-slate-400 block mb-1">Sire</span>
                        <h4 className="text-lg font-serif text-slate-900 uppercase mb-1">{horse.sire || "Órale La Hacienda"}</h4>
                        <p className="text-[11px] text-slate-500 uppercase tracking-wide">Dallas VDL Line — Power, Technique, Reach</p>
                      </div>

                      {/* Madre */}
                      <div className="bg-white p-6 shadow-sm border border-slate-100">
                        <span className="text-[10px] tracking-widest uppercase text-slate-400 block mb-1">Dam</span>
                        <h4 className="text-lg font-serif text-slate-900 uppercase mb-1">{horse.dam || "Dale La Hacienda"}</h4>
                        <p className="text-[11px] text-slate-500 uppercase tracking-wide">1.40m Performance — Darco Line: Courage & Consistency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* --- SECCIÓN ATHLETIC COMPOSITION (BLOQUE NEGRO) --- */}
              <section className="bg-black py-24 px-6 md:px-20 overflow-hidden relative">
                {/* Icono de medalla de fondo (opaco) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
                  <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                    <path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                    <path d="m12 7 1.1 2.22 2.45.35-1.77 1.73.42 2.44L12 12.6l-2.2 1.15.42-2.44-1.77-1.73 2.45-.35L12 7z" />
                  </svg>
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-amber-500 font-bold mb-6 block">
                    Genetic Blueprint
                  </span>

                  <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight italic">
                    Superior Athletic Composition
                  </h2>

                  <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
                    The intersection of the Dallas VDL line's scope and the Darco line's renowned intelligence
                    creates a prospect with unrivaled potential. {horse.name} represents a carefully curated
                    synthesis of strength, refined technique, and proven competitive performance.
                  </p>

                  {/* Tags de Atributos */}
                  <div className="flex flex-wrap gap-4">
                    {["Strength", "Technique", "Performance"].map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/30 px-6 py-2 text-[10px] uppercase tracking-[0.2em] text-white/80 hover:border-white transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </section>


              {/* --- SECCIÓN VISUAL ARCHIVE --- */}
              <section className="bg-white py-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">

                  {/* Encabezado de la Galería */}
                  <div className="flex justify-between items-end mb-12 border-b border-slate-100 pb-6">
                    <h3 className="text-3xl font-serif text-slate-900">
                      Visual Archive
                    </h3>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-slate-400 font-medium">
                      {horse.gallery.length} Plates Featured
                    </span>
                  </div>

                  {/* Grid de Imágenes */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {horse.gallery.map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative  overflow-hidden bg-slate-100"
                      >
                        <img
                          src={img}
                          alt={`${horse.name} detail ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay sutil al hacer hover (estilo premium) */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

                  


              {/* Footer dentro del slide para que sea el final de la página del caballo */}
              <Footer />

            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </>
  );
};

export default HomePage;