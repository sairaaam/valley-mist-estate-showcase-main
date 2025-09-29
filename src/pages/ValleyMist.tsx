import { HeroSection } from "@/components/sections/hero-section"
import { EstateOverview } from "@/components/sections/estate-overview"
import { ExperiencesSection } from "@/components/sections/experiences-section"
import { LocationSection } from "@/components/sections/location-section"
import { LeadFormSection } from "@/components/sections/lead-form-section"
import { Footer } from "@/components/sections/footer"

const ValleyMist = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EstateOverview />
      <ExperiencesSection />
      <LocationSection />
      <LeadFormSection />
      <Footer />
    </div>
  )
}

export default ValleyMist