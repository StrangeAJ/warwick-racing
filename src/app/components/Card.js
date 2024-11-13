import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';

const bebas_Neue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
});
const Card = ({ title, backgroundImage, buttonText, imgTop, isContain, isSponsor, fullRounded, invertCard}) => {
  return (
    <div 
    // className={styles.card}
    className={`relative flex flex-col justify-between m-3 h-72 overflow-hidden  ${fullRounded?'rounded-full':'rounded-lg'} text-center text-white ${ isSponsor ?  'transition border-opacity-0 hover:border-opacity-70  border-2 border-white':''}`}
    >
      
      <div
        src={backgroundImage}
        alt={title}
        layout="fill"
        objectPosition= {imgTop ? 'top' : 'center'}
        className={`absolute top-0 left-0 w-full h-full z-10     ${invertCard ? 'invert' : ''}`}
        style={{
            maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 30%)',
            maskSize: 'cover',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: `${isContain?'contain' : 'cover'}`,
            backgroundPosition: `${imgTop?'top' : 'center'}`,
            backgroundRepeat: 'no-repeat',
        }}
      />
      <h2 className={`relative z-20 p-2 mt-auto text-3xl  font-semibold ${bebas_Neue.className}`}
       style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
       >{title}</h2>
       {buttonText ?
      <button className="relative z-20 bg-transparent border-2 border-white text-white py-2 px-4 rounded-md cursor-pointer transition duration-300 mb-5 hover:bg-[#43B02A]">{buttonText}</button> : <></>}
    </div>
  );
};

export default Card;
