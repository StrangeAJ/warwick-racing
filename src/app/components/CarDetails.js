"use client";

import { useState } from "react";
import { Bebas_Neue } from "next/font/google";
import CarOverview from "./CarOverview";
import CarSpecificationCard from "./CarSpecificationCard";


import {
  Speedometer,
  CarSport,
  Barbell,
  Compass,
  LogoElectron,
  Cog,
  LogoSteam,
  Train,
  Settings,
  ReorderTwoOutline,
  Close,
  Trophy,
} from "react-ionicons";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const sampleData = {
  carName: "WRE1",
  // descrptionText:
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  imageSrc: "cars.jpg",
  weight: "180 kg",
  weightIcon: Barbell,
  components: [
    {
      name: "Chasis",
      details: `Steel tubular space frame chassis.Laser cut tube profiling. Compact design, lower center of gravity, light weight (25 kg’s). Self-designed and optimized Carbon Fiber impact attenuator. Efficient packaging and additional driver comfort.`,
      icon: Settings,
    },
    {
      name: "Steering",
      details: `Carbon fiber steering wheel Carbon fiber steering column Sparaco quick release Reduced turning radius and increased cornering ability Carbon fiber tie rods and toe rods ABS 3D printed steering wheel grips`,
      icon: Compass,
    },
    {
      name: "Engine",
      details: `Honda CBR 600RR 2007-2012 599cc 4-stroke liquid cooled DOHC inline 4-cylinder 16 valve 120 hp @ 13,500 rpm 66 Nm @ 11,250 rpm 6-speed sequential gearbox with reverse gear`,
      icon: Cog,
    },
    {
      name: "Suspension",
      details: `Double unequal length A-arm suspension with adjustable pushrod actuated coilover dampers. Adjustable anti-roll bars. 3D printed suspension components. 3D printed uprights.`,
      icon: ReorderTwoOutline,
    },
    {
      name: "Brakes",
      details: `Wilwood 4-piston calipers 260 mm vented rotors front and rear. Adjustable brake bias. 3D printed brake ducts.`,
      icon: LogoSteam,
    },
    {
      name: "Wheels",
      details: `13” x 7” 3-piece aluminum wheels. 20” x 7” Hoosier R25B tires.`,
      icon: Train,
    },
    {
      name: "Electronics",
      details: `AIM MXL2 dash with integrated data logging. Custom designed and manufactured wiring harness. Custom designed and manufactured power distribution module. Custom designed and manufactured steering wheel buttons.`,
      icon: LogoElectron,
    },
    {
      name: "Transmission",
      details: `Chain drive with 520 chain. 13/37 sprocket ratio. 6-speed sequential gearbox with reverse gear.`,
      icon: Speedometer,
    },
    {
      name: "Composites",
      details: `Carbon fiber bodywork. Carbon fiber nose cone. Carbon fiber rear wing. Carbon fiber floor. Carbon fiber diffuser. Carbon fiber side pods. Carbon fiber seat.`,
      icon: CarSport,
    },
  ],
  Images: ["Cars/Car1/1.jpg", "Cars/Car1/2.jpg", "Cars/Car1/3.jpg"],
  achievements: [
    "1st Place in Formula Student UK 2019",
    "1st Place in Formula Student UK 2018",
    "1st Place in Formula Student UK 2017",
    "1st Place in Formula Student UK 2016",
  ],
};

const CarDetails = ({ car, reverse }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div>
      <CarOverview
        carName={car.carName}
        descrptionText={car.descrptionText}
        imageSrc={car.imageSrc}
        reverse={reverse}
        handleDetailsClick={handleDetailsClick}
      />
      {/* {showDetails && (
        <>
          <div className="mt-8 p-8 bg-gray-800 rounded-xl shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className={`text-4xl font-${bebas_neue}`}>{car.carName}</h2>
              <Close
                className="text-white cursor-pointer"
                height="32px"
                width="32px"
                onClick={handleDetailsClick}
              />
            </div>
            <p className="mt-4 text-white">{car.descrptionText}</p>
          </div>
          <div className="mt-8 p-8 bg-gray-800 rounded-xl shadow-lg">
            <h2 className={`text-4xl font-${bebas_neue}`}>Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              {car.components.map((component, index) => (
                <CarSpecificationCard
                  key={index}
                  name={component.name}
                  details={component.details}
                  icon={component.icon}
                />
              ))}
            </div>
          </div>
          <div className="mt-8 p-8 bg-gray-800 rounded-xl shadow-lg">
            <h2 className={`text-4xl font-${bebas_neue}`}>Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
              {car.Images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="car"
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
          <div className="mt-8 p-8 bg-gray-800 rounded-xl shadow-lg">
            <h2 className={`text-4xl font-${bebas_neue}`}>Achievements</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              {car.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-700 p-4 rounded-lg shadow-md"
                >
                  <Trophy
                    className="mr-2"
                    color={"#FFD700"}
                    height="24px"
                    width="24px"
                  />
                  <p className="text-white">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )} */}
    </div>
  );
};

export default CarDetails;