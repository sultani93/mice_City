import './About.css'
import aboutImg from '../../components/images/Untitled-2.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about1'>
        <div className='about-wrap'>
          <div className='aboutHeading'>
            <h2>About</h2>
          </div>
          <div className='aboutImg'>
            <svg
              id='Layer_1'
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1219.86 585.19'
              preserveAspectRatio='xMidYMid slice'
            >
              <clipPath id='clip-wave'>
                <path
                  class='cls-11'
                  d='M1219.86,0V540.41c-179.94,41.61-513.71,81.83-980.08-15.33-50.62-10.55-99.35-19.42-146.18-26.79-6-.95-11.96-1.87-17.9-2.77-6.26-.94-12.49-1.86-18.68-2.76-14.31-33.46-26.11-72.06-35.16-115.07-9.25-43.97-15.67-92.57-19.07-144.46C-3.42,138.31,1.71,51.48,8.78,0H1219.86Z'
                />
              </clipPath>

              <g clip-path='url(#clip-wave)'>
                <image
                  width='100%'
                  height='100%'
                  preserveAspectRatio='xMidYMid slice'
                  xlinkHref={aboutImg}
                />
              </g>
            </svg>
          </div>
        </div>
        <div className='container'>
          <div className='content'>
            <div className='aboutInfo'>
              <h3>We Are Who?</h3>
              <div className='aboutText'>
                <h4>We are glad to welcome you on our MICE CITY page!</h4>
                <p>
                  MICE CITY company was established in 2021 by a team of
                  experienced professionals. Our managers have been working in
                  the field of incoming and business tourism for more than 10
                  years. The key to the success of the company's projects is an
                  impeccable reputation, efficiency and versatility of
                  employees, high internal requirements and attentiveness to its
                  customers.
                </p>
              </div>
              <div className='whyWe'>
                <h4>Why MICE CITY?</h4>
                <p>
                  Our city was founded for corporate meetings, presentations,
                  team building in nature, conferences as in the city, as well
                  as in the regional halls. We know how to plan your trip so
                  that you receive the maximum satisfaction, without spending
                  your energy and time on organization. Our professional
                  individual approach makes it possible to take your wishes into
                  account and realize them at the highest level.{' '}
                </p>
              </div>
              <div className='whyWe'>
                <h4>We organize for you:</h4>
                <p>
                  - Meetings, presentations, negotiations; <br /> - Incentive or
                  motivational tours and programs, team building, staff
                  training, corporate holidays; <br /> - Conferences,
                  congresses, conventions, forums, seminars;
                  <br /> - Exhibitions, image events (festivals, charity
                  concerts, etc.).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
