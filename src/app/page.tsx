import React from 'react'
import HeroSection from '@/features/prestinos/components/HeroSection'
import AboutSection from '@/features/prestinos/components/AboutSection'
import ProductCatalog from '@/features/prestinos/components/ProductCatalog'
import OrderSteps from '@/features/prestinos/components/OrderSteps'
import ContactFooter from '@/features/prestinos/components/ContactFooter'
import WhatsAppButton from '@/shared/components/WhatsAppButton'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Barra de Navegación Simple y Elegante */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#FFFDF9]/80 backdrop-blur-md border-b border-amber-100/40 py-4 px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-black text-[#4A2E1B] font-outfit tracking-tight group-hover:text-pink-600 transition-colors">
            Brianna
          </span>
          <span className="text-xs bg-amber-100 text-[#D97706] font-bold px-2 py-0.5 rounded-full">
            Pastelería
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6B4E3D]">
          <a href="#historia" className="hover:text-pink-600 transition-colors">Tradición</a>
          <a href="#catalogo" className="hover:text-pink-600 transition-colors">Packs</a>
          <a href="#como-pedir" className="hover:text-pink-600 transition-colors">¿Cómo Pedir?</a>
          <a href="#contacto" className="hover:text-pink-600 transition-colors">Contacto</a>
        </div>
        <a
          href="https://wa.me/51962997672"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm rounded-xl shadow-md shadow-pink-500/10 transition-colors"
        >
          Pedir 📱
        </a>
      </nav>

      {/* Secciones de la Landing Page */}
      <HeroSection />
      <AboutSection />
      <ProductCatalog />
      <OrderSteps />
      <ContactFooter />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  )
}
