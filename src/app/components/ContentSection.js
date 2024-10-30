import React from 'react';
import BackImg from './BackImg';
import { Bebas_Neue } from 'next/font/google';

const bebas_Neue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
});

const ContentSection = ({ backgroundUrl, title, content, children, textStart, textCenter, textFont, noMargin, hFull, hScreen, hMax }) => {
  return (
    <section
      className={`${textStart ? 'text-start' : textCenter ? 'text-center' : 'text-center'}
      ${textFont ? bebas_Neue.className : '' }
      ${noMargin ? '' : 'mb-1 py-20'}
      ${hFull ? 'h-full' : hScreen ? 'h-screen' : ''}
      ${hMax ? 'h-[58rem]' : ''}  
      bg-center relative flex-1 w-full  items-center justify-center
      `}
      style={{ overflow: 'hidden' }}
    >
      <BackImg url={backgroundUrl} />
      <h1 className={`text-8xl text-center font-bold flex-1 text-white m-6  ${bebas_Neue.className}`}>
        {title}
      </h1>
      <p className="lg:text-lg md:text-xl sm:text-md text-white text-center flex-[2] m-4 z-0">
        {content}
      </p>
      {children}
    </section>
  );
};

export default ContentSection;

