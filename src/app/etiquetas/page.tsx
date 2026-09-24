'use client'

import React, { useState } from 'react'
import { CAYHUAYNA_CLIENTS } from '@/features/emprobase/data/clients'

interface LabelData {
  stopNumber: number
  clientName: string
  zone: string
  items: { name: string; quantity: number }[]
  totalAmount: number
  notes?: string
}

// Datos de ejemplo para las primeras etiquetas basados en los clientes reales
const DEFAULT_LABELS: LabelData[] = [
  {
    stopNumber: 62,
    clientName: 'POTRACANCHA',
    zone: 'Potracancha',
    items: [
      { name: 'Pan Francés', quantity: 20 },
      { name: 'Coliza', quantity: 10 },
      { name: 'Alfajor', quantity: 5 },
    ],
    totalAmount: 25.0,
    notes: 'Entregar temprano antes de las 7:00 AM',
  },
  {
    stopNumber: 1,
    clientName: 'AVENIDA',
    zone: 'Cayhuayna',
    items: [
      { name: 'Pan Francés', quantity: 10 },
      { name: 'Chavata', quantity: 5 },
    ],
    totalAmount: 12.5,
  },
  {
    stopNumber: 2,
    clientName: 'LIBRERÍA',
    zone: 'Cayhuayna',
    items: [
      { name: 'Pan Francés', quantity: 20 },
      { name: 'Mistishongo', quantity: 15 },
      { name: 'Bizcocho', quantity: 10 },
    ],
    totalAmount: 40.0,
    notes: 'Pago con sencillo',
  },
  {
    stopNumber: 3,
    clientName: 'AMIGA',
    zone: 'Cayhuayna',
    items: [
      { name: 'Pan Mestizo', quantity: 17 },
      { name: 'Coliza', quantity: 8 },
    ],
    totalAmount: 18.0,
  },
  {
    stopNumber: 14,
    clientName: 'MAYK (mercd)',
    zone: 'Cayhuayna',
    items: [
      { name: 'Pan Francés', quantity: 50 },
      { name: 'Pan Grande', quantity: 5 },
    ],
    totalAmount: 50.0,
    notes: 'Paga con Yape',
  },
  {
    stopNumber: 36,
    clientName: 'MAGY (MUNI)',
    zone: 'Cayhuayna',
    items: [
      { name: 'Pan Francés', quantity: 25 },
      { name: 'Alfajor', quantity: 10 },
    ],
    totalAmount: 25.0,
  },
]

export default function EtiquetasPage() {
  const [labels] = useState<LabelData[]>(DEFAULT_LABELS)

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 print:p-0 print:bg-white text-slate-800">
      {/* Barra superior de control (se oculta al imprimir) */}
      <div className="max-w-[210mm] mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-200 print:hidden">
        <div>
          <h1 className="text-xl font-bold text-slate-900 font-outfit">
            Generador de Etiquetas A4 — EMPROBASE
          </h1>
          <p className="text-sm text-slate-500">
            Formato: 6 etiquetas por hoja A4 (2 columnas × 3 filas) listo para imprimir y cortar.
          </p>
        </div>
        <button
          onClick={handlePrint}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
        >
          <span>🖨️</span> Imprimir Hoja A4
        </button>
      </div>

      {/* Contenedor A4 exacto */}
      <div className="w-[210mm] min-h-[297mm] mx-auto bg-white shadow-xl print:shadow-none print:w-full print:m-0 border border-slate-300 print:border-none">
        {/* Cuadrícula de 2 columnas × 3 filas = 6 etiquetas */}
        <div className="grid grid-cols-2 grid-rows-3 h-[297mm] w-full">
          {labels.slice(0, 6).map((label, idx) => (
            <div
              key={idx}
              className="border border-dashed border-slate-400 p-4 flex flex-col justify-between relative overflow-hidden"
              style={{ height: '99mm' }}
            >
              {/* Cabecera oficial EMPROBASE */}
              <div className="flex items-start justify-between gap-2 border-b border-blue-200 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full border border-amber-300 bg-amber-50 flex items-center justify-center p-1 text-center shrink-0">
                    <span className="text-[10px] font-black text-amber-800 leading-tight">
                      🍞 EMPROBASE
                    </span>
                  </div>
                  <div>
                    <h2 className="text-sm font-black text-blue-900 tracking-wide font-outfit uppercase leading-tight">
                      EMPROBASE
                    </h2>
                    <p className="text-[8px] font-bold text-blue-800 uppercase leading-none">
                      Empresa Productora de Bebidas y Alimentos
                    </p>
                    <p className="text-[8px] font-extrabold text-blue-950 uppercase leading-none mt-0.5">
                      Sr. Esteban S.A.C
                    </p>
                  </div>
                </div>

                {/* Teléfonos de contacto */}
                <div className="text-right shrink-0">
                  <div className="text-[10px] font-black text-blue-900 leading-tight">
                    966813534
                  </div>
                  <div className="text-[10px] font-black text-blue-900 leading-tight">
                    967429631
                  </div>
                </div>
              </div>

              {/* Nombre del cliente en grande */}
              <div className="my-1.5 flex items-center justify-between bg-blue-50/70 px-2.5 py-1 rounded border border-blue-100">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black bg-blue-700 text-white px-1.5 py-0.5 rounded">
                    #{label.stopNumber}
                  </span>
                  <span className="text-base font-extrabold text-slate-900 uppercase tracking-tight">
                    {label.clientName}
                  </span>
                </div>
                <span className="text-[10px] text-blue-800 font-semibold uppercase">
                  {label.zone}
                </span>
              </div>

              {/* Detalle de panes pedidos */}
              <div className="flex-1 my-1">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  Productos a Entregar:
                </div>
                <div className="space-y-0.5 text-xs text-slate-800">
                  {label.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-0.5">
                      <span className="font-medium">• {item.name}</span>
                      <span className="font-extrabold text-slate-900">{item.quantity} und.</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pie de etiqueta: Total y espacio para notas adicionales */}
              <div className="border-t border-slate-200 pt-1.5 mt-auto">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-black text-slate-700 uppercase">
                    Total a Cobrar:
                  </span>
                  <span className="text-sm font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    S/ {label.totalAmount.toFixed(2)}
                  </span>
                </div>

                {/* Recuadro para escribir cosas adicionales a mano */}
                <div className="h-7 border border-dashed border-slate-300 rounded bg-slate-50/60 p-1 flex items-start justify-between">
                  <span className="text-[8px] text-slate-400 italic">
                    Notas adicionales / Observaciones: {label.notes || ''}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
