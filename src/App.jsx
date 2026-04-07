import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Sobre } from '@/components/sections/Sobre'
import { Servicos } from '@/components/sections/Servicos'
import { BannerCTA } from '@/components/sections/BannerCTA'
import { Depoimentos } from '@/components/sections/Depoimentos'
import { Contato } from '@/components/sections/Contato'
import { WhatsAppFloat } from '@/components/sections/WhatsAppFloat'
import { Footer } from '@/components/layout/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <BannerCTA />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
