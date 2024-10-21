import HeroSection from "../components/HeroSection";
import { Bebas_Neue } from "next/font/google";
import CarDetails from "../components/CarDetails";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Cars = () => {
    return (
        <div className="flex-col">
            <HeroSection title="CARS" backgroundUrl="cars.jpg" contentCentered />
            <CarDetails carName="WRE1" descrptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." imageSrc="cars.jpg" />
            <CarDetails  reverse carName="WRE2" descrptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." imageSrc="cars.jpg"/>
            <CarDetails carName="WRE3" descrptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." imageSrc="cars.jpg" />
        </div>
    );
};

export default Cars;
