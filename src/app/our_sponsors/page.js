"use client";
import BannerSection from "../components/BannerSection";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";
import { Bebas_Neue } from "next/font/google";


const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Home() {
    const sponsors = [
      // EPlan
      // About Energy
        {
          title: "WMG",
          backgroundImage: "Sponsors_Logo/WMG.png"
        },
        {
          title: "Open BOM",
          backgroundImage: "Sponsors_Logo/Openbom.png"
        },
        {
          title: "Vector",
          backgroundImage: "Sponsors_Logo/Vector.png"
        },
        {
          title: "Eurocircuits",
          backgroundImage: "Sponsors_Logo/Eurocircuits.png"
        },
        // WR Composites
        {
          title: "Rapid Harness",
          backgroundImage: "Sponsors_Logo/RapidHarness.png"
        },
        {
          title: "KRAM",
          backgroundImage: "Sponsors_Logo/Kram.png"
        },
        {
          title: "Powerflex",
          backgroundImage: "Sponsors_Logo/Powerflex.png"
        },
        {
          title: "Isabellenhütte",
          backgroundImage: "Sponsors_Logo/Isabellenhutte.png"
        },
        // Womag
        {
          title:"Demontweeks",
          backgroundImage: "Sponsors_Logo/Demontweeks.png"
        },
        {
          title:"Accu",
          backgroundImage: "Sponsors_Logo/Accu.png"
        },
        // Castalum
        {
          title:"Bicester Motion",
          backgroundImage: "Sponsors_Logo/BicesterMotion.png"
        },
        // Easy Composite
      ];

  return (
    <>
      {/* Header Section */}
      <div className="flex-col overflow-x-hidden ">
        {/* Hero Section */}
        <BannerSection backgroundImage="landing.png" title="SPONSORS" />
        
        <div className="flex justify-center items-center flex-wrap">
              {sponsors.map((card, index) => (
                <div key={card.id || card.uniqueIdentifier}
                className="w-1/4 mx-2">
                  <Card
                    key={index}
                    title={card.title}
                    backgroundImage={card.backgroundImage}
                    isContain
                  />
                </div>
              ))}
        </div>

        <HeroSection
        backgroundUrl="car.jpg"
        title="FOLLOW IN TO KNOW MORE"
        titleColor="[#43B02A]" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim."
        buttonText="REGISTER NOW FOR TOUR"
        contentCentered
      />
      </div>
    </>
  );
}
