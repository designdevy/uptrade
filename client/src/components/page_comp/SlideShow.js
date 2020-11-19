import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import '../../style/slideshow.css'


const SlideShow = ({productArr}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentPic, setCurrentPic] = useState("")
    const [currentDes, setCurrentDes] = useState("")
    const [currentPrice, setCurrentPrice] = useState("")
    const [currentTitle, setCurrentTitle] = useState("")
    const interval = 5000
   
    let images = []
    let description = []
    let price = []
    let title = []
    productArr.map((product) => {
        if(product.subCategory.includes("On Sale") && product.subCategory.includes("Shoes")){
            images.push(product.img)
            description.push(product.description)
            price.push(product.price)
            title.push(product.title)
        }
    })
    
    
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
    },[images, description, price, title, currentSlide, interval])

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
                    <div className="prev" onClick={minusSlide}>&#10094;</div>
                    <div className="next" onClick={plusSlide}>&#10095;</div>
            </div>
        </>
    );
}
export default SlideShow;