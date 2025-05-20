import Popular from '../Popular/Popular';
import img from '../../../assets/Screenshot 2025-05-20 161926.png'
const Bannar = () => {
    return (
        <div className='w-full max-w-[1300px] mx-auto pt-6'>
            <div to='https://play.google.com/store/apps/details?id=com.bdstall.bdstall_app' target='blank'>
                <img src={img} className='w-full object-cover' alt="" />
            </div>
            <Popular />
        </div>
    );
};

export default Bannar;