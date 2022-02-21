import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import "./Login.css";

export default function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');

    const navigate=useNavigate();

    const signIn = e =>{
        e.preventDefault();

        //some firebase login stuff
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            navigate('/')
        }).catch(error=>alert(error.message))
    }

    const register = e =>{

        e.preventDefault();

        //some firebase register stuff 

        //created a user with email and password
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                navigate('/');
            }
        })
        .catch(error=>alert(error.message))



    }

    return (

        <div className='login'>

            <Link to='/'>
                <img className='login_logo' src='https://germainmaureau.com/app/uploads/2020/05/Amazon-logo.png' alt="amazon_logo"></img>
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} 
                    onChange={e=>setEmail(e.target.value)}></input>

                    <h5>Password</h5>
                    <input type='password' value={password}
                    onChange={e=>setPassword(e.target.value)}></input>

                    <button type='submit' className='login_signinButton' onClick={signIn}>Sign In</button>
                </form>

                <p>By continuing, you agree to Fake Amazon's Clone
                    Conditions of Use and Privacy Notice, our Cookies
                    Notice and our Interest-Based Ads Notice.
                </p>

                <p className='newToAmazon'>New to Amazon?</p>

                <button className='login_registerButton' onClick={register}>Create your Amazon account </button>
            </div>


        </div>

    )
}
 