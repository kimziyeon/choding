'use client'

import { useRef, useState } from 'react';
import "./QnA.scss";
import allPage from './allPage';
import dynamic from 'next/dynamic';

const AllPage = dynamic(() => import('./allPage'), { ssr: false });

export default function QnA() {
    return (
    <section id="QnAMain" className="contPadding">
        <div className="QnAHeader">
            <button>전체 질문</button>
            <button>내 질문</button>
        </div>
        <AllPage/>
    </section>
    );
}