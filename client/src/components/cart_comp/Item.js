import React from 'react';


function Item(props) {
    return (
        <>
            <div className="item-wrap" >
                <div id="item">
                    <img id="item-img" src="https://external-preview.redd.it/fN_i7hB1aHKRqo_wWwDRN8bbAETLkk8LRKdrwzmeerQ.jpg?auto=webp&s=dfd14a6d798d048c421fd81d3ec9a39e96b5f7f6" alt="" />
                    <div id="item-description" >
                        <h3 >Leprechaun Flute</h3>
                        <div>This here is a leprechaun flute, passed down from generation to generation, from my great great grandfather who's Irish.</div>
                    </div>
                    <h3 id="item-price">$300,000</h3>
                </div>
            </div>
        </>
    );
}
export default Item;