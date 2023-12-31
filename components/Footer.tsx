"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'


const Footer = () => {
    return (
        <footer className='flex flex-col text-blue-100 mt-5 border-t border-gray-100'>
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image src={"/logo2.png"} alt='Logo' width={180} height={18} className='object-contain' />
                    <p className="text-base text-gray-700">
                        Carhub 2023 <br />
                        All rights reserved &copy;
                    </p>
                </div>
                <div className='footer__links'>
                    {footerLinks.map((link, index) => {
                        return (
                            <div key={index} className='footer__link'>
                                <h3 className='font-bold text-primary-blue'>{link.title}</h3>
                                {link.links.map((item) => (
                                    <Link key={item.title} href={item.url} className='text-gray-500 hover:font-semibold'>{item.title}</Link>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 bg-blue-500'>
                <p>@2023 CarHub. All rights reserved</p>

                <div className="footer__copyrights-link">
                    <Link href="/" className="text-white hover:font-semibold">
                        Privacy & Policy
                    </Link>
                    <Link href="/" className="text-white hover:font-semibold">
                        Terms & Condition
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer