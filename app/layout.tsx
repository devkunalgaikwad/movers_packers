import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movers and Packers',
  description: 'Design and develop a landing page for a moving and shifting company based in Abu Dhabi. The page should be visually appealing, mobile-responsive, and optimized for conversions. Services include home moving, office shifting, and international moving. Contact us for a free quote.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
