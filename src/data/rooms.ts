import type { Room } from '../types'

export const rooms: Room[] = [
  {
    id: 'r1', name: 'Deluxe Mountain View', slug: 'deluxe-mountain-view', category: 'Deluxe',
    price: 6500, size: 420, capacity: 2, beds: '1 King Bed', view: 'Mountain View',
    rating: 4.8, reviews: 128,
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
    ],
    shortDescription: 'Elegant comfort with sweeping Himalayan views from your private balcony.',
    description: 'Our Deluxe Mountain View rooms blend colonial charm with modern amenities. Wake to golden sunrises over the Himalayan peaks, enjoy a curated minibar, and unwind in a plush king bed dressed in fine Egyptian cotton.',
    amenities: ['Free Wi-Fi', 'Balcony', 'Mountain View', 'Mini Bar', 'Room Service', 'Smart TV', 'Coffee Maker', 'Rain Shower'],
    featured: true, status: 'Available', popularity: 95,
  },
  {
    id: 'r2', name: 'Executive Suite', slug: 'executive-suite', category: 'Executive',
    price: 9500, size: 680, capacity: 3, beds: '1 King + Sofa Bed', view: 'Panoramic Valley',
    rating: 4.9, reviews: 96,
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200&q=80',
      'https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=1200&q=80',
    ],
    shortDescription: 'A private living room, panoramic windows, and a soaking tub with a view.',
    description: 'The Executive Suite is a refined retreat designed for discerning travellers. Enjoy a separate living area, a marble-clad bathroom with a soaking tub, and panoramic windows framing the valley below.',
    amenities: ['Free Wi-Fi', 'Living Room', 'Soaking Tub', 'Butler Service', 'Espresso Machine', 'Valley View', 'Work Desk', 'Evening Turndown'],
    featured: true, status: 'Available', popularity: 88,
  },
  {
    id: 'r3', name: 'Presidential Suite', slug: 'presidential-suite', category: 'Presidential',
    price: 15000, size: 1200, capacity: 4, beds: '2 King Beds', view: '180° Himalayan View',
    rating: 5.0, reviews: 42,
    images: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=80',
      'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80',
    ],
    shortDescription: 'The pinnacle of mountain luxury — two bedrooms, a private terrace, and a personal butler.',
    description: 'The crown jewel of The Grand Himalayan. Two sumptuous bedrooms, a private dining room, a wraparound terrace, and a dedicated butler — all framed by a 180-degree Himalayan panorama.',
    amenities: ['Private Terrace', 'Personal Butler', 'Dining Room', 'Two Bathrooms', 'Premium Bar', 'Fireplace', 'Chauffeur Service', 'Spa Access'],
    featured: true, status: 'Available', popularity: 99,
  },
  {
    id: 'r4', name: 'Premium Valley Room', slug: 'premium-valley-room', category: 'Premium',
    price: 7500, size: 520, capacity: 2, beds: '1 Queen Bed', view: 'Valley View',
    rating: 4.7, reviews: 152,
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80',
    ],
    shortDescription: 'Romantic, intimate, and framed by cedar forests and misty valleys.',
    description: 'Perfect for couples and quiet getaways. The Premium Valley Room opens onto a private balcony overlooking cedar forests, with a signature rain shower and handwoven textiles.',
    amenities: ['Free Wi-Fi', 'Balcony', 'Valley View', 'Rain Shower', 'Room Service', 'Smart TV', 'Evening Tea', 'Reading Nook'],
    featured: true, status: 'Available', popularity: 82,
  },
]

export const getRoomById = (id: string) => rooms.find((r) => r.id === id || r.slug === id)
