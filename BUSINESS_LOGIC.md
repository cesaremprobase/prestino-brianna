# EMPROBASE — Sistema Integral de Pedidos, Etiquetas A4 y Cobranzas

## 1. Visión del Negocio
- **Empresa**: EMPROBASE (Empresa Productora de Bebidas y Alimentos Sr. Esteban S.A.C).
- **Giro**: Panadería y pastelería artesanal y comercial en Huánuco (Ruta Cayhuayna, Potracancha y zonas aledañas).
- **Teléfonos de contacto**: 966813534 / 967429631.
- **Objetivo del Software**: 
  1. Eliminar la recepción manual y dispersa de pedidos por WhatsApp hasta altas horas de la noche.
  2. Eliminar la edición manual diaria de plantillas en CorelDraw.
  3. Generar hojas A4 automáticas con 6 etiquetas prellenadas por hoja para empaquetado y entrega sin errores.
  4. Agilizar el registro diario de entregas y cobranzas del repartidor mediante un Bot de Telegram.
  5. Automatizar el cuadre diario y la exportación al libro Excel semanal (7 hojas).

---

## 2. Roles y Actores
1. **Cliente**:
   - **Opción A (1 Toque)**: Botón "Pedir lo de siempre" en Telegram que registra en 1 segundo su pedido habitual sin escribir nada.
   - **Opción B (Mini App Táctil)**: Interfaz accesible para adultos mayores (`/pedido`) con botones gigantes de `+` y `-`, atajos rápidos (`+10`, `+20`) y botón verde de confirmación.
   - Cierre automático de pedidos nocturno (ej. 10:00 PM).
2. **Maestro Panadero / Producción**:
   - Recibe a las 10:01 PM el consolidado exacto de unidades a producir para el turno mañana y tarde (pan francés, mestizo, mistishongo, caracol, chavata, coliza, alfajor, keke, etc.).
3. **Repartidor en Ruta (Operador)**:
   - Recibe las bolsas ya rotuladas con las etiquetas A4 impresas en orden de ruta (paradas 1 a 61).
   - Accede al Bot de Telegram en modo operativo (solo lectura de clientes y registro de entregas/cobros).
   - Anota en segundos: unidades entregadas, monto cobrado y método (efectivo o Yape).
4. **Administrador / Programador (Control Total)**:
   - Exclusividad para agregar, editar el orden de ruta o dar de baja clientes.
   - Acceso al cierre diario, reportes y descarga del Excel semanal.

---

## 3. Modelo de Datos (PostgreSQL / Supabase)

### `clientes`
- `id` (UUID, PK)
- `numero_parada` (INTEGER, 1..61 - Orden de ruta)
- `nombre` (TEXT, ej. "LIBRERÍA", "POTRACANCHA", "MAYK")
- `zona` (TEXT, ej. "Cayhuayna", "Potracancha")
- `telefono` (TEXT)
- `saldo_anterior` (NUMERIC, deuda acumulada previa)
- `activo` (BOOLEAN, default true)

### `productos`
- `id` (UUID, PK)
- `nombre` (TEXT, ej. "Pan Francés", "Coliza", "Chavata", "Alfajor")
- `categoria` (TEXT, "Panes" / "Pastelería")
- `precio_unitario` (NUMERIC)
- `activo` (BOOLEAN)

### `pedidos`
- `id` (UUID, PK)
- `cliente_id` (FK -> clientes.id)
- `fecha_entrega` (DATE)
- `turno` (CHAR(1), 'M' = Mañana, 'T' = Tarde)
- `estado` (TEXT: 'pendiente', 'en_produccion', 'en_ruta', 'entregado')
- `monto_total` (NUMERIC)
- `observaciones` (TEXT)

### `pedido_detalles`
- `id` (UUID, PK)
- `pedido_id` (FK -> pedidos.id)
- `producto_id` (FK -> productos.id)
- `cantidad` (INTEGER)
- `precio_unitario` (NUMERIC)
- `subtotal` (NUMERIC)

### `registros_cobranzas` (Equivalente al Excel diario)
- `id` (UUID, PK)
- `fecha` (DATE)
- `cliente_id` (FK -> clientes.id)
- `turno` (CHAR(1), 'M' o 'T')
- `unidades_entregadas` (INTEGER)
- `monto_pagado` (NUMERIC)
- `metodo_pago` (TEXT, 'efectivo', 'yape')
- `deuda_generada` (NUMERIC)
- `repartidor_telegram_id` (TEXT)

---

## 4. Módulos y Flujos de la Solución

### Módulo A: Generador de Etiquetas A4 (Adiós CorelDraw)
- **Formato**: Hoja estándar A4 dividida en cuadrícula de **6 etiquetas (2 columnas × 3 filas)**.
- **Dimensiones por etiqueta**: ~105 mm de ancho × 99 mm de alto.
- **Estructura visual de cada etiqueta**:
  1. **Cabecera**: Logotipo EMPROBASE + Texto institucional ("EMPRESA PRODUCTORA DE BEBIDAS Y ALIMENTOS SR. ESTEBAN S.A.C") + Teléfonos (`966813534` / `967429631`).
  2. **Identificación**: N° de Parada + Nombre del Cliente en tipografía destacada (ej. `PARADA #2: LIBRERÍA`).
  3. **Detalle del Pedido**: Lista de productos y cantidades automáticas.
  4. **Cobro y Notas**: Monto total a cobrar y recuadro reservado para anotaciones manuales.
- **Orden de salida**: Salen ordenadas según el recorrido del repartidor (1 al 61) para cortar y pegar directamente.

### Módulo B: Bot de Telegram para Ruta
- Comandos ultra-rápidos:
  - `2 e20 p40`: Cliente 2, 20 unidades entregadas, 40 soles pagados en efectivo.
  - `36 e25 p20 yape`: Cliente 36, 25 unidades entregadas, 20 soles pagados por Yape.
- `/ruta`: Muestra el listado de clientes pendientes de visita.
- `/cierre`: Resumen instantáneo de recaudación y entregas del día.

### Módulo C: Exportador Excel Semanal
- Genera con 1 clic el archivo `.xlsx` idéntico al formato EMPROBASE con 7 hojas (Lunes a Domingo), con fórmulas y totales automáticos por turno.
