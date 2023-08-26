
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SectionDaily from './components/SectionDaily'
import { SectionLocalfarm } from './components/SectionLocalfarm'
import SectionMenu from './components/SectionMenu'
import SectionShop from './components/SectionShop'
import SectionSupport from './components/SectionSupport'
import SectionTestimonials from './components/SectionTestimonials'

function App() {
 return (
    <div>
      <Navbar />
      <SectionSupport />
      <SectionMenu />
      <SectionShop />
      <SectionDaily />
      <SectionTestimonials />
      <SectionLocalfarm />
      <Footer />
    </div>
  )
}

export default App
