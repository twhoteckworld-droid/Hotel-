export interface Room {
  id: string
  name: string
  slug: string
  category: 'Deluxe' | 'Premium' | 'Executive' | 'Presidential' | 'Family Suite'
  price: number
  size: number
  capacity: number
  beds: string
  view: string
  rating: number
  reviews: number
  images: string[]
  shortDescription: string
  description: string
  amenities: string[]
  featured: boolean
  status: 'Available' | 'Occupied' | 'Cleaning' | 'Maintenance' | 'Blocked'
  popularity: number
}

export interface Experience {
  id: string
  title: string
  description: string
  icon: string
  image: string
}

export interface Offer {
  id: string
  title: string
  subtitle: string
  description: string
  discount: string
  image: string
  badge: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  avatar: string
  date: string
}

export interface GalleryItem {
  id: string
  image: string
  category: 'Rooms' | 'Restaurant' | 'Exterior' | 'Events' | 'Experiences'
  caption: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface SearchQuery {
  checkIn: string
  checkOut: string
  adults: number
  children: number
  rooms: number
}
