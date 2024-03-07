"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/essets/LOGO.svg';
import Menu from '@/essets/menu.svg';
import User from '@/essets/user.svg';
import Close from '@/essets/close.svg';
import ArrowRight from '@/essets/arrowRight.svg';
import ListComponent from './List';
import { useSession } from 'next-auth/react';
import './headerMenu.scss';

export default function HeaderMenu({ active, setActive, onClickMenu }: { active: boolean; setActive: (value: boolean) => void, onClickMenu: (value: boolean) => void }) {
    const { data: session, status } = useSession();

    return (
        <div id="HeaderMenu" className={active ? 'active' : ''}>
            <div className='headerBG'>
                <div className='headerTop'>
                    <button>
                        <Image
                            src={Close}
                            alt='close menu'
                            width={30} height={30}
                            onClick={onClickMenu}
                        ></Image>
                    </button>
                    <div className='loginCont'>
                        <Link href="/login" onClick={onClickMenu}>
                            {status === 'authenticated' ? <b>{session.user.name}</b> : <b>로그인 해주세요</b>}
                            <Image
                                src={ArrowRight}
                                alt='arrow image'
                                width={20} height={20}
                            ></Image></Link>
                    </div>
                    <ul className='headerMenuGroup'>
                        <li>
                            <h3>교육</h3>
                            <ListComponent
                                options={['홈', '전체 검색', '오늘의 퀴즈']}
                                href={['/', '/search', '/question']}
                                onClickMenu={onClickMenu}
                            />
                        </li>
                        <li>
                            <h3>커뮤니티</h3>
                            <ListComponent
                                options={['홈', 'Q&A', '내 프로젝트']}
                                href={['/community', '/community/QnA', '/community/myProject']}
                                onClickMenu={onClickMenu}
                            />
                        </li>
                    </ul>
                </div>
                <div className='headerBottom'>
                    <Link href="/signUp" onClick={onClickMenu} className='signUp'>회원가입</Link>
                </div>
            </div>
        </div>
    )
}