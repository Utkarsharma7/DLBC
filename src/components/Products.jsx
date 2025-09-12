import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
export const productsData = [
  {
    id: 1,
    heading: "Dhanwan Boro Zinc GSSP",
    img1: "./image59.png",
    img2: "./image29.png",
    img3: "./image62.png",
    subheading:
      "Boro Zinc GSSP is the preferred choice for progressive farmers seeking complete crop nourishment and soil health.",
    knowMoreContent:
      "Enhanced crop nutrition with superior zinc content for better growth and yield. Apply directly to soil or mix with irrigation water for optimal absorption. Use 25-50kg per hectare depending on crop type and soil conditions.",
  },
  {
    id: 2,
    heading: "Dhanwan Boronated GSSP",
    img1: "./image 52.png",
    img2: "./image29.png",
    img3: "./image 63.png",
    subheading:
      "Boronated Granulated Single Super Phosphate (GSSP) is formulated for balanced crop nutrition, blending essential phosphorus and sulphur with added boron.",
    knowMoreContent:
      "Balanced NPK ratio with essential micronutrients for comprehensive plant nutrition. Improves soil structure and enhances nutrient retention capacity. Suitable for all major crops including cereals, pulses, and cash crops.",
  },
  {
    id: 3,
    heading: "Phosphate Rich Organic Manure",
    img1: "./image 53.png",
    img2: "./image 65.png",
    img3: "./image 64.png",
    subheading:
      "PROM enriches soil with organic carbon and phosphorus, enhances microbial activity, and boosts water retention for improved crop resilience.",
    knowMoreContent:
      "Certified organic inputs for chemical-free farming practices. Reduces chemical residue and promotes ecological balance. Improves soil health for sustained agricultural productivity.",
  },
  {
    id: 4,
    heading: "Granulated Single Super Phosphate",
    img1: "./image 55.png",
    img2: "./image29.png",
    img3: "./image 66.png",
    subheading:
      "Granulated Single Super Phosphate (GSSP) is a high-quality, cost-effective fertiliser supplying essential phosphorus, sulphur, and calcium for crops.",
    knowMoreContent:
      "Contains essential trace elements like iron, manganese, and boron. Rapidly corrects micronutrient deficiencies in crops. Improves crop quality and market value significantly.",
  },
  {
    id: 5,
    heading: "Powder Single Super Phosphate",
    img1: "./image 55 (1).png",
    img2: "./image 67.png",
    img3: "./image 68.png",
    subheading:
      ". Ideal for blending and uniform field coverage, PSSP supplies essential nutrients rapidly, supporting vigorous early plant growth.",
    knowMoreContent:
      "Promotes faster root development and vegetative growth. Enhances plant tolerance to environmental stress factors. Maximizes fruit set and grain filling for higher yields.",
  },
  {
    id: 6,
    heading: "Zincated Granulated Single Super Phosphate",
    img1: "./image 58.png",
    img2: "./image29.png",
    img3: "./image 69.png",
    subheading:
      "Zincated Granulated Single Super Phosphate (Zincated GSSP) is enriched with zinc to address micronutrient deficiencies and promote stronger, healthier crops.",
    knowMoreContent:
      "Improves soil porosity and water retention capacity. Helps maintain optimal soil pH for nutrient availability. Promotes beneficial soil microorganisms for healthy soil ecosystem.",
  },
];
const Products = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Products data array

  const currentProduct = productsData[currentProductIndex];

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % productsData.length);
    setActiveAccordion(null); // Reset accordion when changing products
  };

  const prevProduct = () => {
    setCurrentProductIndex(
      (prev) => (prev - 1 + productsData.length) % productsData.length
    );
    setActiveAccordion(null); // Reset accordion when changing products
  };

  const toggleAccordion = () => {
    setActiveAccordion(activeAccordion === "knowMore" ? null : "knowMore");
  };

  return (
    <section className="px-4 sm:px-6 md:px-12 xl:px-35 py-6 md:py-8 lg:py-12 bg-white">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[45px] font-bold text-center mb-6 md:mb-8">
        Explore <span className="text-[#EF6D1A]">Dhanlakshmi Biochem</span>{" "}
        Range of Revolutionising Agri Products
      </h1>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-14">
        <div className="relative">
          {/* Product Content */}
          <div>
            {/* Images Layout with Navigation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 md:mb-8 relative">
              {/* Left Side - heading, img1 and img2 */}
              <div className="space-y-3 md:space-y-4">
                {/* Product Heading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center px-2">
                  {currentProduct.heading}
                </h2>
                <img
                  src={currentProduct.img1}
                  alt={`${currentProduct.heading} - Image 1`}
                  className="w-full h-auto object-contain max-h-[200px] sm:max-h-[240px] md:max-h-[280px]"
                />
                <img
                  src={currentProduct.img2}
                  alt={`${currentProduct.heading} - Image 2`}
                  className="w-full h-auto object-contain max-h-[200px] sm:max-h-[240px] md:max-h-[280px]"
                />
              </div>

              {/* Right Side - img3 (main image) */}
              <div className="flex items-center justify-center">
                <img
                  src={currentProduct.img3}
                  alt={`${currentProduct.heading} - Main Image`}
                  className="w-full h-auto object-contain max-h-[400px] sm:max-h-[500px] md:max-h-[650px]"
                />
              </div>

              {/* Left Navigation Button */}
              <button
                onClick={prevProduct}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 sm:-translate-x-6 md:-translate-x-8 lg:-translate-x-12 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              >
                <ChevronLeft
                  size={32}
                  className="sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
              </button>

              {/* Right Navigation Button */}
              <button
                onClick={nextProduct}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 sm:translate-x-6 md:translate-x-8 lg:translate-x-12 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              >
                <ChevronRight
                  size={32}
                  className="sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
              </button>
            </div>

            {/* Subheading */}
            <div className="text-center mb-6 md:mb-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-2 md:px-4">
                {currentProduct.subheading}
              </p>
            </div>

            {/* Know More Accordion */}
            <div className="mb-6 md:mb-8">
              <div className="bg-black/25 rounded-lg w-full">
                <button
                  onClick={toggleAccordion}
                  className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex justify-between items-center transition-colors rounded-lg"
                >
                  <span className="font-semibold text-base md:text-lg">
                    Know More
                  </span>
                  {activeAccordion === "knowMore" ? (
                    <ChevronUp className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
                  ) : (
                    <ChevronDown className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
                  )}
                </button>
                {activeAccordion === "knowMore" && (
                  <div className="px-4 md:px-6 pb-3 md:pb-4">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                      {currentProduct.knowMoreContent}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center space-x-2 md:hidden mb-4">
              {productsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentProductIndex(index);
                    setActiveAccordion(null);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentProductIndex
                      ? "bg-[#EF6D1A]"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
