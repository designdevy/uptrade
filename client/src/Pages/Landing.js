import React from 'react';
import Featured from '../components/page_comp/Featured'
import Categories from '../components/page_comp/Categories';
import Footer from '../components/page_comp/Footer';
import '../style/landing.css'

function Landing({productArr, categories}) { 
    return (
        <>
            <div className="landing-wrap">
                <div id="landing-content">
                    <Featured productArr={productArr}/>
                    <div id="landing-categories">
                        <Categories productArr={productArr} />
                    </div>
                </div>
                {/* <div id="landing-footer">
                    <Footer categories={categories} />
                </div> */}
            </div>
        </>
    );
}
export default Landing;