import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Montserrat } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const montserrat = Montserrat({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Código da Alta Performance | Mentoria de Elite para Empresários',
  description:
    'Acelere 3 anos do seu crescimento pessoal e profissional em apenas 45 dias. Tenha acesso aos atalhos que encurtam anos de tentativa e erro ao lado de empresários de alta performance.',
  generator: 'v0.app',
  openGraph: {
    title: 'Código da Alta Performance',
    description:
      'Acelere 3 anos do seu crescimento em apenas 45 dias ao lado de empresários de alta performance.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B0B0B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${oswald.variable} ${montserrat.variable}`}
    >
      <body className="bg-background font-body antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
