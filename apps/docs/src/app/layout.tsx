import PageLayout from '../components/navigation/PageLayout'
import '../styles/globals.css'
import Providers from './providers'
import Head from 'next/head'

interface IRootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: IRootLayoutProps) => {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <Head>
        <meta
          property="twitter:image"
          content="https://tailwind-radix-plugin-docs.vercel.app/og.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="tailwindcss-radix-colors-plugin"
        />
        <meta
          property="twitter:description"
          content="A plugin to Seamlessly integratate Radix Colors into TailwindCSS"
        />
        <meta
          property="description"
          content="A plugin to Seamlessly integratate Radix Colors into TailwindCSS"
        />
        <meta
          property="og:image"
          content="https://tailwind-radix-plugin-docs.vercel.app/og.png"
        />
        <meta property="og:title" content="tailwindcss-radix-colors-plugin" />
        <meta
          property="og:description"
          content="A plugin to Seamlessly integratate Radix Colors into TailwindCSS"
        />
        <meta
          property="og:url"
          content="https://tailwind-radix-plugin-docs.vercel.app"
        ></meta>
      </Head>

      <body>
        <Providers>
          <PageLayout>{children}</PageLayout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
