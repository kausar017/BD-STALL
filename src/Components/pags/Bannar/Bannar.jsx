import React from 'react';
import { Link } from 'react-router-dom';
import Popular from '../Popular/Popular';

const Bannar = () => {
    return (
        <div className='w-full max-w-[1300px] mx-auto pt-6'>
            <Link to='https://play.google.com/store/apps/details?id=com.bdstall.bdstall_app' target='blank'>
                <img src="../../../../src/assets/Screenshot 2025-05-20 161926.png" className='w-full object-cover' alt="" />
            </Link>
            <Popular />
        </div>
    );
};

export default Bannar;