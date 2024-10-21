"use client"
import { Bebas_Neue } from "next/font/google";
import { Input } from "postcss";
import BannerSection from "../components/BannerSection";
import { MailOutline, LocationOutline, TimeOutline, StopwatchOutline } from "react-ionicons";
import ContactInfo from "../components/ContactInfo";


const bebas_Neue = Bebas_Neue({
    subsets: ["latin"],
    weight: ["400"],
});

export default function Home() {


    return (
        <>
            {/* Header Section */}
            <div className="flex-col overflow-x-hidden ">
                <BannerSection backgroundImage="/landing.png" title="CONTACT US" />
                <div className="flex">
                    <div className="flex-col flex-1">
                        {/* Details */}
                        <div className="mt-2">
                            {/* Contact Details */}
                            <h3 className="text-2xl font-bold text-start items-start text-[#43B02A] mb-4">Contact Details</h3>
                            <ContactInfo item={{
                                icon: MailOutline,
                                text: 'warwick.racing@outlook.com'
                            }} />
                            <ContactInfo item={{
                                icon: LocationOutline,
                                text: 'University of Warwick, International Manufacturing Centre, Coventry CV4 7AL'
                            }} />
                            <ContactInfo item={{
                                icon: TimeOutline,
                                text: 'Monday - Friday : 8am - 4pm'
                            }} />
                            <ContactInfo item={{
                                icon: StopwatchOutline,
                                text: 'Saturday, Sunday : Closed',
                                isRed: true
                            }} />
                            <div className="mb-3"></div>
                            {/* Map */}
                            <h3 className="text-2xl font-bold text-start items-start text-[#43B02A] mb-4">Find Us Here</h3>
                            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    loading="lazy"
                                    src="https://maps.google.com/maps?q=University%20of%20Warwick%2C%20International%20Manufacturing%20Centre%2C%20Coventry%20CV4%207AL&t=m&z=12&output=embed&iwloc=near"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col flex-1">
                        {/* Contact Form */}
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2 m-2">
                                {/* Name Input */}
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43B02A]"
                                        placeholder="Your Name"
                                    />
                                </div>

                                {/* Phone Input */}
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43B02A]"
                                        placeholder="Your Phone Number"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="flex flex-col md:col-span-2">
                                    <label htmlFor="email" className="mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43B02A]"
                                        placeholder="Your Email Address"
                                    />
                                </div>

                                {/* Message Input */}
                                <div className="flex flex-col md:col-span-2">
                                    <label htmlFor="message" className="mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        className="bg-gray-800 text-white p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#43B02A]"
                                        placeholder="Your Message"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-[#43B02A] text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-all"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}