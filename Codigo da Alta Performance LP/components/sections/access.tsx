import Image from "next/image"
import { Reveal } from "@/components/reveal"

const items = ["Bastidores", "Decisões", "Erros", "Acertos", "Estratégias", "Atalhos"]

export function Access() {
  return (
    <section className="bg-graphite py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <p className="font-body text-sm font-600 uppercase tracking-[0.22em] text-gold">
            Você não terá apenas aulas
          </p>
          <h2 className="mt-5 font-heading text-3xl font-700 uppercase leading-[1.04] tracking-tight text-offwhite text-balance sm:text-4xl lg:text-5xl">
            Você terá acesso a empresários que já chegaram onde você quer chegar
          </h2>
          <p className="mt-7 font-body text-lg font-400 leading-relaxed text-muted-foreground">
            Aprenda diretamente com pessoas que já enfrentaram os desafios que
            você enfrenta hoje.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {items.map((item) => (
              <span
                key={item}
                className="rounded-full hairline-gold px-5 py-2 font-heading text-sm font-500 uppercase tracking-[0.1em] text-offwhite/90"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-sm hairline-gold">
            <Image
              src="/images/thiago-pen.png"
              alt="Dr. Thiago em ambiente executivo"
              fill
              className="scale-[1.1] object-cover object-top [transform-origin:top]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
