import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaPinterestSquare,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <main className="bg-[#F9F9F9] min-h-[30vh]">
      <section className="flex py-20 gap-4 lg:flex-row flex-row flex-wrap">
        <div className="w-[30%] flex flex-col gap-8">
          <Image
            src="https://madebydesignesia.com/themes/hostco/images/logo.png"
            alt="company logo"
            height={"200"}
            width={"200"}
          />
          <p className="text-[gray] text-md">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
          </p>
        </div>
        <div className="flex lg:gap-2 gap-4 flex-col">
          <h1 className="text-xl font-bold">We Accepted</h1>
          <Image
            src="https://madebydesignesia.com/themes/hostco/images/payments-logo/visa.png"
            height={100}
            width={100}
            alt="visa logo"
            style={{ backgroundColor: "white" }}
          />

          <Image
            src="https://madebydesignesia.com/themes/hostco/images/payments-logo/master-card.png"
            height={100}
            width={100}
            alt="mastercard logo"
            style={{ backgroundColor: "white" }}
          />

          <Image
            src="https://madebydesignesia.com/themes/hostco/images/payments-logo/jcb.png"
            height={100}
            width={100}
            alt="jcb logo"
            style={{ backgroundColor: "white" }}
          />

          <Image
            src="https://madebydesignesia.com/themes/hostco/images/payments-logo/paypal.png"
            height={100}
            width={100}
            alt="paypal logo"
            style={{ backgroundColor: "white" }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold ">Hosting</h1>
          <ul className="flex flex-col gap-4">
            <ListItem text="Web Hosting" />
            <ListItem text="VPS Hosting" />
            <ListItem text="Cloud Hosting" />
            <ListItem text="WordPress Hosting" />
            <ListItem text="Email Hosting" />
            <ListItem text="CMS Hosting" />
            <ListItem text="Ecommerce Hosting" />
            <ListItem text="Website Builder" />
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Company</h1>
          <ul className="flex flex-col gap-4">
            <ListItem text="Web Hosting" />
            <ListItem text="VPS Hosting" />
            <ListItem text="Cloud Hosting" />
            <ListItem text="WordPress Hosting" />
            <ListItem text="Email Hosting" />
            <ListItem text="CMS Hosting" />
            <ListItem text="Ecommerce Hosting" />
            <ListItem text="Website Builder" />
          </ul>
        </div>
        <div className=" flex flex-col gap-4 ">
          <h1 className="text-xl font-bold">News Letter</h1>
          <p className="text-md text-[gray]">
            Signup for our newsletter to get the latest news in your inbox.
          </p>
          <div className="flex items-center">
            <input
              placeholder="enter your email"
              className="rounded-l-[100px] bg-[#EEEEEE] p-[12px] text-xl w-4/5"
            />
            <button className="bg-[var(--primary-light)] text-white px-10 py-[17px] rounded-r-[100px] self-center">
              <FaArrowRightLong />
            </button>
          </div>
          <p className="text-[gray]">
            Your email is safe with us. We don't spam.
          </p>
          <h1 className="text-xl font-bold">Follow us on</h1>
          <span className="flex gap-7">
            <FaFacebook className=" bg-white rounded-[100px] text-[var(--primary-dark)] text-2xl hover:bg-[var(--primary-light)] hover:cursor-pointer transition-all ease-in-out delay-75" />
            <FaLinkedin className="bg-white rounded-[100px] text-[var(--primary-dark)] text-2xl hover:bg-[var(--primary-light)] hover:cursor-pointer transition-all ease-in-out delay-75" />
            <FaTwitter className="bg-white rounded-[100px] text-[var(--primary-dark)] text-2xl hover:bg-[var(--primary-light)] hover:cursor-pointer transition-all ease-in-out delay-75" />
            <FaPinterestSquare className="bg-white rounded-[100px] text-[var(--primary-dark)] text-2xl hover:bg-[var(--primary-light)] hover:cursor-pointer transition-all ease-in-out delay-75" />
          </span>
        </div>
      </section>
      <section className="footer-bottom flex items-center justify-between py-5 border-t gap-4">
        <h4 className="font-light text-sm text-[gray]">
          Copyright 2023 - Hostco by Kevin Roan
        </h4>
        <div className="flex justify-between items-center gap-11">
          <p className="font-light text-md text-[gray]">Terms and Conditions</p>
          <p className="font-light text-md text-[gray]">Privacy policy</p>
        </div>
      </section>
    </main>
  );
}

interface ListItem {
  text: string;
}

const ListItem = ({ text }: ListItem) => {
  return (
    <li className="text-[gray] text-md hover:text-[var(--primary-dark)] transition-all ease-in-out delay-75">
      {text}
    </li>
  );
};

export default Footer;
