/**
 * Servicio para generar enlaces de WhatsApp con mensajes predefinidos de pedidos
 */

const WHATSAPP_PHONE = '51962997672'; // Código de país Perú (51) + número (962997672)

export interface OrderDetails {
  productName: string;
  quantity: string;
  price: string;
}

export function generateWhatsAppLink(details?: OrderDetails): string {
  let message = '';
  
  if (details) {
    message = `¡Hola Pastelería Brianna! 🌟 Me gustaría realizar un pedido:\n\n` +
              `📦 *Producto:* ${details.productName}\n` +
              `🔢 *Presentación/Cantidad:* ${details.quantity}\n` +
              `💰 *Precio estimado:* ${details.price}\n\n` +
              `¿Me podrían indicar los pasos para coordinar la entrega? ¡Muchas gracias! 😊`;
  } else {
    message = `¡Hola Pastelería Brianna! 🌟 Me gustaría recibir más información sobre sus deliciosos prestiños huanuqueños y realizar una consulta. 😊`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
}
