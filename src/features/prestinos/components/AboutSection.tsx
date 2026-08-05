'use client'

import React from 'react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="historia" className="py-20 bg-white px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Contenido visual de historia */}
        <div className="relative flex justify-center lg:order-last">
          <div className="relative w-full max-w-[450px] aspect-square">
            {/* Círculo decorativo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-pink-100 to-amber-100 rounded-full opacity-70 blur-xl animate-pulse"></div>
            
            {/* Foto decorativa con el logo */}
            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-xl border-4 border-amber-50">
              <Image
                src="/images/logo-brianna.jpg"
                alt="El proceso artesanal de Brianna"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 450px"
              />
            </div>
            
            {/* Insignia flotante */}
            <div className="absolute -bottom-6 -left-6 bg-[#4A2E1B] text-[#FAF3E0] p-6 rounded-3xl shadow-xl border border-amber-900/10 max-w-[200px] hidden sm:block">
              <span className="block text-3xl font-extrabold text-amber-400 font-outfit">100%</span>
              <span className="block text-sm font-medium leading-tight mt-1">Artesanal, sin conservantes ni aditivos.</span>
            </div>
          </div>
        </div>

        {/* Texto histórico y cultural */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-bold uppercase tracking-wider text-pink-600">Nuestra Tradición</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A2E1B] font-outfit">
              El Secreto del Verdadero Prestiño Huanuqueño
            </h2>
          </div>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full"></div>

          <div className="space-y-4 text-base md:text-lg text-[#6B4E3D] font-light leading-relaxed">
            <p>
              El prestiño es uno de los dulces más tradicionales y queridos de la región de <span className="font-semibold">Huánuco</span>. Su preparación requiere maestría para lograr esa textura crujiente tan característica, doblada con esmero y frita a la temperatura justa.
            </p>
            <p>
              En <span className="font-semibold">Pastelería Brianna</span>, honramos esta receta ancestral. Cada prestiño se amasa a mano, se moldea de forma tradicional y se baña delicadamente con nuestro almíbar exclusivo, asegurando que cada mordida sea un viaje directo a los sabores de nuestra tierra.
            </p>
            <p className="italic font-medium text-[#4A2E1B]">
              "No es solo un postre, es un pedacito de la historia y el corazón de Huánuco hecho con cariño para ti y tu familia."
            </p>
          </div>

          {/* Características destacadas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0 mt-0.5">🌾</div>
              <div>
                <h4 className="font-bold text-[#4A2E1B] font-outfit">Ingredientes Selectos</h4>
                <p className="text-sm text-[#6B4E3D] font-light">Harina de primera calidad, anís aromático y miel casera.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 flex-shrink-0 mt-0.5">🧡</div>
              <div>
                <h4 className="font-bold text-[#4A2E1B] font-outfit font-medium">Hecho con Amor</h4>
                <p className="text-sm text-[#6B4E3D] font-light">Elaborado artesanalmente por la pastelería Brianna.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
