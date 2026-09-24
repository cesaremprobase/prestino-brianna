import { CAYHUAYNA_CLIENTS } from '../data/clients'
import { EMPROBASE_PRODUCTS } from '../data/products'

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8852116088:AAG2lh7srlASlsANumNG8bxd--sirMLzFjI'
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`

export interface TelegramMessage {
  message_id: number
  from: {
    id: number
    first_name: string
    username?: string
  }
  chat: {
    id: number
    type: string
  }
  text?: string
}

export interface TelegramUpdate {
  update_id: number
  message?: TelegramMessage
  callback_query?: {
    id: string
    from: { id: number; first_name: string }
    message: TelegramMessage
    data: string
  }
}

// Enviar mensaje de texto
export async function sendTelegramMessage(chatId: number, text: string, replyMarkup?: any) {
  try {
    const res = await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        reply_markup: replyMarkup,
      }),
    })
    return await res.json()
  } catch (error) {
    console.error('Error enviando mensaje a Telegram:', error)
    return null
  }
}

// Manejar comandos y textos entrantes
export async function handleTelegramMessage(message: TelegramMessage) {
  const chatId = message.chat.id
  const text = (message.text || '').trim()
  const userId = message.from.id
  const userName = message.from.first_name

  // 1. Comando /start
  if (text === '/start' || text.toLowerCase() === 'hola') {
    const welcomeText = `🥐 <b>¡Bienvenido al Bot de EMPROBASE!</b>\n<i>Panadería y Pastelería Sr. Esteban S.A.C</i>\n\n` +
      `Hola <b>${userName}</b> (ID: <code>${userId}</code>).\n\n` +
      `<b>Opciones disponibles:</b>\n` +
      `• 🚚 <b>/ruta</b> - Ver lista de clientes en orden de parada (Cayhuayna)\n` +
      `• 🏷️ <b>/etiquetas</b> - Ver/Imprimir etiquetas A4 de hoy\n` +
      `• 📊 <b>/cierre</b> - Ver reporte de cobranzas y entregas\n` +
      `• 📝 <b>/pedir</b> - Realizar pedido de panadería\n\n` +
      `<i>💡 Para registrar entrega rápida en ruta escribe:</i>\n` +
      `<code>[n° parada] e[entregado] p[pagado] [yape]</code>\n` +
      `<i>Ejemplo:</i> <code>2 e20 p40</code> o <code>14 e50 p50 yape</code>`

    const siteUrl = 'https://prestino-brianna.vercel.app'

    const keyboard = {
      inline_keyboard: [
        [
          {
            text: '🥖 Hacer Pedido Fácil (Táctil)',
            web_app: { url: `${siteUrl}/pedido` }
          }
        ],
        [
          { text: '⚡ Pedir lo de Siempre (1 Toque)', callback_data: 'cmd_repetir_pedido' }
        ],
        [
          { text: '🚚 Ver Ruta (61 Clientes)', callback_data: 'cmd_ruta' },
          { text: '🏷️ Etiquetas A4', callback_data: 'cmd_etiquetas' }
        ],
        [
          { text: '📊 Cierre Diario', callback_data: 'cmd_cierre' },
          { text: '🍞 Catálogo Productos', callback_data: 'cmd_catalogo' }
        ]
      ]
    }

    return await sendTelegramMessage(chatId, welcomeText, keyboard)
  }

  // 1.1 Botón Mágico: Pedir lo de siempre (1 toque)
  if (text === '/repetir' || text === 'cmd_repetir_pedido') {
    const confirmacion = `⚡ <b>¡PEDIDO HABITUAL REGISTRADO CON 1 TOQUE!</b>\n\n` +
      `👤 <b>Cliente:</b> ${userName}\n` +
      `🥖 <b>Detalle:</b>\n` +
      `• 20 Pan Francés\n` +
      `• 10 Coliza\n\n` +
      `💰 <b>Total a pagar:</b> S/ 12.00\n` +
      `📅 <b>Entrega:</b> Mañana temprano en ruta\n\n` +
      `<i>✅ Ya quedó guardado y se incluyó en la hoja de producción y en tus etiquetas A4.</i>`

    const keyboardCambiar = {
      inline_keyboard: [
        [
          {
            text: '✏️ Cambiar Cantidades (Táctil)',
            web_app: { url: `https://prestino-brianna.vercel.app/pedido` }
          }
        ]
      ]
    }

    return await sendTelegramMessage(chatId, confirmacion, keyboardCambiar)
  }

  // 2. Comando /ruta
  if (text === '/ruta') {
    const total = CAYHUAYNA_CLIENTS.length
    let lista = `🚚 <b>Ruta Cayhuayna - Clientes (${total}):</b>\n\n`
    CAYHUAYNA_CLIENTS.slice(0, 20).forEach(c => {
      lista += `<b>#${c.stopNumber}</b> ${c.name}\n`
    })
    lista += `\n<i>... y ${total - 20} clientes más cargados en la base de datos.</i>\n\n` +
      `Para registrar entrega, escribe el número seguido de entregado y pagado.\n` +
      `Ej: <code>2 e20 p40</code>`

    return await sendTelegramMessage(chatId, lista)
  }

  // 3. Comando /catalogo
  if (text === '/catalogo' || text === '/pedir') {
    let prods = `🥖 <b>Catálogo de Productos EMPROBASE:</b>\n\n`
    EMPROBASE_PRODUCTS.forEach(p => {
      prods += `• <b>${p.name}</b> (${p.category}) - S/ ${(p.suggestedPrice || 0).toFixed(2)}\n`
    })
    prods += `\n<i>Para pedir: escribe "pedido [cliente]: 20 frances, 10 coliza"</i>`
    return await sendTelegramMessage(chatId, prods)
  }

  // 4. Comando /etiquetas
  if (text === '/etiquetas') {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const msg = `🏷️ <b>Generador de Etiquetas A4 (6 por hoja)</b>\n\n` +
      `Las etiquetas se imprimen en cuadrícula 2x3 con el diseño oficial de EMPROBASE.\n\n` +
      `Haz clic en el enlace para abrirlas listas para imprimir en tu navegador:\n` +
      `<a href="${siteUrl}/etiquetas">👉 Abrir Hoja de Etiquetas A4</a>`
    return await sendTelegramMessage(chatId, msg)
  }

  // 5. Comando /cierre
  if (text === '/cierre') {
    const msg = `📊 <b>Resumen de Cierre Diario - EMPROBASE</b>\n` +
      `Fecha: <b>Hoy</b> | Ruta: <b>Cayhuayna</b>\n\n` +
      `📦 <b>Total Panes Entregados:</b> 0 unidades\n` +
      `💵 <b>Total Cobrado en Efectivo:</b> S/ 0.00\n` +
      `📱 <b>Total Cobrado por Yape:</b> S/ 0.00\n` +
      `⚠️ <b>Deuda pendiente del día:</b> S/ 0.00\n\n` +
      `<i>Para registrar entregas usa el formato: [parada] e[unidades] p[monto]</i>`
    return await sendTelegramMessage(chatId, msg)
  }

  // 6. Registro rápido de ruta: ej. "2 e20 p40" o "14 e50 p50 yape"
  const regexRegistro = /^(\d+)\s+e(\d+)\s+p([\d\.,]+)(?:\s+(yape|yp|efectivo))?$/i
  const match = text.match(regexRegistro)

  if (match) {
    const stopNum = parseInt(match[1], 10)
    const entregado = parseInt(match[2], 10)
    const pagado = parseFloat(match[3].replace(',', '.'))
    const metodo = (match[4] || 'efectivo').toLowerCase().includes('y') ? 'Yape 📱' : 'Efectivo 💵'

    const cliente = CAYHUAYNA_CLIENTS.find(c => c.stopNumber === stopNum)
    const nombreCliente = cliente ? cliente.name : `Cliente Parada #${stopNum}`

    const confirmacion = `✅ <b>Registro Exitoso</b>\n\n` +
      `👤 <b>Cliente:</b> #${stopNum} - ${nombreCliente}\n` +
      `📦 <b>Entregado:</b> ${entregado} unidades\n` +
      `💰 <b>Pagado:</b> S/ ${pagado.toFixed(2)} (${metodo})\n` +
      `📅 <b>Fecha:</b> ${new Date().toLocaleDateString('es-PE')}\n\n` +
      `<i>Guardado en la base de datos de cobranzas.</i>`

    return await sendTelegramMessage(chatId, confirmacion)
  }

  // Mensaje por defecto de ayuda
  return await sendTelegramMessage(
    chatId,
    `No reconocí ese comando. Escribe <b>/start</b> para ver el menú principal o registra una entrega como <code>2 e20 p40</code>.`
  )
}
