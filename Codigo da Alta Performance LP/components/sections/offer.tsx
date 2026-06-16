import { Reveal } from "@/components/reveal"
import { CtaButton } from "@/components/cta-button"
import { WA_MESSAGES } from "@/lib/site"
import { Check } from "lucide-react"

const includes = [
  "45 dias de aceleração",
  "6 encontros ao vivo",
  "Gravações",
  "Comunidade",
  "Networking",
  "Materiais complementares",
  "Participações especiais",
]

export function Offer() {
  return (
    <section id="oferta" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-graphite" />
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm border border-gold/30 bg-card p-8 gold-glow sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />

            <p className="text-center font-body text-sm font-600 uppercase tracking-[0.22em] text-gold">
              A oferta
            </p>
            <h2 className="mt-4 text-center font-heading text-3xl font-700 uppercase leading-tight tracking-tight text-offwhite text-balance sm:text-4xl">
              Código da Alta Performance
            </h2>

            <ul className="mx-auto mt-9 grid max-w-md gap-3 sm:grid-cols-2">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  <span className="font-body text-sm font-400 text-offwhite/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-border pt-8 text-center">
              <p className="font-body text-xs font-500 uppercase tracking-[0.18em] text-muted-foreground">
                Investimento
              </p>
              <p className="mt-2 font-heading text-5xl font-700 text-gold-gradient sm:text-6xl">
                R$ 1.497
              </p>
              <p className="mt-2 font-body text-sm font-300 text-muted-foreground">
                Acesso completo · Turma com vagas limitadas
              </p>

              <div className="mt-8 flex justify-center">
                <CtaButton message={WA_MESSAGES.garantirVaga} className="w-full sm:w-auto">
                  Quero garantir minha vaga
                </CtaButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
