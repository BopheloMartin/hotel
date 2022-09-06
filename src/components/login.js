import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './login.css'
import {auth} from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = ()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(auth=>console.log(auth))
        .catch(error=>console.error(error))
    }

    const register = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(auth=>console.log(auth))
        .catch(error=>console.error(error))
    }

    return (
        <div>
            <Container className='loginform'>
                <div className='login'>
                    <h1 className='lmove'>LOGIN</h1>
                    <input onChange={(event) => setEmail(event.target.value)} type='' className='rinput' placeholder='Email'></input><br></br>
                    <input onChange={(event) => setPassword(event.target.value)} type='Password' className='rinput' placeholder='Password'></input><br></br>
                    <button onClick={register} className='btnl'>Login</button>

                    <Link to={'/forgot'}>Forgot Password?</Link>
                </div>
            </Container>
        </div>
    )
}
