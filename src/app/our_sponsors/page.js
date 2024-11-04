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
      backgroundImage: "Sponsors_Logo/Eplan.jpeg",
      type: "Diamond",
      description:
        "EPLAN provides software and services for electrical engineering, automation, and mechatronics, supporting industries such as manufacturing, plant construction, automotive, and more. Their platform helps streamline the design and documentation processes, offering a range of engineering solutions. With a focus on improving efficiency, EPLAN's tools enable businesses to create and manage complex engineering projects, enhancing collaboration across engineering disciplines.",
    },
    {
      title: "Open BOM",
      backgroundImage: "Sponsors_Logo/Openbom.png",
      type: "Diamond",
      description:
        " OpenBOM is a cloud-based tool designed to streamline product data and bill of materials (BOM) management, ideal for engineers, manufacturers, and supply chain teams. It provides real-time collaboration on BOMs, inventory, and parts lists, integrating with popular CAD systems and enabling users to track revisions, costs, and quantities across projects. OpenBOM enhances visibility and efficiency in the product lifecycle, making it easier to manage data from design through manufacturing.",
    },
    {
      title: "About Energy",
      backgroundImage: "Sponsors_Logo/About_Energy.png",
      type: "Diamond",
      description:
        "About Energy specializes in advanced battery technology solutions, offering data-driven insights and tools to improve battery design, performance, and sustainability. Their platform supports industries such as automotive, aerospace, and energy storage by providing models, simulations, and a comprehensive battery cell library to optimize energy systems and streamline decision-making across the battery lifecycle.",
    },
    {
      title: "WMG",
      backgroundImage: "Sponsors_Logo/WMG.png",
      type: "Diamond",
      description:
        "WMG, part of the University of Warwick, is a leading research and education centre focused on advancing engineering, technology, and innovation. It specializes in high-value manufacturing and the automotive sector, providing expertise in areas such as digital technologies, materials, and energy. Through collaboration with industry partners, WMG drives research initiatives that enhance productivity and sustainability, making significant contributions to the UK's engineering sector.",
    },
    {
      title: "Warwick School of Engineering",
      backgroundImage: "Sponsors_Logo/WWSOE.png",
      type: "Diamond",
      description:
        "The Warwick School of Engineering is a leading academic institution that offers undergraduate and postgraduate programs in engineering disciplines. With a focus on research and innovation, the school provides students with a comprehensive education in areas such as automotive engineering, manufacturing, and sustainable energy. By fostering collaboration between students, academics, and industry partners, the Warwick School of Engineering prepares graduates to address complex engineering challenges and drive technological advancements.",
    },
    {
      title: "Catapult",
      backgroundImage: "Sponsors_Logo/Catapult.png",
      type: "Diamond",
      description:
        "Catapult is a network of technology and innovation centres that support businesses in developing new products and services. With a focus on key sectors such as manufacturing, digital technologies, and energy, Catapult provides access to expertise, facilities, and funding to drive innovation and growth. By connecting businesses with research institutions and industry partners, Catapult helps accelerate the development of cutting-edge technologies and solutions.",
    }
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
      description: "Vector Informatik is a leading company specializing in software solutions and components for the automotive industry. Founded in 1988, it provides innovative tools that facilitate the development of automotive electronics, enabling efficient diagnostics, simulation automation, and project monitoring. Their offerings extend to sectors like aerospace and healthcare, reflecting a commitment to advancing technologies such as electromobility and autonomous driving. With over 4,500 employees worldwide, Vector plays a crucial role in supporting manufacturers and suppliers to enhance their development projects and bring cutting-edge products to market.",
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
      website: "https://www.accu.co.uk/",
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
              <div key={card.id || card.uniqueIdentifier} className="w-1/6 mx-2" onClick={
                // redirect to a card.website
                () => {
                  if (card.website) {
                    window.open(card.website, "_blank");
                  }

                }}>
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
          description="Partner with us to support the next generation of engineering talent and drive innovation in motorsport."
          buttonText="Download Sponsorship Handbook"
          buttonLink={"https://acrobat.adobe.com/id/urn:aaid:sc:EU:8a7b0f6e-1b54-4998-816a-9d5612ecd68d"}
          contentCentered
        />
      </div>
    </>
  );
}
