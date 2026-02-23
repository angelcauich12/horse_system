import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contacto - Hacienda | Ponte en Contacto con Nosotros</title>
        <meta name="description" content="Contáctanos para más información sobre nuestros caballos. Visítanos en nuestra hacienda o llámanos. Estamos aquí para ayudarte a encontrar tu caballo perfecto." />
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
                Contáctanos
              </h1>
              <p className="text-xl text-amber-100 max-w-2xl mx-auto">
                Estamos aquí para responder todas tus preguntas sobre nuestros caballos
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Información de Contacto
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Nos encantaría saber de ti. Ya sea que estés interesado en uno de nuestros caballos, necesites más información o simplemente quieras visitarnos, estamos aquí para ayudarte.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-600 mb-1">Dirección</span>
                      <p className="text-gray-900 font-medium">
                        camino a, Yodzonot, 97357 Mérida, Yuc.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-600 mb-1">Teléfono</span>
                      <a href="tel:+1234567890" className="text-gray-900 font-medium hover:text-amber-700 transition-colors">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-600 mb-1">Email</span>
                      <a href="mailto:info@hacienda.com" className="text-gray-900 font-medium hover:text-amber-700 transition-colors">
                        info@hacienda.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-600 mb-1">Horario de Atención</span>
                      <p className="text-gray-900 font-medium">
                        Lunes - Viernes: 9:00 AM - 6:00 PM<br />
                        Sábado: 10:00 AM - 4:00 PM<br />
                        Domingo: Cerrado
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visit Us Section */}
                <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Visítanos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Te invitamos a visitar nuestra hacienda para conocer personalmente a nuestros caballos. Se recomienda programar una cita para asegurar que podamos brindarte toda nuestra atención.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section (Decorative) */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-200 rounded-xl overflow-hidden shadow-xl h-96 flex items-center justify-center"
            >
              <p className="text-gray-600 text-lg">Mapa de ubicación</p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;