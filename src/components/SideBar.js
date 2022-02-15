import React from "react";
import { Link, NavLink } from "react-router-dom";
import User from "../pages/Admin/User";
import Block from "../pages/Admin/Block";
import Flat from "../pages/Admin/Flat";
import Payment from "../pages/Admin/Payment";
import AdminHome from "../pages/Admin/AdminHome";
import '../pages/Admin/Admin.css';

function SideBar() {
  return (
    <div>
      <div className="bg-white">
      <div className="sidebar-heading primary-text fs-4 fw-bold text-uppercase py-4 text-center">
        <i className="fas fa-user fa-2xl me-2"></i>
      </div>

      <div className="list-group list-group-flush my-3">

        <NavLink className="list-group-item list-group-item-action bg-transparent second-text fw-bold" to="adminhome">
          <i className="fas fa-tachometer-alt me-2">DashBoard</i>
        </NavLink>

        <NavLink className="list-group-item list-group-item-action bg-transparent second-text fw-bold" to="user">
          <i className="fas fa-users me-2">Kullancı Ekle</i>
        </NavLink>

        <NavLink className="list-group-item list-group-item-action bg-transparent second-text fw-bold" to="block">
        <i class="fas fa-building me-2">Blok Ekle</i> 
        </NavLink>

        <NavLink className="list-group-item list-group-item-action bg-transparent second-text fw-bold" to="flat">
          <i className="fas fa-house me-2">Daire Ekle</i>
        </NavLink>

        <NavLink className="list-group-item list-group-item-action bg-transparent second-text fw-bold" to="payment">
          <i className="fas fa-money-check-dollar me-2">Ödeme Ekle</i>
        </NavLink>

        <NavLink className="list-group-item list-group-item-action bg-transparent second-text fw-bold" to="messages">
          <i className="fas fa-comments me-2">Mesajlar</i>
        </NavLink>

        <NavLink className="list-group-item list-group-item-action bg-transparent text-danger fw-bold" to="/">
          <i className="fas fa-arrow-right-from-bracket me-2">Log Out</i>
        </NavLink>
      </div>
    </div>
    </div>
  );
}

export default SideBar;

