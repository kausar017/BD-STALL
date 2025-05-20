import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className=' bg-[#6ab802]'>
            <div className='container mx-auto pl-2 text-white flex items-center gap-6 py-2 font-semibold '>
                <Link className='list-none'>Electronics</Link>
                <Link className='list-none'>Security and Industry</Link>
                <Link className='list-none'>Travels</Link>
                <Link className='list-none'>Health & Beauty</Link>
                <Link className='list-none'>Household</Link>
                <Link className='list-none'>Car & Bike</Link>
                <Link className='list-none'>Real Estate</Link>
                <Link className='list-none'>More</Link>
            </div>
        </div>
    );
};

export default Navigation;
