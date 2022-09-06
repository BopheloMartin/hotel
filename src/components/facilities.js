import React from 'react'
import { Container } from 'react-bootstrap';
import service from '../images/service.png'
import Card from 'react-bootstrap/Card';
import wifi from '../images/wifi.png'
import swimming from '../images/swimming.png'
import parking from '../images/parking.png'
import cocktail from '../images/cocktail.png'
import wheelchair from '../images/wheelchair.png'

function Facilities() {
  return (
    <div>

      <Container className='facilities'>
        <div className='fheading'>
          <h5><i>Most Popular Facilities</i></h5>
        </div>

        <div className='icons'>
          <div className='iimg'>
            <img src={service} />
            <h6 className='room'>Room Service</h6>
          </div>

          <div className='iimg'>
            <img src={swimming} />
            <h6 className='swim'>Swimming Pool</h6>
          </div>

          <div className='iimg'>
            <img src={wifi} />
            <h6 className='wifi'>Free WI-FI</h6>
          </div>

          <div className='iimg'>
            <img src={parking} />
            <h6 className='free'>Free Parking</h6>
          </div>

          <div className='iimg'>
            <img src={cocktail} />
            <h6 className='bar'>Bar</h6>
          </div>

          <div className='iimg'>
            <img src={wheelchair} />
            <h6 className='disabled'>Facilities for Disabled Guests</h6>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default Facilities
