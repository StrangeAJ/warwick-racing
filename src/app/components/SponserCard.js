import React from 'react';
import {Bebas_Neue} from 'next/font/google';

const bebas_Neue = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
});

const SponserCard = ({ title, backgroundImage, description }) => {
    return (
        <div className="flex p-5 m-5 rounded-lg shadow-md border-white overflow-hidden border-2 border-transparent  text-white transition border-opacity-0 hover:border-opacity-100 ">
            <div className="justify-start m-2 p-2 w-1/3 h-auto ">
            <img
                    src={backgroundImage}
                    alt={title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain', // This will crop the image to fit the container
                    }}
                />
            </div>
            <div className="flex flex-col justify-end w-1/2 mx-2 justify-self-end ">
                <h2 className={`text-2xl font-semibold text-start text-[#43B02A] ${bebas_Neue.className} `}>{title}</h2>
                <p className="text-start">{description}</p>
            </div>
        </div>
    );
};

export default SponserCard;