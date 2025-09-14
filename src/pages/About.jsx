import Timeline from "../components/Timeline";
import Testimonal from "../components/Testimonal";

const About = () => {
  return (
    <div className="pt-16">
      <section className="px-4 sm:px-6 md:px-12 lg:px-35 py-6 sm:py-8 md:py-12 bg-white relative z-10">
        <div className="relative z-10 ">
          {/* Desktop and Tablet Layout with floating images */}
          <div className="hidden md:block ">
            {/* First set of images floating right */}
            <div className="float-right ml-4 lg:ml-6 mb-4 lg:mb-6 space-y-3 lg:space-y-4 w-64 lg:w-80 xl:w-96">
              <img
                src="./image 31.png"
                alt="Farming Image"
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src="./image 32.png"
                alt="Farming Image"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#EF6D1A] mb-4 lg:mb-6 leading-tight">
              Some companies chase trends.
              <br /> We nurture legacy.
            </h1>

            <div className="text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-justify space-y-3 lg:space-y-4">
              <p className="mb-6 lg:mb-8">
                For us, farming isn't just a business it's a bond that stretches
                across <b>fields, families, and generations.</b> Our story
                begins before fertilisers ever entered our catalogue. Decades
                ago, we earned our stripes in Indian agriculture, side by side
                with growers, learning the rhythm of seasons, the value of
                patience, and the quiet satisfaction of a harvest well-earned.
                Those{" "}
                <b>
                  experiences shaped our philosophy: progress springs from
                  tradition, and lasting change begins in the soil.
                </b>
              </p>

              {/* Second image floating left for variety */}
              <img
                src="./image 33.png"
                alt="Heritage Image"
                className="float-left mr-4 lg:mr-6 mb-3 lg:mb-4 w-52 lg:w-64 xl:w-80 rounded-lg shadow-lg"
              />

              <p className="mb-6 lg:mb-8">
                Today, we bring that{" "}
                <b>heritage to every bag of fertiliser we produce.</b> Whether{" "}
                <b>it's the innovation behind our nutrient blends</b> or the{" "}
                <b>trust built into every transaction</b>, what sets us apart is
                the way we listen to farmers' evolving needs. Each product is a
                response,{" "}
                <b>
                  crafted to help crops flourish, soils thrive, and communities
                  prosper.
                </b>
              </p>

              <img
                src="./image 35.png"
                alt="Heritage Image"
                className="float-right ml-4 lg:ml-6 mt-3 lg:mt-4 w-52 lg:w-64 xl:w-80 rounded-lg shadow-lg"
              />

              <p className="mt-3 lg:mt-4">
                Our company isn't powered by boardroom buzzwords.{" "}
                <b>
                  It's fuelled by muddy boots, early mornings, and the knowledge
                </b>{" "}
                that when we support a farmer's ambitions, we help entire
                villages flourish. As stewards of the land, we're{" "}
                <b>
                  committed to ethical growth, sustainability, and a promise:
                  your field's potential is our purpose.
                </b>
              </p>
            </div>

            {/* Clear floats */}
            <div className="clear-both"></div>
          </div>

          {/* Mobile Layout without floating images */}
          <div className="block md:hidden">
            <h1 className="text-xl sm:text-2xl font-bold text-[#EF6D1A] mb-4 sm:mb-6 leading-tight text-center">
              Some companies chase trends.
              <br /> We nurture legacy.
            </h1>

            {/* Images in grid layout for mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <img
                src="./image 31.png"
                alt="Farming Image"
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src="./image 32.png"
                alt="Farming Image"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="text-sm sm:text-base leading-relaxed space-y-3 sm:space-y-4">
              <p className="mb-4 sm:mb-6 text-justify">
                For us, farming isn't just a business it's a bond that stretches
                across <b>fields, families, and generations.</b> Our story
                begins before fertilisers ever entered our catalogue. Decades
                ago, we earned our stripes in Indian agriculture, side by side
                with growers, learning the rhythm of seasons, the value of
                patience, and the quiet satisfaction of a harvest well-earned.
                Those{" "}
                <b>
                  experiences shaped our philosophy: progress springs from
                  tradition, and lasting change begins in the soil.
                </b>
              </p>

              {/* Single image for mobile */}
              <div className="flex justify-center mb-4">
                <img
                  src="./image 33.png"
                  alt="Heritage Image"
                  className="w-full max-w-xs rounded-lg shadow-lg"
                />
              </div>

              <p className="mb-4 sm:mb-6 text-justify">
                Today, we bring that{" "}
                <b>heritage to every bag of fertiliser we produce.</b> Whether{" "}
                <b>it's the innovation behind our nutrient blends</b> or the{" "}
                <b>trust built into every transaction</b>, what sets us apart is
                the way we listen to farmers' evolving needs. Each product is a
                response,{" "}
                <b>
                  crafted to help crops flourish, soils thrive, and communities
                  prosper.
                </b>
              </p>

              {/* Another image for mobile */}
              <div className="flex justify-center mb-4">
                <img
                  src="./image 35.png"
                  alt="Heritage Image"
                  className="w-full max-w-xs rounded-lg shadow-lg"
                />
              </div>

              <p className="text-justify">
                Our company isn't powered by boardroom buzzwords.{" "}
                <b>
                  It's fuelled by muddy boots, early mornings, and the knowledge
                </b>{" "}
                that when we support a farmer's ambitions, we help entire
                villages flourish. As stewards of the land, we're{" "}
                <b>
                  committed to ethical growth, sustainability, and a promise:
                  your field's potential is our purpose.
                </b>
              </p>
            </div>
          </div>
        </div>

        {/* Background building image - responsive positioning */}
        <img
          src="./building.png"
          alt=""
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 opacity-60 md:opacity-80 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
        />
      </section>

      <Testimonal />
      <Timeline />
    </div>
  );
};

export default About;
