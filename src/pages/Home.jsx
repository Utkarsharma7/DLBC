import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Products from "../components/Products";
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeProcessTab, setActiveProcessTab] = useState("Processes");
  const videoRefs = useRef([]);

  // Video carousel data
  const slides = [
    {
      video: "./videos/Media1.mp4",
      image: "/images/slide1.jpg",
      text: "GROW MORE.\nWASTE LESS.\nHARVEST SUCCESS."
    },
    {
      video: "./videos/Media2.mp4",
      image: "/images/slide2.jpg",
      text: "NOURISHING YOUR CROPS.\nEMPOWERING YOUR YIELD."
    },
    {
      video: "./videos/Media3.mp4",
      image: "/images/slide3.jpg",
      text: "SUSTAINABLE FERTILIZERS\nFOR A GREENER TOMORROW."
    },
    {
      video: "./videos/Media4.mp4",
      image: "/images/slide4.jpg",
      text: "INNOVATIVE NUTRITION\nFOR HEALTHIER FIELDS."
    },
  ];

  const farmerStories = [
    { id: 1, name: "Ramesh Kumar", place: "Punjab", video: "./videos/story1.mp4" },
    { id: 2, name: "Sita Devi", place: "Uttar Pradesh", video: "./videos/story2.mp4" },
    { id: 3, name: "Amit Singh", place: "Maharashtra", video: "./videos/story3.mp4" },
  ];

  // Tab data for Processes, Technology, Quality section
  const tabData = {
    Processes: {
      label: "Processes",
      heading: "Streamline Processes",
      middleImage: null, // No middle image for Processes
      description:
        "Every stage, from raw material sourcing to final delivery, is carefully optimized for speed, precision, and sustainability. Our efficient processes cut waste, reduce delays, and ensure farmers receive high-quality fertilizers on time, season after season.",
      rightImages: [
        {
          src: "./image24.png",
          alt: "Process 1",
          className: "w-[552px] self-end",
        },
        {
          src: "./image22.png",
          alt: "Process 2",
          className: "w-[257px] self-end",
        },
      ],
    },
    Technology: {
      label: "Formulation",
      heading: "Advanced Formulation",
      middleImage: "./image72.png", // Middle image only for Technology (Formulation)
      description:
        "Expert blends for stronger, healthier, higher-yielding crops.",
      rightImages: [
        {
          src: "./image73.png",
          alt: "Technology 1",
          className: "w-[552px] self-end",
        },
        {
          src: "./image74.png",
          alt: "Technology 2",
          className: "w-[257px] self-end",
        },
      ],
    },
    Quality: {
      label: "Quality",
      heading: "Trusted Excellence",
      middleImage: null, // No middle image for Quality
      description:
        "Every granule delivers pure nutrients ensuring maximum growth, protection from stress and longer shelf life for harvest. Farmers trust us for top grade fertilizer that consistently produces healthier crops and superior results, season after season.",
      rightImages: [
        {
          src: "./image75.png",
          alt: "Quality 1",
          className: "w-[552px] self-end",
        },
        {
          src: "./image76.png",
          alt: "Quality 2",
          className: "w-[257px] self-end",
        },
      ],
    },
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const videoElement = videoRefs.current[currentSlide];
    if (videoElement) {
      const handleVideoEnd = () => {
        nextSlide();
      };
      videoElement.addEventListener("ended", handleVideoEnd);
      videoElement.play().catch((error) => {});

      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, [currentSlide]);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="pt-16 ">
      {/* Hero Section with Video */}
      <section className="relative overflow-hidden bg-black">
        <div
          className="relative w-full mx-auto  h-[50vh] md:h-[60vh] lg:h-[70vh]"
          style={{ minHeight: "400px" }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                muted
                className="w-full h-full object-cover"
              >
                <source src={slide.video} type="video/mp4" />
              </video>

              {/* Video Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black/20">
                <div className="w-full px-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight drop-shadow-lg" style={{ fontFamily: 'Marcellus, serif' }}>
                    {slide.text.split('\n').map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {line}
                        {lineIndex < slide.text.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h1>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-[#EF6D1A] text-white p-2 md:p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm cursor-pointer"
          >
            <ChevronLeft size={24} className="md:w-8 md:h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-[#EF6D1A] text-white p-2 md:p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm cursor-pointer"
          >
            <ChevronRight size={24} className="md:w-8 md:h-8" />
          </button>

        </div>
      </section>
      <section className="relative w-full px-4 sm:px-6 lg:px-8 py-8 ">
        <div className="absolute z-0 top-0 left-0 w-[120px] sm:w-[180px] md:w-[240px]">
          <img src="./texture.png" alt="" className="w-full" />
        </div>
        <div className="absolute z-0 top-0 right-0 w-[120px] sm:w-[180px] md:w-[240px] scale-x-[-1]">
          <img src="./texture.png" alt="" className="w-full" />
        </div>
        <h1 className="text-[#EF6D1A] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] text-center px-4 sm:px-8 md:px-12 pt-6 relative z-10 font-semibold">
          Let's grow something great together season after<br/> season, generation
          after generation.
        </h1>
      </section>

      {/* Processes, Technology, Quality Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white px-4 sm:px-6 md:px-12 xl:px-35 max-w-[1500px] mx-auto">
        <div >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Side - Content */}
            <div className="w-full col-span-1 lg:col-span-2 flex flex-col justify-between space-y-6 md:space-y-8">
              {/* Tab Buttons */}
              <div className="flex  gap-2 sm:gap-4 justify-center lg:justify-start">
                {Object.keys(tabData).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveProcessTab(tab)}
                    className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 cursor-pointer rounded-lg font-medium transition-colors capitalize text-sm sm:text-base md:text-lg ${
                      activeProcessTab === tab
                        ? "text-[#EF6D1A]"
                        : "hover:text-gray-700"
                    }`}
                  >
                    {tabData[tab].label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-[65px] px-4 md:px-8 font-bold text-center">
                {tabData[activeProcessTab].heading}
              </h3>

              {/* Middle Image - Only show if exists */}
              {tabData[activeProcessTab].middleImage && (
                <div className="flex justify-center px-4 md:px-8 my-4 md:my-8">
                  <img
                    src={tabData[activeProcessTab].middleImage}
                    alt={`${activeProcessTab} illustration`}
                    className="max-w-full h-auto"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              )}

              <div >
                <p className="text-black/65 text-center leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[25px]">
                  {tabData[activeProcessTab].description}
                </p>
              </div>
            </div>

            {/* Right Side - Images */}
            <div className="flex flex-col gap-4 col-span-1 lg:col-span-3 mt-6 lg:mt-0">
              {tabData[activeProcessTab].rightImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`mx-auto lg:mx-0 max-w-full h-auto ${image.className}`}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Products />

      {/* Managing Director Section */}
      <section
        className="relative mx-4 sm:mx-6 lg:mx-8 xl:mx-35 mt-12 md:mt-20 py-8 md:py-12 max-w-[1500px] 2xl:mx-auto 2xl:px-35"
        style={{
          backgroundImage: "url(./building.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative ">
          {/* First Row - Person image and initial text */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="flex justify-center w-[180px] sm:w-[220px] md:w-[255px] mb-6 md:mb-0">
              <img
                src="./person.png"
                alt="Shri. Mukesh Shantilal Jatania"
                className="w-full h-auto"
              />
            </div>

            <div className="text-center md:text-right w-full">
              <div className="space-y-4 md:space-y-6 leading-relaxed text-base sm:text-lg md:text-[19px] md:pl-8 lg:pl-12">
                <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold text-[#EF6D1A] mb-4 md:mb-8">
                  Managing Director Speaks
                </h2>
                <p>
                  My journey in business began alongside my father in the
                  tobacco industry learning not just the intricacies of
                  production but the importance of{" "}
                  <b>resilience, hard work, and trust</b>. Together, we grew our
                  business from one state to the next, building relationships
                  and understanding the{" "}
                  <b>
                    deep connection between a customer and a manufacturer and
                    community.
                  </b>
                </p>
                <p>
                  As our operations expanded, I sensed it was time to consider
                  <b> new frontiers</b>. The constant interaction with farmers
                  revealed evolving challenges and opportunities in Indian
                  agriculture, which taught me that agriculture is not just an
                  industry, but a way of{" "}
                  <b>life shaped by dedication and adaptability.</b> It became
                  clear that the future called for solutions that could
                  strengthen crops and soil health, beyond just what the tobacco
                  industry offered.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row - Full width text */}
          <div className="w-full text-center md:text-right text-base sm:text-lg md:text-[19px] mt-4">
            <div className="space-y-4 md:space-y-6 leading-relaxed">
              <p>
                Driven by these insights and after much research with our team
                we decided to diversify and step into the{" "}
                <b>fertiliser sector.</b> The shift was both bold and natural:
                building on our <b>legacy of agricultural expertise</b>, we
                wanted to deliver <b>high-quality nutrition and innovation</b>{" "}
                to farmers across the country.
              </p>
              <p>
                Today, our focus remains on providing{" "}
                <b>effective, reliable fertilisers</b> that enrich the land and
                empower every grower's success. Looking back, I am proud of our
                roots—and excited for the journey ahead. Our story is one of{" "}
                <b>growth, learning, and commitment</b>, inspired by every
                farmer we serve.
              </p>
              <div className="mt-6 md:mt-8">
                <p className="font-bold text-lg sm:text-xl md:text-[21px]">
                  Shri. Mukesh Shantilal Jatania
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 xl:px-35 py-6 md:py-12  mt-24 relative z-20 max-w-[1500px] mx-auto">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] mb-6 md:mb-8">
          Harvesting Success:{" "}
          <span className="font-bold text-[#EF6D1A]">
            Stories from Our Farmers
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {farmerStories.map((story) => (
            <div
              key={story.id}
              className="bg-[#EF6D1A]/30 rounded-lg overflow-hidden shadow-md"
            >
              <div className=" bg-[#EF6D1A]/30 rounded-t-lg overflow-hidden w-full">
                <video src={story.video} controls ></video>
              </div>
              <div className="flex flex-col justify-center items-center rounded-b-lg p-4 w-full">
                <h3 className="font-semibold text-lg sm:text-xl md:text-[20px]">
                 
                </h3>
                <p className="text-base sm:text-lg md:text-[20px]">
                
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
