import React from 'react';
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../css/main.css"



const Layout = () => {
    return (
        <div className='layout_container'>
            <Nav/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Layout;