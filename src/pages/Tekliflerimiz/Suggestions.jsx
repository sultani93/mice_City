import React from 'react'
import './Suggestion.css'
import Suggest from '../../components/Suggest/Suggest'

const Suggestions = () => {
  return (
    <div className='suggestion'>
      <div className='container'>
        <div className='content'>
          <div className='our_suggests'>
            <h2>Tekliflerimiz</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eleifend enim sed ante placerat, luctus tincidunt massa sagittis.
              Quisque volutpat ex vel turpis laoreet blandit at vitae ex.
            </p>
            <Suggest />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suggestions
