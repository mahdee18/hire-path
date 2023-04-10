import React from 'react';
import headerBg from './image/P3OLGJ1 copy 1.png'
const Header = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200 py-3">
                <div class="hero-content flex-col md:flex-row-reverse md:w-3/4 mx-auto">
                    <img src={headerBg} class="w-full md:max-w-sm rounded-lg mb-6 md:mb-0" />
                    <div class="text-center md:text-left">
                        <h1 class="text-4xl md:text-6xl font-sans mb-4">One Step <br /> Closer To Your <br /> <span className='text-purple-600'>Dream Job</span> </h1>
                        <p class="mb-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button class="btn btn-primary bg-purple-600 ">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;