import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import GreenButton from './components/GreenButton';

export default function Home() {
  return (
    <div className="flex-col overflow-x-hidden">
      {/* Header Section */}
      {/* make the button center */}
      <div className='flex justify-center items-center'>
        <GreenButton>
          <a href="https://movember.com">Donate to Movember</a>
        </GreenButton>
      </div>
      <HeroSection
        backgroundUrl="car.jpg"
        title="WARWICK RACING"
        // description="Having been open to students from all backgrounds since 2014, Warwick Racing has produced 7 generations of competitive internal-combustion engine cars. Finishing with the WR7 in 2018, the team shifted its overall focus to producing fully electric powered racers."
      // buttonText="FUTURE OF WARWICK RACING"
      description="Warwick University's Formula Student Team"
      frontPageSub
      desFont
      />

      {/* About Us Section */}
      <ContentSection
        hMax
        title="ABOUT US"
        desMargin
        content={``}>
        {/* add a background image */}
        <p className='lg:text-lg md:text-xl sm:text-md text-white text-center flex-[2] mt-10 mb-1 mx-36 z-0'>We are Warwick University’s Formula Student team. Established more than 20 years ago, we have been home to many talented engineering students until 2018, when we became a cross-disciplinary team open to all years. Now, Warwick Racing is a team where more than 100 members work together every day, tackling challenges and working towards a common goal. More than a team, Warwick Racing is a place to learn new skills, work with people who share the same passion, and build your future career. </p>
        <p className='lg:text-lg md:text-xl sm:text-md text-white text-center flex-[2] mx-36 my-1 z-0'>Our home, in WMG on the University of Warwick campus, is where everything happens. Where every bolt is tightened, where ideas are shared, where each part is meticulously placed on our car, and where we push forward. We are proud to be hosted by WMG, where we can learn from experts in the industry and have access to state-of-the-art facilities and services. </p>
        <p className='lg:text-lg md:text-xl sm:text-md text-white text-center flex-[2] mx-36 mt-1 mb-6 z-0'> The team has produced seven generations of combustion vehicles and three generations of electric vehicles. Now, after a successful competition last July with WRe3, our focus has shifted to designing and producing our fourth-generation EV, WRe4. More than ever, we are doing everything in our power to make this season our most successful yet, and we want you to see it.</p>
        <div className=":w-3/5 h-3/5 bg-no-repeat z-0" style={{
          backgroundImage: "url('about_us.png')",
          backgroundPosition: "center",
          backgroundSize: "contain"
        }} />
      </ContentSection>
    </div>
  );
}