import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { productsData } from "../components/Products";

const Products = () => {
  const [activeAccordion, setActiveAccordion] = useState({});

  const toggleAccordion = (productId) => {
    setActiveAccordion((prev) => ({
      ...prev,
      [productId]: prev[productId] === "knowMore" ? null : "knowMore",
    }));
  };

  return (
    <div className="pt-16 relative z-10">
      <section className="lg:px-35 md:px-12 px-6 md:py-12 py-8  ">
        <h1 className="md:text-[45px] text-2xl font-bold text-center mb-8">
          <span className="text-[#EF6D1A]">Dhanlakshmi Biochem</span> Range of
          Revolutionising Agri Products
        </h1>
        <div className="max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {productsData.map((product, index) => (
            <div
              key={index}
              className="border border-[#EF6D1ABD] p-6 rounded-lg flex flex-col h-full"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                {product.heading}
              </h2>
              <div className="text-center mb-4">
                <img
                  src={product.img1}
                  alt={product.heading}
                  className="mx-auto max-h-[300px] object-contain"
                />
              </div>
              <p className="text-lg text-center mb-6 flex-grow">
                {product.subheading}
              </p>
              <div className="mt-auto">
                <div className="bg-black/25 rounded-lg w-full">
                  <button
                    onClick={() => toggleAccordion(product.id)}
                    className="w-full px-6 py-1 text-left flex justify-between items-center transition-colors"
                  >
                    <span className="font-semibold text-lg">Know More</span>
                    {activeAccordion[product.id] === "knowMore" ? (
                      <ChevronUp className="text-gray-500" />
                    ) : (
                      <ChevronDown className="text-gray-500" />
                    )}
                  </button>
                  {activeAccordion[product.id] === "knowMore" && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {product.knowMoreContent}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
