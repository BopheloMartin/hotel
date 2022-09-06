import React from 'react'
import { auth } from '../firebase';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import './forgot.css'
import { Container } from 'react-bootstrap'

export default function Forgot() {

    const [email, setEmail] = useState('');

    const forgotPassword = (() => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Check your email')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
    })

    return (
        <div className='color'>
            <br></br>
            <Container>
        <form className='loginform'>
            <div className='login'>
                <h1>Forgot Password</h1>
                <input onChange={(event) => setEmail(event.target.value)} type='' className='rinput' placeholder='Email'></input><br></br>
                <button onClick={forgotPassword} className='btnl'>Submit</button>
            </div>
        </form>
        </Container>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    )
}
