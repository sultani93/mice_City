import React from 'react'
import './contact.css'
import MapContainer from '../MapContainer/MapContainer'

const Contact = () => {
  return (
    <section className='contactSection'>
      <div className='map_wrapper'>
        <MapContainer />
      </div>
      <div className='contact' id='contact'>
        <h2>Contact</h2>
        <div className='contact_info'>
          <form>
            <div className='main_info'>
              <input type='text' placeholder='Name' />
              <input type='number' placeholder='Phone number' />
              <input type='email' placeholder='Email' />
            </div>
            <div className='contact_second_info'>
              <textarea
                name=''
                id=''
                cols='10'
                rows='5'
                placeholder='Subject'
              ></textarea>
              <button type='button'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
