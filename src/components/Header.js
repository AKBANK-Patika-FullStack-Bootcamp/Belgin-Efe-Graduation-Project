import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import AdminHome from '../pages/Admin/AdminHome';
import '../index.css'

function Header() {
    return (
        <nav className='nav nav-pills nav-fill  bg-dark navbar-custom'>
            <NavLink className='nav-item nav-link'  to="/" >Home</NavLink>
            <NavLink className='nav-item nav-link'  to="login">Login</NavLink>
        </nav>
    )
}

export default Header
