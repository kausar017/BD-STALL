import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className=' bg-[#6ab802]'>
            <div className='container mx-auto pl-2 text-white flex items-center gap-6 font-semibold '>
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>Computer</summary>
                            <ul className='p-2 bg-[#000]/30 w-40 flex flex-col items-center justify-center'>
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Electronics</summary>
                            <ul className='p-2 bg-[#000]/30 w-40 flex flex-col items-center justify-center'>
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                                <li><a>Submenu 2</a></li>
                                <li><a>Submenu 2</a></li>
                                <li><a>Submenu 2</a></li>
                                <li><a>Submenu 2</a></li>
                                <li><a>Submenu 2</a></li>
                                <li><a>Submenu 2</a></li>
                                <li><a>Submenu 2</a></li>
                                <li><a>Submenu 2</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
                {/* <Link className='list-none'>Security and Industry</Link>
                <Link className='list-none'>Travels</Link>
                <Link className='list-none'>Health & Beauty</Link>
                <Link className='list-none'>Household</Link>
                <Link className='list-none'>Car & Bike</Link>
                <Link className='list-none'>Real Estate</Link>
                <Link className='list-none'>More</Link> */}

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



