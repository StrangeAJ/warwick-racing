import HeroSection from '../components/HeroSection';
import { getImagesFromFolder } from './getImagesFromFolder';



export default function Home() {
    const images = getImagesFromFolder('Gallery');
    let clickedImageIndex = null;
    return (
        <div className='flex-col'>
            <HeroSection backgroundUrl={'about_us.png'} title={'Gallery'} contentCentered />

            {/* make the images flexible grid*/}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-4'>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="car"
                        className="w-full h-64 object-cover rounded-lg"
                    />
                ))}
                </div>


        </div>
    );
};
