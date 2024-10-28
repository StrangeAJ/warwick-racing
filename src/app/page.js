import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex-col overflow-x-hidden">
      {/* Header Section */}
      <HeroSection
        backgroundUrl="car.jpg"
        title="WARWICK RACING"
        description="Having been open to students from all backgrounds since 2014, Warwick Racing has produced 7 generations of competitive internal-combustion engine cars. Finishing with the WR7 in 2018, the team shifted its overall focus to producing fully electric powered racers."
      // buttonText="FUTURE OF WARWICK RACING"
      />

      {/* About Us Section */}
      <ContentSection
        hScreen
        // backgroundUrl="backlogo.png"
        title="ABOUT US"
        content="Having been open to students from all backgrounds since 2014, Warwick Racing has produced 7 generations of competitive internal-combustion engine cars. Finishing with the WR7 in 2018, the team shifted its focus to producing electric cars.">
        {/* add a background image */}
        <div className=":w-3/5 h-3/5 bg-no-repeat z-0" style={{
          backgroundImage: "url('about_us.png')",
          backgroundPosition: "center",
          backgroundSize: "contain"
        }} />
      </ContentSection>
    </div>
  );
}
