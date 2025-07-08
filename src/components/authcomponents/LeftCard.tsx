import React from 'react';
import CarouselComp from './CarouselComp';

const LeftCard: React.FC = () => {
    return (
        <div className="w-full max-w-md p-4 hidden md:block">
            <div className="flex flex-col items-center gap-20 text-[#FFFFFF]">
                <img
                    src="pana.png"
                    alt="Placeholder"
                    className="w-full h-80 rounded-lg"
                />
                <div className="text-center flex flex-col items-center gap-2">
                    <CarouselComp />
                </div>
            </div>
        </div>
    );
};

export default LeftCard;