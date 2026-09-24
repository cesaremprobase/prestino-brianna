import React from 'react'
import Link from 'next/link'
import { CAYHUAYNA_CLIENTS } from '@/features/emprobase/data/clients'
import { EMPROBASE_PRODUCTS } from '@/features/emprobase/data/products'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-12 font-sans selection:bg-amber-500 selection:text-slate-950">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header Principal */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              EMPROBASE — Sistema Activo
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-outfit text-white tracking-tight">
              EMPROBASE
            </h1>
            <p className="text-sm md:text-base text-slate-400 mt-1">
              Empresa Productora de Bebidas y Alimentos Sr. Esteban S.A.C • Huánuco
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://t.me/emprobase_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-sky-500/20 transition-all flex items-center gap-2"
            >
              <span>✈️</span> Abrir Bot @emprobase_bot
            </a>
            <Link
              href="/etiquetas"
              className="px-5 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
            >
              <span>🖨️</span> Ver Etiquetas A4 (6x Hoja)
            </Link>
          </div>
        </div>

        {/* Tarjetas de Control Rápido */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-xl mb-4">
                🤖
              </div>
              <h3 className="text-lg font-bold text-white font-outfit">Bot de Telegram</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Vinculado a <b>@emprobase_bot</b>. El repartidor anota entregas en segundos: <code>2 e20 p40</code> o <code>14 e50 p50 yape</code>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center text-xs">
              <span className="text-slate-400">Estado:</span>
              <span className="text-emerald-400 font-bold">● Conectado (Token verificado)</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xl mb-4">
                🏷️
              </div>
              <h3 className="text-lg font-bold text-white font-outfit">Etiquetas A4 Automáticas</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Reemplaza CorelDraw. Genera hojas A4 con 6 etiquetas prellenadas por cliente con productos, total y espacio para notas.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center text-xs">
              <span className="text-slate-400">Formato:</span>
              <span className="text-amber-400 font-bold">Cuadrícula 2x3 (99mm)</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xl mb-4">
                🚚
              </div>
              <h3 className="text-lg font-bold text-white font-outfit">Padrón de Clientes</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                <b>61 clientes fijos</b> de la ruta Cayhuayna / Potracancha importados y ordenados por número de parada.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center text-xs">
              <span className="text-slate-400">Clientes activos:</span>
              <span className="text-emerald-400 font-bold">{CAYHUAYNA_CLIENTS.length} clientes</span>
            </div>
          </div>
        </div>

        {/* Padrón de Clientes y Productos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lista de Clientes en Ruta */}
          <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white font-outfit flex items-center gap-2">
                <span>📍</span> Ruta Cayhuayna ({CAYHUAYNA_CLIENTS.length} Paradas)
              </h3>
              <span className="text-xs text-slate-400">Orden del Repartidor</span>
            </div>
            <div className="max-h-72 overflow-y-auto space-y-1.5 pr-2">
              {CAYHUAYNA_CLIENTS.map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-6 rounded bg-slate-800 text-amber-400 font-black flex items-center justify-center">
                      #{c.stopNumber}
                    </span>
                    <span className="font-semibold text-slate-200">{c.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium px-2 py-0.5 rounded bg-slate-800">
                    {c.zone}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Catálogo de Productos */}
          <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white font-outfit flex items-center gap-2">
                <span>🥖</span> Productos de Panadería y Pastelería
              </h3>
              <span className="text-xs text-slate-400">{EMPROBASE_PRODUCTS.length} Variedades</span>
            </div>
            <div className="max-h-72 overflow-y-auto space-y-1.5 pr-2">
              {EMPROBASE_PRODUCTS.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs"
                >
                  <div>
                    <span className="font-semibold text-slate-200">{p.name}</span>
                    <span className="text-[10px] text-slate-500 ml-2">({p.category})</span>
                  </div>
                  <span className="font-bold text-emerald-400">
                    S/ {(p.suggestedPrice || 0).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
