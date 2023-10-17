import React from "react";
import mobileImg from "../assets/mobileImg.png";
import company1 from "../assets/icons/company1.png";
import company2 from "../assets/icons/company2.png";
import company3 from "../assets/icons/company3.png";
import company4 from "../assets/icons/company4.png";
import company5 from "../assets/icons/company5.png";
import company6 from "../assets/icons/company6.png";
import tesla from "../assets/tesla.png"
const Products = () => {
  return (
    <>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8"  id="testimonialSection">
        <div className="md:w-11/22 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={mobileImg} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8">
              One event calendar shared across National, Regional and Club
              events to simplify your event experience. Allowing you to create
              waiting lists, share data capture, issue credential for course
              completion, apply smart purchasing rules and much more.
            </p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 transform hover:translate-y-[-4px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver p-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3">
            <img src={tesla} alt="" />
          </div>

          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralDGrey mb-8 leading-7">
                “We have enjoyed working with the JustGo system to setup and go
                live with our new membership platform. The initial effort to
                organise it along the lines of how our sport currently works was
                quick and relatively easy. The new system has already massively
                improved the time and effort it takes to setup and process
                member and club applications. It will help us to communicate
                with people in our sport in a much more effective way, and
                collect data to help us improve how our sport is governed.”
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Tim Smith
              </h5>
              <p className="text-base  text-neutralDGrey mb-8">British Dragon Boat Racing Association</p>
            <div className="flex items-center gap-8">
  <div className="flex items-center gap-8 flex-wrap">
    <img src={company1} alt="" className="cursor-pointer" />
    <img src={company2} alt="" className="cursor-pointer" />
    <img src={company3} alt="" className="cursor-pointer" />
    <img src={company4} alt="" className="cursor-pointer" />
    <img src={company5} alt="" className="cursor-pointer" />
    <img src={company6} alt="" className="cursor-pointer" />
  </div>
  <a
    href="/"
    className="font-bold text-brandPrimary hover:text-neutral-700 flex items-center"
  >
    Meet all customers {""}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="11"
      viewBox="0 0 17 11"
      fill="none"
      className="inline-block ml-2"
    >
      <path
        d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
        stroke="#4CAF4F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </a>
</div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
