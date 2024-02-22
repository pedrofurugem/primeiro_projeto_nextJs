import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Image from 'next/image'

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
          <div className="flex flex-col m-2 mx-auto">
            <Image src="/banner.png"  width={1017} height={78} alt="comunidade do universo dev"/>
           {children}
          </div>
        </div>
      </body>
    </html>
  )
}