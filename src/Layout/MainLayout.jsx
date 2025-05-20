import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/pags/Navbar/Navbar';
import Navigation from '../Components/pags/Navigation/Navigation';

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar />
            {/* Navigation */}
            <Navigation />
            {/* ouitlet */}
            <div>
                <Outlet />
            </div>
            {/* footer */}
        </div>
    );
};

export default MainLayout;