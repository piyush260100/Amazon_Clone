import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './component/Checkout/Checkout';
import Login from './component/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './component/Payment/Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Order from './component/Orders/Orders';

const promise=loadStripe("pk_test_51KU5sGSHr2R7TX3aBSbccJkY2buTs7x24V32dq8zobQjSyAPJJgwnfb0lA8eeOLxjMqvwWd3AkHasbmIaK6zqyeF00zhsERh7d");

function App() {

  const [{},dispatch]=useStateValue();

  useEffect(()=>{

    //useeffect runs once if no variable is provided in [], but if variable is provided it runs everytime variable value changes

    auth.onAuthStateChanged(authUser=>{
      console.log("The user is : ",authUser);

      if(authUser){

        //the user just logged in/ the user was logged in earlier
        dispatch({
          type:"SET_USER",
          user:authUser,
        })

      }else{
        //the user is logged out
        dispatch({
          type:"SET_USER",
          user:null,
        })
      }
    })
  },[])


  return (

    //BEM convention
    <Router>
      <div className="app">
        
        <Routes>
          <Route strict path="/login" element={<Login/>}/>
          <Route strict path="/checkout" element={<><Header/><Checkout/></>} />
          <Route strict path="/payment" element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}></Route>
          <Route strict path="/orders" element={<><Header/><Order/></>}/>
          <Route strict path="/" element={<><Header/><Home/></>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;