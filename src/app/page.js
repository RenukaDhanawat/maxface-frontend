import Navbar from '@/components/common/Navbar'
import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import DoctorSection from '@/components/home/DoctorSection'
import Testimonials from '@/components/home/Testimonials'
import EmergencySection from '@/components/home/EmergencySection'
import Footer from '@/components/common/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <DoctorSection />
      <Testimonials />
      <EmergencySection />
      <Footer />
    </main>
  )
}