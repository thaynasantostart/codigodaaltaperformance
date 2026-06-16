export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
        <div className="flex flex-col leading-none">
          <span className="font-heading text-base font-700 uppercase tracking-[0.18em] text-offwhite">
            Código da
          </span>
          <span className="font-heading text-base font-700 uppercase tracking-[0.18em] text-gold-gradient">
            Alta Performance
          </span>
        </div>
        <p className="max-w-md font-body text-xs font-300 leading-relaxed text-muted-foreground">
          Mentoria de elite para empresários que querem encurtar anos de
          tentativa e erro.
        </p>
        <p className="font-body text-xs font-300 text-muted-foreground/70">
          © {new Date().getFullYear()} Código da Alta Performance. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  )
}
