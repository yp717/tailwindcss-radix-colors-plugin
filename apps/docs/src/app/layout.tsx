import PageLayout from '../components/navigation/PageLayout'
import '../styles/globals.css'
import Providers from './providers'

interface IRootLayoutProps {
  children: React.ReactNode
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
