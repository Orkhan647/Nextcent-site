import { Carousel } from "flowbite-react";
import React from "react";
import banner1 from "../assets/banner1.png";
const Home = () => {
  return (
    <div className="bg-neutralSilver " id="/home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
{/* hero text */}
<div className="md:w-1/2">
  <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 loading-snug">
    Lessons and insights
    <span className="block text-brandPrimary loading-snug">from 8 years</span>
  </h1>
  <p className="text-neutralDGrey text-base mb-8">Where to grow your business as a photographer: site or social media?</p>
  <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 transform hover:translate-y-[-4px]">Register</button>

</div>



          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
{/* hero text */}
<div className="md:w-1/2">
  <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 loading-snug">
    Learn and Earn Money
    <span className="block text-brandPrimary loading-snug">in 4 Month</span>
  </h1>
  <p className="text-neutralDGrey text-base mb-8">Where to grow your business as a photographer: site or social media?</p>
  <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 transform hover:translate-y-[-4px]">Register</button>

</div>



          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
{/* hero text */}
<div className="md:w-1/2">
  <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 loading-snug">
    Lessons and insights
    <span className="block text-brandPrimary loading-snug">from 8 years</span>
  </h1>
  <p className="text-neutralDGrey text-base mb-8">Where to grow your business as a photographer: site or social media?</p>
  <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 transform hover:translate-y-[-4px]">Register</button>

</div>



          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
