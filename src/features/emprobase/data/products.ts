export interface Product {
  id: string
  name: string
  category: 'Panadería' | 'Pastelería'
  suggestedPrice?: number
}

export const EMPROBASE_PRODUCTS: Product[] = [
  { id: 'frances', name: 'Pan Francés', category: 'Panadería', suggestedPrice: 0.35 },
  { id: 'mestizo', name: 'Pan Mestizo', category: 'Panadería', suggestedPrice: 0.35 },
  { id: 'mistishongo', name: 'Mistishongo', category: 'Panadería', suggestedPrice: 0.35 },
  { id: 'caracol', name: 'Caracol', category: 'Panadería', suggestedPrice: 0.35 },
  { id: 'chavata', name: 'Chavata', category: 'Panadería', suggestedPrice: 0.40 },
  { id: 'coliza', name: 'Coliza', category: 'Panadería', suggestedPrice: 0.50 },
  { id: 'pan-grande', name: 'Pan Grande', category: 'Panadería', suggestedPrice: 1.00 },
  { id: 'pan-molde', name: 'Pan de Molde', category: 'Panadería', suggestedPrice: 5.00 },
  { id: 'bizcocho', name: 'Bizcocho', category: 'Pastelería', suggestedPrice: 0.50 },
  { id: 'bizcocho-grande', name: 'Bizcocho Grande', category: 'Pastelería', suggestedPrice: 1.50 },
  { id: 'alfajor', name: 'Alfajor', category: 'Pastelería', suggestedPrice: 1.00 },
  { id: 'keke', name: 'Keke', category: 'Pastelería', suggestedPrice: 1.50 },
  { id: 'kingkong', name: 'King Kong', category: 'Pastelería', suggestedPrice: 2.50 },
]
