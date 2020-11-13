import React, {useEffect, useState} from 'react';
import CategorySlideShow from './CategorySlides';
import '../../style/categoryslide.css'


function Comp() {
    let [productArr, setProductArr] = useState([])
    //Apparel
    const apparelImages = []
    const apparelTitles = []
    const apparelPrices = []
    //Electronics
    const elecImages = []
    const elecTitles = []
    const elecPrices = []
    //Appliances
    const applianceImages = []
    const applianceTitles = []
    const appliancePrices = []
    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch('/api/products/')
            res.data = await res.json();
            setProductArr(res.data.products)
            
            return res;
        }
        getProducts()
    }, []);

    productArr.map((product) => {
        
        if(product.category.includes("Tops") || product.category.includes("Bottoms")){
            apparelImages.push(product.img)
            apparelPrices.push(product.price)
            apparelTitles.push(product.title)   
        }
        if(product.category.includes("Games") || product.category.includes("Video/Photography") || product.category.includes("Cell Phones & Smart Watches")){
            elecImages.push(product.img)
            elecPrices.push(product.price)
            elecTitles.push(product.title)
        }
        
    })

    return (
        <>
           <div id="category-1" >
                <CategorySlideShow images={apparelImages} prices={apparelPrices} titles={apparelTitles}/>
           </div>
           <div id="category-2" >
                <CategorySlideShow images={elecImages} prices={elecPrices} titles={elecTitles}/>
           </div>
        </>
    );
}
export default Comp;