import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import '../../style/featured.css'
import SlideShow from './SlideShow';
import {getProducts} from '../../store/products'


function Featured() {
    let [productArr, setProductArr] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch('/api/products/')
            res.data = await res.json();
            setProductArr(res.data.products)
            
            return res;
        }
        getProducts()
    }, []);
    // console.log(productArr)
    return (
        <>
            <div id="featured" >
                <SlideShow productArr={productArr} />
            </div>
        </>
    );
}
export default Featured;