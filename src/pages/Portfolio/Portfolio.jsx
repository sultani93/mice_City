import React from 'react'
import './Portfolio.css'
import partyImg from '../../components/images/Untitled-2.jpg'

const Portfolio = () => {
  const portfolioDetails = [
    {
      image: partyImg,
      partyInfo: 'Lorem ipsum dolor sit amet',
      partyDetails:
        'Consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
    {
      image: partyImg,
      partyInfo: 'Lorem ipsum dolor sit amet',
      partyDetails:
        'Consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
    {
      image: partyImg,
      partyInfo: 'Lorem ipsum dolor sit amet',
      partyDetails:
        'Consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
    {
      image: partyImg,
      partyInfo: 'Lorem ipsum dolor sit amet',
      partyDetails:
        'Consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
    {
      image: partyImg,
      partyInfo: 'Lorem ipsum dolor sit amet',
      partyDetails:
        'Consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
    {
      image: partyImg,
      partyInfo: 'Lorem ipsum dolor sit amet',
      partyDetails:
        'Consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
  ]
  return (
    <div className='portfolio' id='portfolio'>
      <div className='container'>
        <div className='content'>
          <div className='our_portfolio'>
            <h2>Portfolio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eleifend enim sed ante placerat, luctus tincidunt massa sagittis.
            </p>
            <span>Bize etibar olunan tedbirler:</span>
            <div className='party_details'>
              {portfolioDetails.map((item, index) => (
                <div className='party' keY={index}>
                  <div className='img-wrapper'>
                    <img
                      clasname='suggestPic'
                      src={item.image}
                      alt='suggest_items'
                    />
                  </div>
                  <h5>{item.partyInfo}</h5>
                  <p>{item.partyDetails}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
