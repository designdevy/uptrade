import React, { useEffect, useState } from 'react';
import '../style/cart.css'
import Button from '@material-ui/core/Button';
import Item from '../components/cart_comp/Item'
// import Cookies from 'js-cookie';
import { useSelector } from 'react-redux'

function Cart() {
    const cart = useSelector(state => state.cart)
    
    const getTotal = () => {
        let total = 0
        cart.map((item) =>{
            total += item.price
            })
        return parseFloat(total).toFixed(2)
    } 
    

    return (
        <>
            <div className="cart-wrap">
                <div id="cart-total">
                    <h2 >Cart Summary</h2>
                    <h3 >${getTotal()}</h3>
                </div>
                <div id="cart-summary">
                    {cart.map((item) => (   
                        <Item item={item} />
                    ))}
                </div>
                <div id="checkout">
                    <Button id="checkout-button">Proceed</Button>
                </div>
            </div>
        </>
    );
}
export default Cart;