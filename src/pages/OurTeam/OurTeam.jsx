import React from 'react'
import teamImg from '../../components/images/our-team.jpg'
import './OurTeam.css'

const OurTeam = () => {
  const team = [
    {
      teamImg: teamImg,
      employer: 'Elvin Mammadov',
      jobTitle: 'Designer',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    },
    {
      teamImg: teamImg,
      employer: 'Elvin Mammadov',
      jobTitle: 'Designer',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    },
    {
      teamImg: teamImg,
      employer: 'Elvin Mammadov',
      jobTitle: 'Designer',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    },
    {
      teamImg: teamImg,
      employer: 'Elvin Mammadov',
      jobTitle: 'Designer',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    },
    {
      teamImg: teamImg,
      employer: 'Elvin Mammadov',
      jobTitle: 'Designer',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    },
    {
      teamImg: teamImg,
      employer: 'Elvin Mammadov',
      jobTitle: 'Designer',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    },
    {
      teamImg: teamImg,
      employer: 'Elvin Mammadov',
      jobTitle: 'Designer',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    },
    {
      teamImg: teamImg,
      employer: 'Elvin Mammadov',
      jobTitle: 'Designer',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    },
  ]
  return (
    <div className='our_team' id='ourTeam'>
      <div className='container'>
        <div className='content'>
          <div className='our_suggests'>
            <h2>Our Team</h2>
            <div className='teamDetails'>
              {team.map((item, index) => (
                <div className='teamPart' key={index}>
                  <div className='teamwrap'>
                    <div className='team-absolute'>
                      <div className='teamImg'>
                        <img src={item.teamImg} alt='workerImg' />
                      </div>
                      <div className='teamInfo'>
                        <p>{item.employer}</p>
                        <p>{item.jobTitle}</p>
                        <p>{item.jobDescription}</p>
                      </div>
                    </div>
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

export default OurTeam
