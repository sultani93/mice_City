import React from 'react'
import './Partnership.css'
import border from '../../components/images/border.jpg'
import partner from '../../components/images/partners.png'

const Partnership = () => {
  const partners = [
    {
      imageMic: partner,
    },
    {
      imageMic: partner,
    },
    {
      imageMic: partner,
    },
    {
      imageMic: partner,
    },
    {
      imageMic: partner,
    },
    {
      imageMic: partner,
    },
    {
      imageMic: partner,
    },
  ]
  return (
    <div className='partnership'>
      <div className='container'>
        <div className='content'>
          <h2>Partnership</h2>
          <img src={border} alt='bottom-border' />
          <div className='partner_list'>
            {partners.map((item, index) => (
              <div className='partner_item' key={index}>
                <img src={item.imageMic} alt='partner' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partnership
