import React from 'react';

const Bannar = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://i.postimg.cc/65kpLBpF/9873.jpg)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-bold">Hello Devolopre</h1>
                    <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam veritatis, minima quis earum repudiandae rem assumenda magnam nisi maiores quam repellendus sapiente, facere aperiam libero suscipit! Sequi exercitationem, et saepe deserunt laborum quisquam velit nihil, minima cumque, sed error. Ab ipsam quam aut asperiores unde minus? Eveniet ullam pariatur expedita qui maiores facilis aliquid dolorum voluptatem. Modi voluptatum consequatur blanditiis dolorum repellat fugit vero reprehenderit explicabo sit consequuntur exercitationem dolor possimus eaque ab odit quasi, corporis aliquam eos aperiam soluta sunt inventore. Vel suscipit saepe iusto nostrum expedita nam quidem est? Aspernatur nostrum odio dolores soluta temporibus distinctio explicabo. Maxime!
                    </p>
                    <button className="btn shadow-lg shadow-black rounded-full btn-lg hover:bg-gray-300">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;