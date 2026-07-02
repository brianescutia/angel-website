import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Mission from './components/Mission.jsx'
import Programs from './components/Programs.jsx'
import Impact from './components/Impact.jsx'
import Tiendita from './components/Tiendita.jsx'
import Gallery from './components/Gallery.jsx'
import Events from './components/Events.jsx'
import Donate from './components/Donate.jsx'
import GetInvolved from './components/GetInvolved.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Programs />
        <Impact />
        <Tiendita />
        <Gallery />
        <Events />
        <Donate />
        <GetInvolved />
      </main>
      <Footer />
    </>
  )
}
