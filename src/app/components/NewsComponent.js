import React from 'react';
import { Bebas_Neue } from 'next/font/google';

const bebas_Neue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

const NewsComponent = ({ title, date, description, imageUrl, isReverse }) => {
  return (
    <div className={`relative flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} p-4  rounded-lg shadow-lg overflow-hidden m-4`}>
      <div className="flex flex-col justify-bottom w-[52.5%] p-4 z-10 bg-gray-700 bg-opacity-75 rounded-xl">
        <p className={`text-xs ml-4 -mt-3 text-[#43B02A]`}>{date}</p>
        <h1 className={`text-2xl ml-2 mb-2 font-bold ${bebas_Neue.className} text-white`}>
          {title}
        </h1>
        <p className={`text-lg ml-4 text-white`}>
          {description}
        </p>
      </div>
      <div className="w-1/2 p-4">
        <div
          className={`absolute top-0 ${isReverse ? 'left-0' : 'right-0'} w-1/2 h-full rounded-lg`}
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            border: '4px solid #43B02A'
          }}
        />
      </div>
    </div>
  );
};

export default NewsComponent;
