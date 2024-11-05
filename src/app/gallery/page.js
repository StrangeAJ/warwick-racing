// src/app/gallery/page.js
import { getPlaiceholder } from 'plaiceholder';
import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';
import { getImagesFromFolder } from './getImagesFromFolder';
import HeroSection from '../components/HeroSection';

const bebas_Neue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
});

export default async function GalleryPage() {
  const imagesByYear = await getImagesFromFolder('/Gallery'); // Adjust the folder path accordingly

  return (
    <div className='flex-col'>
        <HeroSection backgroundUrl={'Gallery.jpg'} title={'Gallery'} contentCentered imagePosition={'center'} />
    <div className="p-8">
      {Object.keys(imagesByYear).map((year) => (
        <div key={year} className="mb-8">
          <h2 className={`text-3xl font-bold mb-4 text-center ${bebas_Neue.className}`}>
            {year}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {imagesByYear[year].map((imageObj, index) => (
              <Image
                key={index}
                src={imageObj.src}
                alt="car"
                className="w-full h-64 object-cover rounded-lg"
                width={500} // Adjust width as needed
                height={256} // Adjust height as needed
                placeholder="blur"
                blurDataURL={imageObj.blurDataURL}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}