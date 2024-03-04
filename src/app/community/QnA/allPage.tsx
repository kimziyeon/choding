'use client'

import { useRef, useState } from 'react';
import "./QnA.scss";

export default function allPage() {
    return (
    <section id="QnAMain" className="contPadding">
        <div className='QnAContentContainer'>
            <div className='QuestionBox'>
                <div className='QuestionText'>
                    <h2>[제목]농담농담[제목]</h2>
                    <p>질문 내용질문 내용질문 내용질문 질문 내용질문 내용질문 내용질문 질문 내용질문 내용질문 내용질문 질문 내용질문 내용질문 내용질문 질문 내용질문 내용질문 내용질문 질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용질문 내용</p>
                    <div className='QnAInfo'>
                        <p>이름</p>
                        <p>댓글 수 0</p>
                    </div>
                </div>
                <div className='QuestionImg'>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    </section>
    );
}