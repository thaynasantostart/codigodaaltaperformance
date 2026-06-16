import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { whatsappLink } from "@/lib/site"

interface CtaButtonProps {
  message: string
  children: React.ReactNode
  variant?: "solid" | "outline"
  className?: string
}

export function CtaButton({ message, children, variant = "solid", className }: CtaButtonProps) {
  return (
    <Link
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-sm px-8 py-4 font-heading text-base font-600 uppercase tracking-[0.12em] transition-all duration-300",
        variant === "solid" &&
          "bg-gold text-primary-foreground hover:gold-glow hover:brightness-110",
        variant === "outline" &&
          "hairline-gold text-offwhite hover:bg-gold hover:text-primary-foreground",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  )
}
