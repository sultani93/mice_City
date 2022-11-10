import React from 'react'
import './Dostoprimitelstvo.css'
import partyImg from '../../components/images/Untitled-2.jpg'

const Dostoprimitelstvo = () => {
  const dostoprimeImg = [
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
    <div className='dostprime' id='dostprime'>
      <div className='container'>
        <div className='content'>
          <div className='dost_info'>
            <h2>Достопримечательности</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eleifend enim sed ante placerat, luctus tincidunt massa sagittis.
              Quisque volutpat ex vel turpis laoreet blandit at vitae ex.
            </p>
            <div className='dostImg'>
              {dostoprimeImg.map((item, index) => (
                <div className='dostoprimeImg_wrap' key={index}>
                  <div className='dostItem'>
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

export default Dostoprimitelstvo
