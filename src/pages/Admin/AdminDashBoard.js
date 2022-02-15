import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import AdminHeader from '../../components/AdminHeader';
import AdminHome from './AdminHome';

function AdminDashBoard() {
    return (
        <div className='d-flex' id='wrapper'>
            <SideBar />
            <Outlet />
        </div>
    )
}

export default AdminDashBoard
