import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Post10, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9 } from '../../public/images/imports';

function Blog_Articles() {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 md:gap-14 gap-10'>
            {Articles.map((item, index) => (
                <div key={index} className='h-[588px] shadow-xl rounded-[10px] grid justify-between'>
                    <Image src={item.feature} alt="" className='rounded-tr-[10px] rounded-tl-[10px]' />
                    <div className='md:px-6 px-4'>
                        <h3 className='text-[#1D2130] md:text-[24px] md:leading-[33px] text-[18px] leading-[26px] font-bold Urbanist'>
                            {item.title}
                        </h3>
                        <p className='text-[#F00A0A] md:text-[16px] md:leading-[24px] text-[18px] leading-[26px] font-normal Urbanist mt-1'>
                            {item.content}
                        </p>
                        <p className='md:text-[16px] md:leading-[24px] text-[14px] leading-[26px] font-normal Urbanist mt-1'>
                            <span className='text-[#F00A0A]'>
                                {item.author}
                            </span> | <span className='text-[#1D2130]'>
                                {item.publish}
                            </span>
                        </p>
                    </div>
                    <div className='md:px-6 px-4'>
                        <Link href="#"
                            className='text-white bg-main hover:bg-main/90 md:text-[16px] md:leading-[24px] font-normal Urbanist px-3 py-1 rounded-[2px]'>
                            {item.linkTxt}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Blog_Articles

export const Articles = [
    {
        title: "Managing Rails application secrets with encrypted credentials",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        publish: "November 8, 2021",
        author: "Luke Matthews",
        linkTxt: "learn more",
        feature: Post2,
    },
    {
        title: "Managing Rails application secrets with encrypted credentials",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        publish: "November 8, 2021",
        author: "Luke Matthews",
        linkTxt: "learn more",
        feature: Post3,
    },
    {
        title: "Managing Rails application secrets with encrypted credentials",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        publish: "November 8, 2021",
        author: "Luke Matthews",
        linkTxt: "learn more",
        feature: Post4,
    },
    {
        title: "Managing Rails application secrets with encrypted credentials",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        publish: "November 8, 2021",
        author: "Luke Matthews",
        linkTxt: "learn more",
        feature: Post5,
    },
    {
        title: "Managing Rails application secrets with encrypted credentials",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        publish: "November 8, 2021",
        author: "Luke Matthews",
        linkTxt: "learn more",
        feature: Post6,
    },
    {
        title: "Managing Rails application secrets with encrypted credentials",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        publish: "November 8, 2021",
        author: "Luke Matthews",
        linkTxt: "learn more",
        feature: Post7,
    },
    {
        title: "Managing Rails application secrets with encrypted credentials",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        publish: "November 8, 2021",
        author: "Luke Matthews",
        linkTxt: "learn more",
        feature: Post8,
    },
    {
        title: "Managing Rails application secrets with encrypted credentials",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        publish: "November 8, 2021",
        author: "Luke Matthews",
        linkTxt: "learn more",
        feature: Post9,
    },
    {
        title: "Managing Rails application secrets with encrypted credentials",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        publish: "November 8, 2021",
        author: "Luke Matthews",
        linkTxt: "learn more",
        feature: Post10,
    },
]
