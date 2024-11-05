import ContentSection from '../components/ContentSection';
import HeroSection from '../components/HeroSection';
import NewsComponent from '../components/NewsComponent';
import getAllEvents from './getAllEvents';

const news = [
    {
        title: 'Formula Student South Africa',
        date: 'February 2023',
        description: 'Part of our team had the chance to travel to South Africa as part of the team’s previous collaboration with Formula Student Africa. There, they had the great opportunity to meet with the organisation and discuss various topics related to motorsport and Formula Student. The team participated in fundraising and visited Formula E on their Cape Town E-Prix.',
        imageUrl: 'events/Event1.jpeg',
    },{
        title: 'Advanced Engineering Show',
        date: 'October 2024',
        description: 'Our team had the opportunity to showcase the WRe3 at the Advanced Engineering Show at the NEC in Birmingham on the 30th and 31st of October alongside the Southampton University Formula Student Racing Team. With the aim of presenting our innovations, sharing student projects, and talking to industry professionals at the event, the show proved to be a brilliant success.',
        imageUrl: 'cars.jpg',
    },
    {
        title: '5-a-side football evening Girls on Track outreach event',
        date: 'November 2024',
    },
    {
        title: "Alumni seminar by Matt Stammers on 'Car Setup & Dynamics'",
        date: 'November 2024',
    }
    // {
    //     title: 'News 3 Title',
    //     date: '2021-01-01',
    //     description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”',
    //     imageUrl: 'cost_and_manufacturing.jpg',
    // },{
    //     title: 'News 4 Title',
    //     date: '2021-01-01',
    //     description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”',
    //     imageUrl: 'cars.jpg',
    // }
];


var news2 = await getAllEvents();

const EventPage = () => {
    return (
        <div className='flex-col'>
            <HeroSection backgroundUrl={'Events.jpeg'} title={'Events'} contentCentered  imagePosition={'center'}/>
            <div className='flex-col'>
                {news2.map((newsItem, index) => (
                    <NewsComponent
                        key={index}
                        title={newsItem.title}
                        date={newsItem.event_date.toLocaleString('en-US', { month: 'long', year : 'numeric' })}
                        description={newsItem.description}
                        imageUrl={newsItem.image_url}
                        // isReverse={index % 2 === 0}
                    />
                ))}
                <ContentSection title='WE ARE ENSURING THE BEST CAR' content=' '
                backgroundUrl={'media.jpg'} />
                {/* Subscribe to News Letter */}
                {/* <div className='flex justify-center p-4'>
                    <div className='flex bg-gray-700 bg-opacity-75 p-2 m-2 items-center rounded-xl'> 
                        <h1 className='p-2 m-2 text-2xl font-bold text-white text-start'>Subscribe to our Newsletter</h1>
                        <input type='text' placeholder='Email Address' className='p-2 m-2 hustify-self-center bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43B02A] ' />
                        <button className='p-2 m-2 bg-[#43B02A] rounded-lg text-white'>Subscribe</button>
                    </div>
                    </div> */}
            </div>
        </div>
    );
};

export default EventPage;