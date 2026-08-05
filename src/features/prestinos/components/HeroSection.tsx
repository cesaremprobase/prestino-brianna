'use client'

import React from 'react'
import Image from 'next/image'
import { generateWhatsAppLink } from '../services/whatsapp'

export default function HeroSection() {
  const ctaUrl = generateWhatsAppLink()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFFDF9] via-[#FAF3E0] to-[#F5E6CC] pt-24 pb-12 px-4 md:px-8">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Contenido de texto */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-sm font-medium animate-bounce">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            ¡100% Tradicional de Huánuco!
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#4A2E1B] font-outfit leading-tight">
            Los auténticos <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#DB2777]">
              Prestiños Huanuqueños
            </span> <br />
            en tu mesa.
          </h1>
          
          <p className="text-lg md:text-xl text-[#6B4E3D] max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            Descubre el sabor crujiente de nuestra masa artesanal bañada en un almíbar dulce perfecto. Hechos con amor, pasión y la receta tradicional de la familia en <span className="font-semibold">Brianna</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#DB2777] text-white font-semibold rounded-2xl shadow-lg hover:bg-pink-700 hover:shadow-pink-500/20 transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
            >
              Pedir por WhatsApp 📱
            </a>
            <a
              href="#catalogo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-amber-200 text-[#4A2E1B] font-semibold rounded-2xl shadow-sm hover:bg-amber-50 hover:border-amber-300 transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
            >
              Ver Presentaciones ✨
            </a>
          </div>
        </div>

        {/* Contenido Visual (Imagen + Logo) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          {/* Tarjeta premium que contiene la imagen y el logo */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/80 bg-white/40 backdrop-blur-sm group">
            
            {/* Foto del prestiño principal */}
            <Image
              src="/images/prestino.jpg"
              alt="Prestiño Huanuqueño Brianna envasado y fresco"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-w-768px) 100vw, 420px"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A2E1B]/50 via-transparent to-transparent"></div>
            
            {/* Logo de Brianna insertado como distintivo premium */}
            <div className="absolute top-4 left-4 w-28 h-28 rounded-full overflow-hidden shadow-lg border-2 border-white bg-white/95 flex items-center justify-center transform -rotate-12 transition-all duration-300 group-hover:rotate-0 group-hover:scale-105">
              <Image
                src="/images/logo-brianna.jpg"
                alt="Logo Pastelería Brianna"
                width={112}
                height={112}
                className="object-contain"
              />
            </div>
            
            {/* Distintivo de Glaseado Tradicional */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-md border border-amber-100 text-center">
              <span className="block text-xs uppercase tracking-wider text-pink-600 font-bold font-inter">Receta de la casa</span>
              <span className="block text-sm font-extrabold text-[#4A2E1B] font-outfit">Sabor Único</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
