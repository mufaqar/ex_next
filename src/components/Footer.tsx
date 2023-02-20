import { Container } from "@/constant/imports";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { Logo } from "./imports";
import { RxDoubleArrowRight } from "react-icons/rx";

interface ISocial {
  icon: JSX.Element;
  link: string;
}

const Footer = () => {
  return (
    <footer className="footerbg pt-28">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <Logo className="border border-white" />
            <div className="flex gap-3 my-10">
              {social.map((item: ISocial, i: number) => {
                return (
                  <Link
                    href={item.link}
                    className="border-1 border text-white rounded-sm text-xl hover:bg-white hover:text-main border-white p-2"
                    key={i}
                  >
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold">About ExamHero</h4>
            <ul className="mt-6 flex flex-col gap-2">
              <li className="text-white item-center">
                <Link href="#" className="flex items-center gap-1">
                  <RxDoubleArrowRight />
                  About Us
                </Link>
              </li>
              <li className="text-white item-center">
                <Link href="#" className="flex items-center gap-1">
                  <RxDoubleArrowRight />
                  Job Opportunity
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold">
              Customer Services
            </h4>
            <ul className="mt-6 flex flex-col gap-2">
              <li className="text-white item-center">
                <Link href="/contact-with-us" className="flex items-center gap-1">
                  Contact Us
                </Link>
              </li>
              <li className="text-white item-center">
                <Link href="#" className="flex items-center gap-1">
                  FAQs
                </Link>
              </li>
              <li className="text-white item-center">
                <Link href="#" className="flex items-center gap-1">
                  Payment Method
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold">Policy and Law</h4>
            <ul className="mt-6 flex flex-col gap-2">
              <li className="text-white item-center">
                <Link href="#" className="flex items-center gap-1">
                  <RxDoubleArrowRight />
                  Terms and Conditions
                </Link>
              </li>
              <li className="text-white item-center">
                <Link href="#" className="flex items-center gap-1">
                  <RxDoubleArrowRight />
                  Privacy Policy
                </Link>
              </li>
              <li className="text-white item-center">
                <Link href="#" className="flex items-center gap-1">
                  <RxDoubleArrowRight />
                  Collection of Personal Data Statement
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="flex justify-center "><p className="text-white tracking-wide pt-32 pb-6">Copyright© 2023 ExamHero Designed By ExamHero. All Rights Reserved</p></div>
    </footer>
  );
};

export default Footer;

const social = [
  {
    icon: <FaFacebookF />,
    link: "#",
  },
  {
    icon: <FaTwitter />,
    link: "#",
  },
  {
    icon: <FaLinkedinIn />,
    link: "#",
  },
  {
    icon: <FaPinterestP />,
    link: "#",
  },
];
