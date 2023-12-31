import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quiosco App',
  description: 'Quiosco de comida',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='md:flex'>
          <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
            <Sidebar />
          </aside>
          <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
