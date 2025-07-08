import React from 'react';
import LoginForm from './LoginForm';

const LeftCard: React.FC = () => {
    return (
        <div className='p-12 mb-16'>
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-10 wrap">
                    <img src="logo.png" alt="Logo" className="w-10 sm:w-12 md:w-14 h-8 sm:h-10 md:h-12" />
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#43319A] to-[#A7BEFE] !outfit-custom md:text-5xl text-2xl sm:text-4xl font-bold tracking-tight">CapsiBuddy</h1>
                </div>
                <div className="text-center">
                    <h2 className="text-2xl mg:text-3xl !figtree-custom font-semibold leading-8 md:leading-10 text-[#222222] ">Good to see you again!</h2>
                    <p className="text-[#222222] figtree-custom font-normal text-[14px] md:text-[1rem]">
                        Let’s get you signed in.
                    </p>
                </div>
            </div>
            <div className='mt-10'>
                <LoginForm />
            </div>
            <div className="flex flex-col items-center mt-8">
                <span className="mb-2 text-[#B5B5B5] text-[1rem] font-medium">or continue with</span>
                <img src="google logo.png" alt="Bottom Logo" className="w-8 h-auto cursor-pointer" />
            </div>
        </div>
    );
};

export default LeftCard;