import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Bedroom from '../images/Bedroom.jpg.webp'

function About() {
  return (
    <div id='about'>
      <Container className='about'>
        <div className='image'>
          <Card.Img variant="bottom" src={Bedroom} height='300px' width='50px' />
        </div>
        <div className='about-text'>
          <h5 className='cardtext' style={{margin: '20px'}}><i>About The Hotel</i></h5>
          <button className='btnbtn'>Read more</button>
        </div>
      </Container>
    </div>
  )
}

export default About