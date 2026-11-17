import type { Testimonial, FAQ, GalleryItem } from '../types'

export const testimonials: Testimonial[] = [
  { id: 't1', name: 'Ananya Sharma', location: 'Mumbai, India', rating: 5, text: "From the moment we arrived, every detail felt considered. The Presidential Suite's sunrise view alone is worth the trip. The staff anticipated everything before we asked.", avatar: 'https://randomuser.me/api/portraits/women/44.jpg', date: 'October 2024' },
  { id: 't2', name: 'James Whitfield', location: 'London, UK', rating: 5, text: 'I have stayed at luxury properties across four continents — The Grand Himalayan is in a class of its own. The spa alone deserves a return visit.', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', date: 'September 2024' },
  { id: 't3', name: 'Priya & Arjun Mehta', location: 'Delhi, India', rating: 5, text: 'Our honeymoon was magical. The private dinner under the pines, the champagne on arrival, the way the team remembered our names — unforgettable.', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', date: 'August 2024' },
  { id: 't4', name: 'Rebecca Chen', location: 'Singapore', rating: 4, text: 'Beautiful property, genuinely warm service, and views that stop you mid-sentence. The Deluxe Mountain View room was perfect for a solo retreat.', avatar: 'https://randomuser.me/api/portraits/women/12.jpg', date: 'July 2024' },
]

export const gallery: GalleryItem[] = [
  { id: 'g1', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&q=80', category: 'Rooms', caption: 'Deluxe Mountain View' },
  { id: 'g2', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80', category: 'Restaurant', caption: 'The Cedar Room' },
  { id: 'g3', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80', category: 'Exterior', caption: 'The Grand Exterior' },
  { id: 'g4', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=80', category: 'Experiences', caption: 'Mountain Spa' },
  { id: 'g5', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=80', category: 'Rooms', caption: 'Executive Suite' },
  { id: 'g6', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80', category: 'Events', caption: 'Celebration in the Valley' },
  { id: 'g7', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=80', category: 'Experiences', caption: 'Infinity Pool' },
  { id: 'g8', image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=900&q=80', category: 'Rooms', caption: 'Presidential Suite' },
  { id: 'g9', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80', category: 'Restaurant', caption: 'Private Dining' },
]

export const faqs: FAQ[] = [
  { id: 'f1', question: 'What is the check-in and check-out time?', answer: 'Check-in is from 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out can be arranged subject to availability.' },
  { id: 'f2', question: 'How do I reach The Grand Himalayan from the airport?', answer: 'The nearest airport is Shimla (Jubbarhatti), 22 km away. We offer private chauffeur transfers, and Chandigarh Airport is a scenic 3.5-hour drive.' },
  { id: 'f3', question: 'Is breakfast included in the room rate?', answer: 'Breakfast is included with most packages. You can also book a room-only rate and dine at The Cedar Room or enjoy room service.' },
  { id: 'f4', question: 'Are pets allowed at the property?', answer: 'Yes, we welcome well-behaved pets in select suites for a nominal fee. Please inform us at the time of booking.' },
  { id: 'f5', question: 'What is your cancellation policy?', answer: "Free cancellation up to 48 hours before check-in. Within 48 hours, one night's charge applies. No-show bookings are charged the full stay." },
  { id: 'f6', question: 'Do you offer airport transfers?', answer: 'Yes. Private chauffeur transfers can be arranged from Shimla Airport or Chandigarh Airport with advance notice.' },
]
