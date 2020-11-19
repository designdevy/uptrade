import React from 'react';


function Item({item}) {
    return (
        <>
            <div className="item-wrap" >
                <div id="item">
                    <img id="item-img" src={item.img} alt="" />
                    <div id="item-description" >
                        <h3 >{item.title}</h3>
                        <div>{item.description}</div>
                    </div>
                        <h3 id="item-price">${item.price}</h3>
                </div>
            </div>
        </>
    );
}
export default Item;