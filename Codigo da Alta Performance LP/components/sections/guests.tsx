import { Reveal } from "@/components/reveal"
import { Lock } from "lucide-react"

export function Guests() {
  return (
    <section className="bg-graphite py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <p className="font-body text-sm font-600 uppercase tracking-[0.22em] text-gold">
            Participações especiais
          </p>
          <h2 className="mt-5 font-heading text-3xl font-700 uppercase leading-tight tracking-tight text-offwhite text-balance sm:text-5xl">
            Convidados que serão revelados durante a jornada
          </h2>
          <p className="mx-auto mt-7 max-w-2xl font-body text-lg font-400 leading-relaxed text-muted-foreground">
            Ao longo da mentoria, você terá acesso a empresários e profissionais
            convidados que construíram resultados acima da média e compartilharão
            aprendizados reais.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Reveal key={i} delay={i * 110}>
              <div className="glass flex aspect-[4/5] flex-col items-center justify-center rounded-sm p-6">
                <span className="flex h-16 w-16 items-center justify-center rounded-full hairline-gold">
                  <Lock className="h-7 w-7 text-gold" strokeWidth={1.4} />
                </span>
                <p className="mt-6 font-heading text-2xl font-700 uppercase tracking-[0.2em] text-offwhite/40">
                  ?
                </p>
                <p className="mt-3 font-body text-xs font-500 uppercase tracking-[0.16em] text-muted-foreground">
                  A ser revelado
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
