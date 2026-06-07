import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Navbar
from '@/components/Navbar'
export default function HomePage() {

  return (

    <main
      style={{
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
<Navbar />
      <Hero />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          zIndex: 20,
        }}
      >
        <Footer />
      </div>

    </main>
  )
}