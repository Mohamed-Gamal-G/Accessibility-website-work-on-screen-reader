import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    const user = false
    return (
        <div className='h-24 text-white-500 p-4 flex items-center justify-start md:h-24 Nav'>{/* lg:px-20 xl:px-40 */}
            {/* Logo */}
            <div className='text-xl md:font-bold flex-1 md:text-center Logo'>
                <Link href="/">
                    <Image className='ml-20 logoimg' src="/Logo.png" alt="LogoImg" width={194} height={40} />
                </Link>
            </div>
            <div className='hidden xl:flex Links mb-8'>
                <div className='link dropdownHover cursor-pointer'>Get Therapy
                    <div className='Dropdown flex-col justify-center items-center absolute hidden'>
                        <Link href="/">How We Help</Link>
                        <Link href="/">Get Matched With a Therapist</Link>
                        <Link href="/">Our Locations</Link>
                    </div>
                </div>
                <div className='link dropdownHover cursor-pointer'>Services
                    <div className='Dropdown flex-col justify-center items-center absolute hidden'>
                        <Link href="/">Individual Counseling</Link>
                        <Link href="/">Couples Counseling</Link>
                        <Link href="/">DBT®</Link>
                        <Link href="/">EMDR</Link>
                        <Link href="/">Peer Support</Link>
                        <Link href="/">Warmline</Link>
                        <Link href="/">Psychiatry</Link>
                    </div>
                </div>
                <div className='link dropdownHover cursor-pointer'>For Providers
                    <div className='Dropdown flex-col justify-center items-center absolute hidden'>
                        <Link href="/">Open Roles</Link>
                        <Link href="/">Mindfully Academy</Link>
                        <Link href="/">Refer a Friend</Link>
                    </div>
                </div>
                <div className='link dropdownHover cursor-pointer' >For Partners
                    <div className='Dropdown flex-col justify-center items-center absolute hidden'>
                        <Link href="/">School Services</Link>
                    </div>
                </div>
                <Link className='link Find-Care' href="/">Find Care</Link>
            </div>
            {/* Mobile Menu */}
            <div className='xl:hidden'>
                <Menu />
            </div>
        </div>
    )
}
export default Navbar