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
        {
          title: "WMG",
          backgroundImage: "Sponsors_Logo/WMG.png"
        },
        {
          title: "Sponsor 2",
          backgroundImage: "/sponsor2.jpg",
          buttonText: "75 Pt.",
        },
        {
          title: "Sponsor 3",
          backgroundImage: "/sponsor3.jpg",
          buttonText: "75 Pt.",
        },
        {
          title: "Sponsor 4",
          backgroundImage: "/sponsor4.jpg",
          buttonText: "75 Pt.",
        },
        {
          title: "Sponsor 5",
          backgroundImage: "/sponsor5.jpg",
          buttonText: "75 Pt.",
        },
        {
          title: "Sponsor 6",
          backgroundImage: "/sponsor6.jpg",
          buttonText: "75 Pt.",
        },
        {
          title: "Sponsor 7",
          backgroundImage: "/sponsor7.jpg",
          buttonText: "75 Pt.",
        },
        {
          title: "Sponsor 8",
          backgroundImage: "/sponsor8.jpg",
          buttonText: "75 Pt.",
        },
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
