import React from 'react';
import LeftCard from "./LeftCard";
import RightSection from "./RightSection";

const MainLayout: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#2D2168] flex flex-col md:flex-row gap-2 p-4">
            {/* Left Section - 2/5 width */}
            <div className="w-full md:w-2/5 bg-gradient-to-bl from-[#f0f0f014] to-[#2D2168]  p-4 md:p-4 flex items-center justify-center rounded-3xl ">
                <LeftCard />
            </div>

            {/* Right Section - 3/5 width */}
            <div className="bg-[#FFFFFF] w-full md:w-3/5 p-4 md:p-8 border-1 flex items-center justify-center rounded-3xl">
                <RightSection />
            </div>
        </div>
    );
};

export default MainLayout;