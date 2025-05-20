import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className=' bg-[#6ab802]'>
            <div className='w-full max-w-[1300px] mx-auto pl-2 text-white flex items-center gap-6 font-semibold '>
                <ul className="menu menu-horizontal px-1">
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0}>Computer</a>
                        <ul className="dropdown-content z-[1] menu p-2 bg-[#000]/30 w-40 flex flex-col items-center">
                            <li><a>hello</a></li>
                            <li><a>hello</a></li>
                            <li><a>hello</a></li>
                            <li><a>hello</a></li>
                            <li><a>hello</a></li>
                            <li><a>hello</a></li>

                        </ul>
                    </li>

                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0}>Electronics</a>
                        <ul className="dropdown-content z-[1] menu p-2 bg-[#000]/30 w-40 flex flex-col items-center">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            <li><a>Submenu 3</a></li>
                            <li><a>Submenu 4</a></li>
                            <li><a>Submenu 5</a></li>
                            <li><a>Submenu 6</a></li>

                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0}>Security and Industry</a>
                        <ul className="dropdown-content z-[1] menu p-2 bg-[#000]/30 w-40 flex flex-col items-center">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            <li><a>Submenu 3</a></li>
                            <li><a>Submenu 4</a></li>
                            <li><a>Submenu 5</a></li>
                            <li><a>Submenu 6</a></li>

                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0}>Travels</a>
                        <ul className="dropdown-content z-[1] menu p-2 bg-[#000]/30 w-40 flex flex-col items-center">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            <li><a>Submenu 3</a></li>
                            <li><a>Submenu 4</a></li>
                            <li><a>Submenu 5</a></li>
                            <li><a>Submenu 6</a></li>

                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0}>Health & Beauty</a>
                        <ul className="dropdown-content z-[1] menu p-2 bg-[#000]/30 w-40 flex flex-col items-center">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            <li><a>Submenu 3</a></li>
                            <li><a>Submenu 4</a></li>
                            <li><a>Submenu 5</a></li>
                            <li><a>Submenu 6</a></li>

                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0}>Household</a>
                        <ul className="dropdown-content z-[1] menu p-2 bg-[#000]/30 w-40 flex flex-col items-center">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            <li><a>Submenu 3</a></li>
                            <li><a>Submenu 4</a></li>
                            <li><a>Submenu 5</a></li>
                            <li><a>Submenu 6</a></li>

                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0}>Car & Bike</a>
                        <ul className="dropdown-content z-[1] menu p-2 bg-[#000]/30 w-40 flex flex-col items-center">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            <li><a>Submenu 3</a></li>
                            <li><a>Submenu 4</a></li>
                            <li><a>Submenu 5</a></li>
                            <li><a>Submenu 6</a></li>

                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0}>Real Estate</a>
                        <ul className="dropdown-content z-[1] menu p-2 bg-[#000]/30 w-40 flex flex-col items-center">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            <li><a>Submenu 3</a></li>
                            <li><a>Submenu 4</a></li>
                            <li><a>Submenu 5</a></li>
                            <li><a>Submenu 6</a></li>

                        </ul>
                    </li>

                    <li><a>More</a></li>

                </ul>

                <div className='xl:hidden'>
                    <div className="navbar-center lg:flex">
                        <div className="join flex items-center">
                            <input type="text" className='input input-sm placeholder:text-black text-black rounded-l-lg  outline-none' />
                            <button className='btn btn-sm outline-none rounded-r-lg bg-[#219848] hover:bg-[#efa666]'>Search </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;



