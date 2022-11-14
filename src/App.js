import { useEffect } from 'react'
import { useState } from 'react'
import Layout from './components/Layout/Layout'
import loader from './components/images/mice.gif'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  return (
    <div className='App '>
      {loading ? (
        <div className='loader-container'>
          <img src={loader} alt='loader-gif' />
        </div>
      ) : (
        <div className='fade-in'>
          <Layout />
        </div>
      )}
    </div>
  )
}

export default App
