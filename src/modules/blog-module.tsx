import Image from 'next/image';
import React from 'react';
import { Container } from '../constant/imports';
import { Post1 } from '../../public/images/imports';
import {Blog_Articles} from '../components/imports';

function Blog_Module() {
    return (
        <>
            <section className='px-4 mianbg flex flex-col items-center justify-center pt-36 md:pt-[87px]'>
                <Container>
                    <div className='my-16'>
                        <h3 className='md:text-[48px] md:leading-[57px] text-[36px] leading-[48px] font-bold Urbanist text-center mb-3'>Read more</h3>
                        <p className='md:text-[18px] md:leading-[21px] text-[16px] leading-[21px] font-normal Urbanist text-center'>
                            You may also be interested in this.
                        </p>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-16 items-center mb-24'>
                        <div className=''>
                            <h2 className='text-[#1D2130] md:text-[48px] md:leading-[57px] text-[36px] leading-[40px] font-bold Urbanist mb-6'>
                                New invoicing features to help you get paid faster
                            </h2>
                            <p className='text-[#6D6E76] md:text-[16px] md:leading-[24px] text-[16px] leading-[21px] font-normal Urbanist mb-8'>
                                Over the past few months, we’ve added several new features to SaaS invoicing to help any business get paid faster and streamline their collection workflows.
                            </p>
                            <p className='text-[#1D2130] md:text-[16px] md:leading-[24px] text-[1spx] leading-[21px] font-medium Urbanist'>
                                Luke Matthews l  November 8, 2021
                            </p>
                        </div>
                        <div>
                            <Image src={Post1} alt="" />
                        </div>
                    </div>
                </Container>
            </section>
            <section className='py-14'>
                <Container>
                    <div className=''>
                        <h3 className='md:text-[48px] md:leading-[57px] text-[36px] leading-[48px] font-bold Urbanist text-center mb-3'>
                            Hot articles
                        </h3>
                    </div>
                </Container>
            </section>
            <section className='pb-14'>
                <Container>
                    <Blog_Articles />
                </Container>
            </section>
        </>
    )
}

export default Blog_Module