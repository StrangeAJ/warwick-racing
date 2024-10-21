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
    const teams = [
        {
          title: "Operations",
          backgroundImage: "/Teams/operations.jpg"
        },
        {
          title: "Technical",
          backgroundImage: "/Teams/technical.jpg",
        },
        {
          title: "Drivers",
          backgroundImage: "/Teams/drivers.jpg",
        },
        {
            title:"Core",
            backgroundImage:"/Teams/core.jpg"
        }
      ];

  return (
    <>
      {/* Header Section */}
      <div className="flex-col overflow-x-hidden ">
        {/* Hero Section */}
        <BannerSection backgroundImage="/about_us.png" title="OUR TEAM" />
        
        <div className="flex justify-center items-center flex-wrap">
              {teams.map((card, index) => (
                <div key={card.id || card.uniqueIdentifier} className="w-1/3 mx-2">
                  <Card
                    key={index}
                    title={card.title}
                    backgroundImage={card.backgroundImage}
                    imgTop
                  />
                </div>
              ))}
        </div>

        <HeroSection
        backgroundUrl="/car.jpg"
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
