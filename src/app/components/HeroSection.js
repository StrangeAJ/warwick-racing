import React from 'react';
import BackImg from './BackImg';
import GreenButton from './GreenButton';
import { Bebas_Neue } from 'next/font/google';

const bebas_Neue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
});

const HeroSection = ({ backgroundUrl, title, description, buttonText, buttonStyle, contentCentered, titleColor }) => {
  return (
    <section
      className={` bg-center py-20 relative mb-1 flex flex-col ${contentCentered ? 'items-center justify-center text-center' : 'items-start justify-start text-start'} w-full h-screen`}
      style={{ overflow: 'hidden' }}
    >
      <BackImg url={backgroundUrl} />
      <div className="relative max-w-4xl mx-6 px-8">
        <h1 className={`text-8xl m-4 font-bold text-${titleColor} ${bebas_Neue.className}`}>
          {title}
        </h1>
        {description && (
          <p className="text-lg text-white mt-4">
            {description}
          </p>
        )}
        {buttonText && (
          <GreenButton style={{ marginTop: '2rem', marginBottom: '2rem', ...buttonStyle }}>
            {buttonText}
          </GreenButton>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
