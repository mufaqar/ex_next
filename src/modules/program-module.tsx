import Image from 'next/image';
import { Program1, Program2, ProgramHero } from 'public/images/imports';
import React from 'react';
import { Container } from '../constant/imports';
import Link from 'next/link';

function Program_Module() {
    return (
        <>
            <section className='mianbg flex flex-col items-center justify-center pt-36 md:pt-[87px]'>
                <Container>
                    <div className='my-16'>
                        <h2 className='text-[#1D2130] md:text-[48px] md:leading-[57px] text-[36px] leading-[40px] font-bold Urbanist text-center mb-6'>
                            E-book and Mock Test Giveaway Program
                        </h2>
                    </div>
                    <div className='items-center md:mb-24 '>
                        <div className='relative h-[318px] rounded-[17px]'>
                            <Image src={ProgramHero} alt="" className='object-cover h-full wfull rounded-[17px]' />
                            <div className='absolute top-[40%] left-0 right-0'>
                                <h1 className='text-white md:text-[96px] md:leading-[115.2px] text-[36px] leading-[40px] font-bold Urbanist text-center'>
                                    電子模擬考試贈送計劃
                                </h1>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='py-14 mianbg'>

                <Container>
                    <div className='bg-white/60 md:p-12 p-6 rounded-[17px] mb-16'>
                        <div className={`flex flex-col-reverse gap-16 items-center mb-20 md:flex-row`}>
                            <div className='md:w-1/2 w-full'>
                                <h2 className='text-black md:text-[48px] md:leading-[57px] text-[28px] leading-[40px] font-bold Urbanist mb-4'>
                                    Background
                                </h2>
                                <p className='text-black md:text-[24px] md:leading-[28.8px] text-[16px] leading-[21px] font-medium Urbanist '>
                                    Under the influence of the new coronavirus pneumonia epidemic, students had to stay at home due to the suspension of classes. During the suspension of classes, students' preparation for the JAE will be affected, or they may miss the best conditions for admission to universities. In order to assist Macao students to prepare for further education examinations, the Good Time Xian Ju Club and experts and scholars from the education circles in Macao and Beijing jointly organized an e-book and mock exam donation plan, and wrote e-books and mock exams, which were given to schools for free.
                                </p>
                            </div>
                            <div className='md:w-1/2 w-full'>
                                <Image src={Program1} alt="" />
                            </div>
                        </div>
                        <div className={`flex flex-col-reverse gap-16 items-center mb-20 md:flex-row-reverse`}>
                            <div className='md:w-1/2 w-full'>
                                <h2 className='text-black md:text-[48px] md:leading-[57px] text-[28px] leading-[40px] font-bold Urbanist mb-4'>
                                    Social feedback
                                </h2>
                                <p className='text-black md:text-[24px] md:leading-[28.8px] text-[16px] leading-[21px] font-medium Urbanist '>
                                    The first e-book and mock exam donation program has achieved satisfactory results and received an overwhelming response. A total of 26 secondary schools participated, accounting for more than 50% of the total number of secondary schools in Macau. In the end, nearly 2,000 examination papers were marked and corrected, benefiting nearly 1,600 Macao students. Considering that there are an average of 4,700 candidates in Macao each year, the book donation program has assisted about 35% of the candidates in Macao. The project has also been reported and supported by the Mainland and Macau media. More than 40 secondary schools in Hong Kong and Macau participated in the second e-book and mock exam donation program, assisting nearly 4,000 students in preparing for the exam.
                                </p>
                            </div>
                            <div className='md:w-1/2 w-full'>
                                <Image src={Program2} alt="" />
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-10 items-center'>
                            <div>
                                <h2 className='text-main md:text-[57px] md:leading-[105px] text-[32px] leading-[38px] font-bold Urbanist mb-5'>
                                    Want to Know More?
                                </h2>
                                <p className='text-black md:text-[26px] md:leading-[28.6px] text-[18px] leading-[24px] font-semibold Urbanist '>
                                    Different schools/organizations are welcome to join the "E-Book and Mock Test Donation Scheme", please refer to the following information for details
                                </p>
                            </div>
                            <div>
                                <Link href="#" className='text-white bg-main border border-main hover:bg-main/80 hover:border-main/80 md:text-[49px] md:leading-[90px] text-[26px] leading-[42px] font-bold Urbanist px-3 py-2 rounded-[26px] text-center block mb-16'>
                                    Download Free Booklet
                                </Link>
                                <p className='text-black w-full md:text-[26px] md:leading-[28.6px] text-[18px] leading-[24px] font-semibold Urbanist md:text-right mt-16'>
                                    If you have any questions,
                                    please call us: (853) xxxx xxxx or email xxxxxx@xxxxx.com
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Program_Module