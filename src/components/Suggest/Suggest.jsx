import React from 'react'
import services1 from '../../components/images/suggest1.png'
import services2 from '../../components/images/suggest2.png'
import './Suggest.css'

const Suggest = () => {
  const suggest = [
    {
      suggestImg: services1,
      suggestHeading: 'Dequstasiya',
      suggestText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
    {
      suggestImg: services2,
      suggestHeading: 'Serti yazi',
      suggestText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
    {
      suggestImg: services2,
      suggestHeading: 'Serti yazi',
      suggestText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
    {
      suggestImg: services2,
      suggestHeading: 'Serti yazi',
      suggestText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
    {
      suggestImg: services2,
      suggestHeading: 'Serti yazi',
      suggestText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
    {
      suggestImg: services1,
      suggestHeading: 'Dequstasiya',
      suggestText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
    {
      suggestImg: services2,
      suggestHeading: 'Serti yazi',
      suggestText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
    {
      suggestImg: services2,
      suggestHeading: 'Serti yazi',
      suggestText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
    {
      suggestImg: services2,
      suggestHeading: 'Serti yazi',
      suggestText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
    {
      suggestImg: services2,
      suggestHeading: 'Serti yazi',
      suggestText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend enim sed ante placerat, luctus tincidunt massa sagittis.',
    },
  ]
  return (
    <div className='suggest_items'>
      {suggest.map((item, index) => (
        <div className='suggest_item' keY={index}>
          <img
            clasname='suggestPic'
            src={item.suggestImg}
            alt='suggest_items'
          />
          <h5>{item.suggestHeading}</h5>
          <p>{item.suggestText}</p>
          {/* </div> */}
        </div>
      ))}
    </div>
  )
}

export default Suggest
