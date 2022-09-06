import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ringer from '../images/ringer.png'
import letter from '../images/letter.png'
import marker from '../images/marker.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'

function Footer() {
  return (
    <div id='contact'>

      <Container className='footer'>

        <div className='fcard' style={{ 'backgroundColor': '#4E4C4C' }}>
          <div>
            <h5>Contact</h5>
            <div className='moveIcons'>
                <div>
                  <div className='roomIcon'>
                    <div>
                      <img src={ringer} className='icon1' />
                    </div>
                    <div>
                      <p>Phone Number <br></br> +27 258 3698</p>
                    </div>
                  </div>
                  <br></br>

                  <div className='roomIcon2'>
                    <div>
                      <img src={letter} className='icon1' />
                    </div>
                    <div>
                      <p>E-mail <br></br> hotel@gmail.com</p>
                    </div>
                  </div>
                


                <div className='wifiIcon'>
                  <img src={marker} className='icon2' />
                  <p>Location 19, Hotel street, Kimberley</p>
                </div>
              </div>
          </div>
          </div>

          <div>
            <h5>Sign Up To Get The Latest Update</h5>
            <p>Receive update, hot deals, and discounts <br></br><span>delivered directly to your inbox</span></p>
            <InputGroup className="mb-3">
              <Form.Control placeholder="Email Address"/>
              <button className='btnbtn3' style={{'border-bottom-left-radius': '15px', 'border-top-right-radius': '15px'}}>Subscribe</button>
            </InputGroup>
          </div>

          <div className='social'>
            <h5 className='stext'>Get Social</h5>
            <p></p>
            <img className='isocial' src={facebook} style={{ 'height': '35px' }}/>
            <img className='isocial' src={twitter} style={{ 'height': '35px' }}/>
            <img className='isocial' src={instagram} style={{ 'height': '35px' }}/>
          </div>
        </div>

      </Container>
<br></br><br></br><br></br>
    </div>
  )
}

export default Footer
