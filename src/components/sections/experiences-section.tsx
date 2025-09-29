import { ExperienceCard } from "@/components/ui/experience-card"
import { Coffee, Droplets, Home, Car } from "lucide-react"
import coffeeImage from "@/assets/arabica-coffee.jpg"
import waterfallImage from "@/assets/private-waterfall.jpg"
import cabinImage from "@/assets/luxury-cabin.jpg"
import offroadImage from "@/assets/offroad-adventure.jpg"

export function ExperiencesSection() {
  const experiences = [
    {
      title: "Coffee Trails",
      description: "Walk through heritage Arabica plantations, learn traditional cultivation methods, and taste premium single-origin coffee directly from the source.",
      icon: Coffee,
      image: coffeeImage,
    },
    {
      title: "Private Waterfalls",
      description: "Discover secluded cascades hidden within the estate's forest canopy, offering pristine natural pools for peaceful contemplation.",
      icon: Droplets,
      image: waterfallImage,
    },
    {
      title: "Invitation-Only Cabin Stays",
      description: "Experience curated luxury in our exclusive forest cabins, designed for discerning guests seeking authentic Coorg hospitality.",
      icon: Home,
      image: cabinImage,
    },
    {
      title: "Offroad Drives",
      description: "Navigate scenic plantation paths and forest trails in specially equipped vehicles, exploring the estate's diverse terrain and hidden gems.",
      icon: Car,
      image: offroadImage,
    },
  ]

  return (
    <section id="experiences" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading mb-6">
            Curated Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in the authentic rhythms of Coorg through carefully crafted experiences 
            that celebrate the estate's natural heritage and cultural richness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              {...experience}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}