import React, { useState } from 'react'
import './Dostoprimitelstvo.css'
import Modal from '../../components/Modal/Modal'
import partyImg from '../../components/images/Untitled-2.jpg'
import secondImg from '../../components/images/heyder_aliyev_airport.jpg'

const Dostoprimitelstvo = () => {
  const dostoprimeImg = [
    {
      imageMic: partyImg,
    },
    {
      imageMic: secondImg,
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
  const [clickedImg, setClickedImg] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null)

  const handleClick = (item, index) => {
    setCurrentIndex(index)
    setClickedImg(item.imageMic)
    console.log(item.imageMic)
  }
  const handelRotationRight = () => {
    const totalLength = dostoprimeImg.length
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0)
      const newUrl = dostoprimeImg[0].imageMic
      setClickedImg(newUrl)
      return
    }
    const newIndex = currentIndex + 1
    const newUrl = dostoprimeImg.filter((item) => {
      return dostoprimeImg.indexOf(item) === newIndex
    })
    const newItem = newUrl[0].imageMic
    setClickedImg(newItem)
    setCurrentIndex(newIndex)
  }

  const handelRotationLeft = () => {
    const totalLength = dostoprimeImg.length
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1)
      const newUrl = dostoprimeImg[totalLength - 1].imageMic
      setClickedImg(newUrl)
      return
    }
    const newIndex = currentIndex - 1
    const newUrl = dostoprimeImg.filter((item) => {
      return dostoprimeImg.indexOf(item) === newIndex
    })
    const newItem = newUrl[0].imageMic
    setClickedImg(newItem)
    setCurrentIndex(newIndex)
  }

  return (
    <div className='dostprime' id='dostprime'>
      <div className='container'>
        <div className='content'>
          <div className='dost_info'>
            <h2>Достопримечательности</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eleifend enim sed ante placerat, luctus tincidunt massa sagittis.
              Quisque volutpat ex vel turpis laoreet blandit at vitae ex.
            </p>
            <div className='dostImg'>
              {dostoprimeImg.map((item, index) => (
                <div className='dostoprimeImg_wrap' key={index}>
                  <div className='dostItem'>
                    <img
                      src={item.imageMic}
                      alt='mice items'
                      onClick={() => handleClick(item, index)}
                    />
                  </div>
                </div>
              ))}
              <div>
                {clickedImg && (
                  <Modal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight}
                    setClickedImg={setClickedImg}
                    handelRotationLeft={handelRotationLeft}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dostoprimitelstvo
