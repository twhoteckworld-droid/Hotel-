import { Link } from 'react-router-dom'
import { useHotel } from '../../context/HotelContext'
import { SectionHeading } from '../ui/SectionHeading'
import { RoomCard } from './RoomCard'
export function FeaturedRooms() {
  const { rooms } = useHotel(); const featured = rooms.filter((r) => r.featured).slice(0, 4)
  return (
    <section className="py-24 sm:py-32 bg-beige/40"><div className="container-lux">
      <SectionHeading eyebrow="Accommodation" title={<>Rooms &amp; <span className="italic text-gold">Suites</span></>} description="Four signature stays, each with its own view, mood, and quiet luxury." />
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">{featured.map((room, i) => (<RoomCard key={room.id} room={room} index={i} />))}</div>
      <div className="text-center mt-14"><Link to="/rooms" className="btn-outline">View All Rooms</Link></div>
    </div></section>
  )
}
