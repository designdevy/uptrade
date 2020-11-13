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
    //Rarities
    const rareImages = []
    const rareTitles = []
    const rarePrices = []
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
        if(product.category.includes("Games") || product.category.includes('TV & Video') || product.category.includes("Cell Phones & Smart Watches")){
            elecImages.push(product.img)
            elecPrices.push(product.price)
            elecTitles.push(product.title)
        }
        if(product.category.includes("Refridgeration") || product.category.includes('Washer/Dryer') || product.category.includes("Cooking")){
            applianceImages.push(product.img)
            appliancePrices.push(product.price)
            applianceTitles.push(product.title)
        }
        if(product.category.includes("Antiques/Vintage") || product.category.includes('Rare Find')){
            rareImages.push(product.img)
            rarePrices.push(product.price)
            rareTitles.push(product.title)
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
           <div id="category-3" >
                <CategorySlideShow images={applianceImages} prices={appliancePrices} titles={applianceTitles}/>
           </div>
           <div id="category-4" >
                <CategorySlideShow images={rareImages} prices={rarePrices} titles={rareTitles}/>
           </div>
        </>
    );
}
export default Comp;