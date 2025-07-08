import React from 'react';
import { Carousel } from 'antd';

const CarouselComp: React.FC = () => (
  <div className="relative">
    <Carousel
      autoplay={{ dotDuration: true }}
      dots={{ className: "custom-dots" }}
      autoplaySpeed={3000}
      className="h-38 lg:h-40 w-[350px] lg:p-0 lg:w-[400px] xl:w-[420px] p-2 md:p-2 xl:p-2"
    >
      <div className="text-white">
        <h2 className="!outfit-custom text-2xl lg:text-3xl mb-4 font-semibold figtree-custom">Talk. Tap. Done.</h2>
        <p className="!outfit-custom text-center text-sm font-normal">Get instant assistance through a guided chat. It’s quick, reliable, and always available.</p>
      </div>
      <div className="text-white">
        <h2 className="!outfit-custom text-2xl lg:text-3xl mb-4 font-semibold figtree-custom">Here When You Need Us!</h2>
        <p className="!outfit-custom text-center text-sm font-normal">CapsiBot is always ready to assist with simple, step-by-step help-right at your fingertips.</p>
      </div>
      <div className="text-white">
        <h2 className="!outfit-custom text-2xl lg:text-3xl mb-4 font-semibold figtree-custom">Start the Conversation!</h2>
        <p className="!outfit-custom text-center text-sm font-normal">Sign in to access fast, friendly support through our guided chatbot. No delays, just answers that work.</p>
      </div>
    </Carousel>

    {/* Custom CSS for straight line dots */}
    <style>{`
      .custom-dots li {
        width: 10px !important;
        height: 10px !important;
        border-radius: 50% !important;
        background: #8984AD !important;
        margin: 0 4px !important;
      }

      .custom-dots li.slick-active {
        background: #ffff !important;
      }
    `}</style>
  </div>
);

export default CarouselComp;
