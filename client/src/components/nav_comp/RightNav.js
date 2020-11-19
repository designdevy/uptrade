//contains sign in, create account for right side of nav bar

import React from 'react';
import LoginButton from './nav_auth/LoginButton'
import SignUpButton from './nav_auth/SignUpButton'
import DemoLoginButton from './nav_auth/DemoLoginButton'
import CartLogo from "../../style/svg/059-cart.svg"
import { NavLink, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../../style/loginmodal.css'


function RightNav(){
    return(
        <div className='rightnav'>
            <div >
              <NavLink to='/cart' >
                <Button
                  onClick={() => <Redirect to='/cart' />}
                >
                  <img src={CartLogo} alt=''/>  
                </Button>
              </NavLink>
            </div>
            <LoginButton />
            <SignUpButton />
            <DemoLoginButton />
        </div>
    )
}

export default RightNav;