import { Container } from "@/constant/imports";
import Image from "next/image";
import React from "react";

const ThankYouModule = () => {
  return (
    <main className="md:mt-[87px] registorbg py-[140px]">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Redeem Gift Card */}
          <div>
            <h3 className="sub-heading text-main">Thank you!</h3>
            <p className="max-w-[320px] mt-4 text-xl font-bold">
            Please choose your free booklet.
            </p>
            <Image
              src="/images/registor-left.png"
              alt="image"
              width={500}
              height={500}
            />
          </div>
          <div className="mt-6 md:mt-0">
               <div>
                    <div className="font-semibold text-main text-xl rounded-tr-[70px] md:text-3xl p-6 px-8  bg-white">E-Book and Mock Test Donation Scheme</div>
                    <ul className=" bg-white/70 p-6 px-8">
                         <li className="flex justify-between items-center py-6 border-b-[1px] border-main">
                              <p className="text-xl">Introduction and Application Requirements</p>
                              <button className="button font-bold p-3 px-5 rounded-2xl">Download</button>
                         </li>
                         <li className="flex justify-between items-center py-6 ">
                              <p className="text-xl">Application Form</p>
                              <button className="button font-bold p-3 px-5 rounded-2xl">Download</button>
                         </li>
                         <li><h4 className="font-semibold text-main text-xl md:text-3xl mt-10">Others</h4></li>
                         <li className="flex justify-between items-center py-6 ">
                              <p className="text-xl">School/Institution Information Change Request Form</p>
                              <button className="button font-bold p-3 px-5 rounded-2xl">Download</button>
                         </li>
                    </ul>
               </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ThankYouModule;
