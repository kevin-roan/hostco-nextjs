"use client";

import Image from "next/image";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

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
  const [phoneActive, setPhoneActive] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });
  return (
    <div>
      {phoneActive && (
        <div className="flex items-center justify-between mx-auto gap-10 border-2 lg:hidden flex-row px-3 py-4 ">
          <button id="hamburger" onClick={() => setShowModal(true)}>
            <GiHamburgerMenu className="text-black text-2xl font-bold hover:text-[var(--primary-light)] transition-all ease-in-out delary-75 mx-4 " />
          </button>
          <Image
            src="https://madebydesignesia.com/themes/hostco/images/logo.png"
            alt="company logo"
            height={"200"}
            width={"200"}
            style={{ alignSelf: "center" }}
          />
          <button className="bg-[var(--primary-dark)] text-white px-4 py-2 rounded-[100px] font-bold text-sm self-end">
            Buy Now
          </button>
        </div>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
                backgroundColor: "white",
              }
            : {}
        }
      >
        <main className="bg-[white] h-[6vmax] flex justify-between items-center lg:flex-row flex-col">
          {phoneActive && (
            <button onClick={() => setShowModal(false)}>
              <IoClose className="text-black text-2xl font-bold hover:text-[var(--primary-light)] transition-all ease-in-out delary-75 mx-4 " />
            </button>
          )}
          <div>
            <Image
              src="https://madebydesignesia.com/themes/hostco/images/logo.png"
              alt="company logo"
              height={"200"}
              width={"200"}
            />
          </div>
          <div className="flex ">
            <ul className="flex font-semibold gap-4 lg:flex-row flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 color-[#ccc]"
                >
                  {nav}
                  <RiArrowDropDownLine />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="bg-[var(--primary-dark)] text-white px-14 py-3 rounded-[100px] font-bold text-sm">
              Buy Now
            </button>
          </div>
        </main>
      </aside>
    </div>
  );
}

export default Header;
