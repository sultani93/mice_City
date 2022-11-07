import React from 'react'
import './footer.css'
import logo from '../../components/images/logo.PNG'
import wp from '../../components/images/whatsapp.png'
import tl from '../../components/images/telegram.png'
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
                <span>
                  <svg
                    id='Layer_1'
                    data-name='Layer 1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 34.25 34.25'
                  >
                    <path
                      class='footer_phone'
                      d='M17.13,34.25C7.68,34.25,0,26.57,0,17.13S7.68,0,17.13,0s17.13,7.68,17.13,17.13-7.68,17.13-17.13,17.13ZM17.13,1.51C8.51,1.51,1.51,8.51,1.51,17.13s7.01,15.62,15.62,15.62,15.62-7.01,15.62-15.62S25.74,1.51,17.13,1.51Z'
                    />
                    <g>
                      <rect
                        class='footer_phone'
                        x='12.81'
                        y='6.42'
                        width='3.09'
                        height='7'
                        rx='.52'
                        ry='.52'
                        transform='translate(-3.03 8.42) rotate(-29.72)'
                      />
                      <rect
                        class='footer_phone'
                        x='20.54'
                        y='19.88'
                        width='3.09'
                        height='7'
                        rx='.52'
                        ry='.52'
                        transform='translate(-8.69 14.03) rotate(-29.72)'
                      />
                      <path
                        class='footer_phone'
                        d='M21.87,27.13l-2.92-5.19c-3.11,1.82-8.04-6.58-4.93-8.4l-2.98-5.18c-7.52,2.53,5.01,24.01,10.83,18.77Z'
                      />
                    </g>
                  </svg>
                </span>
                <div className='number'>
                  <p>(+994) 50 861 61 32</p>
                  <div className='d-flex'>
                    <p>(+994) 55 861 61 32</p>
                    <img className='img1' src={wp} alt='whatsapp' />
                    <img src={tl} alt='telegram' />
                  </div>
                </div>
              </div>
              <div className='d-flex'>
                <div className='email'>
                  <span>
                    <svg
                      id='Layer_1'
                      data-name='Layer 1'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 34.25 34.25'
                    >
                      <path
                        class='footer_phone'
                        d='M17.13,34.25C7.68,34.25,0,26.57,0,17.13S7.68,0,17.13,0s17.13,7.68,17.13,17.13-7.68,17.13-17.13,17.13ZM17.13,1.51C8.51,1.51,1.51,8.51,1.51,17.13s7.01,15.62,15.62,15.62,15.62-7.01,15.62-15.62S25.74,1.51,17.13,1.51Z'
                      />
                      <g>
                        <path
                          class='footer_phone'
                          d='M24.86,23.21H8.82c-.85,0-1.54-.69-1.54-1.54V12.23l9.48,6.2,9.65-6.2v9.43c0,.85-.69,1.54-1.54,1.54Z'
                        />
                        <polygon
                          class='footer_phone'
                          points='24.91 11.04 16.75 16.17 8.78 11.04 24.91 11.04'
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                <p>info@micecity.az</p>
              </div>
            </div>
            <div className='contact_social'>
              <div className='d-flex'>
                <div className='email'>
                  <span>
                    <svg
                      id='Layer_1'
                      data-name='Layer 1'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 34.08 34.08'
                    >
                      <path
                        class='footer_phone'
                        d='M14.04,27.8h4.34v-10.86h3.02l.32-3.64h-3.35v-2.07c0-.86,.17-1.2,1-1.2h2.35v-3.77h-3c-3.23,0-4.68,1.42-4.68,4.14v2.9h-2.26v3.68h2.26v10.81Z'
                      />
                      <path
                        class='footer_phone'
                        d='M17.04,34.08C7.64,34.08,0,26.43,0,17.04S7.64,0,17.04,0s17.04,7.64,17.04,17.04-7.64,17.04-17.04,17.04ZM17.04,1.5C8.47,1.5,1.5,8.47,1.5,17.04s6.97,15.54,15.54,15.54,15.54-6.97,15.54-15.54S25.6,1.5,17.04,1.5Z'
                      />
                    </svg>
                  </span>
                </div>
                <a href='micecity.az'>/micecity.az</a>
              </div>
              <div className='d-flex'>
                <div className='email'>
                  <span>
                    <svg
                      id='Layer_1'
                      data-name='Layer 1'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 33.35 33.35'
                    >
                      <g>
                        <path
                          class='footer_phone'
                          d='M16.67,9.05c2.59,0,2.9,.01,3.92,.06,.95,.04,1.46,.2,1.8,.33,.45,.18,.78,.39,1.12,.73,.34,.34,.55,.66,.73,1.12,.13,.34,.29,.86,.33,1.8,.05,1.02,.06,1.33,.06,3.92s-.01,2.9-.06,3.92c-.04,.95-.2,1.46-.33,1.8-.18,.45-.39,.78-.73,1.12-.34,.34-.66,.55-1.12,.73-.34,.13-.86,.29-1.8,.33-1.02,.05-1.33,.06-3.92,.06s-2.9,0-3.92-.06c-.95-.04-1.46-.2-1.8-.33-.45-.18-.78-.39-1.12-.73-.34-.34-.55-.66-.73-1.12-.13-.34-.29-.86-.33-1.8-.05-1.02-.06-1.33-.06-3.92s0-2.9,.06-3.92c.04-.95,.2-1.46,.33-1.8,.18-.45,.39-.78,.73-1.12s.66-.55,1.12-.73c.34-.13,.86-.29,1.8-.33,1.02-.05,1.33-.06,3.92-.06m0-1.75c-2.64,0-2.97,.01-4,.06-1.03,.05-1.74,.21-2.35,.45-.64,.25-1.18,.58-1.72,1.12-.54,.54-.87,1.08-1.12,1.72-.24,.62-.4,1.32-.45,2.36-.05,1.03-.06,1.37-.06,4s.01,2.97,.06,4c.05,1.03,.21,1.74,.45,2.36,.25,.64,.58,1.18,1.12,1.72,.54,.54,1.08,.87,1.72,1.12,.62,.24,1.32,.4,2.35,.45,1.03,.05,1.37,.06,4,.06s2.97-.01,4-.06c1.03-.05,1.74-.21,2.36-.45,.64-.25,1.18-.58,1.72-1.12,.54-.54,.87-1.08,1.12-1.72,.24-.62,.4-1.32,.45-2.36,.05-1.04,.06-1.37,.06-4s-.01-2.97-.06-4c-.05-1.03-.21-1.74-.45-2.36-.25-.64-.58-1.18-1.12-1.72-.54-.54-1.08-.87-1.72-1.12-.62-.24-1.32-.4-2.36-.45-1.03-.05-1.37-.06-4-.06'
                        />
                        <path
                          class='footer_phone'
                          d='M16.67,12.03c-2.75,0-4.98,2.23-4.98,4.98s2.23,4.98,4.98,4.98,4.98-2.23,4.98-4.98-2.23-4.98-4.98-4.98m0,8.22c-1.79,0-3.23-1.45-3.23-3.23s1.45-3.23,3.23-3.23,3.23,1.45,3.23,3.23-1.45,3.23-3.23,3.23'
                        />
                        <path
                          class='footer_phone'
                          d='M23.02,11.83c0,.64-.52,1.16-1.16,1.16s-1.16-.52-1.16-1.16,.52-1.16,1.16-1.16,1.16,.52,1.16,1.16'
                        />
                      </g>
                      <path
                        class='footer_phone'
                        d='M16.67,33.35C7.48,33.35,0,25.87,0,16.67S7.48,0,16.67,0s16.67,7.48,16.67,16.67-7.48,16.67-16.67,16.67Zm0-31.88C8.29,1.47,1.47,8.29,1.47,16.67s6.82,15.21,15.21,15.21,15.2-6.82,15.2-15.21S25.06,1.47,16.67,1.47Z'
                      />
                    </svg>
                  </span>
                </div>
                <a href='micecity.az'>/micecity.az</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
