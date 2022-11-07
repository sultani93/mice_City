import React from 'react'
import './Services.css'

const servicesInfo = [
  {
    heading: 'Mice',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis. Quisque volutpat ex vel turpis laoreet blandit at vitae ex.',
    servicesBtn: 'Read more',
  },
  {
    heading: 'Incoming',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis. Quisque volutpat ex vel turpis laoreet blandit at vitae ex.',
    servicesBtn: 'Read more',
  },
  {
    heading: 'Corporate',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis. Quisque volutpat ex vel turpis laoreet blandit at vitae ex.',
    servicesBtn: 'Read more',
  },
  {
    heading: 'Teklifler',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis. Quisque volutpat ex vel turpis laoreet blandit at vitae ex.',
    servicesBtn: 'Read more',
  },
]

const Services = () => {
  return (
    <div className='services'>
      <div className='container'>
        <div className='content'>
          <div className='our_services'>
            <h2>Xidmetlerimiz</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto nemo obcaecati pariatur consectetur id corrupti ut!
              Tenetur deleniti ea repudiandae.
            </p>
            <div className='services_card'>
              {servicesInfo.map((item, index) => (
                <div className='services_heading' key={index}>
                  <h3>{item.heading}</h3>
                  <p>{item.info}</p>
                  <button>{item.servicesBtn}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
