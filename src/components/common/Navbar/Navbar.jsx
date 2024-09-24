import React from "react";
import { navLinks } from "../../../data/links";
import logo from "../../../assets/svgs/logo.svg";
import { Link } from "react-router-dom";
import Button from "../Button";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiCrossedBones } from "react-icons/gi";
import useClickOutSide from "../../../hooks/useClickOutSide";
import { RiSideBarFill } from "react-icons/ri";

const Navbar = () => {
  const { ref, isVisible, setIsVisible } = useClickOutSide();

  return (
    <header className="shadow-md sticky top-0 z-50">
      <nav className="bg-white relative">
        <div className="flex h-[4.3rem] max-w-7xl mx-auto p-2 min-[400px]:px-6 xl:px-8 items-center justify-between w-full ">
          <div className="flex gap-2">
            <Button
              onClick={() => setIsVisible((prev) => !prev)}
              customClass={" py-0 border-none bg-transparent lg:hidden"}
              outline={true}
            >
              <RiSideBarFill size={25} className="text-[#39B75D]" />
            </Button>
            <Link
              to={"/"}
              className="flex w-7 sm:w-[130px] h-[70px] bg-no-repeat bg-[length:500%] bg-[center_left]  sm:bg-contain  sm:bg-center mr-2 sm:mr-0 "
              style={{
                backgroundImage: `url(${logo})`,
              }}
            ></Link>
          </div>
          <div
            className={`absolute top-0 ${
              isVisible ? "left-0 back-blur" : "-left-full"
            } lg:static  max-[1023px]:w-full transition-all duration-500`}
          >
            <ul
              className="flex h-screen lg:h-auto bg-white max-[1023px]:max-w-[250px] gap-4 xl:gap-6 flex-col lg:flex-row text-[#353A47]"
              ref={ref}
            >
              <li className="flex lg:hidden justify-end gap-12 border-b py-4 mb-4">
                <h3 className="text-2xl text-center font-medium">Menu</h3>
                <Button
                  onClick={() => setIsVisible(false)}
                  customClass={"p-0 border-none"}
                  outline={true}
                >
                  <GiCrossedBones size={15} />
                </Button>
              </li>
              {navLinks.map((list) =>
                list.detail ? (
                  <li
                    className="relative group cursor-pointer px-4 lg:px-0 lg:py-5"
                    key={list.id}
                  >
                    <div className=" hover:text-green-400 flex gap-1 items-center">
                      <span>{list.title}</span>
                      <span className="group-hover:rotate-180 transition-all duration-300">
                        <IoMdArrowDropdown />
                      </span>
                    </div>
                    <div className="lg:absolute hidden transition-all duration-75 group-hover:flex flex-col gap-y-2 bg-white p-4 top-[4.2rem] left-0 max-w-max lg:shadow-sm">
                      {list.detail.map((subList, i) => (
                        <span
                          key={i}
                          className="hover:text-green-400 whitespace-nowrap"
                        >
                          <Link to={subList.path}>{subList.title}</Link>
                        </span>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li
                    key={list.id}
                    className="group hover:text-green-400 px-4 lg:px-0 lg:py-5 cursor-pointer lg:cursor-default"
                  >
                    <Link to={list?.path}>{list.title}</Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <Button text={"Login"} customClass={"mr-2"} outline={true} />
            <Button text={"Signup"} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
