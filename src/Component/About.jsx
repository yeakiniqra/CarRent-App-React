import React from 'react';

const About = () => {
  return (
    <section className="overflow-hidden h-screen pt-2 pb-8 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                {/* <div className="py-3 sm:py-4">
                  <img
                    src="https://shorturl.at/ehmBL"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div> */}
                <div className="py-3 sm:py-4">
                  <img
                    src="https://shorturl.at/izHI5"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://shorturl.at/aNQ58"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-5 lg:mt-0">
              <span className="block mb-4 ml-3 text-2xl text-green-500 font-semibold text-primary">
                Why Choose Us
              </span>
              <h2 className="mb-5 text-3xl ml-4 font-bold text-black dark:text-black sm:text-[40px]/[48px]">
                Make your customers happy by giving services.
              </h2>
              <p className="mb-5 ml-4 text-base text-body-color dark:text-dark-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less.
              </p>
              <p className="mb-8 ml-4 text-base text-body-color dark:text-dark-6">
                A domain name is one of the first steps to establishing your
                brand. Secure a consistent brand image with a domain name that
                matches your business.
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
