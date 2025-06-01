// src/components/Bannar.jsx
import React, { useState, useEffect } from 'react';
import Popular from '../Popular/Popular';
import Bannar2 from './Bannar2';

const slides = [
    {
        id: 1,
        title: 'Eternals',
        description: 'In 5000 BC, ten superpowered Eternals—Ajak, Sersi, Ikaris, Kingo, Sprite, Phastos, Makkari, Druig, Gilgamesh, and Thena—are sent by the Celestial Arishem to Earth to fight the Deviants.',
        imageUrl: 'https://images.pexels.com/photos/2440079/pexels-photo-2440079.jpeg',
    },
    {
        id: 2,
        title: 'Dune',
        description: 'Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.',
        imageUrl: 'https://images.pexels.com/photos/4344260/pexels-photo-4344260.jpeg',
    },
    {
        id: 3,
        title: 'Interstellar',
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival as Earth becomes uninhabitable.',
        imageUrl: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg',
    },
    {
        id: 4,
        title: 'The Matrix',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        imageUrl: 'https://images.pexels.com/photos/4348093/pexels-photo-4348093.jpeg',
    },
    {
        id: 5,
        title: 'Inception',
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        imageUrl: 'https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg',
    },
];

const Bannar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [autoPlayInterval, setAutoPlayInterval] = useState(null);

    const getPositionStyles = (index) => {
        const distance = ((index - activeIndex + slides.length) % slides.length);
        let normalizedDistance = distance;

        if (distance > slides.length / 2) {
            normalizedDistance = distance - slides.length;
        }

        const absPosition = Math.abs(normalizedDistance);
        const scale = 1 - absPosition * 0.15;
        const translateZ = -absPosition * 150;
        let translateX = normalizedDistance * 60;

        if (absPosition > 1) {
            translateX = normalizedDistance * (60 + (absPosition - 1) * 30);
        }

        const opacity = 1 - absPosition * 0.2;
        const zIndex = slides.length - absPosition;

        return { scale, translateX, translateZ, opacity, zIndex };
    };

    const goToSlide = (index) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setActiveIndex((index + slides.length) % slides.length);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    const prevSlide = () => {
        goToSlide(activeIndex - 1);
    };

    const nextSlide = () => {
        goToSlide(activeIndex + 1);
    };

    const startAutoPlay = () => {
        stopAutoPlay();
        const interval = setInterval(() => nextSlide(), 5000);
        setAutoPlayInterval(interval);
    };

    const stopAutoPlay = () => {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            setAutoPlayInterval(null);
        }
    };

    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay(); // Cleanup on unmount
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex]);

    return (
        <div className=" text-white font-sans">
            <div className="pt-8">
                <div className="relative h-96 md:h-[600px] overflow-hidden" style={{ perspective: '1500px' }}>
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white border-none rounded-full p-4 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                        aria-label="Previous slide"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white border-none rounded-full p-4 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                        aria-label="Next slide"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>

                    {/* Carousel Track */}
                    <div
                        className="relative h-full"
                        style={{ transformStyle: 'preserve-3d' }}
                        onMouseEnter={stopAutoPlay}
                        onMouseLeave={startAutoPlay}
                    >
                        {slides.map((slide, index) => {
                            const styles = getPositionStyles(index);
                            return (
                                <div
                                    key={slide.id}
                                    className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out"
                                    style={{
                                        transform: `translateX(${styles.translateX}%) translateZ(${styles.translateZ}px) scale(${styles.scale})`,
                                        opacity: styles.opacity,
                                        zIndex: styles.zIndex,
                                        willChange: 'transform',
                                    }}
                                >
                                    <div
                                        className={`relative w-[90%] h-full mx-auto overflow-hidden rounded-lg shadow-2xl ${index === activeIndex ? 'ring-4 ring-blue-500' : ''
                                            }`}
                                    >
                                        <img
                                            src={slide.imageUrl}
                                            alt={slide.title}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                                            <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
                                            <p className="text-lg line-clamp-2">{slide.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Dots Navigation */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${index === activeIndex ? 'w-6 bg-blue-500' : 'w-3 bg-gray-400/50 hover:bg-gray-400/75'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <Popular />
            </div>
            <div>
               <Bannar2/>
            </div>
        </div>
    );
};

export default Bannar;