import React from 'react';
// import ReactDOM from 'react-dom';
import '../../style/featured.css'
import SlideShow from './SlideShow';



function Featured({productArr}) {
    return (
        <>
            <div id="featured" >
                <SlideShow productArr={productArr} />
            </div>
        </>
    );
}
export default Featured;