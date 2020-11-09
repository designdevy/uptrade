import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import '../../style/featured.css'


function Featured() {
    let galleryRef = useRef(null)
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // function currentSlide(n) {
    // Thumbnail image controls
    //   showSlides(slideIndex = n);

    function showSlides(n) {
      let i;
      let featured = galleryRef
      let slides
      if(featured.current){
        slides = featured.current.children
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }

    //   let dots = document.getElementsByClassName("demo");
    //   let captionText = document.getElementById("caption");
    //   for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   dots[slideIndex-1].className += " active";
    //   captionText.innerHTML = dots[slideIndex-1].alt;
    }

    return (
        <>
            <div id="featured" >
                <div ref={galleryRef} id="slides">
                    <div id="1" className="gallery">
                        <img src="https://cdn.shopify.com/s/files/1/0078/0615/6847/products/product-image-750037909.jpg?v=1575447458" alt="" />
                        <img src="https://images-na.ssl-images-amazon.com/images/I/61ii6U6-7nL._AC_UX385_.jpg" alt="" />
                    </div>

                    <div id="2" className="gallery">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/61ii6U6-7nL._AC_UX385_.jpg" alt="" />
                    </div>

                    <div id="3" className="gallery">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/61orXh2c8PL._AC_SX385._SX._UX._SY._UY_.jpg" alt="" />
                    </div>
                </div>
                <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={plusSlides(1)}>&#10095;</a>

            </div>
        </>
    );
}
export default Featured;