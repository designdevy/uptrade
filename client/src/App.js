import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './store/auth';
import NavBar from './components/nav_comp/NavBar'
import Pages from './Pages/Pages'
// import { saveState, loadState } from './store/localStorage'

function App({state}) {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadUser = async () => {
            // enter your back end route to get the current user
            const res = await fetch("/api/session/");
            
            if (res.ok) {
                res.data = await res.json(); // current user info
                dispatch(setUser(res.data.user))
            }
            setLoading(false);
        }
        loadUser();
    }, [dispatch, setLoading]);
    console.log(loading)

    
  return (
    <BrowserRouter>
        <NavBar ></NavBar>
        <Pages state={state}/>
    </BrowserRouter>
  );
}

export default App;
