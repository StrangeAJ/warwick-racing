import Image from 'next/image';
import styles from './Card.module.css';
import { Bebas_Neue } from 'next/font/google';

const bebas_Neue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
});
const Card = ({ title, backgroundImage, buttonText, imgTop }) => {
  return (
    <div 
    // className={styles.card}
    className="relative flex flex-col justify-between w-full m-3 h-72 overflow-hidden border-2 border-transparent rounded-lg text-center text-white transition border-opacity-0 hover:border-opacity-100"
    >
      <Image
        src={backgroundImage}
        alt={title}
        layout="fill"
        objectFit='cover'
        objectPosition= {imgTop ? 'top' : 'center'}
        className="absolute top-0 left-0 w-full h-full z-10 "
        style={{
            maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 30%)',
            maskSize: 'cover'
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
