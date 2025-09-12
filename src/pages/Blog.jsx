import React from "react";

const Blog = () => {
  return (
    <div className="pt-0">
      <div className="xl:px-35 sm:px-6 lg:px-16 py-16">
        {/* Blog Post 1 */}
        <article className=" p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[45px] font-bold text-[#EF6D1A] mb-4 leading-tight">
            Bridging Farmers and Consumers: Marketing Insights Behind GUJCO
            MART's Success
          </h2>
          <p className="text-base sm:text-lg text-[#EF6D1A] font-semibold mb-6">
            Thailand - June 2024
          </p>

          <div className="relative">
            {/* Desktop Floating Images */}
            <div className="hidden lg:block">
              <div className="float-right ml-12 mb-4 space-y-4 xl:w-6/13 w-5/12">
                <img
                  src="./image 70.png"
                  alt="GUJCO MART Marketing Event"
                  className="w-full h-auto aspect-[645/250] object-cover "
                />
                <img
                  src="./image 71.png"
                  alt="Marketing Strategy Session"
                  className="w-full h-auto aspect-[645/331] object-cover "
                />
              </div>
            </div>

            {/* Mobile/Tablet Images */}
            <div className="lg:hidden mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="./image 70.png"
                alt="GUJCO MART Marketing Event"
                className="w-full h-auto aspect-[645/250] object-cover"
              />
              <img
                src="./image 71.png"
                alt="Marketing Strategy Session"
                className="w-full h-auto aspect-[645/331] object-cover"
              />
            </div>

            <div className="text-base sm:text-lg lg:text-2xl font-medium leading-relaxed">
              <p>
                Our marketing professionals contributed their expertise in brand
                positioning, digital outreach, and market expansion strategies.
                They shared analytics-driven insights about consumer behavior,
                emerging market trends, and effective communication channels to
                reach both farmers and end-consumers through platforms like
                GUJCO MART —our revolutionary platform connecting farmers
                directly with consumers.
              </p>
            </div>
            <div className="clear-both"></div>
          </div>
        </article>

        {/* Blog Post 2 */}
        <article className=" rounded-lg  p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#EF6D1A] mb-4 leading-tight">
            Cultivating Progress: A Recap of Our Farmers and Dealers Awareness
            Program
          </h2>
          <p className="text-base sm:text-lg text-[#EF6D1A] font-semibold mb-6">
            Vadodara, Gujarat - July 2021
          </p>

          <div className="text-base sm:text-lg lg:text-2xl font-medium leading-relaxed">
            <p className="mb-4">
              Discover the key insights and vibrant discussions from our recent
              Farmers & Dealers Awareness Program in Vadodara, where agriculture
              met innovation for a brighter future. The heart of India beats in
              its villages, and its pulse is agriculture. To empower this vital
              sector, we were thrilled to host a dynamic Farmers and Dealers
              Awareness Program in the culturally rich city of Vadodara,
              Gujarat.
            </p>
            <p className="mb-4">
              The event was a resounding success, bringing together the backbone
              of our food system—the diligent farmers and the crucial dealers
              who connect them to technology. The primary goal of this program
              was to create a synergistic platform.
            </p>

            {/* Desktop Bottom floating image */}
            <div className="hidden lg:block">
              <div className="float-right ml-6 mb-4 w-1/2">
                <img
                  src="./IMG_9197 1.png"
                  alt="Farmers and Dealers Awareness Program"
                  className="w-full h-auto aspect-[518/255] object-cover "
                />
              </div>
            </div>

            <p className="mb-4">
              For farmers, it was an opportunity to learn about advanced
              practices, and for dealers, it was a chance to understand farmer
              concerns better and become more effective partners in progress.
              The discussions were candid, insightful, and focused on practical,
              on-ground solutions.
            </p>

            {/* Mobile/Tablet Image */}
            <div className="lg:hidden my-6">
              <img
                src="./IMG_9197 1.png"
                alt="Farmers and Dealers Awareness Program"
                className="w-full h-auto aspect-[518/255] object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="clear-both"></div>
          </div>
        </article>

        {/* Blog Post 3 */}
        <article className="mb-20 bg-white rounded-lg p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#EF6D1A] mb-4 leading-tight">
            At Farmers Meet Up
          </h2>
          <p className="text-base sm:text-lg text-[#EF6D1A] font-semibold mb-6">
            Sabarkantha, Gujarat - May 2020
          </p>

          <div className="relative">
            {/* Desktop Floating Images */}
            <div className="hidden lg:block">
              <div className="float-right ml-6 mb-4 space-y-4 w-4/9">
                <img
                  src="./image 36.png"
                  alt="Farmers Meet Up Discussion"
                  className="w-full h-auto aspect-[500/305] object-cover"
                />
                <img
                  src="./image 33.png"
                  alt="Farmers Community Gathering"
                  className="w-full h-auto aspect-[501/290] object-cover "
                />
              </div>
            </div>

            {/* Mobile/Tablet Images */}
            <div className="lg:hidden mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="./image 36.png"
                alt="Farmers Meet Up Discussion"
                className="w-full h-auto aspect-[500/305] object-cover"
              />
              <img
                src="./image 33.png"
                alt="Farmers Community Gathering"
                className="w-full h-auto aspect-[501/290] object-cover "
              />
            </div>

            <div className="text-base sm:text-lg lg:text-2xl font-medium leading-relaxed">
              <p className="mb-4">
                Our company had the privilege of hosting a farmers meet-up,
                bringing together dedicated growers from various regions for an
                open conversation on crop cultivation challenges and fertiliser
                needs. Farmers shared candid experiences and insights that
                highlighted both the strengths and shortcomings of the current
                fertiliser landscape.
              </p>
              <p className="mb-4">
                We listened carefully as farmers discussed everything from crop
                nutrition goals to handling unpredictable weather. They raised
                valid concerns about fertiliser consistency, cost-effectiveness,
                and the need for products that support not just yields, but also
                long-term soil health. Many shared their struggles with
                competitor fertilisers, pointing out issues like uneven nutrient
                release, difficulty in application, and even negative impacts on
                soil texture and pH.
              </p>
              <p className="mb-4">
                What struck us most was the genuine commitment farmers have to
                sustainable practices and providing for their families and
                communities. Their feedback drove home the importance of
                transparency and innovation in the fertiliser industry. We
                discussed how our product range—including BZ-GSSP, Boronated and
                Zincated variants, and PROM are crafted to address these
                concerns, focusing on stable supply, nutrient balance, and
                lasting benefits for both crops and the land.
              </p>
              <p className="mb-4">
                Our team also benefitted immensely from hearing the "pros"
                identified with competitor products such as rapid nutrient
                availability or low upfront costs and the "cons," like
                inadequate micronutrients or the need for frequent
                reapplication. This honest dialogue is invaluable in shaping our
                ongoing research and commitment to continuous improvement.
              </p>
              <p className="mb-4">
                We left the meet-up feeling energized and grateful for the
                opportunity to connect directly with the people who depend on
                our products. Their stories and insights remind us why our
                mission is to deliver genuine results, strong support, and
                reliable solutions for every farmer's success.
              </p>
              <p>
                We're excited to continue these conversations and work side by
                side with our farming community growing not just crops, but
                understanding and trust.
              </p>
            </div>
            <div className="clear-both"></div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog;
