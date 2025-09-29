import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const luxuryButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border/50",
        accent: "bg-gradient-to-r from-accent to-amber-500 text-primary hover:from-accent/90 hover:to-amber-500/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground backdrop-blur-sm",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        hero: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 border border-primary-foreground/20 backdrop-blur-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base font-semibold",
        xl: "h-14 rounded-xl px-10 text-lg font-semibold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface LuxuryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof luxuryButtonVariants> {
  asChild?: boolean
}

const LuxuryButton = React.forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(luxuryButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
LuxuryButton.displayName = "LuxuryButton"

export { LuxuryButton, luxuryButtonVariants }