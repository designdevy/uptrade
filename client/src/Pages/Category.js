import React from 'react';
import CatProductList from '../components/page_comp/CatProductListing'
import '../style/categorylanding.css'


function Category({categories, addItemToCart, productArr}) {
    
    const getSubCats = () => {
        let newCatObj = {}
        for(let i=0; i < categories.length; i++){
            let category = categories[i].category;
            let subCatArr = categories[i].sub_cat
            newCatObj[category] = subCatArr
        }
        return newCatObj
    }
    
    const catObj = getSubCats();
    
    return (
        <>
            <div  id="category-wrap">
                {categories.map((cat, i) => ((`/category/${cat.category.toLowerCase()}` === window.location.pathname || `/category/${cat.category}` === window.location.pathname) &&
                    <div key={cat.category} id="product-panel">
                        <h1 >{cat.category}</h1>
                        <div id="products">
                            <CatProductList category={cat.category} subCat={catObj[cat.category]} products={productArr} addItemToCart={addItemToCart} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Category;