import { Inter } from 'next/font/google'
import { Header } from '@/components/section/Header'
import { Footer } from '@/components/section/Footer'
import './globals.css'
import '@/styles/FogAnimation.css';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="overflow-x-hidden">
      <body className={`${inter.className} bg-[#000000] overflow-x-hidden relative`}>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="fog-layer fog-layer-1"></div>
          <div className="fog-layer fog-layer-2"></div>
          <div className="fog-layer fog-layer-3"></div>
        </div>
        <Header />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
