"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    q: "As aulas ficam gravadas?",
    a: "Sim. Todos os encontros são gravados e ficam disponíveis na área de membros para você assistir quando e quantas vezes quiser.",
  },
  {
    q: "Como funcionam os encontros?",
    a: "São 6 encontros ao vivo realizados via Zoom, cada um com mais de 2 horas de duração, com conteúdo aprofundado e espaço para interação.",
  },
  {
    q: "Preciso participar ao vivo?",
    a: "O ideal é participar ao vivo para aproveitar a troca e o networking, mas caso não consiga, todas as sessões ficam gravadas para você acessar depois.",
  },
  {
    q: "Quanto tempo dura cada encontro?",
    a: "Cada encontro tem mais de 2 horas de duração, com profundidade real em cada tema abordado.",
  },
  {
    q: "Para quem essa mentoria é indicada?",
    a: "Para empresários e profissionais de alta ambição que querem encurtar anos de tentativa e erro e acelerar resultados pessoais e profissionais.",
  },
  {
    q: "Como funciona a comunidade?",
    a: "Você terá acesso a uma comunidade exclusiva de empresários, um ambiente reservado para networking, parcerias e troca de experiências de alto nível.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <p className="font-body text-sm font-600 uppercase tracking-[0.22em] text-gold">
            Dúvidas frequentes
          </p>
          <h2 className="mt-5 font-heading text-3xl font-700 uppercase leading-tight tracking-tight text-offwhite text-balance sm:text-5xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg font-500 uppercase tracking-wide text-offwhite">
                    {item.q}
                  </span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="font-body text-base font-300 leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
