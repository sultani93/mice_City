import About from '../pages/About/About'
import Home from '../pages/Home/Home'
import Services from '../pages/Services/Services'
import Portfolio from '../pages/Portfolio/Portfolio'
import Suggestions from '../pages/Tekliflerimiz/Suggestions'
import Mice from '../pages/Mice/Mice'
import Dostoprimitelstvo from '../pages/Dostoprimitelstvo/Dostoprimitelstvo'
import Contact from '../pages/Contact/Contact'
import Partnership from '../pages/Partnership/Partnership'
import OurTeam from '../pages/OurTeam/OurTeam'
import { Routes, Route, Navigate } from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/suggestions' element={<Suggestions />} />
      <Route path='/mice' element={<Mice />} />
      <Route path='/dostoprimitelstvo' element={<Dostoprimitelstvo />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/partnership' element={<Partnership />} />
      <Route path='/ourTeam' element={<OurTeam />} />
    </Routes>
  )
}

export default Routers
