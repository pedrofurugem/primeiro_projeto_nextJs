import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import Preline from '@/components/Preline'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Community | Universo Dev',
  description: 'Os primeiros passos com Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Preline />
      <body className={inter.className}>
        <div className="flex flex-row min-h-screen bg-default">
          <Sidebar />
          <div>Principal</div>
         {children}
        </div>
      </body>
    </html>
  )
}