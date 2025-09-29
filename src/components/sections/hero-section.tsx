import { LuxuryButton } from "@/components/ui/luxury-button"
import { Badge } from "@/components/ui/badge"
import { Logo } from "@/components/ui/logo"
import heroImage from "@/assets/valley-mist-hero.jpg"
import { useState } from 'react';
import { BookingFormDialog } from '@/components/ui/booking-form-dialog';
import { Calendar, Download } from 'lucide-react';

export function HeroSection() {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const [brochureDialogOpen, setBrochureDialogOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleBookVisit = () => {
    setBookingDialogOpen(true);
  };

  const handleDownloadBrochure = () => {
    setBrochureDialogOpen(true);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Misty valleys and coffee plantations in Valley Mist estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Logo className="h-20 md:h-24 lg:h-28 w-auto object-contain" />
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('estate')}
                className="text-white/90 hover:text-accent transition-colors duration-300 font-medium"
              >
                Estate
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="text-white/90 hover:text-accent transition-colors duration-300 font-medium"
              >
                Experiences
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-white/90 hover:text-accent transition-colors duration-300 font-medium"
              >
                Location
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white/90 hover:text-accent transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6">
            A Legacy Estate in the{" "}
            <span className="hero-text bg-gradient-to-r from-accent to-amber-400 bg-clip-text text-transparent">
              Clouds
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
            104 acres of Arabica coffee, canopies, and waterfalls in Coorg, crafted for generational ownership.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <LuxuryButton 
              variant="hero" 
              size="xl"
              onClick={handleBookVisit}
              className="shadow-2xl"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Site Visit
            </LuxuryButton>
            <LuxuryButton 
              variant="outline" 
              size="xl"
              onClick={handleDownloadBrochure}
              className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </LuxuryButton>
          </div>

          {/* Trust Markers */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge className="trust-badge bg-success/20 text-success border-success/30 backdrop-blur-sm">
              AQI &lt; 20
            </Badge>
            <Badge className="trust-badge bg-success/20 text-success border-success/30 backdrop-blur-sm">
              Private Waterfalls
            </Badge>
            <Badge className="trust-badge bg-success/20 text-success border-success/30 backdrop-blur-sm">
              Thriving Arabica Coffee
            </Badge>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Booking Form Dialogs */}
      <BookingFormDialog
        open={bookingDialogOpen}
        onOpenChange={setBookingDialogOpen}
        formType="booking"
      />
      
      <BookingFormDialog
        open={brochureDialogOpen}
        onOpenChange={setBrochureDialogOpen}
        formType="brochure"
      />
    </>
  )
}
