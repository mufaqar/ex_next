import { Container } from "@/constant/imports";
import Image from "next/image";
import React from "react";
import { WhyUsData } from "../../public/DataFiles/whyUs";

interface IWhyUsData {
  title: string;
  content: string;
  imagePath: any;
}

const WhyUs = () => {
  return (
    <section className="my-20 md:my-36 bg-[url('../../public/svg/whyusdiamond.svg')] bg-no-repeat bg-contain bg-left-top md:bg-left">
      <Container>
        <div className="md:flex gap-20 items-center ">
          <div className="md:w-4/12 mb-16 md:mb-0">
            <h2 className="main-heading font-bold text-main">Why Us?</h2>
            <p className="text-[#1C5278] mt-8">
              ExamHero is an enterprise that solves learning problems with
              artificial intelligence (AI) systems. We insist on continuously
              bringing users better learning and using experiences,
            </p>
          </div>
          <div className="md:w-8/12 grid grid-cols-2 md:grid-cols-3 gap-16">
            {WhyUsData.map((why: IWhyUsData, idx: number) => {
              return (
                <div key={idx}>
                  <figure className="bg-main w-16 h-16 p-3 rounded-xl">
                    <Image
                      src={why.imagePath.src}
                      alt=""
                      width={76}
                      height={76}
                    />
                  </figure>
                  <h4 className="text-black font-bold text-lg mt-4 mb-1">
                    {why.title}
                  </h4>
                  <p>{why.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
