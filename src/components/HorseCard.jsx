import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HorseCard = ({ horse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={horse.image}
          alt={`${horse.name} - ${horse.breed} horse`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
          ${horse.price.toLocaleString()}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
          {horse.name}
        </h3>
        
        <div className="space-y-1 text-gray-600">
          <p className="flex justify-between items-center">
            <span className="font-medium">Raza:</span>
            <span className="text-gray-800">{horse.breed}</span>
          </p>
          <p className="flex justify-between items-center">
            <span className="font-medium">Edad:</span>
            <span className="text-gray-800">{horse.age} años</span>
          </p>
        </div>

        {/* View Details Link */}
        <Link
          to={`/caballo/${horse.id}`}
          className="mt-4 flex items-center justify-center gap-2 w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-lg font-semibold transition-all group-hover:gap-4"
        >
          Ver Detalles
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  );
};

export default HorseCard;