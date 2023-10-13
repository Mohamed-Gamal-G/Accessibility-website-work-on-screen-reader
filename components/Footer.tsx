import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function Footer() {
    return (
        <div className='footer'>
            <div className="items pt-20 ml-24">
                <div className="item pb-32" >
                    <h3>Get Therapy</h3>
                    <div className="content mt-1 mb-7">
                        <span>
                            Our locations:
                        </span>
                        <li>Ohio</li>
                        <li>Colorado</li>
                    </div>
                    <Link className='footerRadiusBtoom text-lg font-bold leading-7 tracking-normal text-left' href={"/"}>Virtual Waiting Room</Link>
                </div>
                <div className="item pb-32" >
                    <h3>Services</h3>
                    <div className="content mt-1 mb-7">
                        <li className='list-none'>Individual Counseling</li>
                        <li className='list-none'>Couples Counseling</li>
                        <li className='list-none'>Dialectical Behavior Therapy</li>
                        <li className='list-none'>Eye Movement Desensitization</li>
                        <li className='list-none'>Peer Support</li>
                        <li className='list-none'>Warmline</li>
                        <li className='list-none'>Psychiatry</li>
                    </div>
                    <Link className='footerRadiusBtoom text-lg font-bold leading-7 tracking-normal text-left' href={"/"}>Virtual Waiting Room</Link>
                </div>
                <div className="item pb-32" >
                    <h3>For Providers</h3>
                    <div className="content mt-1 mb-7">
                        <li className='list-none'>Open roles</li>
                        <li className='list-none'>Mindfully Academy CEUs</li>
                        <li className='list-none'>Referrals</li>
                    </div>
                </div>
                <div className="item pb-32" >
                    <h3>For Partners</h3>
                    <div className="content mt-1 mb-7">
                        <li className='list-none'>School Programs</li>
                    </div>
                </div>
                <div className="item pb-32" >
                    <h3>More</h3>
                    <div className="content mt-1 mb-7">
                        <li className='list-none'>About Us</li>
                        <li className='list-none'>Resources</li>
                        <li className='list-none'>Blog</li>
                        <li className='list-none'>Client Portal</li>
                    </div>
                </div>
                <div className="item pb-32" >
                    <Image className='' src="/Logo.png" alt="LogoImg" width={194} height={40} />
                    <div className="content mt-1 mb-7">
                        <li className='list-none'><span className='text-white'>Phone:</span> 888-830-0347</li>
                        <li className='list-none'><span className='text-white'> Fax:</span> 513-939-0310</li>
                        <li className='list-none'>info@mindfully.com</li>
                        <div className="linsk flex mt-6">
                            <Image className='ml-2' src="/Vector.png" alt="" width={32} height={32} />
                            <Image className='ml-2' src="/social-instagram-white.png" alt="" width={32} height={32} />
                            <Image className='ml-2' src="/social-linkedin-white.png" alt="" width={32} height={32} />
                        </div>
                        <Image className='mt-6' src="/Store Badges.png" alt="" width={232} height={35} />
                    </div>
                </div>
            </div>
        </div>
    )
}