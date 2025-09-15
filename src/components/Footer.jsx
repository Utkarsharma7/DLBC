import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-black/90 text-white pt-8 pb-4">
        <img
          src="./logo.png"
          alt="logo"
          className="px-4 sm:px-6 md:px-12 xl:px-35 h-13 mb-8 sm:mb-2  sm:mx-0 "
        />
        <div className="xl:px-35 sm:px-12 w-[300px] sm:w-auto mx-auto  sm:flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Left Section */}
          <div className="flex-1 max-w-[400px] space-y-6">
            <div>
              <h3 className="font-semibold text-[18px] mb-2">ADDRESS</h3>
              <p className="text-[18px]">
                Corporate Office: 209, Pinnacle
                <br />
                Business Park, Corporate Road,
                <br />
                Prahaladnagar, Satelite,
                <br />
                Ahmedabad-380015
              </p>
            </div>
              <div>
              <h3 className="font-semibold mb-2">BUSINESS HOURS</h3>
              <p className="text-gray-200">MON to SAT : 9 AM to 7 PM</p>
            </div>
            
          </div>
          <div className="flex-1 max-w-[400px] space-y-6">
              <div>
              <h3 className="font-semibold mb-2">PHONE</h3>
              <p className="text-gray-200">
                +91 7226066620
                <br />
                +91 9825380895
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">EMAIL</h3>
              <p className="text-gray-200">dhanlakshmibiochem@gmail.com</p>
            </div> 
            <button onClick={()=>navigate("/legal-info")}>Legal Information</button>
          </div>
          {/* Right Section */}
          <div className="flex-1 max-w-[400px] space-y-6">
          
            <div>
              <h3 className="font-semibold mb-2">CONNECT WITH US</h3>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-md px-4 py-2 bg-gray-200 text-black placeholder-gray-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Your Email/Phone"
                  className="w-full rounded-md px-4 py-2 bg-gray-200 text-black placeholder-gray-500 outline-none"
                />
                <textarea
                  rows={3}
                  placeholder="Your Message"
                  className="w-full rounded-md px-4 py-2 bg-gray-200 text-black placeholder-gray-500 outline-none resize-none"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-[#EF6D1A] px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
