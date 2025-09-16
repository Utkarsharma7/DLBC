const Timeline = () => {
  const timelineData = [
    { year: "2017-18", marketShare: "3%", position: "up" },
    { year: "2018-19", marketShare: "6%", position: "down" },
    { year: "2019-20", marketShare: "12%", position: "up" },
    {
      year: "2020-21",
      marketShare: "15%",
      position: "down",
    },
    { year: "2021-22", marketShare: "20%", position: "up" },
    {
      year: "2022-23",
      marketShare: "24%",
      position: "down",
    },
    { year: "2023-24", marketShare: "24%", position: "up" },
    {
      year: "2024-25",
      marketShare: "20%",
      position: "down",
    },
  ];
  return (
    <>
      {/* Market Share Timeline */}
      <section
        className="py-16"
        style={{
          backgroundImage: "url(./image50.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold ">
              Market Share in <span className="text-[#EF6D1A]">Gujarat</span>{" "}
              Over the Years
            </h2>
          </div>

          {/* Desktop Timeline - Horizontal */}
          <div className="hidden md:block relative">
            {/* Timeline Line - Full Width */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black transform -translate-y-1/2"></div>

            {/* Timeline Items Container - Properly Constrained */}
            <div className="max-w-5xl mx-auto px-4">
              <div
                className="flex justify-between items-center relative"
                style={{ height: "400px" }}
              >
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center flex-1"
                  >
                    {/* Timeline Dot */}
                    <div
                      className="w-4 h-4 bg-black rounded-full absolute z-10"
                      style={{ top: "50%", transform: "translateY(-50%)" }}
                    ></div>

                    {/* Connecting Line */}
                    <div
                      className={`absolute w-0.5 bg-black z-0 ${
                        item.position === "up"
                          ? "bottom-1/2 mb-2"
                          : "top-1/2 mt-2"
                      }`}
                      style={{
                        height: "80px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    ></div>

                    {/* Orange Box with Year */}
                    <div
                      className={`absolute ${
                        item.position === "up"
                          ? "bottom-1/2 mb-20"
                          : "top-1/2 mt-20"
                      }`}
                      style={{
                        left: "79%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div className="bg-[#EF6D1A] text-black px-3 py-2 rounded text-center font-semibold whitespace-nowrap text-sm">
                        {item.year}
                      </div>
                    </div>

                    {/* Market Share and Sales Info */}
                    <div
                      className={`absolute text-xs ${
                        item.position === "up"
                          ? "bottom-1/2 mb-10"
                          : "top-1/2 mt-11"
                      }`}
                      style={{
                        left: "70px",
                      }}
                    >
                      <div className="text-left space-y-1 xl:min-w-[100px]">
                        <p className="font-semibold">
                          {item.marketShare} Market Share
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Vertical with Center Line */}
          <div className="md:hidden px-4">
            <div className="relative max-w-md mx-auto">
              {/* Vertical Timeline Line - Centered */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-black transform -translate-x-1/2"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {timelineData.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="w-4 h-4 bg-black rounded-full absolute left-1/2 top-3 transform -translate-x-1/2 z-10"></div>

                    {/* Horizontal Connecting Line from dot to content - Fixed Positioning */}
                    <div
                      className={`absolute bg-black w-[45px] ${
                        index % 2 === 0 ? "right-1/2" : "left-1/2"
                      }`}
                      style={{
                        height: "2px",
                        top: "18px",
                        [index % 2 === 0 ? "right" : "left"]: "50%",
                        [index % 2 === 0 ? "marginRight" : "marginLeft"]: "2px",
                      }}
                    ></div>

                    {/* Content - Alternating sides */}
                    <div
                      className={`flex relative z-[10] ${
                        index % 2 === 0 ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`w-5/12 ${
                          index % 2 === 0 ? "text-right pr-2" : "text-left pl-2"
                        }`}
                        style={{
                          marginLeft: index % 2 === 0 ? "0" : "52px",
                          marginRight: index % 2 === 0 ? "52px" : "0",
                        }}
                      >
                        <div className="bg-[#EF6D1A] text-white px-3 py-2 rounded font-semibold inline-block mb-2 text-sm">
                          {item.year}
                        </div>
                        <div className="space-y-1 text-sm">
                          <p className="font-semibold ">
                            {item.marketShare} Market Share
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
