import './globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Random meal',
  description: 'Consiga una comida al azar.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
