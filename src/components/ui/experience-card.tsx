import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface ExperienceCardProps {
  title: string
  description: string
  icon: LucideIcon
  image?: string
  className?: string
  style?: React.CSSProperties
}

export function ExperienceCard({ title, description, icon: Icon, image, className, style }: ExperienceCardProps) {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card/80 backdrop-blur-sm border border-border/30 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-accent/50",
        className
      )}
      style={style}
    >
      {image && (
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
      )}
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-accent" />
          </div>
        </div>
        
        <h3 className="font-serif font-semibold text-xl text-primary mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}