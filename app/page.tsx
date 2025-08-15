import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import LogoSection from '@/components/LogoSection'
import ColorSection from '@/components/ColorSection'
import ColorTestingSection from '@/components/ColorTestingSection'
import TypographySection from '@/components/TypographySection'
import UsageSection from '@/components/UsageSection'
import DownloadsSection from '@/components/DownloadsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <LogoSection />
      <ColorSection />
      <ColorTestingSection />
      <TypographySection />
      <UsageSection />
      <DownloadsSection />
      <Footer />
    </main>
  )
}