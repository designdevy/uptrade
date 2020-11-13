import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './store/auth';
import NavBar from './components/nav_comp/NavBar'
import Landing from './Pages/Landing'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
import Category from './Pages/Category'
// import UserList from './components/UsersList';
import { ProtectedRoute } from './store/Routes';


function App() {
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
    }, []);

  return (
    <BrowserRouter>
        <NavBar ></NavBar>
        <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/category/:category" component={Category} />
            <Route path="/profile" component={Profile} />
            <Route path="/" component={Landing} />

        </Switch>
    </BrowserRouter>
  );
}

export default App;
