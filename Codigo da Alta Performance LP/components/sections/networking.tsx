import Image from "next/image"
import { Reveal } from "@/components/reveal"

const points = [
  "Comunidade exclusiva",
  "Conexões estratégicas",
  "Parcerias",
  "Troca de experiências",
  "Relacionamentos que aceleram resultados",
]

export function Networking() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/ambiance-networking.png"
          alt=""
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <p className="font-body text-sm font-600 uppercase tracking-[0.22em] text-gold">
            Networking
          </p>
          <h2 className="mt-5 font-heading text-3xl font-700 uppercase leading-tight tracking-tight text-offwhite text-balance sm:text-5xl">
            Seu próximo salto pode estar em uma{" "}
            <span className="text-gold-gradient">única conversa</span>
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {points.map((p, i) => (
            <Reveal key={p} delay={i * 80}>
              <span className="glass rounded-full px-6 py-3 font-body text-sm font-500 text-offwhite/90">
                {p}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
