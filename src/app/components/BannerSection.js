import React from 'react';
import { Bebas_Neue } from 'next/font/google';
import BackImg from './BackImg';

const bebas_Neue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

const BannerSection = ({ backgroundImage, title }) => {
  return (
    <section 
      className="text-start bg-center py-20 relative mb-1 flex-1 w-full h-screen flex items-center justify-center"
      style={{ overflow: "hidden" }}
    >
      <BackImg url={backgroundImage} />
      <h1 className={`text-8xl font-extrabold text-center text-white ${bebas_Neue.className}`}>
        {title}
      </h1>
    </section>
  );
};

export default BannerSection;
