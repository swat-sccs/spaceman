import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import ThemeRegistry from './ThemeRegistry'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={raleway.className}>
            <ThemeRegistry options={{ key: 'mui' }}>
                {children}
            </ThemeRegistry>
        </body>
    </html>
)
}
