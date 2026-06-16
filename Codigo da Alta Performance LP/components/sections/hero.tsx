import Image from "next/image"
import { Check } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { WA_MESSAGES } from "@/lib/site"

const bullets = [
  "45 dias para encurtar anos de tentativa e erro",
  "Encontros ao vivo via Zoom",
  "Comunidade exclusiva de empresários",
  "Participações especiais",
  "Conteúdo gravado para assistir quando quiser",
]

export function Hero() {
  return (
    <section id="topo" className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/ambiance-library.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-32 lg:grid-cols-2 lg:gap-8 lg:pt-28">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 hairline-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="font-body text-xs font-600 uppercase tracking-[0.2em] text-gold">
              Mentoria de elite para empresários
            </span>
          </div>

          <h1 className="font-heading text-4xl font-700 uppercase leading-[0.95] tracking-tight text-offwhite text-balance sm:text-5xl lg:text-6xl">
            Acelere 3 anos do seu crescimento pessoal e profissional em apenas{" "}
            <span className="text-gold-gradient">45 dias</span>
          </h1>

          <p className="mt-6 max-w-xl font-body text-lg font-500 leading-relaxed text-offwhite/90">
            Você não precisa esperar anos para aprender aquilo que os empresários
            de alta performance já descobriram.
          </p>

          <p className="mt-4 max-w-xl font-body text-base font-300 leading-relaxed text-muted-foreground">
            Tenha acesso aos atalhos que encurtam anos de tentativa e erro e
            descubra os princípios, decisões e estratégias que aceleram
            resultados.
          </p>

          <ul className="mt-8 grid gap-3">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full hairline-gold">
                  <Check className="h-3.5 w-3.5 text-gold" />
                </span>
                <span className="font-body text-sm font-400 text-offwhite/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <CtaButton message={WA_MESSAGES.saberMais}>
              Quero acelerar meus resultados
            </CtaButton>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
              </span>
              <span className="font-body text-xs font-500 uppercase tracking-[0.12em] text-muted-foreground">
                Vagas limitadas por turma
              </span>
            </div>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative order-1 lg:order-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-sm hairline-gold">
            <Image
              src="/images/thiago-portrait.png"
              alt="Dr. Thiago, mentor do Código da Alta Performance"
              fill
              priority
              className="scale-[1.12] object-cover object-top [transform-origin:top]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-heading text-lg font-600 uppercase tracking-[0.1em] text-offwhite">
                Dr. Thiago
              </p>
              <p className="font-body text-sm font-400 text-gold">
                Mentor · Alta Performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
