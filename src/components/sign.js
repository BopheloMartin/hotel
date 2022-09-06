import React from 'react'
import { Container } from 'react-bootstrap'

export default function Sign() {
    return (
        <div>
            <Container className='loginform'>
                <div className='login'>
                    <h1 className='lmove'>SIGN-UP</h1>
                    <input type='' className='rinput' placeholder='Name'></input><br></br>
                    <input type='' className='rinput' placeholder='Surname'></input><br></br>
                    <input type='' className='rinput' placeholder='Email'></input><br></br>
                    <input type='' className='rinput' placeholder='Password'></input><br></br>
                    <button className='btnl'>Sign-up</button>
                </div>
            </Container>
        </div>
    )
}
