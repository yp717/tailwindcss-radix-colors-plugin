import PageLayout from '../components/navigation/PageLayout'
import '../styles/globals.css'

interface IRootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: IRootLayoutProps) => {
  return (
    <html lang="en" className="h-full">
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  )
}

export default RootLayout
