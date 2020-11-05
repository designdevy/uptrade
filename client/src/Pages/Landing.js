import React from 'react';
import Featured from '../components/page_comp/Featured'
import '../style/landing.css'

function Landing(props) {
    return (
        <>
            <div className="landing-wrap">
                <div id="landing-content">
                    <Featured />
                    <div id="landing-categories">
                        <div id="category-1"></div>
                        <div id="category-2"></div>
                        <div id="category-3"></div>
                        <div id="category-4"></div>
                    </div>
                </div>
                <div id="landing-footer">
                    This is the footer
                </div>
            </div>
        </>
    );
}
export default Landing;