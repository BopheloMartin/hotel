import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import standard from '../images/standard.jpg'
import suite from '../images/suite.webp'
import twin from '../images/twin.jpg'
import { Container } from 'react-bootstrap';
import doublebed from '../images/doublebed.png'
import roomservice from '../images/roomservice.png'
import wifi1 from '../images/wifi1.png'
import tv from '../images/tv.png'
import tub from '../images/tub.png'
import single from '../images/single.png'
import conditioner from '../images/conditioner.png'

import { useNavigate } from 'react-router-dom'

function Rooms() {

  const navigate = useNavigate();

  const goTwin = () => {
    navigate('/roomform')
  }

  const goStandard = () => {
    navigate('/roomfrm')
  }

  const goSuite = () => {
    navigate('/suiteroom')
  }


  return (
    <div id='room'>
      <div className='rheading'>
        <h5><i>We Promise The Best Value For Your Money</i></h5>
        <h6><i>Room Recommedantions For You</i></h6>
      </div>
      <Container className='rooms'>
        <Card className='cards' style={{ width: '19rem', 'border-top-left-radius': '10px', 'border-bottom-left-radius': '30px', 'border-top-right-radius': '30px', 'border-bottom-right-radius': '10px', backgroundColor: '#D9D9D9' }}>
          <Card.Img variant="top" src={standard} style={{ 'border-top-left-radius': '10px', 'border-bottom-left-radius': '30px', 'border-top-right-radius': '30px', 'border-bottom-right-radius': '10px', height: '180px' }} />
          <Card.Body>
            <Card.Title><h6 className='cardtext'>Standard Double Room</h6></Card.Title>
            <Card.Text className='cardtext'>
              <div className='moveIcons'>
                <div>
                  <div className='roomIcon'>
                    <div>
                      <img src={doublebed} className='icon1' />
                    </div>
                    <div>
                      <p className='iconp'>1 Double Bedroom</p>
                    </div>
                  </div>

                  <div className='roomIcon2'>
                    <div>
                      <img src={roomservice} className='icon1' />
                    </div>
                    <div>
                      <p className='iconp'>Breakfast, Lunch & Super</p>
                    </div>
                  </div>
                </div>


                <div className='wifiIcon'>
                  <img src={wifi1} className='icon2' />
                  <p className='iconp1'>WI-FI</p>
                </div>
              </div>
            </Card.Text>
            <button className='btnbtn2' onClick={goStandard}>View Rates And Book</button>
          </Card.Body>
        </Card>

        <Card className='cards' style={{ width: '19rem', 'border-top-left-radius': '10px', 'border-bottom-left-radius': '30px', 'border-top-right-radius': '30px', 'border-bottom-right-radius': '10px', backgroundColor: '#D9D9D9' }}>
          <Card.Img variant="top" src={suite} style={{ 'border-top-left-radius': '10px', 'border-bottom-left-radius': '30px', 'border-top-right-radius': '30px', 'border-bottom-right-radius': '10px', height: '180px' }} />
          <Card.Body>
            <Card.Title><h6 className='cardtext'>Suite</h6></Card.Title>
            <Card.Text className='cardtext'>
              <div className='moveIcons'>
                <div>
                  <div className='roomIcon'>
                    <div>
                      <img src={doublebed} className='icon1' />
                    </div>
                    <div>
                      <p className='iconp'>1 Extra-large Double Bed</p>
                    </div>
                  </div>

                  <div className='roomIcon2'>
                    <div>
                      <img src={tv} className='icon1' />
                    </div>
                    <div>
                      <p className='iconp'>Flat-screen TV</p>
                    </div>
                  </div>
                </div>


                <div className='wifiIcon'>
                  <img src={tub} className='icon2' />
                  <p className='iconp1'>Private bathroom</p>
                </div>
              </div>
            </Card.Text>
            <button className='btnbtn2' onClick={goSuite}>View Rates And Book</button>
          </Card.Body>
        </Card>

        <Card className='cards' style={{ width: '19rem', 'border-top-left-radius': '10px', 'border-bottom-left-radius': '30px', 'border-top-right-radius': '30px', 'border-bottom-right-radius': '10px', backgroundColor: '#D9D9D9' }}>
          <Card.Img variant="top" src={twin} style={{ 'border-top-left-radius': '10px', 'border-bottom-left-radius': '30px', 'border-top-right-radius': '30px', 'border-bottom-right-radius': '10px', height: '180px' }} />
          <Card.Body>
            <Card.Title><h6 className='cardtext'>Twin Room</h6></Card.Title>
            <Card.Text className='cardtext'>
              <div className='moveIcons'>
                <div>
                  <div className='roomIcon'>
                    <div>
                      <img src={single} className='icon1' />
                    </div>
                    <div>
                      <p className='iconp'>2 Single Beds</p>
                    </div>
                  </div>

                  <div className='roomIcon2'>
                    <div>
                      <img src={conditioner} className='icon1' />
                    </div>
                    <div>
                      <p className='iconp'>Air Conditioning</p>
                    </div>
                  </div>
                </div>


                <div className='wifiIcon'>
                  <img src={wifi1} className='icon2' />
                  <p className='iconp1'>WI-FI</p>
                </div>
              </div>
            </Card.Text>
            <button onClick={goTwin} className='btnbtn2'>View Rates And Book</button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Rooms
