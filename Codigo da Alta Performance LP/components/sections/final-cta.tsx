import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { CtaButton } from "@/components/cta-button"
import { WA_MESSAGES } from "@/lib/site"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/thiago-pen.png"
          alt="Dr. Thiago, mentor do Código da Alta Performance"
          fill
          className="scale-[1.18] object-cover object-[70%_top] [transform-origin:top]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="mx-auto flex min-h-[90vh] max-w-6xl items-center px-5 py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-body text-sm font-600 uppercase tracking-[0.22em] text-gold">
              A decisão é sua
            </p>
            <h2 className="mt-5 font-heading text-4xl font-700 uppercase leading-[0.96] tracking-tight text-offwhite text-balance sm:text-6xl">
              Os próximos 45 dias vão passar de qualquer forma
            </h2>
            <p className="mt-7 max-w-xl font-body text-lg font-400 leading-relaxed text-offwhite/90">
              A diferença é decidir se você continuará tentando descobrir tudo
              sozinho ou terá acesso aos atalhos que encurtam anos de tentativa e
              erro.
            </p>
            <div className="mt-10">
              <CtaButton message={WA_MESSAGES.garantirVaga}>
                Quero acelerar meu crescimento
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
