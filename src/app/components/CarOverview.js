
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const CarOverview = ({ carName, descrptionText, imageSrc, reverse, handleDetailsClick }) => {


    return (
        <div className={`${reverse ? "flex flex-row-reverse" : "flex"} `}>
            <div className={`flex-1 ${reverse ? "place-items-end" : "place-items-start"}`}>
                <>
                    <h1 className={`text-6xl font-bold m-8  ${bebas_neue.className}`}>{carName}</h1>
                    <p className="text-xl m-8">{descrptionText}</p>
                </>
            </div>
            <div className={`flex-1 m-5 ${reverse ? "place-items-start" : "place-items-end"} `}>
                <div className="relative group">
                    <div className="rounded-xl border-[#43B02A] border-x-4 ">
                        <Image src={"/" + imageSrc} width={500} height={500} alt="cars" 
                        className="rounded-xl"
                        />
                    </div>
                    <div
                        className="absolute inset-0 bg-[#43B02A] bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-opacity duration-300 rounded-xl cursor-pointer"
                        onClick={handleDetailsClick}
                    >
                        <span
                            className={`text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${bebas_neue.className}`}
                        >
                            See Details
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarOverview;
