import Image from 'next/image';
import React from 'react';

function Program({title, content, Image_url, custom_class}) {
    return (
        <div className={`flex flex-col-reverse gap-16 items-center mb-20 ${custom_class}`}>
            <div className='md:w-1/2 w-full'>
                <h2 className='text-black md:text-[48px] md:leading-[57px] text-[28px] leading-[40px] font-bold Urbanist mb-4'>
                    {title}
                </h2>
                <p className='text-black md:text-[24px] md:leading-[28.8px] text-[16px] leading-[21px] font-medium Urbanist '>
                    {content}
                </p>
            </div>
            <div className='md:w-1/2 w-full'>
                <Image src={Image_url} alt="" />
            </div>
        </div>
    )
}

export default Program