import React from 'react';
import Featured from '../components/page_comp/Featured'
import Categories from '../components/page_comp/Categories';
import Footer from '../components/page_comp/Footer';
import '../style/landing.css'

function Landing({category}) {
    
    return (
        <>
            <div className="landing-wrap">
                <div id="landing-content">
                    <Featured />
                    <div id="landing-categories">
                            <Categories />
                        {/* <div id="category-1">
                        </div> */}
                        {/* <div id="category-2"></div> */}
                        {/* <div id="category-3"></div>
                        <div id="category-4"></div> */}
                    </div>
                </div>
                <div id="landing-footer">
                    <Footer />
                </div>
            </div>
        </>
    );
}
export default Landing;