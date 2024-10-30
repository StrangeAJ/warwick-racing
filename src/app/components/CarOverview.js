
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const CarOverview = ({ carName, descrptionText, imageSrc, reverse, handleDetailsClick }) => {


    return (
        <div className={`items-center align-middle ${reverse ? "flex flex-row-reverse" : "flex flex-row"} `}>
            <div className={`flex-1 ${reverse ? "place-items-end" : "place-items-start"}`}>
                {/* make the h1 center if description doesn't exist */}
                <div className={` ${descrptionText? 'flex-col text-start': 'flex text-center'}`}>
                    <h1 className={`text-6xl font-bold m-8  
                        ${bebas_neue.className}`}>{carName}</h1>
                    <p className="text-xl m-8">{descrptionText}</p>
                </div>
            </div>
            <div className={`flex-1 m-0  `}>
                <div className="relative group place-items-center justify-items-center">
                    <img src={imageSrc} width={500} height={500} alt="cars" className="rounded-xl border-[#43B02A] border-x-4 " 
                    style={{
                        width: "80%",
                        height: "auto",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                    />
                    <div
                        className="absolute inset-0 bg-[#43B02A] bg-opacity-0
                        flex items-center justify-center transition-opacity duration-300 rounded-xl cursor-pointer"
                        onClick={handleDetailsClick}
                        style={{
                          width: "90%",
                            height: "auto",  
                        }}
                    >
                        <span
                            className={`text-white text-2xl font-semibold opacity-0
                                transition-opacity duration-300 ${bebas_neue.className}`}
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
