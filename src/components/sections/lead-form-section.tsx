import { useState } from "react"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, Download, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function LeadFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visitDate: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // PDF Download Function
  const downloadBrochure = () => {
    try {
      const link = document.createElement('a')
      link.href = '/src/assets/Esthetics-Outline.pdf' // Adjust path based on your project structure
      link.download = 'Valley-Mist-Estate-Brochure.pdf'
      link.target = '_blank' // Open in new tab if download fails
      
      // Append to body, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      return true
    } catch (error) {
      console.error('Download failed:', error)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill all required fields",
        description: "Name, email, and phone are required to download the brochure.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Phone validation (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Simulate processing delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Attempt to download the brochure
    const downloadSuccess = downloadBrochure()

    if (downloadSuccess) {
      // Success message
      toast({
        title: "Brochure Downloaded Successfully! 🎉",
        description: "Thank you for your interest. We'll contact you within 24 hours to schedule your visit.",
      })

      // Log form data to console (for now, until email integration)
      console.log('Form submitted:', {
        ...formData,
        submissionTime: new Date().toISOString(),
        userAgent: navigator.userAgent
      })

      // Reset form
      setFormData({ name: "", email: "", phone: "", visitDate: "" })
    } else {
      // Download failed
      toast({
        title: "Download issue",
        description: "There was an issue downloading the brochure. Please try again or contact us directly.",
        variant: "destructive",
      })
    }

    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Format phone number as user types
  const handlePhoneChange = (value: string) => {
    // Remove all non-numeric characters except + at the beginning
    let cleaned = value.replace(/[^\d+]/g, '')
    
    // If it starts with +91, format it nicely
    if (cleaned.startsWith('+91')) {
      cleaned = cleaned.substring(3)
      if (cleaned.length <= 10) {
        cleaned = '+91 ' + cleaned.replace(/(\d{5})(\d{5})/, '$1 $2')
      }
    } else if (cleaned.startsWith('91') && cleaned.length > 2) {
      // Convert 91xxxxxxxxxx to +91 xxxxx xxxxx
      const number = cleaned.substring(2)
      if (number.length <= 10) {
        cleaned = '+91 ' + number.replace(/(\d{5})(\d{5})/, '$1 $2')
      }
    } else if (cleaned.length <= 10) {
      // Format 10-digit number as xxxxx xxxxx
      cleaned = cleaned.replace(/(\d{5})(\d{5})/, '$1 $2')
    }
    
    setFormData(prev => ({ ...prev, phone: cleaned }))
  }

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.phone.trim()

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/20 to-accent/5">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-heading mb-6">
            Start Your Legacy at Valley Mist
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fill in your details to download the brochure and schedule a curated site visit. 
            Experience the estate firsthand and discover your family's future sanctuary.
          </p>
        </div>

        <div className="elegant-card p-8 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="h-12 border-border/50 focus:border-accent focus:ring-accent transition-all duration-200"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email"
                  className="h-12 border-border/50 focus:border-accent focus:ring-accent transition-all duration-200"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-primary font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="h-12 border-border/50 focus:border-accent focus:ring-accent transition-all duration-200"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="visitDate" className="text-primary font-medium">
                  Preferred Visit Date
                </Label>
                <Input
                  id="visitDate"
                  type="date"
                  value={formData.visitDate}
                  onChange={(e) => handleInputChange("visitDate", e.target.value)}
                  className="h-12 border-border/50 focus:border-accent focus:ring-accent transition-all duration-200"
                  min={new Date().toISOString().split('T')[0]}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <LuxuryButton 
              type="submit" 
              variant="accent" 
              size="xl" 
              className="w-full mt-8 transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 disabled:opacity-70"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure & Book Visit
                </>
              )}
            </LuxuryButton>

            {/* Form Status Indicator */}
            {isSubmitting && (
              <div className="text-center text-sm text-muted-foreground animate-pulse">
                Please wait while we process your request...
              </div>
            )}
          </form>

          {/* Trust Marker */}
          <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-border/30">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">
              Powered by <span className="text-accent font-semibold">RNR Projects</span> • Private & Secure
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
