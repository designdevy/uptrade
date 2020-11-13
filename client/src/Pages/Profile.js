import React from 'react';
import Upload from '../store/upload'
import '../style/profile.css'


function Comp(props) {
    return (
        <>
            <div id="profile-wrap">
                <Upload />
            </div>
        </>
    );
}
export default Comp;