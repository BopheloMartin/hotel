import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import hotel from '../images/Hotel.jpg'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase'

import About from "./about";
import Rooms from "../components/rooms"
import Facilities from "./facilities";
import Gallery from "./gallery";
import Footer from "./footer";
import Roomform from "./roomform";
import Forgot from "./forgot";



function NavbarFirst() {

    const [user, loading, error] = useAuthState(auth);

    return (
        <>
            <Container>
                <Card.Body>
                    <Card.Text>
                        <Navbar expand="lg" variant="dark" bg="black">
                            <Navbar.Brand href="#">Navbar</Navbar.Brand>
                            <Nav className="justify-content-end" activeKey="/home">
                                <Nav.Item style={{ textAlign: 'center' }}>
                                    <Nav.Link href="#home">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{ textAlign: 'center' }}>
                                    <Nav.Link href="#about">About Us</Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{ textAlign: 'center' }}>
                                    <Nav.Link href="#room">Rooms</Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{ textAlign: 'center' }}>
                                    <Nav.Link href="/home">Blog</Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{ textAlign: 'center' }}>
                                    <Nav.Link href="#contact">Contact</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar>
                    </Card.Text>
                </Card.Body>

                <div className="box" id="home">
                    <div className="color1">
                        <div className="form">
                            <div className="text">
                                <h6><i>THE ULTIMATE LUXURY EXPERIENCE.</i></h6>
                                <h1><i>The Perfect Retreat Exist.</i></h1>
                            </div>

                            <div className="input">
                                <label>Check-In</label>
                                <input type='date'></input>
                                <br></br>

                                <label>Check-Out</label>
                                <input type='date'></input>
                                <br></br>

                                <label>Rooms</label>
                                <select>
                                    <option>Number Of Rooms</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                                <br></br>

                                <label>Guests</label>
                                <select>
                                    <label>Guests</label>
                                    <option>Number Of Guests</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                                <br></br>
                                <button className="btnbtn1" href="#check">Check Availability</button>
                            </div>
                        </div>
                    </div>

                    <div className="color2">
                        <Card.Img variant="bottom" src={hotel} height='650px' style={{ 'border-top-left-radius': '20px', 'border-bottom-left-radius': '20px' }} />
                    </div>
                </div>
            </Container>

            <About />
      <Rooms />
      <Facilities />
      <Gallery />
      <Footer />
        </>
    )
}

export default NavbarFirst;
