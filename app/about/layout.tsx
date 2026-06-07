import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
  style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#F5F1EB',
  }}
>
      <Navbar light />

      <main
        style={{
          flex: 1,
        }}
      >
        {children}
      </main>

      <Footer />
    </div>
  )
}