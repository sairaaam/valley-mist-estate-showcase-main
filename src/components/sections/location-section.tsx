import { LuxuryButton } from "@/components/ui/luxury-button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Navigation } from "lucide-react"
import { openMap, VALLEY_MIST_LOCATION } from "@/lib/utils"

export function LocationSection() {
  const handleGetDirectionsAndBookVisit = () => {
    openMap(VALLEY_MIST_LOCATION);
  };

  return (
    <section id="location" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h2 className="section-heading mb-6">
              Closer Than You Think
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Strategically positioned in Kakkabe, Kodagu, Valley Mist offers the perfect balance 
              of seclusion and accessibility. Our estate provides easy access from major cities 
              while maintaining the pristine tranquility that makes Coorg legendary.
            </p>
            
            {/* Travel Times */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border/30">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-primary">5 hours from Bangalore</div>
                  <div className="text-sm text-muted-foreground">Via NH275 - Scenic highway route</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border/30">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-primary">3 hours from Mysore</div>
                  <div className="text-sm text-muted-foreground">Via Hunsur - Heritage city connection</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border/30">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-primary">4.5 hours from Mangalore</div>
                  <div className="text-sm text-muted-foreground">Via Sullia - Coastal gateway access</div>
                </div>
              </div>
            </div>

            {/* Single Button */}
            <LuxuryButton 
              size="lg" 
              onClick={handleGetDirectionsAndBookVisit}
              className="w-full sm:w-auto"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Get Directions & Book Visit
            </LuxuryButton>
          </div>

          {/* Right Map Placeholder */}
          <div className="relative animate-fade-in">
            <div className="elegant-card overflow-hidden">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                {/* Map Placeholder */}
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-serif font-semibold text-xl text-primary mb-2">
                    Valley Mist Estate
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Infantry Road, Shivaji Nagar<br />
                    Bengaluru, Karnataka 560001
                  </p>
                  <Badge className="trust-badge">
                    <MapPin className="w-3 h-3 mr-1" />
                    Premium Location
                  </Badge>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                <div className="absolute top-4 left-4 w-24 h-24 border-2 border-accent/30 rounded-full animate-pulse" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border border-primary/30 rounded-lg rotate-45" />
              </div>
            </div>
            
            {/* Location Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border/50 shadow-lg">
              <div className="text-center">
                <div className="font-serif font-bold text-primary text-lg">Bengaluru</div>
                <div className="text-sm text-muted-foreground">Garden City</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
