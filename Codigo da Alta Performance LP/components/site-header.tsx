"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { whatsappLink, WA_MESSAGES } from "@/lib/site"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass py-3" : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <Link href="#topo" className="flex flex-col leading-none">
          <span className="font-heading text-lg font-700 uppercase tracking-[0.18em] text-offwhite">
            Código da
          </span>
          <span className="font-heading text-lg font-700 uppercase tracking-[0.18em] text-gold-gradient">
            Alta Performance
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            { href: "#mentoria", label: "A Mentoria" },
            { href: "#jornada", label: "A Jornada" },
            { href: "#bonus", label: "Bônus" },
            { href: "#oferta", label: "Investimento" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-sm font-500 uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={whatsappLink(WA_MESSAGES.saberMais)}
          target="_blank"
          rel="noopener noreferrer"
          className="hairline-gold rounded-sm px-5 py-2.5 font-heading text-sm font-600 uppercase tracking-[0.1em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
        >
          Quero entrar
        </Link>
      </div>
    </header>
  )
}
