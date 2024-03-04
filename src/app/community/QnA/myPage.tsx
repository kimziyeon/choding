'use client'

import { useRef, useState } from 'react';
import Link from 'next/link';
import "./QnA.scss";

export default function myPage() {
    return (
    <div id="QnAMain" className='myPageMain'>
        <Link className='writeBtn' href='./QnA/write'>글 쓰기</Link>
        <div className='MyPageContainer'>
            <div className='noWrite'>
                <div className='noWriteImg'></div>
                <h3>아직 질문글이 없군요!</h3>
                <Link href='./QnA/write'>새로운 질문 쓰기!</Link>
            </div>
        </div>
    </div>
    );
}