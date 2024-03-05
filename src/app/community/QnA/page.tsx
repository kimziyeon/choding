'use client'

import { useRef, useState } from 'react';
import "./QnA.scss";
import dynamic from 'next/dynamic';

const AllPage = dynamic(() => import('./allPage'), { ssr: false });
const MyPage = dynamic(() => import('./myPage'), { ssr: false });

export default function QnA() {
    const [selectedPage, setSelectedPage] = useState('all'); // 'all' 페이지를 기본값으로 설정

    const handleAllPageClick = () => {
        setSelectedPage('all');
    };

    const handleMyPageClick = () => {
        setSelectedPage('my');
    };

    return (
        <section id="QnAMain" className="contPadding">
            <div className="QnAHeader">
                <button className={selectedPage === 'all' ? 'active' : ''} onClick={handleAllPageClick}>전체 질문</button>
                <button className={selectedPage === 'my' ? 'active' : ''} onClick={handleMyPageClick}>내 질문</button>
            </div>
            {selectedPage === 'all' && <AllPage />}
            {selectedPage === 'my' && <MyPage />}
        </section>
    );
}

