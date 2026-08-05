'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { generateWhatsAppLink } from '../services/whatsapp'

export default function ContactFooter() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Crear un texto personalizado del formulario para WhatsApp
    const fullMessage = `¡Hola Pastelería Brianna! 🌟\n\nMi nombre es *${name}*.\n\n📝 *Mensaje/Consulta:* ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/51962997672?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank')
  }

  const generalWhatsApp = generateWhatsAppLink()

  return (
    <footer id="contacto" className="bg-[#2A180E] text-[#FAF3E0] pt-20 pb-8 px-4 md:px-8 relative overflow-hidden">
      
      {/* Elemento de fondo difuminado */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-900/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-amber-900/40">
        
        {/* Info de contacto y marca */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500 bg-white flex items-center justify-center">
              <Image
                src="/images/logo-brianna.jpg"
                alt="Logo Pastelería Brianna"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div>
              <span className="block text-2xl font-black tracking-tight font-outfit text-white">Brianna</span>
              <span className="block text-xs uppercase tracking-wider text-amber-500 font-bold">Pastelería Artesanal</span>
            </div>
          </div>

          <p className="text-sm text-amber-200/70 font-light leading-relaxed max-w-sm">
            Llevando el sabor tradicional de los prestiños huanuqueños a cada rincón de nuestra hermosa ciudad de Huánuco. ¡Fritos con amor y endulzados a la perfección!
          </p>

          <div className="space-y-3 pt-2 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-lg">📍</span>
              <span className="text-amber-100/90 font-light">Huánuco, Perú</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">📞</span>
              <a href="tel:+51962997672" className="text-amber-100 hover:text-pink-400 transition-colors">
                +51 962 997 672
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">✉️</span>
              <span className="text-amber-100/90 font-light">pedidos@pasteleriabrianna.com</span>
            </div>
          </div>
        </div>

        {/* Formulario rápido con WhatsApp */}
        <div className="lg:col-span-7 bg-[#362013] rounded-3xl p-8 border border-amber-900/20 space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold font-outfit text-white">¿Tenés alguna consulta o pedido especial?</h3>
            <p className="text-xs text-amber-200/60 font-light">
              Completá tus datos y envialo directo a nuestro WhatsApp. Te responderemos al instante.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="nombre" className="block text-xs uppercase tracking-wider text-amber-500 font-bold mb-1.5">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  placeholder="Ej: Alison Brianna"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#2A180E] border border-amber-900/30 rounded-xl text-white placeholder-amber-200/20 focus:outline-none focus:border-pink-500 text-sm transition-colors"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-xs uppercase tracking-wider text-amber-500 font-bold mb-1.5">
                  Mensaje / Pedido
                </label>
                <textarea
                  id="mensaje"
                  required
                  rows={3}
                  placeholder="Ej: Hola, quiero cotizar prestiños para un evento especial este sábado..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-[#2A180E] border border-amber-900/30 rounded-xl text-white placeholder-amber-200/20 focus:outline-none focus:border-pink-500 text-sm transition-colors resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white font-bold rounded-xl shadow-md transition-all duration-200 text-sm"
            >
              Enviar Consulta por WhatsApp 🚀
            </button>
          </form>
        </div>

      </div>

      {/* Derechos Reservados y Firma */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-200/40 font-light gap-4">
        <span>© {new Date().getFullYear()} Pastelería Brianna. Todos los derechos reservados.</span>
        <span>
          Diseñado con ❤️ para los amantes de la tradición huanuqueña.
        </span>
      </div>

    </footer>
  )
}
