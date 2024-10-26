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
      const TechincalTeam = [
        {
          name: "John Doe",
          title: "Team Leader",
          backgroundImage: "Teams/Tech/John.jpg",
        },
        {
          name: "Jane Doe",
          title: "Team Leader",
          backgroundImage: "Teams/Tech/Jane.jpg",
        }
      ];
    
      const OperationsTeam = [
        {
          name: "John Doe",
          title: "Team Leader",
          backgroundImage: "Teams/Operations/John.png",
        },
        {
          name: "Jane Doe",
          title: "Team Leader",
          backgroundImage: "Teams/Operations/Jane.png",
        }
      ];

      const DriversTeam = [
        {
          name: "John Doe",
          title: "Team Leader",
          backgroundImage: "Teams/Drivers/John.png",
        },
        {
          name: "Jane Doe",
          title: "Team Leader",
          backgroundImage: "Teams/Drivers/Jane.png",
        }
      ];

      const CoreTeam = [
        {
          name: "John Doe",
          title: "Team Leader",
          backgroundImage: "Teams/Core/John.png",
        },
        {
          name: "Jane Doe",
          title: "Team Leader",
          backgroundImage: "Teams/Core/Jane.png",
        }
      ];


  return (
    <>
      {/* Header Section */}
      <div className="flex-col overflow-x-hidden ">
        {/* Hero Section */}
        <BannerSection backgroundImage="about_us.png" title="OUR TEAM" />
        
        {/* <div className="flex justify-center items-center flex-wrap">
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
        </div> */}

        {/* Header for Team Name */}
        <h1 className={`text-6xl m-4 p-2 font-semibold text-center text-white ${bebas_Neue.className} `}>
          TECHNICAL TEAM
        </h1>
        <div className="flex justify-center items-center flex-wrap">
          {TechincalTeam.map((card, index) => (
            <div key={card.id || card.uniqueIdentifier} className="w-1/4 mx-2">
              <Card
                title={card.name}
                backgroundImage={card.backgroundImage}
                imgTop
                // fullRounded
              />
               {/* title */}
               <p className={`text-lg m-4 p-2 font-semibold text-center text-[#43B02A] ${bebas_Neue.className} `}>
                {card.title}
              </p>
            </div>
             
          ))}
          </div>

      </div>
    </>
  );
}
