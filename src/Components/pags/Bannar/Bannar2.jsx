import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Bannar2 = () => {
    return (
        <div className="flex items-center justify-center bg-amber-600 p-4">
            <div className="w-full max-w-6xl">
                <style jsx>{`
                    .mySwiper {
                        width: 100%;
                        padding-top: 50px;
                        padding-bottom: 50px;
                        height: 600px;
                    }
                    .swiper-slide {
                        background-position: center;
                        background-size: cover;
                        width: 300px;
                        height: 400px;
                        border-radius: 20px;
                        overflow: hidden;
                        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                        transition: all 0.3s ease;
                    }
                    .swiper-slide:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
                    }
                    .swiper-button-next,
                    .swiper-button-prev {
                        color: white !important;
                        background: rgba(255, 255, 255, 0.2) !important;
                        width: 50px !important;
                        height: 50px !important;
                        border-radius: 50% !important;
                        backdrop-filter: blur(10px);
                        transition: all 0.3s ease;
                    }
                    .swiper-button-next:hover,
                    .swiper-button-prev:hover {
                        background: rgba(255, 255, 255, 0.3) !important;
                        transform: scale(1.1);
                    }
                    .swiper-button-next:after,
                    .swiper-button-prev:after {
                        font-size: 18px !important;
                    }
                    .swiper-pagination-bullet {
                        background: white !important;
                        opacity: 0.5;
                        transition: all 0.3s ease;
                    }
                    .swiper-pagination-bullet-active {
                        opacity: 1 !important;
                        transform: scale(1.2);
                    }
                `}</style>

                <Swiper
                    modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    speed={600}
                    keyboard={{ enabled: true }}
                    mousewheel={{ thresholdDelta: 50 }}
                    className="mySwiper"
                >
                    {/* Mountain Adventure */}
                    <SwiperSlide style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop')" }}>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center text-white">
                            <h3 className="text-2xl font-bold mb-2">Mountain Adventure</h3>
                            <p className="text-sm opacity-90 leading-relaxed">Explore the breathtaking beauty of mountain landscapes</p>
                        </div>
                    </SwiperSlide>

                    {/* Ocean Waves */}
                    <SwiperSlide style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=600&fit=crop')" }}>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center text-white">
                            <h3 className="text-2xl font-bold mb-2">Ocean Waves</h3>
                            <p className="text-sm opacity-90 leading-relaxed">Feel the serenity of endless ocean views</p>
                        </div>
                    </SwiperSlide>

                    {/* Forest Journey */}
                    <SwiperSlide style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=600&fit=crop')" }}>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center text-white">
                            <h3 className="text-2xl font-bold mb-2">Forest Journey</h3>
                            <p className="text-sm opacity-90 leading-relaxed">Discover the magic hidden in ancient forests</p>
                        </div>
                    </SwiperSlide>

                    {/* Desert Sunset */}
                    <SwiperSlide style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=600&fit=crop')" }}>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center text-white">
                            <h3 className="text-2xl font-bold mb-2">Desert Sunset</h3>
                            <p className="text-sm opacity-90 leading-relaxed">Experience the golden hour in vast desert lands</p>
                        </div>
                    </SwiperSlide>

                    {/* City Lights */}
                    <SwiperSlide style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=600&fit=crop')" }}>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center text-white">
                            <h3 className="text-2xl font-bold mb-2">City Lights</h3>
                            <p className="text-sm opacity-90 leading-relaxed">Urban adventures await in the bustling metropolis</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Bannar2;
