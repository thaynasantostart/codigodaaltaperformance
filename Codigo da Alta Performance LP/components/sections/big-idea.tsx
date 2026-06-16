import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function BigIdea() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/ambiance-lounge.png"
          alt=""
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <p className="font-body text-sm font-600 uppercase tracking-[0.22em] text-gold">
            A grande ideia
          </p>
          <h2 className="mt-5 font-heading text-3xl font-700 uppercase leading-[1.02] tracking-tight text-offwhite text-balance sm:text-5xl">
            Vamos abrir os segredos de quem deu um{" "}
            <span className="text-gold-gradient">salto quântico</span> no negócio
          </h2>
        </Reveal>

        <div className="mt-10 space-y-6 border-l-2 border-gold/40 pl-6 sm:pl-8">
          {[
            "O crescimento raramente acontece porque alguém trabalhou mais.",
            "Ele acontece porque alguém aprendeu mais rápido.",
            "Empresários de alta performance tomam decisões diferentes porque possuem acesso a informações, ambientes e relacionamentos diferentes.",
            "O Código da Alta Performance foi criado para encurtar esse caminho.",
          ].map((p, i) => (
            <Reveal key={p} delay={i * 100}>
              <p className="font-body text-lg font-400 leading-relaxed text-offwhite/90">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
