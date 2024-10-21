"use client"

import { useState } from "react";
import { Bebas_Neue } from "next/font/google";
import CarOverview from "./CarOverview";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const CarDetails = ({ carName, descrptionText, imageSrc, reverse }) => {
    const [showDetails, setShowDetails] = useState(false);

    // Toggle visibility of the blank div
    const handleDetailsClick = () => {
        setShowDetails((prev) => !prev);
    };

    return (
        <div>
            {/* Main car overview section */}
            <CarOverview carName={carName} descrptionText={descrptionText} imageSrc={imageSrc} reverse={reverse} handleDetailsClick={handleDetailsClick} />
            {/* Conditional rendering of the blank div */}
            {showDetails && (
                <div className="mt-8 p-8 bg-transparent rounded-xl shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">Car Details</h1>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    {/* Add more details as needed */}
                    <button onClick={handleDetailsClick} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default CarDetails;
