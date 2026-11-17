import { Hero } from '../../components/hotel/Hero'
import { BookingSearch } from '../../components/hotel/BookingSearch'
import { WelcomeSection } from '../../components/hotel/WelcomeSection'
import { FeaturedRooms } from '../../components/hotel/FeaturedRooms'
import { ExperiencesSection } from '../../components/hotel/ExperiencesSection'
import { WhyChooseUs } from '../../components/hotel/WhyChooseUs'
import { SpecialOffers } from '../../components/hotel/SpecialOffers'
import { GallerySection } from '../../components/hotel/GallerySection'
import { TestimonialsSection } from '../../components/hotel/TestimonialsSection'
import { LocationSection } from '../../components/hotel/LocationSection'
import { FAQSection } from '../../components/hotel/FAQSection'
import { Newsletter } from '../../components/hotel/Newsletter'

export function HomePage() {
  return (
    <>
      <Hero />
      <BookingSearch />
      <WelcomeSection />
      <FeaturedRooms />
      <ExperiencesSection />
      <WhyChooseUs />
      <SpecialOffers />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
      <FAQSection />
      <Newsletter />
    </>
  )
}
