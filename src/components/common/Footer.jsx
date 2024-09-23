import React from "react";
import { footerData } from "../../data/links";
import { Link } from "react-router-dom";
import logo from "../../assets/svgs/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="my-10 max-w-7xl mx-auto px-4">
        <img src={logo} alt="" className="w-[200px] object-cover" />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 px-4 md:grid-cols-4 gap-8 mb-10">
        {footerData.map((section, index) => (
          <div key={index}>
            <h4 className="text-sm font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to="#"
                    className="text-gray-700 hover:text-green-600 hover:text-gray-900 transition duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 justify-center text-sm items-center bg-gray-100 p-8">
        <div className="flex gap-4">
          {" "}
          <Link to={"#"} className="hover:text-green-600">
            Intellectual Property Policy
          </Link>
          <Link to={"#"} className="hover:text-green-600">
            Terms of Service
          </Link>
          <Link to={"#"} className="hover:text-green-600">
            Privacy Policy
          </Link>
          <Link to={"#"} className="hover:text-green-600">
            Security
          </Link>
        </div>
        <Link to={"#"}>© 2024 Printify, Inc. All rights reserved.</Link>
      </div>
    </footer>
  );
};

export default Footer;
