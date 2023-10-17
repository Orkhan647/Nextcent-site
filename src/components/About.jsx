import React from "react";
import aboutimg from "../assets/aboutimg.png";
import stats1 from "../assets/icons/stats1.png";
import stats2 from "../assets/icons/stats2.png";
import stats3 from "../assets/icons/stats3.png";
import stats4 from "../assets/icons/stats4.png";

const About = () => {
  return (
    <>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="/about">
        <div className="md:w-11/22 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutimg} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8">
              When joining the JustGo Community, your success becomes our
              success. In other words, our Customer Success team will be on hand
              from day one to ensure we understand your requirements, share your
              goals and work with you for a smooth adoption of our software.
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
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Helping a local <br />
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div>
          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center  justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div>
                  <img src={stats1} alt="" />
                </div>
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <img src={stats2} alt="" />
                </div>
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                  
                    828,867
                  </h4>
                  <p>
                  Event Bookings
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div>
                  <img src={stats3} alt="" />
                </div>
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                  46,328
                  </h4>
                  <p>Clubs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <img src={stats4} alt="" />
                </div>
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    1,928,436
                  </h4>
                  <p>Paymetns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
