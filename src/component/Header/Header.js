import React from 'react';
import './Header.css';
import amazonlogo from './Amazon Logo.jpg';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

export default function Header() {

    const [{myCart,user}]=useStateValue();

    const handleAuthentication =()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to ="/">
            <img src={amazonlogo} alt='amazon_logo' className='header_logo'></img>
            </Link>
            
            <div className="header_search">
                <input className='header_searchInput' type="text"/>
                <SearchIcon className='header_SearchIcon'></SearchIcon>
            </div>

            <div className="header_nav">
                <Link to ={!user && "/login"}>
                <div className="header_option" onClick={handleAuthentication}>
                    <span className='header_optionLineOne'>
                       {user?(user?.email).substring(0,user?.email.lastIndexOf("@")) : "Hello Guest"}
                    </span>

                    <span className='header_optionLineTwo'>
                        {user ? "Sign Out" : "Sign In"}
                    </span>
                </div>
                </Link>
                <Link to ="/orders">
                <div className="header_option">
                    <span className='header_optionLineOne'>
                        Returns
                    </span>

                    <span className='header_optionLineTwo'>
                        & Orders
                    </span>
                    
                </div>
                </Link>

                <div className="header_option">
                <span className='header_optionLineOne'>
                        Your
                    </span>

                    <span className='header_optionLineTwo'>
                        Prime
                    </span>
                   
                 
                </div>
                <Link to ="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon fontSize='medium'></ShoppingBasketIcon>
                    <span className='header_optionLineTwo header_basketCount'>{myCart?.length}</span>
                </div>
                </Link>

               

            </div>
        </div>
    )
}