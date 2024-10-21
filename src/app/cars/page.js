import HeroSection from "../components/HeroSection";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Cars = () => {
    return (
        <div className="flex-col">
            <HeroSection title="CARS" backgroundUrl="cars.jpg" contentCentered />
            <div className="flex">
                <div className="flex-1">
                    <>
                        <h1 className={`text-6xl font-bold m-8 ${bebas_neue.className}`}>WRE1</h1>
                        <p className="text-xl m-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </>
                </div>
                <div className="flex-1 m-5 place-items-end ">
                    <div className="relative group">
                        <img src="cars.jpg" width={500} height={500} alt="cars" className="rounded-xl border-[#43B02A] border-x-4 " />
                        <div class="absolute inset-0 bg-[#43B02A] bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-opacity duration-300 rounded-xl">
                            <span class={`text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${bebas_neue.className}`}>See Details</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cars;
