import Container from "@/constant/Container";
import Image from "next/image";
import React from "react";

const Giftcard = () => {
  return (
    <section className='py-20 bg-no-repeat bg-cover bg-[url("../../public/images/giftard-bg.png")]'>
      <Container>
        <div className="grid md:grid-cols-2 items-center">
          {/* Redeem Gift Card */}
          <div>
            <h3 className="sub-heading text-main">Redeem Gift Card</h3>
            <p className="max-w-[320px] mt-4">
              Redeem your gift card here to access our wide range of E-books
              available!! <br />
              <br /> Terms and Conditions apply.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <form>
              <div>
                <label className="block mb-2 text-sm text-gray-900 font-semibold">
                  <span className="text-red-600 text-lg mr-1">*</span>Redeem
                  Code:
                </label>
                <input
                  type="text"
                  className="w-full p-4 input"
                  placeholder="Enter the 16 digit code..."
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-900 font-semibold">
                  <span className="text-red-600 text-lg mr-1">*</span>Account:{" "}
                </label>
                <input
                  type="text"
                  className="w-full p-4 input"
                  placeholder="Enter your email address..."
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-900 font-semibold">
                  <span className="text-red-600 text-lg mr-1">*</span>Password:{" "}
                </label>
                <input
                  type="text"
                  className="w-full p-4 input"
                  placeholder="Enter your password..."
                  required
                />
              </div>
              <button className="button w-full mt-4 p-3">Redeem</button>
              <button className="button w-full mt-4 p-3 bg-transparent text-main border-main border hover:bg-main hover:text-white">
                I don’t have an account
              </button>
            </form>
          </div>
        </div>
        {/* Download ExamHero App  */}
        <div className="mt-28 md:mt-60 md:mb-40 mb-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="sub-heading text-main">Download ExamHero App </h3>
              <Image src="/svg/apple-btn.svg" className="mt-10 hover:shadow-lg rounded-[28px] cursor-pointer hover:scale-105 transition-all duration-200" alt="apple" width={400} height={141}/>
              <Image src="/svg/andriod-btn.svg" className="mt-8 hover:shadow-lg rounded-[28px] cursor-pointer hover:scale-105 transition-all duration-200" alt="apple" width={400} height={141}/>
            </div>
            <div>
              <form>
                <div className="flex flex-col justify-center items-center ">
                <h3 className="sub-heading text-center text-main text-3xl">
                    Subscribe Us
                  </h3>
                  <p className="max-w-[320px] text-center mt-4">
                    Sign in to subscribe now to get the latest discounts and
                    product news!
                  </p>
                  <input
                    type="text"
                    className="w-full p-4 mt-6 input"
                    placeholder="email address.."
                    required
                  />
                   <button className="button mt-6 p-3 px-10 items-center">Subscribe</button>
                </div>
               
                
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Giftcard;
