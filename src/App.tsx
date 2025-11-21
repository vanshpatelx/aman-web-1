import './App.css'
import Hero from './pages/Hero.tsx'
import About from './pages/About.tsx'
import TeamSection from './pages/Teams.tsx'
import Footer from './pages/Footer.tsx'
import Services from './pages/Services.tsx'
import ContactSection from './pages/Contact.tsx'

function App() {

  return (
    <>
      <Hero />
      <About />
      <Services />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
