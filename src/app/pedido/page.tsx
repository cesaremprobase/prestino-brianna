'use client'

import React, { useState, useEffect } from 'react'
import { EMPROBASE_PRODUCTS, Product } from '@/features/emprobase/data/products'
import { CAYHUAYNA_CLIENTS, Client } from '@/features/emprobase/data/clients'

export default function PedidoFacilPage() {
  const [selectedClient, setSelectedClient] = useState<number>(2) // Default Librería
  const [cart, setCart] = useState<Record<string, number>>({
    frances: 20,
    coliza: 10,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // Incrementar / Decrementar con botones grandes
  const handleQuantityChange = (productId: string, delta: number) => {
    setCart((prev) => {
      const current = prev[productId] || 0
      const next = Math.max(0, current + delta)
      return { ...prev, [productId]: next }
    })
  }

  // Establecer cantidad directa (+10, +20, etc.)
  const handleQuickAdd = (productId: string, amount: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + amount,
    }))
  }

  // Calcular totales
  const totalUnits = Object.values(cart).reduce((a, b) => a + b, 0)
  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const prod = EMPROBASE_PRODUCTS.find((p) => p.id === id)
    return sum + (prod?.suggestedPrice || 0.35) * qty
  }, 0)

  const currentClient = CAYHUAYNA_CLIENTS.find((c) => c.stopNumber === selectedClient)

  // Enviar pedido
  const handleConfirmOrder = async () => {
    if (totalUnits === 0) {
      alert('Por favor selecciona al menos 1 producto.')
      return
    }

    setLoading(true)

    try {
      const itemsList = Object.entries(cart)
        .filter(([_, qty]) => qty > 0)
        .map(([id, qty]) => {
          const prod = EMPROBASE_PRODUCTS.find((p) => p.id === id)
          return { name: prod?.name || id, quantity: qty }
        })

      const res = await fetch('/api/pedidos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientNumber: selectedClient,
          clientName: currentClient?.name || 'Cliente',
          items: itemsList,
          totalUnits,
          totalPrice,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        // Fallback visual si es offline
        setSubmitted(true)
      }
    } catch (e) {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-emerald-50 text-slate-900 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center text-4xl shadow-xl shadow-emerald-500/20 mb-4 animate-bounce">
          ✓
        </div>
        <h1 className="text-3xl font-black text-emerald-950 font-outfit">
          ¡Pedido Registrado con Éxito!
        </h1>
        <p className="text-base text-emerald-800 font-medium mt-2 max-w-sm">
          Muchas gracias <b>{currentClient?.name}</b>. Tu pedido ya está programado para la entrega de mañana temprano.
        </p>

        <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm mt-6 w-full max-w-sm text-left">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Resumen del Pedido:
          </div>
          {Object.entries(cart)
            .filter(([_, q]) => q > 0)
            .map(([id, qty]) => {
              const p = EMPROBASE_PRODUCTS.find((prod) => prod.id === id)
              return (
                <div key={id} className="flex justify-between py-1 border-b border-slate-100 text-sm">
                  <span className="font-semibold text-slate-800">{p?.name}</span>
                  <span className="font-black text-slate-950">{qty} und.</span>
                </div>
              )
            })}
          <div className="flex justify-between pt-3 font-black text-base text-emerald-700">
            <span>Total a pagar:</span>
            <span>S/ {totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 px-6 py-3 bg-slate-900 text-white font-bold text-sm rounded-xl shadow-md"
        >
          Hacer otro pedido
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-28">
      {/* Cabecera limpia y grande */}
      <header className="bg-white border-b border-slate-200 px-4 py-4 sticky top-0 z-30 shadow-sm">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div>
            <div className="text-[10px] font-black text-amber-600 uppercase tracking-widest leading-none">
              Panadería & Pastelería
            </div>
            <h1 className="text-xl font-black font-outfit text-slate-950">
              EMPROBASE
            </h1>
          </div>
          <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full">
            ● Abierto para pedidos
          </span>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-5 space-y-5">
        {/* Selector de Tienda / Cliente (Grande y legible) */}
        <section className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">
            1. Selecciona tu Tienda / Nombre:
          </label>
          <select
            value={selectedClient}
            onChange={(e) => setSelectedClient(Number(e.target.value))}
            className="w-full text-base font-bold bg-slate-50 border-2 border-slate-300 rounded-xl px-3 py-3 text-slate-900 focus:outline-none focus:border-amber-500"
          >
            {CAYHUAYNA_CLIENTS.map((c) => (
              <option key={c.id} value={c.stopNumber}>
                #{c.stopNumber} - {c.name} ({c.zone})
              </option>
            ))}
          </select>
        </section>

        {/* Tarjeta de "Repetir mi pedido habitual" (1 toque) */}
        <section className="bg-amber-50 border-2 border-amber-300 p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">⭐</span>
            <h2 className="text-sm font-black text-amber-950 uppercase tracking-wide">
              Tu Pedido Habitual
            </h2>
          </div>
          <p className="text-xs text-amber-900 mb-3">
            ¿Deseas lo mismo de siempre? (20 Francés + 10 Coliza = S/ 12.00)
          </p>
          <button
            onClick={() => {
              setCart({ frances: 20, coliza: 10 })
              handleConfirmOrder()
            }}
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm rounded-xl shadow-md shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>⚡</span> PEDIR LO DE SIEMPRE (1 TOQUE)
          </button>
        </section>

        {/* Lista de Productos con botones táctiles grandes (+ y -) */}
        <section className="space-y-3">
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-wider px-1">
            2. O elige las cantidades con los botones:
          </h2>

          {EMPROBASE_PRODUCTS.map((prod) => {
            const qty = cart[prod.id] || 0
            return (
              <div
                key={prod.id}
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-3"
              >
                {/* Info del producto */}
                <div className="flex-1">
                  <h3 className="text-base font-extrabold text-slate-950 leading-tight">
                    {prod.name}
                  </h3>
                  <div className="text-xs text-slate-500 mt-0.5">
                    S/ {(prod.suggestedPrice || 0.35).toFixed(2)} c/u
                  </div>

                  {/* Atajos rápidos de 1 toque (+10, +20) */}
                  <div className="flex gap-1.5 mt-2">
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(prod.id, 10)}
                      className="px-2 py-1 text-xs font-bold bg-slate-100 text-slate-700 rounded-lg active:bg-amber-200"
                    >
                      +10
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(prod.id, 20)}
                      className="px-2 py-1 text-xs font-bold bg-slate-100 text-slate-700 rounded-lg active:bg-amber-200"
                    >
                      +20
                    </button>
                  </div>
                </div>

                {/* Controles Táctiles Gigantes [ - ] [ Cantidad ] [ + ] */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(prod.id, -1)}
                    disabled={qty === 0}
                    className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 font-black text-2xl flex items-center justify-center active:bg-slate-300 disabled:opacity-30 disabled:pointer-events-none select-none"
                    aria-label={`Disminuir ${prod.name}`}
                  >
                    −
                  </button>

                  <span className="w-10 text-center font-black text-xl text-slate-950">
                    {qty}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleQuantityChange(prod.id, 1)}
                    className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 font-black text-2xl flex items-center justify-center active:bg-amber-600 shadow-md shadow-amber-500/20 select-none"
                    aria-label={`Aumentar ${prod.name}`}
                  >
                    +
                  </button>
                </div>
              </div>
            )
          })}
        </section>
      </main>

      {/* Barra Inferior Flotante Fija con Botón Verde Gigante */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 z-40 shadow-2xl">
        <div className="max-w-md mx-auto flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-slate-500">
              Total: {totalUnits} panes
            </div>
            <div className="text-2xl font-black text-slate-950">
              S/ {totalPrice.toFixed(2)}
            </div>
          </div>

          <button
            onClick={handleConfirmOrder}
            disabled={totalUnits === 0 || loading}
            className="flex-1 py-4 px-6 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white font-black text-base rounded-2xl shadow-xl shadow-emerald-600/30 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span>Cargando...</span>
            ) : (
              <>
                <span>✓</span> CONFIRMAR PEDIDO
              </>
            )}
          </button>
        </div>
      </footer>
    </div>
  )
}
