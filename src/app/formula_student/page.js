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
  CashOutline
} from "react-ionicons";
import { Bebas_Neue } from "next/font/google";


const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Home() {


  const cardsStatics = [
    {
      title: "BUSINESS PLANNING",
      backgroundImage: "/business_planning.jpg",
      buttonText: "75 Pt.",
    },
    {
      title: "COST AND MANUFACTURING",
      backgroundImage: "/cost_and_manufacturing.jpg",
      buttonText: "100 Pt.",
    },
    {
      title: "ENGINEERING DESIGN",
      backgroundImage: "/engineer_design.jpg",
      buttonText: "150 Pt.",
    },
  ];

  const cardsDynamics = [
    {
      title: "ACCELERATIION",
      backgroundImage: "/business_planning.jpg",
      buttonText: "75 Pt.",
    },
    {
      title: "SKIDPAD",
      backgroundImage: "/cost_and_manufacturing.jpg",
      buttonText: "75 Pt.",
    },
    {
      title: "ENDURANCE",
      backgroundImage: "/engineer_design.jpg",
      buttonText: "325 Pt.",
    },
    {
      title: "EFFICIENCY",
      backgroundImage: "/business_planning.jpg",
      buttonText: "100 Pt.",
    },
  ];

  const FAQDyn = [
    {
      question: "Acceleration",
      answer:
        "Acceleration is the rate at which a car increases its speed. It is measured in units of time and distance per second, or meters per second squared (m/s²).",
      icon_active: Speedometer,
      icon_deactive: SpeedometerOutline,
    },
    {
      question: "Skid Pad",
      answer:
        "Skid pad is a type of road surface that is used to slow down a car. It is typically made of rubber or plastic and is used to prevent a car from skidding.",
      icon_active: Construct,
      icon_deactive: ConstructOutline,
    },
  ];

  const FAQStat = [
    {
      question: "Business Planning",
      answer:
        "Business planning is the process of creating a plan to achieve a specific goal. It involves identifying the resources and activities needed to achieve the goal.",
      icon_active: Business,
      icon_deactive: BusinessOutline
    },
    {
      question: "Cost and Manufacturing",
      answer:
        "Cost and manufacturing is the process of creating a product or service. It involves identifying the resources and activities needed to create the product or service.",
      icon_active: Cash,
      icon_deactive: CashOutline,
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="flex-col overflow-x-hidden ">
        {/* Hero Section */}
        <BannerSection backgroundImage="/landing.png" title="FORMULA STUDENT" />
        <HeroSection
          id="About"
          title="ABOUT FORMULA STUDENT"
          description="Formula Student is the world’s biggest competition for engineers. Every year competitions are held all across the globe. Founded by the «Society of Automotive Engineers» in 1981, the first competition in Europe took place in 1998. At present, there are more than 600 teams from universities all over the world competing with their self-constructed race cars.
The goal is to develop and provide a platform for student engineers to experience, build, and learn. It offers a unique way to test students’ theoretical knowledge in a practical context. Students gain and develop skills such as engineering, project management and team work.
The winner is not necessarily the team with the fastest car, but the one with the best package regarding construction, performance, financial planning and sales arguments."
          backgroundUrl={"signup.png"}
          contentCentered
        />

        <div id="Dynamic Events" className="justify-items-center">
          <h1 className={`text-4xl font-bold mx-6 mt-6 ${bebas_Neue.className}`}>
            DYNAMIC EVENTS
          </h1>
          <FAQ faqData={FAQDyn} />
        </div>

        <div id="Static Events" className="justify-items-center">
          <h1 className={`text-4xl font-bold mx-6 mt-6 ${bebas_Neue.className}`}>
            STATIC EVENTS
          </h1>
          <FAQ faqData={FAQStat} />
        </div>

        <HeroSection
          backgroundUrl="/car.jpg"
          title="FOLLOW IN TO KNOW MORE"
          titleColor="[#43B02A]"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim."
          buttonText="REGISTER NOW FOR TOUR"
          contentCentered
        />

        <ContentSection
          id="Competition"
          title={"THE COMPETITION"}
          textCenter
          noMargin
          backgroundUrl={"signup.png"}
          hFull
        >
          <div>
            <h1 className="text-3xl font-bold  justify-items-center mx-6 mt-6">
              {" "}
              THE STATICS (325 POINTS)
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
              THE DYNAMICS (675 POINTS)
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
      </div>
    </>
  );
}
