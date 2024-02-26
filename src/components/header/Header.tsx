"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/essets/LOGO.svg';
import Menu from '@/essets/menu.svg';
import User from '@/essets/user.svg';
import HeaderMenu from './components/HeaderMenu';

import './header.scss';

export default function Header() {
    const [isOnHeaderMenu, setIsOnHeaderMenu] = useState(false);

    const onClickMenu = () => {
        setIsOnHeaderMenu(true);
    }

    return (
        <header id="mainHeader">
            <HeaderMenu />
            <div className='headerTOP'>
                <div className='leftSide'>
                    <Image src={Menu}
                        alt='Logo'
                        width={20}
                        height={20}
                        onClick={onClickMenu} />
                </div>
                <h1 className='titleLogo'>
                    <Link href='/' className='logo'>
                        <Image src={Logo} alt='Logo' width={50} height={25}></Image>
                    </Link>
                </h1>
                <div className='rightSide'>
                    <Link href='/question' className='signUp'>
                        <Image src={User} alt='Logo' width={50} height={25}></Image>
                    </Link>
                </div>
            </div>
            {/* <nav className='headerGNB'>
                <Link href='/community'>커뮤니티 홈</Link>
                <Link href='/community/QnA'>Q&A</Link>
                <Link href='/community/myProject'>내 프로젝트</Link>
            </nav> */}
        </header>
    );
}