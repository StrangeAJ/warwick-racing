import HeroSection from '../components/HeroSection';
import { getImagesFromFolder } from './getImagesFromFolder'
import { Bebas_Neue } from 'next/font/google';

const bebas_Neue = Bebas_Neue({
    subsets: ["latin"],
    weight: ["400"],
  });
  
export default async function Home() {
    const imagesByYear = getImagesFromFolder('Gallery');
    console.log('Images in Home component:', imagesByYear); // Debugging line

    return (
        <div className='flex-col'>
            <HeroSection backgroundUrl={'about_us.png'} title={'Gallery'} contentCentered />

            {Object.keys(imagesByYear).length > 0 ? (
                Object.keys(imagesByYear).map(year => (
                    <div key={year} className='mt-8'>
                        <h2 className={`text-3xl font-bold mb-4 text-center ${bebas_Neue.className} `}>{year}</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {imagesByYear[year].map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt="car"
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>No images found in the Gallery folder.</p>
            )}
        </div>
    );
}