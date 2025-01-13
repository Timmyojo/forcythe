import Blog from './components/Blog'
import CallToAction from './components/CallToAction'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Steps from './components/Steps'
import Testimonial from './components/Testimonial'
import WhyUs from './components/WhyUs'
import './index.css'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Testimonial />
    <Clients />
    <Steps />
    <WhyUs />
    <Stats />
    <Blog />
    <CallToAction />
    <Footer />
    </>
  )
}

export default App
