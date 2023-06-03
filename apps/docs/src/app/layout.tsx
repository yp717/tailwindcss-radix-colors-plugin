import PageLayout from '../components/PageLayout'
import '../styles/globals.css'

interface IRootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: IRootLayoutProps) => {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  )
}

export default RootLayout
