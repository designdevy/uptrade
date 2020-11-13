import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import {getCategory} from '../../store/categories'

function Footer(props) {
    const dispatch = useDispatch()
    const category = useSelector(state => state);
    console.log(category)
    useEffect(() => {
        dispatch(getCategory())
    }, [])
    return (
        <>
            <div id="footer-wrap" >

            </div>
        </>
    );
}
export default Footer;