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
      <section 
        className="lg:px-35 md:px-12 px-6 md:py-12 py-8 relative"
        style={{
          backgroundImage: "url(./image60.jpg)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          backgroundColor: "#f8f9fa"
        }}
      >
        <h1 className="md:text-[45px] text-2xl font-bold text-center mb-8">
          <span className="text-[#EF6D1A]">Dhanlakshmi Biochem</span> Range of
          Revolutionising Agri Products
        </h1>
        <div className="max-w-7xl mx-auto space-y-8">
          {Array.from({ length: Math.ceil(productsData.length / 2) }, (_, rowIndex) => (
            <div key={rowIndex} className="flex gap-8 md:flex-row flex-col items-start">
              {productsData.slice(rowIndex * 2, (rowIndex + 1) * 2).map((product) => (
                <div
                  key={product.id}
                  className="w-full md:w-1/2 border border-[#EF6D1ABD] p-6 rounded-lg flex flex-col flex-shrink-0"
                  style={{ minHeight: '500px' }}
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
                  <p className="text-lg text-center mb-6 flex-grow h-[130px] overflow-auto">
                    {product.subheading}
                  </p>
                  <div className="mt-auto">
                    <div className="bg-black/25 rounded-lg w-full relative">
                      <button
                        onClick={() => toggleAccordion(product.id)}
                        className="w-full px-6 py-1 text-left flex justify-between items-center transition-colors cursor-pointer"
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
