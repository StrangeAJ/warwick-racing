import ContentSection from '../components/ContentSection';
import HeroSection from '../components/HeroSection';
import NewsComponent from '../components/NewsComponent';

const news = [
    {
        title: 'News 1 Title',
        date: '2021-01-01',
        description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”',
        imageUrl: 'car.jpg',
    },{
        title: 'News 2 Title',
        date: '2021-01-01',
        description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”',
        imageUrl: 'cars.jpg',
    },{
        title: 'News 3 Title',
        date: '2021-01-01',
        description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”',
        imageUrl: 'cost_and_manufacturing.jpg',
    },{
        title: 'News 4 Title',
        date: '2021-01-01',
        description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”',
        imageUrl: 'cars.jpg',
    }
];

export default function Home() {
    return (
        <div className='flex-col'>
            <HeroSection backgroundUrl={'about_us.png'} title={'Media'} contentCentered />
            <div className='flex-col'>
                {news.map((newsItem, index) => (
                    <NewsComponent
                        key={index}
                        title={newsItem.title}
                        date={newsItem.date}
                        description={newsItem.description}
                        imageUrl={newsItem.imageUrl}
                        isReverse={index % 2 === 0}
                    />
                ))}
                <ContentSection title='WE ARE ENSURING THE BEST CAR' content='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”'
                backgroundUrl={'media.jpg'} />
                {/* Subscribe to News Letter */}
                <div className='flex justify-center p-4'>
                    <div className='flex bg-gray-700 bg-opacity-75 p-2 m-2 items-center rounded-xl'> 
                        <h1 className='p-2 m-2 text-2xl font-bold text-white text-start'>Subscribe to our Newsletter</h1>
                        <input type='text' placeholder='Email Address' className='p-2 m-2 hustify-self-center bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43B02A] ' />
                        <button className='p-2 m-2 bg-[#43B02A] rounded-lg text-white'>Subscribe</button>
                    </div>
                    </div>
            </div>
        </div>
    );
};
