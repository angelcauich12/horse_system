import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = ({ selectedHorse = null }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    horseInterest: selectedHorse || '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Error de validación",
        description: "Por favor, completa todos los campos correctamente.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Save to localStorage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
        className: "bg-green-600 text-white"
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        horseInterest: selectedHorse || '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contáctanos</h2>

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Nombre *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-900 bg-white ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Tu nombre completo"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-900 bg-white ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="tu@email.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Teléfono *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-900 bg-white ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="+1 (234) 567-8900"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      {/* Horse Interest Dropdown */}
      <div>
        <label htmlFor="horseInterest" className="block text-sm font-medium text-gray-700 mb-2">
          Caballo de interés
        </label>
        <input
          type="text"
          id="horseInterest"
          name="horseInterest"
          value={formData.horseInterest}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-900 bg-white"
          placeholder="Nombre del caballo (opcional)"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none text-gray-900 bg-white ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Cuéntanos sobre tu interés..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <Check className="w-5 h-5" />
            </motion.div>
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Enviar Mensaje
          </>
        )}
      </Button>
    </motion.form>
  );
};

export default ContactForm;