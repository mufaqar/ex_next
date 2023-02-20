import { Feedback, Giftcard, Main, Partners, WhatWeDo, WhyUs } from "@/components/imports";
import { Container } from "@/constant/imports";
import Image from "next/image";
import React from "react";
import { Benefit, Ebook, Mockpaper, SchoolUse } from "../../public/svg/imports";

const StatsData = [
  {
    stats: "50+",
    title: "schools use ",
    icon: SchoolUse,
  },
  {
    stats: "5000+",
    title: "students benefited",
    icon: Benefit,
  },
  {
    stats: "8000+",
    title: "mock papers Distributed",
    icon: Mockpaper,
  },
  {
    stats: "10000+",
    title: " eBook reading volumes",
    icon: Ebook,
  },
];

interface IStats {
  stats: string;
  title: string;
  icon: any;
}

const HomeModule = () => {
  return (
    <section>
      <Main />
      {/* our mission & vission */}
      <h2 className="sub-heading text-main text-center mb-6">
        Our Mission and Vision
      </h2>
      <Container small={true}>
        <section className="grid md:grid-cols-2 gap-12 md:gap-20 my-16 mb-24">
          <div className="flex flex-col items-center justify-center bxs rounded-2xl p-6 px-10">
            <h3 className="font-bold text-3xl md:text-[32px] text-black mb-4">
              Mission
            </h3>
            <p className="text-center">
              To be the best partner for users on the road to success. Core
              Values: Professionalism, Integrity, Innovation, Cultivation,
              Personalized Learning, Mutual Achievement.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bxs rounded-2xl p-6 px-10">
            <h3 className="font-bold text-3xl md:text-[32px] text-black mb-4">
              Vision
            </h3>
            <p className="text-center">
              Use artificial intelligence to promote educational reform and
              innovation, break the current limitations of educational
              evaluation and personalized learning, and allow
              everyone to experience high-quality education.
            </p>
          </div>
        </section>
      </Container>
      {/* partners section  */}
      <Partners />
      <WhyUs />
      {/* stats section */}
      <section>
        <div className="bg-light-pink/20 mt-10">
          <Container small={true}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center py-12 gap-10">
              {StatsData.map((item: IStats, idx: number) => {
                return (
                  <div key={idx} className="flex flex-col items-center justify-center">
                    <Image src={item.icon.src} width={40} height={40} alt={item.title} />
                    <h3 className="sub-heading font-bold leading-10 text-main mt-5">{item.stats}</h3>
                    <p className="text-main font-medium mt-2">{item.title}</p>
                  </div>
                )
              })}
            </div>
          </Container>
        </div>
      </section>

      {/* what we do section  */}
      <WhatWeDo />
      {/* feedback section  */}
      <Feedback />
      {/* giftacard section  */}
      <Giftcard />

    </section>
  );
};

export default HomeModule;
