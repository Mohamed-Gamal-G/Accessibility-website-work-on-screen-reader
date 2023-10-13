"use client";
import Image from 'next/image'
import Link from 'next/link'
import react, { useState } from 'react';
const Links = [
    { id: 1, title: "Get Therapy", url: "/" },
    { id: 2, title: "For Providers", url: "/" },
    { id: 3, title: "For Partners", url: "/" },
];
const Menu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            {!open ? (<Image className='cursor-pointer' src="/Menu.png" alt='' width={40} height={40} onClick={() => setOpen(true)} />
            ) : (
                <Image className='cursor-pointer' src="/Menu (1).png" alt='' width={40} height={40} onClick={() => setOpen(false)} />
            )}
            {open && (<div className='menu absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
                {Links.map(item => (
                    <Link className='meuuLlink' href={item.url} key={item.id} onClick={() => setOpen(false)}>{item.title}</Link>
                ))}
                <div className='links flex flex-col'>
                    <Link className='Find-Care' href={"/"} >Find Care</Link>
                </div>
            </div>)}
        </div>
    )
}
export default Menu