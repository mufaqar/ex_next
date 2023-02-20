import { Container } from '@/constant/imports';
import Image from 'next/image';
import React, { useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Slider from 'react-slick';
import { User } from '../../public/images/imports';

interface IFeedback {
  review: string;
  user: {
    name: string;
    designation: string;
    image: any;
  };
  rating: number;
}

const Feedback = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const ref = useRef<any>(null);
  const handleNextSlide = () => {
    ref.current.slickNext();
  };

  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };

  return (
    <section className="feedbackBg mt-4 py-28">
      <Container small={true}>
        <div className="md:flex gap-10 lg:gap-20 ">
          <div className="bg-white relative rounded-md p-10 md:w-[60%]">
            <Slider {...settings} ref={ref}>
              {Feedbackdata.map((review, idx) => {
                var star:number[] = [];
                for (let i = 0; i < review.rating; i++) {
                  star.push(i);
                }

                return (
                  <div key={idx}>
                    <div className="flex gap-1 items-center">
                      {star.map((st, i) => (
                        <FaStar color="#FFA41B" size={22} key={i} />
                      ))}
                    </div>
                    <p className="mt-5 mb-5 text-gray-400">{review.review}</p>
                    <div className="flex items-center gap-4 mt-8">
                      <Image
                        src={review.user?.image.src}
                        alt={review.user.name}
                        width={60}
                        height={60}
                      />
                      <div>
                        <h4 className="font-bold text-base">
                          {review.user.name}
                        </h4>
                        <p className="text-main">{review.user.designation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div className="flex absolute bottom-10 right-10 gap-3">
              <button
                className="bg-main p-2 text-white font-bold text-xl"
                onClick={handlePrevSlide}
              >
                <FiArrowLeft />
              </button>
              <button
                className="bg-main p-2 text-white font-bold text-xl"
                onClick={handleNextSlide}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <div className="md:w-[40%] md:mt-0 mt-10">
            <span className="uppercase text-main font-semibold tracking-wide">
              TEstimonials
            </span>
            <h3 className="sub-heading text-3xl mt-2 text-main">
              Students Feedback
            </h3>
            <p className="mt-4 text-main max-w-xs">
              Improve knowledge level comprehensively and effectively.
            </p>
            <p className="uppercase text-main font-bold mt-5">
              People Love To Learn With Us
            </p>
            <div className="mt-6 flex gap-6">
              <div className="max-w-[160px]">
                <h4 className="font-semibold text-2xl">90%</h4>
                <p className="text-main font-light mt-2">
                  Students complete course successfully{' '}
                </p>
              </div>
              <div className="max-w-[160px]">
                <h4 className="font-semibold text-2xl">9/10</h4>
                <p className="text-main font-light mt-2">
                  Users reported better learning outcomes{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Feedback;

const Feedbackdata = [
  {
    review:
      '“I love this way of studying Maths! ExamHero have plenty of resources, You can read the notes and test your mastery of it by doing questions. And the knowledge point recommendation tell me the next step I should take, just a awesome experience!”',
    user: {
      name: 'Maria Wang',
      designation: 'Student',
      image: User,
    },
    rating: 5,
  },
  {
    review:
      '“I love this way of studying Maths! ExamHero have plenty of resources, You can read the notes and test your mastery of it by doing questions. And the knowledge point recommendation tell me the next step I should take, just a awesome experience!”',
    user: {
      name: 'David',
      designation: 'Student',
      image: User,
    },
    rating: 5,
  },
  {
    review:
      '“I love this way of studying Maths! ExamHero have plenty of resources, You can read the notes and test your mastery of it by doing questions. And the knowledge point recommendation tell me the next step I should take, just a awesome experience!”',
    user: {
      name: 'Jimmy Small',
      designation: 'Student',
      image: User,
    },
    rating: 4,
  },
];
