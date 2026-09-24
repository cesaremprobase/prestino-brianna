export interface Client {
  id: number
  stopNumber: number
  name: string
  zone: string
  active: boolean
}

export const CAYHUAYNA_CLIENTS: Client[] = [
  // Bloque 1 (1 - 25)
  { id: 1, stopNumber: 1, name: 'AVENIDA', zone: 'Cayhuayna', active: true },
  { id: 2, stopNumber: 2, name: 'LIBRERÍA', zone: 'Cayhuayna', active: true },
  { id: 3, stopNumber: 3, name: 'AMIGA', zone: 'Cayhuayna', active: true },
  { id: 4, stopNumber: 4, name: 'FERNANDO', zone: 'Cayhuayna', active: true },
  { id: 5, stopNumber: 5, name: 'GLASS', zone: 'Cayhuayna', active: true },
  { id: 6, stopNumber: 6, name: 'MODESTA', zone: 'Cayhuayna', active: true },
  { id: 7, stopNumber: 7, name: 'ALBARADO', zone: 'Cayhuayna', active: true },
  { id: 8, stopNumber: 8, name: 'MARY', zone: 'Cayhuayna', active: true },
  { id: 9, stopNumber: 9, name: 'DULCE', zone: 'Cayhuayna', active: true },
  { id: 10, stopNumber: 10, name: 'RAQUEL', zone: 'Cayhuayna', active: true },
  { id: 11, stopNumber: 11, name: 'BONILLA', zone: 'Cayhuayna', active: true },
  { id: 12, stopNumber: 12, name: 'NUEVO', zone: 'Cayhuayna', active: true },
  { id: 13, stopNumber: 13, name: 'KAREN', zone: 'Cayhuayna', active: true },
  { id: 14, stopNumber: 14, name: 'MAYK (mercd)', zone: 'Cayhuayna', active: true },
  { id: 15, stopNumber: 15, name: 'ESTEBAN', zone: 'Cayhuayna', active: true },
  { id: 16, stopNumber: 16, name: 'RAYDA', zone: 'Cayhuayna', active: true },
  { id: 17, stopNumber: 17, name: 'ROSARIA', zone: 'Cayhuayna', active: true },
  { id: 18, stopNumber: 18, name: 'VEC. DAVID', zone: 'Cayhuayna', active: true },
  { id: 19, stopNumber: 19, name: 'MARIZOL', zone: 'Cayhuayna', active: true },
  { id: 20, stopNumber: 20, name: 'PARADA 20', zone: 'Cayhuayna', active: false },
  { id: 21, stopNumber: 21, name: 'TORITO', zone: 'Cayhuayna', active: true },
  { id: 22, stopNumber: 22, name: 'MOLINO', zone: 'Cayhuayna', active: true },
  { id: 23, stopNumber: 23, name: 'CARMEN', zone: 'Cayhuayna', active: true },
  { id: 24, stopNumber: 24, name: 'ANA', zone: 'Cayhuayna', active: true },
  { id: 25, stopNumber: 25, name: 'VIVIANA', zone: 'Cayhuayna', active: true },

  // Bloque 2 (26 - 50)
  { id: 26, stopNumber: 26, name: 'COLEGIO', zone: 'Cayhuayna', active: true },
  { id: 27, stopNumber: 27, name: 'HUANCACHP', zone: 'Cayhuayna', active: true },
  { id: 28, stopNumber: 28, name: 'HUARANGA', zone: 'Cayhuayna', active: true },
  { id: 29, stopNumber: 29, name: 'YULITA', zone: 'Cayhuayna', active: true },
  { id: 30, stopNumber: 30, name: 'MAGNA', zone: 'Cayhuayna', active: true },
  { id: 31, stopNumber: 31, name: 'SOL', zone: 'Cayhuayna', active: true },
  { id: 32, stopNumber: 32, name: 'ANITA', zone: 'Cayhuayna', active: true },
  { id: 33, stopNumber: 33, name: 'LUZ', zone: 'Cayhuayna', active: true },
  { id: 34, stopNumber: 34, name: 'CAMILA', zone: 'Cayhuayna', active: true },
  { id: 35, stopNumber: 35, name: 'YESICA', zone: 'Cayhuayna', active: true },
  { id: 36, stopNumber: 36, name: 'MAGY (MUNI)', zone: 'Cayhuayna', active: true },
  { id: 37, stopNumber: 37, name: 'ABAD', zone: 'Cayhuayna', active: true },
  { id: 38, stopNumber: 38, name: 'MOISES', zone: 'Cayhuayna', active: true },
  { id: 39, stopNumber: 39, name: '5 ESQUINAS', zone: 'Cayhuayna', active: true },
  { id: 40, stopNumber: 40, name: 'IVAN', zone: 'Cayhuayna', active: true },
  { id: 41, stopNumber: 41, name: 'ALVINA', zone: 'Cayhuayna', active: true },
  { id: 42, stopNumber: 42, name: 'GEYLI', zone: 'Cayhuayna', active: true },
  { id: 43, stopNumber: 43, name: 'TADEO', zone: 'Cayhuayna', active: true },
  { id: 44, stopNumber: 44, name: 'MEDRANO', zone: 'Cayhuayna', active: true },
  { id: 45, stopNumber: 45, name: 'HERMANO', zone: 'Cayhuayna', active: true },
  { id: 46, stopNumber: 46, name: 'NICOLL', zone: 'Cayhuayna', active: true },
  { id: 47, stopNumber: 47, name: 'MIREYA', zone: 'Cayhuayna', active: true },
  { id: 48, stopNumber: 48, name: 'ABUELO', zone: 'Cayhuayna', active: true },
  { id: 49, stopNumber: 49, name: 'BRASIL', zone: 'Cayhuayna', active: true },
  { id: 50, stopNumber: 50, name: 'LEON', zone: 'Cayhuayna', active: true },

  // Bloque 3 (51 - 61+)
  { id: 51, stopNumber: 51, name: 'VEC. MUNICP', zone: 'Cayhuayna', active: true },
  { id: 52, stopNumber: 52, name: 'JANET (MUNI)', zone: 'Cayhuayna', active: true },
  { id: 53, stopNumber: 53, name: 'ELENA', zone: 'Cayhuayna', active: true },
  { id: 54, stopNumber: 54, name: 'VECINO DAVID', zone: 'Cayhuayna', active: true },
  { id: 55, stopNumber: 55, name: 'CAYO', zone: 'Cayhuayna', active: true },
  { id: 56, stopNumber: 56, name: 'CAJAS', zone: 'Cayhuayna', active: true },
  { id: 57, stopNumber: 57, name: 'SANTA', zone: 'Cayhuayna', active: true },
  { id: 58, stopNumber: 58, name: 'MARLENE', zone: 'Cayhuayna', active: true },
  { id: 59, stopNumber: 59, name: 'PODER JUDICIAL', zone: 'Cayhuayna', active: true },
  { id: 60, stopNumber: 60, name: 'TIBURCIO', zone: 'Cayhuayna', active: true },
  { id: 61, stopNumber: 61, name: 'VECINA MEDRANO', zone: 'Cayhuayna', active: true },
  { id: 62, stopNumber: 62, name: 'POTRACANCHA', zone: 'Potracancha', active: true },
]
