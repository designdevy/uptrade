import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { updateLocalStorage } from '../store/localStorage';
import { getCart } from '../store/cart';
import Category from './Category'
import Profile from './Profile'
import Cart from './Cart'
import Landing from './Landing'

function Pages(props) {
    const dispatch = useDispatch();
    const [categories, setCat] = useState([])
    const [cart, setCart] = useState([]);
    let [productArr, setProductArr] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch('/api/products/')
            res.data = await res.json();
            setProductArr(res.data.products)
            return res;
        }
        const getCategories = async () => {
            const res = await fetch('/api/categories/')
            res.data = await res.json();
            setCat(res.data.categories)
            return res;
        }

        getCategories()
        getProducts()
        dispatch(getCart(cart))
    }, [dispatch, cart]);
    
    function addItemToCart(e, product) {
        setCart((prevCart) => ([...prevCart, product]));
    }

    return (
        <>
            <Switch>
                <Route path="/category/:category" render={() =>(
                        <Category {...props} categories={categories} cart={cart} addItemToCart={addItemToCart} productArr={productArr} />
                    )} />
                <Route path="/cart" render={() =>(
                        <Cart {...props} categories={categories} cart={cart} setCart={setCart} productArr={productArr} />
                    )} />
                <Route path="/profile" render={() =>(
                        <Profile {...props} categories={categories} cart={cart} productArr={productArr} />
                    )} />
                <Route path="/" render={() =>(
                        <Landing {...props} categories={categories} cart={cart} setCart={setCart} productArr={productArr} />
                    )} />
            </Switch>
        </>
    );
}
export default Pages;