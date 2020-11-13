import { Button } from '@material-ui/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import '../../style/slideshow.css'


const SlideShow = ({productArr}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentPic, setCurrentPic] = useState("")
    const [currentDes, setCurrentDes] = useState("")
    const [currentPrice, setCurrentPrice] = useState("")
    const [currentTitle, setCurrentTitle] = useState("")
    let images = []
    let description = []
    let price = []
    let title = []
    productArr.map((product) => {
        
        if(product.category.includes("On Sale") && product.category.includes("Shoes")){
            images.push(product.img)
            description.push(product.description)
            price.push(product.price)
            title.push(product.title)
        }
        
    })
    // console.log(images)
    
    // const images=[
    //     "https://images-na.ssl-images-amazon.com/images/I/61orXh2c8PL._AC_SX385._SX._UX._SY._UY_.jpg",
    //     "https://images-na.ssl-images-amazon.com/images/I/61ii6U6-7nL._AC_UX385_.jpg",
    //     "https://cdn.shopify.com/s/files/1/0078/0615/6847/products/product-image-750037909.jpg?v=1575447458"
    // ]
    const interval = 5000
    
    useEffect(() => {
        setCurrentPic(
            images[currentSlide]
        );
        setCurrentDes(
            description[currentSlide]
        );
        setCurrentPrice(
            price[currentSlide]
        );
        setCurrentTitle(
            title[currentSlide]
        );
            const loop = setInterval(() => {
            if(currentSlide === images.length - 1){
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide+1)
            }
        }, interval);
        return () => clearInterval(loop);
    },[images, currentSlide, interval])

    let minusSlide = () => {
        if(currentSlide > 0){
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(images.length - 1);
        }
    }

    let plusSlide = () => {
        if(currentSlide === images.length - 1){
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    return (
        <>
            <div id="slideshow" >
                <div className="slideshow-container">
                    <Button className="slide fade">
                        <div >
                            <div id="current-title" >{currentTitle}</div>
                            <img className="current-img" src={currentPic} alt='' />
                        </div>
                        <div id="product-info" >
                            <div id="current-onSale"><div className="old-price" >$170</div><div >${currentPrice}</div></div>
                            <div className="current-desc" >{currentDes}</div>
                        </div>
                    </Button>
                        
                </div>
                    <a className="prev" onClick={minusSlide}>&#10094;</a>
                    <a className="next" onClick={plusSlide}>&#10095;</a>
            </div>
        </>
    );
}
export default SlideShow;