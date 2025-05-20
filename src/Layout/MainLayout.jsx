import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/pags/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar />
            {/* ouitlet */}
            <Outlet />
            {/* footer */}
        </div>
    );
};

export default MainLayout;