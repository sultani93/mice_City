import React from 'react'
import './mice.css'
import partyImg from '../../components/images/Untitled-2.jpg'

const Mice = () => {
  const micePic = [
    {
      imageMic: partyImg,
    },
    {
      imageMic: partyImg,
    },
    {
      imageMic: partyImg,
    },
    {
      imageMic: partyImg,
    },
    {
      imageMic: partyImg,
    },
    {
      imageMic: partyImg,
    },
    {
      imageMic: partyImg,
    },
    {
      imageMic: partyImg,
    },
    {
      imageMic: partyImg,
    },
    {
      imageMic: partyImg,
    },
    {
      imageMic: partyImg,
    },
    {
      imageMic: partyImg,
    },
  ]
  return (
    <div className='mice'>
      <div className='container'>
        <div className='content'>
          <div className='mice_plosadki'>
            <h2>MICE плоъщадки</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eleifend enim sed ante placerat, luctus tincidunt massa sagittis.
              Quisque volutpat ex vel turpis laoreet blandit at vitae ex.
            </p>
            <div className='miceImg'>
              {micePic.map((item, index) => (
                <div className='micePic_wrap' key={index}>
                  <div className='miceItem'>
                    <img src={item.imageMic} alt='mice items' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mice
