import { Reveal } from "@/components/reveal"
import { PlayCircle, Users, FileText, Network, Star } from "lucide-react"

const bonuses = [
  { n: "01", icon: PlayCircle, title: "Acesso às gravações", desc: "Reveja cada encontro quantas vezes precisar." },
  { n: "02", icon: Users, title: "Comunidade exclusiva", desc: "Ambiente reservado para empresários de alto nível." },
  { n: "03", icon: FileText, title: "Materiais complementares", desc: "Recursos práticos para aplicar cada módulo." },
  { n: "04", icon: Network, title: "Networking estratégico", desc: "Conexões que abrem portas e geram parcerias." },
  { n: "05", icon: Star, title: "Participações especiais", desc: "Convidados com resultados acima da média." },
]

export function Bonus() {
  return (
    <section id="bonus" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-graphite to-background" />
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="text-center">
          <p className="font-body text-sm font-600 uppercase tracking-[0.22em] text-gold">
            Empilhamento de valor
          </p>
          <h2 className="mt-5 font-heading text-3xl font-700 uppercase leading-tight tracking-tight text-offwhite text-balance sm:text-5xl">
            Bônus inclusos na sua jornada
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4">
          {bonuses.map((b, i) => (
            <Reveal key={b.n} delay={i * 80}>
              <div className="group relative flex items-center gap-5 overflow-hidden rounded-sm border border-gold/25 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold/50 hover:gold-glow sm:gap-7 sm:p-7">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 gold-shimmer" />
                <span className="font-heading text-4xl font-700 leading-none text-gold/30 sm:text-5xl">
                  {b.n}
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm hairline-gold">
                  <b.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                </span>
                <div className="relative">
                  <p className="font-body text-xs font-600 uppercase tracking-[0.16em] text-gold/80">
                    Bônus {b.n}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-600 uppercase tracking-wide text-offwhite sm:text-xl">
                    {b.title}
                  </h3>
                  <p className="mt-1 font-body text-sm font-400 leading-relaxed text-muted-foreground">
                    {b.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
