import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Portfolio from './pages/Portfolio/Portfolio'
import Suggestions from './pages/Tekliflerimiz/Suggestions'
import Mice from './pages/Mice/Mice'
import Dostoprimitelstvo from './pages/Dostoprimitelstvo/Dostoprimitelstvo'
import Contact from './pages/Contact/Contact'
import Partnership from './pages/Partnership/Partnership'
import OurTeam from './pages/OurTeam/OurTeam'

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <About />
      <Services />
      <Suggestions />
      <OurTeam />
      <Portfolio />
      <Mice />
      <Dostoprimitelstvo />
      <Partnership />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
