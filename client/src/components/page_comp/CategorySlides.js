import { Button } from '@material-ui/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
// import '../../style/slideshow.css'


const CategorySlideShow = ({prices, images, titles}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentPic, setCurrentPic] = useState("")
    const [currentPrice, setCurrentPrice] = useState("")
    const [currentTitle, setCurrentTitle] = useState("")
    const interval = 6000

    useEffect(() => {
        setCurrentPic(
            images[currentSlide]
        );
        setCurrentPrice(
            prices[currentSlide]
        );
        setCurrentTitle(
            titles[currentSlide]
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
            <div id="slides" >
                <div className="cat-container">
                    <Button className="category1 fade" >
                        {/* <div className="current-desc" >This item is on sale</div> */}
                        <img className="current-cat-slide" src={currentPic} alt='' />
                        <div id="cat-des">
                            <div className="cat-title" >{currentTitle}</div>
                            <div className="cat-price" >${currentPrice}</div>
                        </div>
                    </Button>
                        
                </div>
                    {/* <a className="prev" onClick={minusSlide}>&#10094;</a>
                    <a className="next" onClick={plusSlide}>&#10095;</a> */}
            </div>
        </>
    );
}
export default CategorySlideShow;