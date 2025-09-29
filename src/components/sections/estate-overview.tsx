import { Badge } from "@/components/ui/badge"
import estateImage from "@/assets/estate-aerial.jpg"

export function EstateOverview() {
  return (
    <section id="estate" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="section-heading mb-6">
                The Estate
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Valley Mist represents more than land ownership—it's a testament to enduring legacy. 
                Nestled in the pristine hills of Coorg, our 104-acre sanctuary encompasses thriving 
                Arabica coffee plantations, cascading private waterfalls, and untouched forest canopies. 
                With air quality measuring below AQI 20, this haven offers not just investment 
                opportunity, but a generational inheritance of natural splendor and sustainable 
                agriculture in India's coffee capital.
              </p>
              
              {/* Highlight Badges */}
              <div className="flex flex-wrap gap-4">
                <Badge className="trust-badge">
                  <span className="w-2 h-2 bg-success rounded-full mr-2" />
                  AQI &lt; 20
                </Badge>
                <Badge className="trust-badge">
                  <span className="w-2 h-2 bg-success rounded-full mr-2" />
                  Private Waterfalls
                </Badge>
                <Badge className="trust-badge">
                  <span className="w-2 h-2 bg-success rounded-full mr-2" />
                  Thriving Arabica Coffee
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group animate-fade-in">
            <div className="elegant-card overflow-hidden">
              <img 
                src={estateImage} 
                alt="Aerial view of Valley Mist estate with coffee plantations and forest"
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg">
              <div className="text-3xl font-serif font-bold text-primary mb-1">104</div>
              <div className="text-sm text-muted-foreground">Acres of Legacy</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg">
              <div className="text-3xl font-serif font-bold text-accent mb-1">&lt;20</div>
              <div className="text-sm text-muted-foreground">AQI Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}