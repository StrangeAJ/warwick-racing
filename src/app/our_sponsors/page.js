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
      title: "WMG",
      backgroundImage: "Sponsors_Logo/WMG.png",
      type: "Diamond",
      description:
        "WMG is a major research and education institution dedicated to promoting engineering, technology, and innovation. It is a part of the University of Warwick. It offers expertise in fields including digital technologies, materials, and energy and focuses on high-value manufacturing and the automotive industry. WMG makes major contributions to the engineering sector in the UK by advancing research efforts that improve sustainability and productivity through partnerships with industries.",
        website: "https://warwick.ac.uk/fac/sci/wmg/"
    },
    {
      title: "Open BOM",
      backgroundImage: "Sponsors_Logo/Openbom.png",
      type: "Diamond",
      description:
        "For engineers, manufacturers, and supply chain teams, OpenBOM is a cloud-based platform that simplifies the management of product data and bill of materials (BOM). With its integration with well-known CAD systems, it facilitates real-time collaboration on BOMs, inventory, and parts lists while allowing users to monitor changes, expenses, and quantities throughout projects. OpenBOM facilitates data management from design to manufacturing, increasing visibility and efficiency throughout the product lifecycle.",
        website: "https://www.openbom.com/"
    },
    {
      title: "About Energy",
      backgroundImage: "Sponsors_Logo/About_Energy.png",
      type: "Diamond",
      description:
        "About Energy is an expert in innovative battery technology solutions, providing data-driven insights and instruments to enhance battery sustainability, performance, and design. By offering models, simulations, and an extensive battery cell library to optimise energy systems and improve decision-making across the battery lifecycle, their platform assists sectors like automotive, aerospace, and energy storage.",
        website: "https://www.aboutenergy.io/"
    },
    {
      title: "Warwick School of Engineering",
      backgroundImage: "Sponsors_Logo/WWSOE.png",
      type: "Diamond",
      description:
        "The Warwick School of Engineering is a leading academic institution that provides undergraduate and postgraduate engineering degrees. The school offers students a thorough education in subjects including automotive, mechanical, electrical and electronics engineering, and much more, with an emphasis on research and innovation. The Warwick School of Engineering equips graduates to tackle challenging engineering problems and drive advancement in technology by encouraging cooperation among students, faculty, and industry partners.",
        website: "https://warwick.ac.uk/fac/sci/eng/"
    },
    {
      title: "Catapult",
      backgroundImage: "Sponsors_Logo/Catapult.png",
      type: "Diamond",
      description:
        "Catapult is an innovation and technology centre network that helps companies create new products and services. Catapult offers access to expertise, facilities, and funding to encourage innovation and development, with an emphasis on important industries including manufacturing, digital technologies, and energy. Through its ability to link companies with academic institutions and industry partners, Catapult facilitates the rapid development of innovative technologies and solutions.",
        website: "https://hvm.catapult.org.uk/"
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
      description: "Vector Informatik is a prominent provider of automotive software systems and components. Established in 1988, it offers innovative tools that support the advancement of automotive electronics, facilitating effective project monitoring, simulation automation, and diagnostics. Their services cover industries from healthcare to aerospace and automotive, demonstrating their dedication to developing cutting-edge technology like autonomous driving and electromobility. With more than 4,500 workers globally, Vector is essential in helping suppliers and manufacturers advance their research and development initiatives.",
      website: "https://www.vector.com/int/en/products/solutions/software-defined-vehicle/"
    },
  ];

  const Gold_sponsors = [
    {
      title: "EPlan",
      backgroundImage: "Sponsors_Logo/Eplan.png",
      type: "Diamond",
      description:
        "EPLAN provides software and services for electrical engineering, automation, and mechatronics, supporting industries such as manufacturing, plant construction, automotive, and more. Their platform helps streamline the design and documentation processes, offering a range of engineering solutions. With a focus on improving efficiency, EPLAN's tools enable businesses to create and manage complex engineering projects, enhancing collaboration across engineering disciplines.",
        invertCard: true,
        website: "https://www.eplan.co.uk/"
    },
    {
      title: "Eurocircuits",
      backgroundImage: "Sponsors_Logo/Eurocircuits.png",
      type: "Gold",
      description:
        "Eurocircuits is a European manufacturer of prototype and small series PCBs.",
        website: "https://www.eurocircuits.com/"
    },
    {
      title: "WR Composites",
      backgroundImage: "Sponsors_Logo/WR_Composites.png",
      type: "Gold",
      description:
        "WR Composites is a manufacturer of performance polyurethane suspension bushes.",
        website: "https://wrcomposites.co.uk/"
    },
    {
      title: "Rapid Harness",
      backgroundImage: "Sponsors_Logo/RapidHarness.png",
      type: "Gold",
      description: "RapidHarness is a software for designing wire harnesses.",
      website: "https://rapidharness.com/"
    },
  ];

  const Silver_sponsors = [
    {
      title: "KRAM",
      backgroundImage: "Sponsors_Logo/Kram.png",
      type: "Silver",
      description: "KRAM is a German-based automotive electronics company.",
      website: "https://kramsheetmetal.com/"
    },
    {
      title: "Powerflex",
      backgroundImage: "Sponsors_Logo/Powerflex.png",
      type: "Silver",
      description:
        "Powerflex is a manufacturer of performance polyurethane suspension bushes.",
        website: "https://www.powerflex.co.uk/"
    },
    {
      title: "Isabellenhütte",
      backgroundImage: "Sponsors_Logo/Isabellenhutte.png",
      type: "Silver",
      description:
        "Isabellenhütte is a German manufacturer of electrical components.",
        website: "https://www.isabellenhuette.de/en/"
    },
    {
      title: "Womag",
      backgroundImage: "Sponsors_Logo/Womag.png",
      type: "Silver",
      description:
        "Womag is a manufacturer of performance polyurethane suspension bushes.",
        website: "https://www.womag.co.uk/"
    },
    {
      title: "Demontweeks",
      backgroundImage: "Sponsors_Logo/Demontweeks.png",
      type: "Silver",
      description: "Demon Tweeks is a retailer of performance car parts.",
      website: "https://www.demon-tweeks.com/"
    },
    {
      title: "Proseat",
      backgroundImage: "Sponsors_Logo/Proseat.png",
      type: "Silver",
      description: "Proseat is a manufacturer of performance polyurethane suspension bushes.",
      website: "https://www.proseat.co.uk/home"
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
        website: "https://bicestermotion.com/"
    }
  ];

  const Affiliate_sponsors = [
    {
      title: "Easy Composite",
      backgroundImage: "Sponsors_Logo/Easy_Composites.png",
      type: "Affiliate",
      description:
        "Easy Composites is a manufacturer of performance polyurethane suspension bushes.",
        website: "https://www.easycomposites.co.uk/"
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
            <div key={card.id || card.uniqueIdentifier} className="w-full mx-2" onClick={
              // redirect to a card.website
              () => {
                if (card.website) {
                  window.open(card.website, "_blank");
                }

              }}>
              <SponserCard
                title={card.title}
                backgroundImage={card.backgroundImage}
                description={card.description}
                invertCard={card.invertCard?true:false}
              />
            </div>
          ))}

          {/* make a Division titled Platinum Sponors with Font Bebas_Nue */}
          <div className="w-[90%] h-1 mt-10 bg-white rounded-3xl " />
          <h1 className={`text-6xl m-8 p-2 mt-20 font-semibold text-center text-white ${bebas_Neue.className} `}>
            PLATINUM SPONSORS
          </h1>
          {Platinum_sponsors.map((card, index) => (
            <div key={card.id || card.uniqueIdentifier} className="w-full mx-2" onClick={
              // redirect to a card.website
              () => {
                if (card.website) {
                  window.open(card.website, "_blank");
                }

              }}>
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
              <div key={card.id || card.uniqueIdentifier} className="w-1/5 mx-2" onClick={
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
                  invertCard={card.invertCard?true:false}
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
              <div key={card.id || card.uniqueIdentifier} className="w-1/5 mx-2" onClick={
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
