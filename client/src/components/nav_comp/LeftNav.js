//contains nav components for left side of bar, i.e logo, home, library
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../style/svg/uptrade-svg.svg"

function LeftNav(){
  
    return(
        <div className="leftnav">
            <Link to='/' id="logo">
                <img id='logoimg' src={Logo} alt='' />
            </Link>
            
        </div>
    )
}

export default LeftNav;
