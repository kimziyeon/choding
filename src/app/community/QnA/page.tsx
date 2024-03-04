'use client'

import { useRef, useState } from 'react';
import "./QnA.scss";
import allPage from './allPage';
import myPage from './myPage'
import dynamic from 'next/dynamic';

const AllPage = dynamic(() => import('./allPage'), { ssr: false });
const MyPage = dynamic(() => import('./myPage'), { ssr: false });

export default function QnA() {
    return (
    <section id="QnAMain" className="contPadding">
        <div className="QnAHeader">
            <button>전체 질문</button>
            <button>내 질문</button>
        </div>
        <AllPage/>
        <MyPage/>
    </section>
    );
}