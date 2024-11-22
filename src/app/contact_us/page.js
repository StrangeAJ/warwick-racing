// page.js
"use client";

import { useState, useTransition } from "react";
import { Bebas_Neue } from "next/font/google";
import BannerSection from "../components/BannerSection";
import {
  MailOutline,
  LocationOutline,
  TimeOutline,
  StopwatchOutline,
} from "react-ionicons";
import ContactInfo from "../components/ContactInfo";

const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false,
  });
  const [isPending, startTransition] = useTransition();

  const validateForm = () => {
    const newErrors = {};

    // Name is always required
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Either phone or email is required
    if (!formData.phone && !formData.email) {
      newErrors.contact = "Either Phone or Email is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    startTransition(async () => {
      setStatus({ loading: true, error: null, success: false });
  
      try {
          const url = 'https://api.warwickracing.org/addContact.php';
          const response = await fetch(url, {
              method: 'POST',
              body: JSON.stringify({
                  name: formData.name,
                  phone: formData.phone,
                  email: formData.email,
                  message: formData.message
              }),
              headers: {
                  'Content-Type': 'application/json',
              },
          });
  
          if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error || 'Something went wrong');
          }
  
          setStatus({ loading: false, error: null, success: true });
          setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } catch (error) {
          setStatus({ loading: false, error: error.message, success: false });
      }
  });
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex-col overflow-x-hidden ">
        <BannerSection backgroundImage="contact_us.jpg" title="CONTACT US" />
        <div className="flex">
          <div className="flex-col flex-1">
            {/* Details */}
            <div className="mt-2">
              {/* Contact Details */}
              <h3 className="text-2xl font-bold text-start items-start text-[#43B02A] mb-4">
                Contact Details
              </h3>
              <ContactInfo
                item={{
                  icon: MailOutline,
                  text: "info@warwick-racing.co.uk",
                }}
              />
              <ContactInfo
                item={{
                  icon: LocationOutline,
                  text:
                    "University of Warwick, International Manufacturing Centre, Coventry CV4 7AL",
                }}
              />
              <ContactInfo
                item={{
                  icon: TimeOutline,
                  text: "Monday - Friday : 8am - 4pm",
                }}
              />
              <ContactInfo
                item={{
                  icon: StopwatchOutline,
                  text: "Saturday, Sunday : Closed",
                  isRed: true,
                }}
              />
              <div className="mb-3"></div>
              {/* Map */}
              <h3 className="text-2xl font-bold text-start items-start text-[#43B02A] mb-4">
                Find Us Here
              </h3>
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2 m-2">
                {/* Name Input */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    className="bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43B02A]"
                    placeholder="Your Name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Phone Input */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className={`bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43B02A] ${
                      errors.contact ? "border-red-500" : ""
                    }`}
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col md:col-span-2">
                  <label htmlFor="email" className="mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43B02A] ${
                      errors.contact ? "border-red-500" : ""
                    }`}
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {errors.contact && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.contact}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div className="flex flex-col md:col-span-2">
                  <label htmlFor="message" className="mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="bg-gray-800 text-white p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#43B02A]"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#43B02A] text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-all disabled:opacity-50"
                  disabled={isPending}
                >
                  {isPending ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>

            {/* Status Messages */}
            {status.error && (
              <div className="text-red-500 mt-2">{status.error}</div>
            )}
            {status.success && (
              <div className="text-green-500 mt-2">
                Form submitted successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}