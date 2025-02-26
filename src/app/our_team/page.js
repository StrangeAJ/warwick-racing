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
          name: "Sukhdev Ahluwalia",
          title: "Chassis",
          backgroundImage: "Teams/Tech/Sukhdev.jpeg",
        },
        {
          name: "Aryan Karnik",
          title: "Suspension",
          backgroundImage: "Teams/Tech/Aryan.jpeg",
        },
        {
          name: "Eric Rossi",
          title: "Vehicle Dynamics",
          backgroundImage: "Teams/Tech/Eric.jpeg",
        },
        {
          name: "Sebastian Feakes",
          title: "Drivetrain",
          backgroundImage: "Teams/Tech/Sebastian.jpeg",
        },
        {
          name: "Will Canning",
          title: "Electrical",
          backgroundImage: "Teams/Tech/Will.jpeg",
        },
        {
          name: "Aiden Smith",
          title: "Battery",
          backgroundImage: "Teams/Tech/Aiden.jpeg",
        },
        {
          name: "Fredrick Stephens",
          title: "FEA",
          backgroundImage: "Teams/Tech/Freddie.jpeg",
        },
        {
          name: "Joshua Jose",
          title: "Control Systems",
          backgroundImage: "Teams/Tech/Joshua.jpeg",
        },
        {
          name: "Ben Roberts",
          title: "Vehicle Performance",
          backgroundImage: "Teams/Tech/Ben.jpeg",
        },  
        {
          name: "Fredrick Stephens",
          title: "CAD & PLM",
          backgroundImage: "Teams/Tech/Freddie.jpeg",
        },
        {
          name: "Daisy Lovell",
          title: "Trackside Operations",
          backgroundImage: "Teams/Tech/Daisy.jpeg",
        },
        {
          name: "Mohamed Khalid Mohamed Elsheikh",
          title: "Workshop Manager",
          backgroundImage: "Teams/Tech/Mohamed.jpeg",
        },
        {
          // name: "Mohamed Khalid Mohamed Elsheikh",
          title: "AI DDT",
          backgroundImage: "Teams/User.jpg",
        }
      ];
    
      const OperationsTeam = [
        /* Media, Communications & Events - Kareena Gopwani Mahtani 
Procurement - Abhi Koria 
HR - Omkar Maruti Gavali Sponsorships & Partnerships - Hashim Sheikh */
        {
          name: "Kareena Gopwani Mahtani",
          title: "Marketing, Communications & Events",
          backgroundImage: "Teams/Operations/Kareena.jpeg",
        },
        {
          name: "Abhi Koria",
          title: "Procurement",
          backgroundImage: "Teams/Operations/Abhi.jpeg",
        },
        {
          name: "Omkar Maruti Gavali",
          title: "Human resources",
          backgroundImage: "Teams/Operations/Omkar.jpeg",
        },
        {
          name: "Hashim Sheikh",
          title: "Sponsorships & Partnerships",
          backgroundImage: "Teams/Operations/Hashim.jpeg",
        }
      ];

      // const DriversTeam = [
      //   {
      //     name: "John Doe",
      //     title: "Team Leader",
      //     backgroundImage: "Teams/Drivers/John.png",
      //   },
      //   {
      //     name: "Jane Doe",
      //     title: "Team Leader",
      //     backgroundImage: "Teams/Drivers/Jane.png",
      //   }
      // ];

      const CoreTeam = [
        {
          name: "Madeleine Pomroy",
          title: "Team Principal",
          backgroundImage: "Teams/Core/Madeleine.jpeg",
        },
        {
          name: "Aiden Smith",
          title: "Technical Director",
          backgroundImage: "Teams/Core/Aiden.jpeg",
        },
        {
          name: "Fredrick Stephens",
          title: "Project Manager",
          backgroundImage: "Teams/Core/Freddie.jpeg",
        },
        {
          name: "Kareena Gopwani Mahtani",
          title: "Chief Operating Officer",
          backgroundImage: "Teams/Core/Kareena.jpeg",
        },
      ];


  return (
    <>
      {/* Header Section */}
      <div className="flex-col overflow-x-hidden ">
        {/* Hero Section */}
        <BannerSection backgroundImage="Our_team.jpg" title="OUR TEAM" />
        
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
        MANAGEMENT TEAM
        </h1>
        <div className="flex justify-center items-center flex-wrap">
          {CoreTeam.map((card, index) => (
            <div key={card.id || card.uniqueIdentifier} className="xl:w-1/5 mx-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card
                title={card.name}
                backgroundImage={card.backgroundImage}
                // fullRounded
              />
               {/* title */}
               <p className={`text-lg m-4 p-2 font-semibold text-center text-[#43B02A] ${bebas_Neue.className} `}>
                {card.title}
              </p>
            </div>
             
          ))}
          </div>

          {/* Header for Team Name */}
        <h1 className={`text-6xl m-4 p-2 font-semibold text-center text-white ${bebas_Neue.className} `}>
          TECHNICAL TEAM
        </h1>
          <div className="flex justify-center items-center flex-wrap">
          {TechincalTeam.map((card, index) => (
            <div key={card.id || card.uniqueIdentifier} className="xl:w-1/5 mx-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card
                title={card.name}
                backgroundImage={card.backgroundImage}
                // imgTo  p
                // fullRounded
              />
               {/* title */}
               <p className={`text-lg m-4 p-2 font-semibold text-center text-[#43B02A] ${bebas_Neue.className} `}>
                {card.title}
              </p>
            </div>
             
          ))}
          </div>

          {/* Header for Team Name */}
          <h1 className={`text-6xl m-4 p-2 font-semibold text-center text-white ${bebas_Neue.className} `}>
          OPERATIONS TEAM
        </h1>
          <div className="flex justify-center items-center flex-wrap">
          {OperationsTeam.map((card, index) => (
            <div key={card.id || card.uniqueIdentifier} className="xl:w-1/5 mx-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card
                title={card.name}
                backgroundImage={card.backgroundImage}
                // imgTo  p
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
