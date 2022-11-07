import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <h2>Contact</h2>
      <div className='contact_info'>
        <form action=''>
          <div className='main_info'>
            <input type='text' placeholder='Name' />
            <input type='number' placeholder='Phone number' />
            <input type='email' placeholder='Email' />
          </div>
          <div className='contact_second_info'>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='Subject'
            ></textarea>
            <button type='button'>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
