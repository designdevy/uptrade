import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import '../../style/slideshow.css'


const SlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentPic, setCurrentPic] = useState("")
    const images=[
        "https://images-na.ssl-images-amazon.com/images/I/61orXh2c8PL._AC_SX385._SX._UX._SY._UY_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ii6U6-7nL._AC_UX385_.jpg",
        "https://cdn.shopify.com/s/files/1/0078/0615/6847/products/product-image-750037909.jpg?v=1575447458"
    ]
    const interval = 5000
    
    useEffect(() => {
        setCurrentPic(
            images[currentSlide]
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
                    <div className="slide fade">
                        <img className="current" src={currentPic} alt='' />
                        <div className="current-desc" >This item is on sale</div>
                    </div>
                        
                    <a className="prev" onClick={minusSlide}>&#10094;</a>
                    <a className="next" onClick={plusSlide}>&#10095;</a>
                </div>
            </div>
        </>
    );
}
export default SlideShow;