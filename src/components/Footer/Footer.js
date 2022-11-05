import React from 'react'
import './footer.css'
import logo from '../../components/images/logo.PNG'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer_wrapper'>
          <Link>
            <img src={logo} alt='logo' />
          </Link>
          <div className='footer_info'>
            <ul>
              <li>Yenilikler</li>
              <li>Xeberler</li>
            </ul>
            <ul>
              <li>Meqsedler</li>
              <li>Vakansiya</li>
            </ul>
          </div>
          <div className='footer_contacts'>
            <div className='number_contact'>
              <div className='d-flex'>
                <span>phone</span>
                <ul>
                  <li>+994556043113</li>
                  <li>+994556043113</li>
                </ul>
              </div>
              <div className='d-flex'>
                <div className='email'>mail</div>
                <p>info@micecity.az</p>
              </div>
            </div>
            <div className='contact_social'>
              <div className='d-flex'>
                <div className='email'>face</div>
                <a href='micecity.az'>/ micecity.az</a>
              </div>
              <div className='d-flex'>
                <div className='email'>insta</div>
                <a href='micecity.az'>/ micecity.az</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
