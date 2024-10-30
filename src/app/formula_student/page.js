"use client";
import Header from "../components/Header";
import GreenButton from "../components/GreenButton";
import BackImg from "../components/BackImg";
import BannerSection from "../components/BannerSection";
import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";
import Card from "../components/Card";
import FAQ from "../components/faq";

import {
  Speedometer,
  SpeedometerOutline,
  Construct,
  ConstructOutline,
  Business,
  BusinessOutline,
  Cash,
  CashOutline,
  CarSport, CarSportOutline,
  Barbell, BarbellOutline
} from "react-ionicons";
import { Bebas_Neue } from "next/font/google";


const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Home() {


  const cardsStatics = [
    {
      title: "COST PRESENTATION",
      backgroundImage: "Cost_and_manufacturing.jpg",
      buttonText: "6th",
    },
    {
      title: "DESIGN PRESENTATION",
      backgroundImage: "Design_presentation.jpg",
      buttonText: "19th",
    },
    {
      title: "EV BUSINESS PRESENTATION",
      backgroundImage: "Engineering_design.jpg",
      buttonText: "23rd",
    },
  ];

  const cardsDynamics = [
    {
      title: "ACCELERATIION",
      backgroundImage: "Acceleration.jpg",
      buttonText: "8th",
    },
    {
      title: "SKIDPAD",
      backgroundImage: "Skidpad.jpg",
      buttonText: "11th",
    },
    {
      title: "SPRINT",
      backgroundImage: "Sprint.jpg",
      buttonText: "12th",
    },
    {
      title: "ENDURANCE",
      backgroundImage: "Endurance.jpg",
      buttonText: "DNF",
    }
  ];

  const FAQDyn = [
    {
      question: "Acceleration",
      answer:
        "A straight-line speed event where cars are tested over a 75-meter track to determine their rapid acceleration ability from a standstill, showing the car's raw power and control.",
      icon_active: Speedometer,
      icon_deactive: SpeedometerOutline,
    },
    {
      question: "Skidpad",
      answer:
        "Teams demonstrate their car’s handling and cornering ability by driving in a figure-eight pattern, testing the vehicle's lateral grip and stability under controlled conditions.",
      icon_active: Construct,
      icon_deactive: ConstructOutline,
    },
    {
      question: "Sprint",
      answer:
        "A single-lap time trial on a track where cars are judged on speed and agility, with a focus on precision handling through varied turns.",
      icon_active: CarSport,
      icon_deactive: CarSportOutline
    },
    {
      question: "Endurance",
      answer:
        "The final and longest event, where cars must complete a specific distance on a circuit to assess reliability, fuel or battery efficiency, and overall durability over sustained performance conditions.",
      icon_active: Barbell,
      icon_deactive: BarbellOutline
    }
  ];

  const FAQStat = [
    {
      question: "Design Presentation",
      answer:
        "Teams showcase their car’s design, explaining engineering choices, innovation, and testing processes to judges, focusing on functionality, performance, and manufacturability",
      icon_active: Business,
      icon_deactive: BusinessOutline
    },
    {
      question: "Cost and Manufacturing Presentation",
      answer:
        " Teams present a detailed budget breakdown and discuss the car’s production costs and manufacturing considerations.",
      icon_active: Cash,
      icon_deactive: CashOutline,
    },
    {
      question: " EV Business Presentation",
      answer:
        " Teams pitch their electric vehicle concept as a potential business venture, emphasizing market viability, target audience, unique value proposition, and business strategy.",
      icon_active: Business,
      icon_deactive: BusinessOutline
    },
    {
      question: "AI Business Presentation",
      answer:
        "Teams present their autonomous vehicle concept, addressing market relevance, potential applications, and a business model tailored to commercialize AI-driven solutions.",
      icon_active: Cash,
      icon_deactive: CashOutline
    }
  ];

  return (
    <>
      {/* Header Section */}
      <div className="flex-col overflow-x-hidden ">
        {/* Hero Section */}
        <BannerSection backgroundImage="Formula_student.jpg" title="FORMULA STUDENT" />
        <HeroSection
          id="About"
          title="ABOUT FORMULA STUDENT"
          description="Formula Student is the world’s biggest competition for engineers. Every year competitions are held all across the globe. Founded by the «Society of Automotive Engineers» in 1981, the first competition in Europe took place in 1998. At present, there are more than 600 teams from universities all over the world competing with their self-constructed race cars.
The goal is to develop and provide a platform for student engineers to experience, build, and learn. It offers a unique way to test students’ theoretical knowledge in a practical context. Students gain and develop skills such as engineering, project management and team work.
The winner is not necessarily the team with the fastest car, but the one with the best package regarding construction, performance, financial planning and sales arguments."
          backgroundUrl={"About_formula_student.jpg"}
          contentCentered
        />

        <div id="Dynamic Events" className="justify-items-center ">
          <div id="DynamicEvents" className="flex justify-center items-center">
            <h1 className={`text-4xl font-bold mx-6 mt-6 ${bebas_Neue.className}`}>
              DYNAMIC EVENTS
            </h1>
          </div>
          <FAQ faqData={FAQDyn} />
        </div>

        <div id="Static Events" className="justify-items-center">
          <div id="DynamicEvents" className="flex justify-center items-center">
            <h1 className={`text-4xl font-bold mx-6 mt-6 ${bebas_Neue.className}`}>
              STATIC EVENTS
            </h1>
          </div>
          <FAQ faqData={FAQStat} />
        </div>

        <ContentSection
          id="Competition"
          title={"FSUK 2024"}
          textCenter
          noMargin
          backgroundUrl={"signup.png"}
          hFull
        >
          <div>
            {/* Overall Rank 16th and EV Rank 9th mention here*/}
            <h1 className={`text-2xl font-bold  justify-items-center mx-6 -mt-6 mb-6 text-[#43B02A] `}>
              {" "}
              Overall Rank 16th and EV Rank 9th
            </h1>
            <h1 className="text-3xl font-bold  justify-items-center mx-6 mt-6">
              {" "}
              THE STATICS
            </h1>
            <div className="flex justify-center items-center flex-wrap">
              {cardsStatics.map((card, index) => (
                <div key={card.id || card.uniqueIdentifier} className="w-1/4 mx-2">
                  <Card
                    key={index}
                    title={card.title}
                    backgroundImage={card.backgroundImage}
                    buttonText={card.buttonText}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold  justify-items-center m-6">
              {" "}
              THE DYNAMICS
            </h1>
            <div className="flex justify-center items-center flex-wrap">
              {cardsDynamics.map((card, index) => (
                <div key={card.id || card.uniqueIdentifier} className="w-1/5 mx-2">
                  <Card
                    key={index}
                    title={card.title}
                    backgroundImage={card.backgroundImage}
                    buttonText={card.buttonText}
                  />
                </div>
              ))}
            </div>
          </div>
        </ContentSection>
        {/* Added Already in the Footer the same */}
        {/* <HeroSection
          backgroundUrl="car.jpg"
          title="FOLLOW IN TO KNOW MORE"
          titleColor="[#43B02A]"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim."
          buttonText="REGISTER NOW FOR TOUR"
          contentCentered
        /> */}

      </div>
    </>
  );
}
