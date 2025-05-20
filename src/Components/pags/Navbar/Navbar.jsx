import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { TbCoinTakaFilled } from 'react-icons/tb';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className=' '>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                    </div>
                    <Link to='/' className=" w-50"><img src="../../../../src/assets/bdstall.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="join flex items-center">
                        <input type="text" className='input input-sm placeholder:text-black text-black rounded-l-lg w-md outline-none' />
                        <button className='btn btn-sm outline-none rounded-r-lg bg-[#219848] hover:bg-[#efa666]'>Search </button>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className='flex  items-center p-5 gap-3'>
                        <a href=""><TbCoinTakaFilled size={25} color='#d83c00' /></a>
                        <a href=""><TiShoppingCart size={25} color='#fa9a17' /></a>
                        <button className='btn btn-sm bg-[#f08080]'>Sell Item</button>
                    </div>
                    <a className="btn btn-sm btn-outline hover:bg-[#f08080]">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;