import './globals.css'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Multi-Step Form | Frontend Mentor',
  description: 'Multi-Step Form | A Frontend Mentor Challenge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
