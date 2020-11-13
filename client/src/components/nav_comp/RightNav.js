//contains sign in, create account for right side of nav bar

import React from 'react';
import LoginButton from './nav_auth/LoginButton'
import SignUpButton from './nav_auth/SignUpButton'
import DemoLoginButton from './nav_auth/DemoLoginButton'
import '../../style/loginmodal.css'


function RightNav(){
    return(
        <div className='rightnav'>
            <LoginButton />
            <DemoLoginButton />
            <SignUpButton />
        </div>
    )
}

export default RightNav;