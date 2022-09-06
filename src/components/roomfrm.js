import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import twin from '../images/twin.jpg'
import twinbed from '../images/twinbed.jpg'
import twinbath from '../images/twinbath.jpg'
import standard from '../images/standard.jpg'
import fourth from '../images/fourth.jpg'
import bathroom from '../images/bathroom.webp'
import './roomform.css'

import {db} from '../firebase'

import {addDoc, collection} from 'firebase/firestore'

export default function Roomform() {

    const add = (() => {
        const collectionRef = collection(db, 'bookings');

        const bookings = {
            name:name, surname:surname, email:email, phone:phone, requests:requests
        };

        addDoc(collectionRef, bookings)
        .then(() => {
            alert('Added successfully')
        })
        .catch((error) => {
            console.log(error)
        })
    })

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [requests, setRequests] = useState('');

    return (
        <div>
            <Container>
                <div className='roomform'>
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src={standard} alt="First slide" />
                            <Carousel.Caption>
                                <h3>Standard Double Room</h3>
                                <p>TV Room.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src={fourth} alt="Second slide" />
                            <Carousel.Caption>
                                <h3>Standard Double Room</h3>
                                <p>Bedroom.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src={bathroom} alt="Third slide" />
                            <Carousel.Caption>
                                <h3>Standard Double Room</h3>
                                <p>Bathroom.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <div className='main'>
                        <div className='rform'>
                            <label className='cardtext'><i>First Name</i></label>
                            <br></br>
                            <input type='' className='rinput' onChange={(event)=>setName(event.target.value)}></input>
                            <br></br>
                            <br></br>

                            <label className='cardtext'><i>Surname</i></label>
                            <br></br>
                            <input type='' className='rinput' onChange={(event)=>setSurname(event.target.value)}></input>
                            <br></br>
                            <br></br>

                            <label className='cardtext'><i>Email</i></label>
                            <br></br>
                            <input type='' className='rinput' onChange={(event)=>setEmail(event.target.value)}></input>
                            <br></br>
                            <br></br>
                        </div>

                        <div className='rform'>
                            <label className='cardtext'><i>Phone Number</i></label>
                            <br></br>
                            <input type='' className='rinput' onChange={(event)=>setPhone(event.target.value)}></input>
                            <br></br>
                            <br></br>

                            <br></br>
                            <textarea name="" id="" className='rinput' placeholder="Special Requests" onChange={(event)=>setRequests(event.target.value)}></textarea>
                            <br></br>
                            <br></br>

                            <button className='btn' onClick={add}><i>Confirm Booking</i></button>
                        </div>
                    </div>
                </div>
            </Container>

            <br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br>
        </div>
    )
}
