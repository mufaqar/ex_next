import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Company from '../../public/images/company.png';
import { Container } from '../constant/imports';

function CompanyBanner() {
    return (
        <section className='px-4 mianbg flex flex-col items-center justify-center pt-36 md:pt-[87px]'>
            <Container>
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-10 items-center mt-16'>
                    <div>
                        <Image src={Company} alt="" />
                    </div>
                    <div>
                        <div className='mb-20'>
                            <h3 className='md:text-[48px] md:leading-[57px] text-[36px] leading-[48px] font-bold Urbanist'>Events</h3>
                            <h1 className='text-main md:text-[80px] md:leading-[96px] text-[52px] leading-[50px] font-bold Urbanist'>E-Mock Test Giveaway Program</h1>
                        </div>
                        <Link href="#" className='text-main bg-white border border-main md:text-[28px] md:leading-[33px] font-bold Urbanist px-6 py-2 rounded-[16px] inline-flex float-right'>
                            Learn more
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CompanyBanner