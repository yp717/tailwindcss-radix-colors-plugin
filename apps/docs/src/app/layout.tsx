import { Metadata } from 'next'

import PageLayout from '../components/navigation/PageLayout'
import '../styles/globals.css'
import Providers from './providers'

interface IRootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    default: 'tailwindcss-radix-colors-plugin',
    template: '%s | tailwindcss-radix-colors-plugin',
  },
  description: 'Seamless integratation for Radix Colors into TailwindCSS',
  openGraph: {
    title: 'tailwindcss-radix-colors-plugin',
    description: 'Seamless integratation for Radix Colors into TailwindCSS',
    url: 'https://tailwind-radix-plugin-docs.vercel.app/',
    siteName: 'tailwindcss-radix-colors-plugin',
    images: [
      {
        url: 'https://tailwind-radix-plugin-docs.vercel.app/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
}

const RootLayout = ({ children }: IRootLayoutProps) => {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body>
        <Providers>
          <PageLayout>{children}</PageLayout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
