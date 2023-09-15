import './globals.css'
import { Inter } from 'next/font/google'


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  
  title: 'LPBT Clubs',
  description: 'The official website for Borguiba highschool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
