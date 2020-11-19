import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LeftNav from './LeftNav'
import MiddleNav from './MiddleNav'
import RightNav from './RightNav'
import RightNavLogged from './RightNavLogged'
import DropMenu from './nav_drop_menu/DropMenu'
import '../../style/navbar.css'


function NavBar(){
    const currentUserId = useSelector(state => state.auth.id);
    const [categories, setCat] = useState([])

    useEffect(() => {
        const getCat = async () => {
            const res = await fetch('/api/categories/')
            res.data = await res.json();
            setCat(res.data.categories)
            
            return res;
        }
        getCat()
    }, []);
    
    //=========================================================================
    
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

    let navClass = 'outer-nav'
    
    if(currentUserId){
        navClass = 'outer-nav-logged-in'
    }

    return (
        <div className={navClass}>
            <div className='navbar'>
                <LeftNav />
                <MiddleNav />
                {currentUserId ? <RightNavLogged /> : <RightNav />}
            </div>
            <div id="drop-menu-wrap">
                {categories.map((cat) => {
                    return <DropMenu key={cat.id} className="drop-menu" category={cat.category} subCats={catObj[cat.category]} />
                })}
            </div>
        </div>
    )
}

export default NavBar;
