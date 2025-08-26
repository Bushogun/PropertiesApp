import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './navbar.css'

export const Navbar = () => {

    return (
        <nav className='navbar'>
            <Link href="/">
                <Image
                    src="/crab-image.png"
                    alt="Crab Space Invaders"
                    title="Logo FakeCompany"
                    width="60"
                    height="45"
                    priority={true}
                />
            </Link>
            <ul>
                <li>
                    <Link href="/registry-owner">
                        Registry Owner
                    </Link>
                </li>
                <li>
                    <Link href="/properties">
                        Properties
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
