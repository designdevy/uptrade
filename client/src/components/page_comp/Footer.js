import { Button } from '@material-ui/core';
import React from 'react';

function Footer({categories}) {
    console.log(categories)
    return (
        <>
            <div id="footer-wrap" >
                {categories.map((category) => (
                    <Button >{category.category}</Button>
                ))}
            </div>
        </>
    );
}
export default Footer;