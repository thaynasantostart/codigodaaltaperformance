import { Reveal } from "@/components/reveal"

const modules = [
  { n: "01", title: "Clareza e Metas", desc: "Como construir uma visão estratégica que acelera resultados." },
  { n: "02", title: "Gestão do Tempo", desc: "Como eliminar desperdícios e aumentar produtividade." },
  { n: "03", title: "Alta Performance Física", desc: "Energia, saúde e performance como vantagem competitiva." },
  { n: "04", title: "Liderança", desc: "Como desenvolver equipes que crescem junto com você." },
  { n: "05", title: "Comunicação", desc: "Influência, posicionamento e tomada de decisão." },
  { n: "06", title: "Crescimento Exponencial", desc: "Os princípios utilizados por empresários que crescem acima da média." },
]

export function Journey() {
  return (
    <section id="jornada" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="text-center">
          <p className="font-body text-sm font-600 uppercase tracking-[0.22em] text-gold">
            6 módulos
          </p>
          <h2 className="mt-5 font-heading text-3xl font-700 uppercase leading-tight tracking-tight text-offwhite text-balance sm:text-5xl">
            A jornada dos 45 dias
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/50 via-gold/25 to-transparent sm:left-1/2" />

          <ol className="space-y-10">
            {modules.map((m, i) => {
              const isLeft = i % 2 === 0
              return (
                <Reveal as="li" key={m.n} delay={(i % 2) * 80}>
                  <div
                    className={`relative flex items-start gap-6 sm:w-1/2 ${
                      isLeft ? "sm:pr-12" : "sm:ml-auto sm:flex-row-reverse sm:pl-12"
                    }`}
                  >
                    {/* node */}
                    <span
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-card font-heading text-lg font-700 text-gold sm:absolute sm:top-2 ${
                        isLeft ? "sm:-right-7" : "sm:-left-7"
                      }`}
                    >
                      {m.n}
                    </span>
                    <div
                      className={`flex-1 rounded-sm border border-border bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold/40 ${
                        isLeft ? "sm:text-right" : "sm:text-left"
                      }`}
                    >
                      <p className="font-body text-xs font-600 uppercase tracking-[0.18em] text-gold/80">
                        Módulo {m.n}
                      </p>
                      <h3 className="mt-1.5 font-heading text-xl font-600 uppercase tracking-wide text-offwhite">
                        {m.title}
                      </h3>
                      <p className="mt-2 font-body text-sm font-400 leading-relaxed text-muted-foreground">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
