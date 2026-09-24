import { NextRequest, NextResponse } from 'next/server'
import { handleTelegramMessage, TelegramUpdate } from '@/features/emprobase/services/telegram'

export async function POST(req: NextRequest) {
  try {
    const update: TelegramUpdate = await req.json()

    if (update.message) {
      await handleTelegramMessage(update.message)
    } else if (update.callback_query) {
      // Manejar clics en botones inline
      const callback = update.callback_query
      let pseudoText = '/start'
      if (callback.data === 'cmd_ruta') pseudoText = '/ruta'
      if (callback.data === 'cmd_etiquetas') pseudoText = '/etiquetas'
      if (callback.data === 'cmd_cierre') pseudoText = '/cierre'
      if (callback.data === 'cmd_catalogo') pseudoText = '/catalogo'
      if (callback.data === 'cmd_repetir_pedido') pseudoText = 'cmd_repetir_pedido'

      await handleTelegramMessage({
        message_id: callback.message.message_id,
        from: callback.from,
        chat: callback.message.chat,
        text: pseudoText,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error procesando webhook de Telegram:', error)
    return NextResponse.json({ ok: false, error: 'Internal Error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Telegram webhook endpoint active' })
}
