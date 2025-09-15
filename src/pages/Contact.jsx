import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "../leaflet.css";

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Location coordinates
  const corporateOffice = [23.0435, 72.5342]; // Prahaladnagar, Ahmedabad coordinates

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="pt-16 relative z-10">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Information */}
          <div className="space-y-8">
            <div>
              <h2 className="md:text-[60px] text-4xl  font-bold  mb-4">
                <span className="text-[#EF6D1A]">Connect</span> with our team of
                experts
              </h2>
              <p className="md:text-2xl mb-8 text-xl">
                Get in touch with our team and help us be a part of your growing
                journey!
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-xl mb-3 ">BUSINESS HOURS</h3>
                <p className="text-lg ">MON to SAT : 9 AM to 7 PM</p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">PHONE</h3>
                <div className="space-y-1">
                  <p className="text-lg ">+91 7226066620</p>
                  <p className="text-lg ">+91 9825380895</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3 ">EMAIL</h3>
                <p className="text-lg ">dhanlakshmibiochem@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-lg text-[#666666] font-semibold  mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#EF6D1A] focus:border-transparent outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg text-[#666666] font-semibold  mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#EF6D1A] focus:border-transparent outline-none transition"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg text-[#666666] font-semibold  mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#EF6D1A] focus:border-transparent outline-none transition"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg text-[#666666] font-semibold  mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#EF6D1A] focus:border-transparent outline-none transition resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#EF6D1A] text-white py-3 px-6 rounded-md font-semibold hover:bg-orange-600 transition duration-300 transform hover:scale-105 cursor-pointer"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>

        {/* Locations Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Section - Map */}
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
              <MapContainer
                center={corporateOffice}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Corporate Office Marker */}
                <Marker position={corporateOffice}>
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-bold text-lg mb-2">
                        Pinnacle Business Park
                      </h3>
                      <p>
                        209, Pinnacle Business Park
                        <br />
                        Corporate Road
                        <br />
                        Prahaladnagar, Satelite
                        <br />
                        Ahmedabad-380015
                      </p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            {/* Right Section - Location Details */}
            <div className="space-y-8">
              <div className="mb-8">
                <h2 className="text-4xl  font-semibold mb-4">Our Locations</h2>
                <p className="text-4xl font-bold">Connecting Near and Far</p>
              </div>

              <div className="">
                <h3 className="text-2xl font-semibold mb-2">
                  Corporate Office
                </h3>

                <div className="space-y-2">
                  <p className="text-lg">209, Pinnacle Business Park,</p>
                  <p className="text-lg">Corporate Road,</p>
                  <p className="text-lg">Prahaladnagar, Satelite,</p>
                  <p className="text-lg">Ahmedabad-380015</p>
                </div>
              </div>

              <div className="">
                <h3 className="text-2xl font-semibold mb-2">Our Works</h3>
                <div className="space-y-2">
                  <p className="text-lg">Survey No. 392</p>
                  <p className="text-lg">Village Chiyada,</p>
                  <p className="text-lg">Ahmedabad-382006</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
