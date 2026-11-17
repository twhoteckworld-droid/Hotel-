import type { Offer } from '../types'

export const offers: Offer[] = [
  { id: 'o1', title: 'Weekend Escape', subtitle: '2 nights · 15% off', description: 'Recharge with a curated two-night escape including breakfast and a spa ritual.', discount: '15% OFF', badge: 'Popular', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80' },
  { id: 'o2', title: 'Honeymoon Experience', subtitle: '3 nights · 20% off', description: "Champagne on arrival, a private dinner, and a couple's spa journey.", discount: '20% OFF', badge: 'Romantic', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80' },
  { id: 'o3', title: 'Family Vacation', subtitle: 'Kids stay free', description: 'Spacious family suites with complimentary breakfast for children under 12.', discount: 'KIDS FREE', badge: 'Family', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80' },
  { id: 'o4', title: 'Extended Stay', subtitle: '5+ nights · 25% off', description: 'Settle in. Long stays unlock the deepest discounts and a complimentary airport transfer.', discount: '25% OFF', badge: 'Best Value', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80' },
]
