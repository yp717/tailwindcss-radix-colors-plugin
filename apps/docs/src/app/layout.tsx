import '../styles/globals.css'

interface IRootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: IRootLayoutProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
