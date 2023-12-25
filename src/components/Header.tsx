import Image from "next/image";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const navLinks = [
  "Home",
  "Hosting",
  "Domain",
  "Websites",
  "Help",
  "Pages",
  "More",
];

function Header() {
  return (
    <div>
      <main className="bg-[white] h-[6vmax] flex justify-between items-center">
        <div>
          <Image
            src="https://madebydesignesia.com/themes/hostco/images/logo.png"
            alt="company logo"
            height={"200"}
            width={"200"}
          />
        </div>
        <div className="flex ">
          <ul className="flex font-semibold gap-4">
            {navLinks.map((nav, index) => (
              <li key={index} className="flex items-center gap-2 color-[#ccc]">
                {nav}
                <RiArrowDropDownLine />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="bg-[var(--primary-dark)] text-white px-14 py-3 rounded-[100px] font-bold">
            Buy Now
          </button>
        </div>
      </main>
    </div>
  );
}

export default Header;
