"use client"

import HeroSection from "../components/HeroSection";
import { Bebas_Neue } from "next/font/google";
import CarDetails from "../components/CarDetails";
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
} from "react-ionicons";
import FAQ from "../components/faq"; // Import the FAQ component

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });


const carData = [
    {
        carName: "WRE1",
        // descrptionText:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageSrc: "/cars/Wre1.jpeg",
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
    },
    {
        carName: "WRE2",
        descrptionText:
            "The WRe2, Warwick Racing's second electric vehicle, represented a major step forward with a dual rear-motor powertrain for improved control in race conditions. Designed by a fourth-year team, it featured advancements in powertrain, suspension, and chassis, with traction control developed in Simulink, using Embed’s E400 Motor Controller. Former Chief Powertrain Engineer Rens Bossers highlights WRe2's enhanced reliability, setting the stage for future four-wheel-drive ambitions",
        imageSrc: "cars/Wre2.jpg",
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
                details: `Carbon fiber bodywork. Carbon fiber nose cone. Carbon fiber rear wing. Carbon fiber floor. Carbon fiber diffuser. Carbon
                fiber side pods. Carbon fiber seat.`,
                icon: CarSport,
            },
        ],
        Images: ["Cars/Car2/1.jpg", "Cars/Car2/2.jpg", "Cars/Car3/3.jpg"],
        achievements: [
            "2st Place in Formula Student UK 2019",
            "3st Place in Formula Student UK 2018",
            "1st Place in Formula Student UK 2017",
            "2st Place in Formula Student UK 2016",
        ],

    },
    {
        carName: "WRE3",
        descrptionText:
            "The WRe3, Warwick Racing's third-generation electric Formula Student vehicle, was developed in just ten months. It features a custom-built 300V nominal battery and tractive system, delivering 80 kW to an Emrax 228 motor. Weighing 273 kg, the car is engineered with optimised suspension and dynamics for maximum performance. At Formula Student UK 2024, the WRe3 highlighted the team's engineering expertise, securing ninth place in the electric vehicle category and sixteenth overall.",
        imageSrc: "cars/Wre3.jpeg",
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
                details: `Carbon fiber bodywork. Carbon fiber nose cone. Carbon fiber rear wing. Carbon fiber floor. Carbon fiber diffuser. Carbon
                fiber side pods. Carbon fiber seat.`,
                icon: CarSport,
            },
        ],
        Images: ["Cars/Car2/1.jpg", "Cars/Car2/2.jpg", "Cars/Car3/3.jpg"],
        achievements: [
            "2st Place in Formula Student UK 2019",
            "3st Place in Formula Student UK 2018",
            "1st Place in Formula Student UK 2017",
            "2st Place in Formula Student UK 2016",
        ],

    }
];

const Cars = () => {
    return (
        <div className="flex-col">
            <HeroSection title="CARS" backgroundUrl="Cars.jpg" contentCentered />
            {carData.map((car, index) => (
                <CarDetails
                    car={car}
                    key={index}
                    reverse={index % 2 === 1} />
            ))}

            {/* <CarDetails carName="WRE1" descrptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." imageSrc="cars.jpg" />
            <CarDetails reverse carName="WRE2" descrptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." imageSrc="cars.jpg" />
            <CarDetails carName="WRE3" descrptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." imageSrc="cars.jpg" /> */}
        </div>
    );
};

export default Cars;
