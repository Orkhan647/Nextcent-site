import React from "react";
import company1 from "../assets/icons/company1.png";
import company2 from "../assets/icons/company2.png";
import company3 from "../assets/icons/company3.png";
import company4 from "../assets/icons/company4.png";
import company5 from "../assets/icons/company5.png";
import company6 from "../assets/icons/company6.png";
import icon1 from "../assets/icons/cardIcon1.png"
import icon2 from "../assets/icons/cardIcon2.png"
import icon3 from "../assets/icons/cardIcon3.png"
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      descroption:
        "Our membership management software provides full automation of membership renewals and payments",
        image: icon1
    },
    {
      id: 2,
      title: "National Associations",
      descroption:
        "Our membership management software provides full automation of membership renewals and payments",
        image: icon2
    },
    {
      id: 3,
      title: "Clubs And Groups",
      descroption:
      "Our membership management software provides full automation of membership renewals and payments",
        image: icon3
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="/service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralDGrey ">
          We have been working with some Fortune 500+ clients
        </p>
        {/* Company Logo */}

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={company1} alt="company-Logo" />
          <img src={company2} alt="company-Logo" />
          <img src={company3} alt="company-Logo" />
          <img src={company4} alt="company-Logo" />
          <img src={company5} alt="company-Logo" />
          <img src={company6} alt="company-Logo" />
        </div>
      </div>
      {/* services card */}
      <div className="mt-20 md:w-1/2  mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Manage your entrie community in a single system
        </h2>
        <p className="text-neutralDGrey ">Who is Nextcent suitable for?</p>
      </div>
      {/* cards */}
      <div className=" mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 md:w-11/22 mx-auto gap-12 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300"
          >
            <div className="bg-[#E8F5E9 h-full rounded-tl-3xl rounded-br-3xl p-4">
              <img src={service.image} alt="service icon" className="mx-auto" />
              <h4 className="text-2xl font-bold text-neutralDGrey mt-4">
                {service.title}
              </h4>
              <p className="text-sm text-neutralDGrey mt-2">
                {service.descroption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
