import React from "react";

const Testimonal = () => {
  // Team members data array
  const teamMembers = [
    {
      id: 4,
      name: "Vishnu Sharma",
      position: "CEO",
      image: "./p1.png", // You can replace with actual image path
      quote:
        "I strive to keep our vision rooted in the needs of the farming community. My focus is on quality, innovation, and long-term partnerships. Together, we're advancing agriculture delivering solutions that make a difference in every field we serve.",
    },
    {
      id: 1,
      name: "V. N. Srivastava",
      position: "Vice President",
      image: "./p4.png", // You can replace with actual image path
      quote:
        "leading by example and motivating our staff has always been my go-to My priority is operational excellence and cultivating a positive work culture so that we remain a reliable ally to our customers and to Empower our partners to achieve more.",
    },
    {
      id: 3,
      name: "R. G. Singh",
      position: "Sales Head",
      image: "./p3.png", // You can replace with actual image path
      quote:
        "Heading sales means staying close to the pulse of the market and the heartbeat of rural India. I am passionate about building relationships, understanding needs, and ensuring our fertilisers reach every farmer who can benefit from them.",
    },
    {
      id: 2,
      name: "R. S. Gautam",
      position: "Coordinator",
      image: "./p2.png", // You can replace with actual image path
      quote:
        "Being the coordinator, my goal is to keep our operations running smoothly and bridge the gap between our teams and farmers. I'm committed to ensuring every inquiry is heard and every promise is fulfilled, creating seamless support across our network.",
    },
  ];

  return (
    <>
      {/* Where Ambition Meets Impact Section */}
      <section className="px-4 sm:px-6 md:px-12 xl:px-35 py-6 sm:py-8 md:py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-bold mb-2 sm:mb-4 text-[#EF6D1A] text-center">
              Our Leadership
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="relative bg-black/10 rounded-lg pt-4 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 text-center shadow-sm hover:shadow-md transition-shadow mt-10 lg:m-0"
              >
                {/* Popping Image - Half inside, half outside */}
                <div className="absolute -top-12 sm:-top-14 left-1/2 transform -translate-x-1/2">
                  <img
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gray-300 rounded-full object-cover  shadow-lg"
                    src={member.image}
                    alt={member.name}
                  />
                </div>

                {/* Content */}
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-lg sm:text-xl md:text-[20px] font-bold mb-1 sm:mb-2 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-base sm:text-lg md:text-[20px] font-semibold mb-3 sm:mb-4 text-[#EF6D1A]">
                    {member.position}
                  </p>
                  <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-gray-700">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
