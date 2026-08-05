'use client'

import React from 'react'

const STEPS = [
  {
    number: '01',
    title: 'Elegí tu Pack',
    description: 'Revisá nuestro catálogo y elegí la caja de prestiños Brianna que querés disfrutar hoy.',
  },
  {
    number: '02',
    title: 'Coordinamos los Detalles',
    description: 'Hacé clic en el botón de WhatsApp. Nos llegará el detalle de tu pack para acordar el pago y la entrega en Huánuco.',
  },
  {
    number: '03',
    title: '¡A Disfrutar!',
    description: 'Llevamos tus prestiños frescos, crujientes y glaseados directamente a tus manos para que los disfrutes.',
  },
]

export default function OrderSteps() {
  return (
    <section id="como-pedir" className="py-20 bg-[#FAF3E0]/40 px-4 md:px-8 border-y border-amber-100/50">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Encabezado */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-pink-600">Simplicidad en cada paso</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A2E1B] font-outfit">
            ¿Cómo Hacer tu Pedido?
          </h2>
          <p className="text-base text-[#6B4E3D] font-light">
            Queremos que disfrutes del mejor sabor tradicional de la forma más rápida y cómoda posible.
          </p>
        </div>

        {/* Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Línea conectora decorativa en desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-amber-200 via-pink-200 to-amber-200 -translate-y-1/2 z-0"></div>

          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-amber-100 shadow-sm hover:shadow-md transition-shadow relative z-10 flex flex-col items-center text-center space-y-4"
            >
              {/* Círculo indicador */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-pink-500 text-white font-extrabold text-2xl flex items-center justify-center font-outfit shadow-md shadow-pink-500/10">
                {step.number}
              </div>

              <h3 className="text-xl font-bold text-[#4A2E1B] font-outfit">
                {step.title}
              </h3>
              
              <p className="text-sm text-[#6B4E3D] font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
