import { Reveal } from "@/components/reveal"
import {
  CalendarDays,
  Video,
  Clock3,
  Star,
  Users,
  Lock,
  PlayCircle,
  FileText,
} from "lucide-react"

const features = [
  { icon: CalendarDays, title: "45 dias de imersão", desc: "Uma jornada intensa de transformação e aceleração de resultados." },
  { icon: Video, title: "6 encontros ao vivo", desc: "Sessões ao vivo via Zoom, direto com quem já percorreu o caminho." },
  { icon: Clock3, title: "Mais de 2 horas por encontro", desc: "Profundidade real em cada tema, sem superficialidade." },
  { icon: Star, title: "Participações especiais", desc: "Convidados que construíram resultados acima da média." },
  { icon: Users, title: "Networking estratégico", desc: "Conexões com empresários do mesmo nível de ambição." },
  { icon: Lock, title: "Comunidade exclusiva", desc: "Um ambiente reservado para troca entre pares." },
  { icon: PlayCircle, title: "Acesso às gravações", desc: "Assista quando e quantas vezes quiser." },
  { icon: FileText, title: "Materiais complementares", desc: "Recursos para aprofundar e aplicar cada módulo." },
]

export function WhatIs() {
  return (
    <section id="mentoria" className="bg-graphite py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-3xl">
          <p className="font-body text-sm font-600 uppercase tracking-[0.22em] text-gold">
            A mentoria
          </p>
          <h2 className="mt-5 font-heading text-3xl font-700 uppercase leading-tight tracking-tight text-offwhite text-balance sm:text-5xl">
            O que é o Código da Alta Performance
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 90}>
              <div className="group h-full rounded-sm border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:gold-glow">
                <span className="flex h-12 w-12 items-center justify-center rounded-sm hairline-gold transition-colors group-hover:bg-gold/10">
                  <f.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-600 uppercase tracking-wide text-offwhite">
                  {f.title}
                </h3>
                <p className="mt-2 font-body text-sm font-400 leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
