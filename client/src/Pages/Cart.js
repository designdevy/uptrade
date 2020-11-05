import React from 'react';
import '../style/cart.css'
import Button from '@material-ui/core/Button';
import Item from '../components/cart_comp/Item'

function Cart(props) {
    return (
        <>
            <div className="cart-wrap">
                <div id="cart-total">
                    <h2 >Cart Summary</h2>
                </div>
                <div id="cart-summary">
                    <Item />
                    <Item />
                </div>
                <div id="checkout">
                    <Button id="checkout-button">Proceed</Button>
                </div>
            </div>
        </>
    );
}
export default Cart;