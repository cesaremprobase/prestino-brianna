'use client'

import React from 'react'
import Image from 'next/image'
import { generateWhatsAppLink } from '../services/whatsapp'

interface Product {
  id: string
  name: string
  description: string
  price: string
  quantity: string
  badge?: string
  image: string
}

const PRODUCTS: Product[] = [
  {
    id: 'pack-individual',
    name: 'Pack Antojo Brianna',
    description: 'Perfecto para disfrutar de forma individual o probar el crujiente sabor huanuqueño por primera vez.',
    price: 'S/. 12.00',
    quantity: '3 Unidades Grandes',
    badge: 'El Favorito',
    image: '/images/prestino.jpg',
  },
  {
    id: 'caja-familiar',
    name: 'Caja Familiar Tradición',
    description: 'Ideal para compartir una tarde de café en familia. Viene en una hermosa caja protectora para mantener la frescura.',
    price: 'S/. 22.00',
    quantity: '6 Unidades Grandes',
    badge: 'Más Vendido',
    image: '/images/prestino.jpg',
  },
  {
    id: 'caja-fiesta',
    name: 'Super Pack Brianna Fest',
    description: 'Para reuniones, celebraciones o para los verdaderos amantes del dulce tradicional de Huánuco. ¡Al mejor precio!',
    price: 'S/. 40.00',
    quantity: '12 Unidades Grandes',
    badge: 'Ahorro Familiar',
    image: '/images/prestino.jpg',
  },
]

export default function ProductCatalog() {
  return (
    <section id="catalogo" className="py-20 bg-gradient-to-b from-white to-[#FFFDF9] px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Encabezado de la Sección */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-pink-600">Nuestras Presentaciones</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A2E1B] font-outfit">
            Elige tu Pack de Prestiños Favorito
          </h2>
          <p className="text-base text-[#6B4E3D] font-light">
            Selecciona la presentación que más se ajuste a tu antojo y haz tu pedido al instante. ¡Los preparamos frescos para ti!
          </p>
        </div>

        {/* Tarjetas de Producto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {PRODUCTS.map((product) => {
            const orderLink = generateWhatsAppLink({
              productName: product.name,
              quantity: product.quantity,
              price: product.price,
            })

            return (
              <div
                key={product.id}
                className="bg-white rounded-[32px] overflow-hidden border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col group"
              >
                {/* Imagen del Producto */}
                <div className="relative w-full aspect-[4/3] bg-amber-50/50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 350px"
                  />
                  {product.badge && (
                    <span className="absolute top-4 right-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  {/* Distintivo de cantidad */}
                  <span className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-[#4A2E1B] text-xs font-extrabold px-3 py-1.5 rounded-xl border border-amber-100">
                    📦 {product.quantity}
                  </span>
                </div>

                {/* Info del Producto */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#4A2E1B] font-outfit group-hover:text-pink-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#6B4E3D] font-light leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-baseline justify-between border-t border-dashed border-amber-100 pt-4">
                      <span className="text-xs text-[#8A7060] uppercase tracking-wider font-semibold">Precio unitario aproximado</span>
                      <span className="text-2xl font-black text-[#D97706] font-outfit">
                        {product.price}
                      </span>
                    </div>

                    <a
                      href={orderLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold rounded-2xl shadow-sm hover:from-pink-700 hover:to-pink-600 transition-all duration-200 transform active:scale-[0.98]"
                    >
                      Pedir este Pack 📱
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
