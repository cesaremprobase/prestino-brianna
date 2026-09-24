import { NextRequest, NextResponse } from 'next/server'
import { sendTelegramMessage } from '@/features/emprobase/services/telegram'

const ADMIN_ID = Number(process.env.ADMIN_TELEGRAM_ID || '6093173865')

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { clientNumber, clientName, items, totalUnits, totalPrice } = data

    // Notificar al administrador en Telegram
    let itemsText = ''
    if (Array.isArray(items)) {
      itemsText = items.map((i: any) => `• <b>${i.quantity}</b> ${i.name}`).join('\n')
    }

    const adminNotification = `🔔 <b>¡NUEVO PEDIDO RECIBIDO!</b>\n\n` +
      `👤 <b>Cliente:</b> #${clientNumber} - ${clientName}\n` +
      `🥖 <b>Total Unidades:</b> ${totalUnits} panes\n\n` +
      `<b>Detalle del Pedido:</b>\n${itemsText}\n\n` +
      `💰 <b>Monto Total:</b> S/ ${Number(totalPrice).toFixed(2)}\n` +
      `📅 <b>Fecha:</b> ${new Date().toLocaleDateString('es-PE')} ${new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}\n\n` +
      `<i>✅ Listo para la hoja de producción y etiquetas A4.</i>`

    if (ADMIN_ID) {
      await sendTelegramMessage(ADMIN_ID, adminNotification)
    }

    return NextResponse.json({ ok: true, message: 'Pedido recibido' })
  } catch (error) {
    console.error('Error procesando pedido:', error)
    return NextResponse.json({ ok: false, error: 'Error procesando pedido' }, { status: 500 })
  }
}
