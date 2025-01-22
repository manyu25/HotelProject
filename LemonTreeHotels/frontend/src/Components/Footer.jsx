import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-[2rem] md:px-[12rem] py-[2rem] font-macondo">
      <div className="w-full text-xl font-semibold hover:cursor-pointer">
        Our Presence
        <i className="fa-solid fa-plus hover:cursor-pointer hover:scale-110 hover:shadow-sm shadow-gray-500 text-white p-1"></i>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 my-8 text-sm font-medium gap-5">
        <div className="flex flex-col justify-start items-start gap-2">
          <a href="#">Awards</a>
          <a href="#">About us</a>
          <a href="#">Careers</a>
          <a href="#">Contact us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Newsletters</a>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <a href="#">Blogs</a>
          <a href="#">Day Use</a>
          <a href="#">Cookies Policy</a>
          <a href="#">Non Affiliation</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <a href="#">Media</a>
          <a href="#">Site Map</a>
          <a href="#">Travel Guidelines</a>
          <a href="#">Investor relations</a>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <a href="#">Sakshi Mishra</a>
          <a href="#">Abhimanyu</a>
          <a href="#">Loyalty Program</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center md:item-start">
        <div className="w-full md:w-1/2">
          <p className="italic text-xs">*Join our newsletter</p>
          <form className="py-2 flex justify-start gap-3 items-start">
            <div className="flex flex-col justify-start">
              <input
                type="text"
                placeholder="Enter your Email"
                className="h-10 w-full rounded-md placeholder:text-gray-600 font-medium text-gray-600 p-2"
              />
              <div className="flex items-center justify-start">
                <input type="checkbox" className="h-5 w-5 my-2" id="privacy" />
                <label htmlFor="privacy" className="mx-2">
                  I agree to the <a href="#">Privacy policy</a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#d7b56d] text-black text-md hover:bg-[#dda734] p-2 text-md text-sm font-semibold rounded-md border-2 border-white"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          Follow on:-
          <a href="#">
            <i className="fa-brands text-2xl fa-square-facebook hover:scale-150 duration-500"></i>
          </a>
          <a href="#">
            <i className="fa-brands text-2xl fa-square-instagram hover:scale-150 duration-500"></i>
          </a>
          <a href="#">
            <i className="fa-brands text-2xl fa-meta hover:scale-150 duration-500"></i>
          </a>
          <a href="#">
            <i className="fa-brands text-2xl fa-square-x-twitter hover:scale-150 duration-500"></i>
          </a>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-medium text-center">
          ©2025 by Sakshi Mishra & Abhimanyu All Rights Reserved.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
