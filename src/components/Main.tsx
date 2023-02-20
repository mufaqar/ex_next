import { Container } from "@/constant/imports";
import Image from "next/image";
import { HeroImage } from "public/images/imports";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Main = () => {
  return (
    <main className=" mianbg flex flex-col items-center justify-center pt-36 pb-20">
      <Container small={true}>
        <section className="grid md:grid-cols-2 gap-20 justify-between items-center">
          <div>
            <span className="font-semibold text-main uppercase">CREATE A BETTER LEARNING FUTURE WITH US</span>
            <h1 className="main-heading">The Largest AI Education Platform in Hong Kong and Macau</h1>
            <p className="text-gray-600 leading-8 font-normal">
              ExamHero is an enterprise that solves learning problems with
              artificial intelligence (AI) systems. We insist on continuously
              bringing users better learning and using experiences, creating the
              best learning results, and are committed to making high-quality
              education within easy reach, learning and evaluation.
            </p>
            <button className="button p-3 mt-5">
              Get Started Today <BsArrowRightShort />
            </button>
          </div>
          <div className="p-10 pt-0 md:pt-10">
            <Image
              src={HeroImage}
              alt="main-image"
              width={610}
              height={762}
            />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Main;
