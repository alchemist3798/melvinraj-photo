import type { Metadata } from 'next'
import './globals.css'

// import Navbar from '@/components/Navbar'

import { inter }
from '@/app/fonts'

export const metadata: Metadata = {
  title: 'Melvin Raj Archive',
  description:
    'Film photographs, fragments, studies.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (

    <html lang="en">

      <body
        className={inter.className}
      >

        {children}
      </body>

    </html>

  )
}