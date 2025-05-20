import React, { useEffect, useState } from 'react';
import popular from '../../../../public/Popular/Popular.json';
import { Link } from 'react-router-dom';

const Popular = () => {
    const [catagory, setCatagory] = useState();

    useEffect(() => {
        setCatagory(popular);
    }, []);

    console.log(catagory);

    return (
        <div className='pt-5'>
            <div>
                <h1 className='text-2xl font-bold'>Popular Categories</h1>
            </div>
            <div className='pt-5 grid grid-cols-8 gap-2 items-center'>
                {catagory?.map((item, i) => (
                    <Link key={i} className="h-full">
                        <div className="card bg-base-100 space-x-1 shadow-sm h-full flex flex-col hover:border border-red-500">
                            <figure className='p-2'>
                                <img
                                    src={item?.image}
                                    alt={item?.category}
                                    className="rounded-xl w-full max-w-14"
                                />
                            </figure>
                            <div className="card-body items-center text-center flex-grow flex flex-col justify-center">
                                <h2 className="card-title">{item?.category}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Popular;
