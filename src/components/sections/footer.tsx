import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "@/components/ui/logo"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Brand */}
          <div className="space-y-6">
            <div>
              <Logo className="h-20 w-auto object-contain mb-4 brightness-0 invert" />
              <p className="text-accent font-medium mb-4">
                RNR Projects
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                Crafting Legacy Estates in Coorg. Creating generational wealth through 
                premium farmland investments in India's coffee capital.
              </p>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif font-semibold text-lg text-accent">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('estate')}
                className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                Estate
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                Experiences
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                Location
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-6">
            <h4 className="font-serif font-semibold text-lg text-accent">
              Contact Information
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-primary-foreground/90">+91 98765 43210</div>
                  <div className="text-sm text-primary-foreground/70">Call for site visits</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-primary-foreground/90">info@valleymist.in</div>
                  <div className="text-sm text-primary-foreground/70">General inquiries</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-primary-foreground/90">Kakkabe, Kodagu District</div>
                  <div className="text-sm text-primary-foreground/70">Karnataka, India - 571201</div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a 
                href="#" 
                className="p-2 border-2 border-accent/30 rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-accent" />
              </a>
              <a 
                href="#" 
                className="p-2 border-2 border-accent/30 rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-accent" />
              </a>
              <a 
                href="#" 
                className="p-2 border-2 border-accent/30 rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/70">
              © 2024 Valley Mist Estate by RNR Projects. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
              >
                Terms & Conditions
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
              >
                Legal Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}