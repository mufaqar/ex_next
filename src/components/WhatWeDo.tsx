import { Container } from "@/constant/imports";
import Image from "next/image";
import React from "react";
import { W1, W2, W3, W4 } from "../../public/images/imports";
import { HiOutlineArrowRight } from 'react-icons/hi';


interface IWhatWeDo {
  image: any;
  title: string;
  description: string;
  link: string;
}

const WhatWeDo = () => {
  return (
    <section className="relative bg-[url('../../public/images/whatwedo-diamond.png')] bg-no-repeat bg-left-top pb-28" id="services">
      <h2 className="sub-heading font-bold text-center mt-20 text-main">
        What We Do
      </h2>
      <Container>
        <div className="mt-20 flex flex-col gap-20">
          {WhatwedoData.map((item: IWhatWeDo, idx: number) => {
            return (
              <div key={idx} className="grid md:grid-cols-2 bxs rounded-xl bg-white nth_class">
                <div className={`p-28 relative md:p-36 bg-no-repeat bg-center flex-col bg-cover rounded-t-xl rounded-b-xl ${idx % 2 === 1 && 'md:order-2'}`} style={{ backgroundImage: `url(${item.image.src})` }}>
                  <button className="button p-3 absolute bottom-10 shadow-xl right-1/2 transform translate-x-1/2 px-6">How It Works <HiOutlineArrowRight /></button>
                </div>
                <div className="p-6 px-10">
                  <h3 className="text-[32px] font-semibold">{item.title}</h3>
                  <p className="mt-4">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <Image src="/images/whatwedo-diamond.png" className="absolute bottom-0 rotate-180 right-0 -z-10" width={900} height={900} alt="bg" />
      <Image src="/svg/Blur-Gradient.svg" className="absolute top-0 right-0 -z-10" width={500} height={500} alt="bg" />
    </section>
  );
};

export default WhatWeDo;

const WhatwedoData = [
  {
    image: W1,
    title: "E-mock exam and Intelligent Evaluation System",
    description:
      "Several students conduct the same mock exam in order to obtain a more thorough and compelling assessment results. Visualization of teaching evaluation data which can help the school quickly analyze the teaching effectiveness. Assist schools and teachers in adjusting course content based on student achievement.",
    link: "#",
  },
  {
    image: W2,
    title: "Comprehelp - AI question generator",
    description:
      "Jointly developed by the team members who graduate from Oxford University and Stanford University. Reduce the time and cost of writing questions, as well as teachers' workload. Automatically and quickly generate a lot of relevant questions. Innovate the education industry. ",
    link: "#",
  },
  {
    image: W3,
    title: "Intelligent School-based E-Learning Resource Library",
    description:
      "Several students conduct the same mock exam in order to obtain a more thorough and compelling assessment results. Visualization of teaching evaluation data which can help the school quickly analyze the teaching effectiveness and adjust the class contents, so as to teaching in a flexible and successful manner. Assist schools and teachers in adjusting course content based on student achievement.",
    link: "#",
  },
  {
    image: W4,
    title: "Intelligent Adaptive Learning Platform",
    description:
      "Knowledge Mapping is widely applied in the education field, which brings a brand-new direction for education. Based on the school-based structured knowledge map, school can utilize the e-learning resources more efficiently. Knowledge Mapping allow students to have long-term targeted practice to improve their performance with AI assistance.",
    link: "#",
  },
];
