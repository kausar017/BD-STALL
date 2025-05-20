import Lottie from 'lottie-react';
import Animation from '../../../../public/Animation - 1747220938331.json';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen text-center'>
            <h1 className='text-6xl font-bold'>Error</h1>
            <h2 className='text-4xl font-bold mt-10 text-red-600'>404</h2>
            <Lottie animationData={Animation} className='w-96 ' />
        </div>
    );
};

export default Error;