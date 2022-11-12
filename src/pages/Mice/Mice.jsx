import React, { useState } from 'react'
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
  const [model, setModel] = useState(false)
  const [tempimgSrc, setTempImgSrc] = useState('')

  const getImg = (imageMic) => {
    setTempImgSrc(imageMic)
    setModel(true)
  }

  return (
    <>
      <div className={model ? 'model galleryOpen' : 'model'}>
        <img src={tempimgSrc} alt='modal gallery' />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
          onClick={() => setModel(false)}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </div>
      <div className='mice' to='mice'>
        <div className='container'>
          <div className='content'>
            <div className='mice_plosadki'>
              <h2>MICE плоъщадки</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eleifend enim sed ante placerat, luctus tincidunt
                massa sagittis. Quisque volutpat ex vel turpis laoreet blandit
                at vitae ex.
              </p>

              <div className='miceImg'>
                {micePic.map((item, index) => (
                  <div
                    className='micePic_wrap'
                    key={index}
                    onClick={() => getImg(item.imageMic)}
                  >
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
    </>
  )
}

export default Mice
