"use client";
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MainCharactor from '@/essets/mainCharactor.png';
import SearchIconSVG from '@/essets/searchSub.svg'
import './mainBanner.scss';

export default function MainBanner() {
    const { data: session, status } = useSession();
    if (status === 'authenticated') {
        console.log(session)
    }
    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.length > 1) {
            router.push(`/search?key=${query}`);
        }
    }

    return (
        <section className="mainBanner">
            <div className="contents">
                <div className='text'>
                    <p>
                        <span className='mainColor'>{status === 'authenticated' ? session.user.name : '비회원'}</span>님&nbsp;어서오세요!
                    </p>
                    <p className='textMain'>오늘은&nbsp;
                        <span className='mainColor box'>리액트 초급</span>
                        을<br></br>공부해볼까요?
                    </p>
                </div>
                <form onSubmit={handleSubmit} id="searchInputSub">
                    <Image
                        src={SearchIconSVG}
                        alt="검색 아이콘"
                        width={20}
                        height={20}
                    />
                    <input
                        name="search input form"
                        placeholder="2글자 이상 검색해주세요"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </form>
            </div>
            <Image
                className='bg'
                src={MainCharactor}
                alt='charactor Image'
                width={333} height={234}
            ></Image>
        </section>
    )
}