import React from 'react';
import CategorySlideShow from './CategorySlides';
import '../../style/categoryslide.css'


function Comp({productArr}) {
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

    productArr.map((product) => {
        if(product.subCategory.includes("Tops") || product.subCategory.includes("Bottoms")){
            apparelImages.push(product.img)
            apparelPrices.push(product.price)
            apparelTitles.push(product.title)   
        }
        if(product.subCategory.includes("Games") || product.subCategory.includes('TV & Video') || product.subCategory.includes("Cell Phones & Smart Watches")){
            elecImages.push(product.img)
            elecPrices.push(product.price)
            elecTitles.push(product.title)
        }
        if(product.subCategory.includes("Refridgeration") || product.subCategory.includes('Washer/Dryer') || product.subCategory.includes("Cooking")){
            applianceImages.push(product.img)
            appliancePrices.push(product.price)
            applianceTitles.push(product.title)
        }
        if(product.subCategory.includes("Antiques/Vintage") || product.subCategory.includes('Rare Find')){
            rareImages.push(product.img)
            rarePrices.push(product.price)
            rareTitles.push(product.title)
        }
    })

    return (
        <>
           <div id="category-1" >
                <h3>Apparel</h3>
                <CategorySlideShow images={apparelImages} prices={apparelPrices} titles={apparelTitles}/>
           </div>
           <div id="category-2" >
                <h3>Electronics</h3>
                <CategorySlideShow images={elecImages} prices={elecPrices} titles={elecTitles}/>
           </div>
           <div id="category-3" >
                <h3>Appliances</h3>
                <CategorySlideShow images={applianceImages} prices={appliancePrices} titles={applianceTitles}/>
           </div>
           <div id="category-4" >
                <h3>Rare Finds</h3>
                <CategorySlideShow images={rareImages} prices={rarePrices} titles={rareTitles}/>
           </div>
        </>
    );
}
export default Comp;