import { Reveal } from "@/components/reveal"
import { Clock, TrendingDown, Hourglass } from "lucide-react"

const losses = [
  { icon: Hourglass, label: "Oportunidades perdidas" },
  { icon: Clock, label: "Decisões atrasadas" },
  { icon: TrendingDown, label: "Resultados que poderiam estar acontecendo agora" },
]

export function CostOfWaiting() {
  return (
    <section className="relative overflow-hidden bg-graphite py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-graphite" />
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <p className="font-body text-sm font-600 uppercase tracking-[0.22em] text-gold">
            O custo de esperar
          </p>
          <h2 className="mt-5 font-heading text-3xl font-700 uppercase leading-tight tracking-tight text-offwhite text-balance sm:text-5xl">
            Quanto está custando esperar?
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-7 max-w-2xl font-body text-lg font-400 leading-relaxed text-muted-foreground">
            Enquanto você tenta descobrir sozinho o próximo passo, outros
            empresários estão aprendendo diretamente com quem já percorreu o
            caminho.
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base font-300 leading-relaxed text-offwhite/80">
            O custo da demora não é apenas tempo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {losses.map((item, i) => (
            <Reveal key={item.label} delay={i * 120}>
              <div className="glass h-full rounded-sm p-7 transition-all duration-300 hover:gold-glow">
                <item.icon className="mx-auto h-8 w-8 text-gold" strokeWidth={1.4} />
                <p className="mt-5 font-body text-base font-500 leading-relaxed text-offwhite/90">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
