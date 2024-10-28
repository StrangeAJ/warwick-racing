"use client";
import BannerSection from "../components/BannerSection";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";
import { Bebas_Neue } from "next/font/google";
import SponserCard from "../components/SponserCard";

const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Home() {
  const Diamond_sponsors = [
    {
      title: "EPlan",
      backgroundImage: "Sponsors_Logo/EPLAN.png",
      type: "Diamond",
      description:
        "EPlan is a German-based electrical engineering software company.",
    },
    {
      title: "Open BOM",
      backgroundImage: "Sponsors_Logo/Openbom.png",
      type: "Diamond",
      description:
        "OpenBOM is a modern product lifecycle management and bill of materials management software for engineering teams.",
    },
    {
      title: "About Energy",
      backgroundImage: "Sponsors_Logo/About_Energy.png",
      type: "Diamond",
      description:
        "About Energy is a German-based electrical engineering software company.",
    },
    {
      title: "WMG",
      backgroundImage: "Sponsors_Logo/WMG.png",
      type: "Diamond",
      description:
        "WMG is an academic department at the University of Warwick, providing research, education and knowledge transfer in engineering, manufacturing and technology.",
    },
  ];

  const Platinum_sponsors = [
    // {
    //   title: "Optimas",
    //   backgroundImage: "Sponsors_Logo/Optimas.png",
    //   type: "Platinum",
    //   description:
    //     "Optimas is a global distributor of fasteners and c-class products.",
    // },
    {
      title: "Vector",
      backgroundImage: "Sponsors_Logo/Vector.png",
      type: "Platinum",
      description: "Vector is a German-based automotive electronics company.",
    },
  ];

  const Gold_sponsors = [

    {
      title: "Eurocircuits",
      backgroundImage: "Sponsors_Logo/Eurocircuits.png",
      type: "Gold",
      description:
        "Eurocircuits is a European manufacturer of prototype and small series PCBs.",
    },
    {
      title: "WR Composites",
      backgroundImage: "Sponsors_Logo/WR_Composites.png",
      type: "Gold",
      description:
        "WR Composites is a manufacturer of performance polyurethane suspension bushes.",
    },
    {
      title: "Rapid Harness",
      backgroundImage: "Sponsors_Logo/RapidHarness.png",
      type: "Gold",
      description: "RapidHarness is a software for designing wire harnesses.",
    },
  ];

  const Silver_sponsors = [
    {
      title: "KRAM",
      backgroundImage: "Sponsors_Logo/Kram.png",
      type: "Silver",
      description: "KRAM is a German-based automotive electronics company.",
    },
    {
      title: "Powerflex",
      backgroundImage: "Sponsors_Logo/Powerflex.png",
      type: "Silver",
      description:
        "Powerflex is a manufacturer of performance polyurethane suspension bushes.",
    },
    {
      title: "Isabellenhütte",
      backgroundImage: "Sponsors_Logo/Isabellenhutte.png",
      type: "Silver",
      description:
        "Isabellenhütte is a German manufacturer of electrical components.",
    },
    {
      title: "Womag",
      backgroundImage: "Sponsors_Logo/Womag.png",
      type: "Silver",
      description:
        "Womag is a manufacturer of performance polyurethane suspension bushes.",
    },
    {
      title: "Demontweeks",
      backgroundImage: "Sponsors_Logo/Demontweeks.png",
      type: "Silver",
      description: "Demon Tweeks is a retailer of performance car parts.",
    },
    {
      title: "Proseat",
      backgroundImage: "Sponsors_Logo/Proseat.png",
      type: "Silver",
      description: "Proseat is a manufacturer of performance polyurethane suspension bushes.",
    },
    {
      title: "Accu",
      backgroundImage: "Sponsors_Logo/Accu.png",
      type: "Silver",
      description:
        "Accu is a manufacturer of performance polyurethane suspension bushes.",
    },
    {
      title: "Bicester Motion",
      backgroundImage: "Sponsors_Logo/BicesterMotion.png",
      type: "Silver",
      description:
        "Bicester Motion is a manufacturer of performance polyurethane suspension bushes.",
    }
  ];

  const Affiliate_sponsors = [
    {
      title: "Easy Composite",
      backgroundImage: "Sponsors_Logo/Easy_Composites.png",
      type: "Affiliate",
      description:
        "Easy Composites is a manufacturer of performance polyurethane suspension bushes.",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="flex-col overflow-x-hidden ">
        {/* Hero Section */}
        <BannerSection backgroundImage="media.jpg" title="SPONSORS" />

        <div className="flex justify-center items-center flex-wrap">
          {/* make a Division titled Diamond Sponors with Font Bebas_Nue */}
          <h1 className={`text-6xl m-4 p-2 font-semibold text-center text-white ${bebas_Neue.className} `}>
            DIAMOND SPONSORS
          </h1>
          {Diamond_sponsors.map((card, index) => (
            <div key={card.id || card.uniqueIdentifier} className="w-full mx-2">
              <SponserCard
                title={card.title}
                backgroundImage={card.backgroundImage}
                description={card.description}
              />
            </div>
          ))}

          {/* make a Division titled Platinum Sponors with Font Bebas_Nue */}
          <div className="w-[90%] h-1 mt-10 bg-white rounded-3xl " />
          <h1 className={`text-6xl m-8 p-2 mt-20 font-semibold text-center text-white ${bebas_Neue.className} `}>
            PLATINUM SPONSORS
          </h1>
          {Platinum_sponsors.map((card, index) => (
            <div key={card.id || card.uniqueIdentifier} className="w-full mx-2">
              <SponserCard
                title={card.title}
                backgroundImage={card.backgroundImage}
                description={card.description}
              />
            </div>
          ))}

          {/* make a Division titled Gold Sponors with Font Bebas_Nue */}
          <div className="w-[90%] h-1 mt-10 bg-white rounded-3xl " />
          <h1 className={`text-6xl m-8 p-2 font-semibold text-center text-white ${bebas_Neue.className} `}>
            GOLD SPONSORS
          </h1>
          <div className="flex justify-center items-center flex-wrap w-full">
            {Gold_sponsors.map((card, index) => (
              <div key={card.id || card.uniqueIdentifier} className="w-1/5 mx-2">
                <Card
                  backgroundImage={card.backgroundImage}
                  description={card.description}
                  isContain
                  isSponsor
                />
              </div>
            ))}
          </div>

          <div className="w-[90%] h-1 mt-10 bg-white rounded-3xl " />
          <h1 className={`text-6xl m-8 p-2 font-semibold text-center text-white ${bebas_Neue.className} `}>
            SILVER SPONSORS
          </h1>
          <div className="flex justify-center items-center flex-wrap w-full">
            {Silver_sponsors.map((card, index) => (
              <div key={card.id || card.uniqueIdentifier} className="w-1/6 mx-2">
                <Card
                  backgroundImage={card.backgroundImage}
                  description={card.description}
                  isContain
                  isSponsor
                />
              </div>
            ))}
          </div>

          <div className="w-[90%] h-1 mt-10 bg-white rounded-3xl " />
          <h1 className={`text-6xl m-8 p-2 font-semibold text-center text-white ${bebas_Neue.className} `}>
            Affiliate SPONSORS
          </h1>
          <div className="flex justify-center items-center flex-wrap w-full">
            {Affiliate_sponsors.map((card, index) => (
              <div key={card.id || card.uniqueIdentifier} className="w-1/5 mx-2">
                <Card
                  backgroundImage={card.backgroundImage}
                  description={card.description}
                  isContain
                  isSponsor
                />
              </div>
            ))}
          </div>
        </div>
        <HeroSection
            backgroundUrl="car.jpg"
            title="Interested in Parterning with US?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim."
            buttonText="Download Sponsorship Handbook"
            buttonLink={"https://acrobat.adobe.com/id/urn:aaid:sc:EU:8a7b0f6e-1b54-4998-816a-9d5612ecd68d"}
            contentCentered
          />
      </div>
    </>
  );
}
