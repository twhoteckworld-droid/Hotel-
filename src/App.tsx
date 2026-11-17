import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { NotificationProvider } from './context/NotificationContext'
import { BookingProvider } from './context/BookingContext'
import { HotelProvider } from './context/HotelContext'
import { PublicLayout } from './components/layout/PublicLayout'
import { HomePage } from './pages/public/HomePage'

function ComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 text-center">
      <div>
        <p className="eyebrow mb-4">Coming Soon</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-forest font-light">{title}</h1>
        <p className="text-charcoal/60 mt-4 max-w-md mx-auto">This page will be built in the next phase.</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <HotelProvider>
          <BookingProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<PublicLayout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<ComingSoon title="Our Story" />} />
                  <Route path="/rooms" element={<ComingSoon title="Rooms & Suites" />} />
                  <Route path="/rooms/:id" element={<ComingSoon title="Room Details" />} />
                  <Route path="/experiences" element={<ComingSoon title="Experiences" />} />
                  <Route path="/facilities" element={<ComingSoon title="Facilities" />} />
                  <Route path="/gallery" element={<ComingSoon title="Gallery" />} />
                  <Route path="/offers" element={<ComingSoon title="Special Offers" />} />
                  <Route path="/contact" element={<ComingSoon title="Contact" />} />
                  <Route path="/faq" element={<ComingSoon title="FAQ" />} />
                  <Route path="/booking" element={<ComingSoon title="Booking" />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </BookingProvider>
        </HotelProvider>
      </NotificationProvider>
    </ThemeProvider>
  )
}
