"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import chocho from '@/essets/charactor/CHO.svg';
import { useRouter } from 'next/navigation'
import { useQuestion } from '@/context/questionStore';

export default function LevelTestEnd({ score }) {
    const router = useRouter();
    const { isOpenFunc } = useQuestion();
    function quizEnd() {
        isOpenFunc({ isOpen: false, isTest: false })
        router.push('/login');
    }

    const levelValue = () => {
        if (score <= 2) {
            return '초딩';
        } else if (score <= 4) {
            return '중딩';
        } else if (score <= 6) {
            return '고딩';
        } else if (score <= 8) {
            return '대딩';
        } else if (score <= 10) {
            return '직딩';
        }
    }


    return (
        <div className='popUp03B'>
            <div className='popUp03'>
                <div className='popUpContents'>
                    <div className='popUpContentsC'>
                        <Image
                            src={chocho} alt='chocho'>
                        </Image>
                    </div>
                    <div className='popUpSubTitle'>
                        &nbsp;님의 총 점수는 {score}점 입니다.
                        <div className='lvBox'>
                            <span>Lv.{levelValue()}</span>
                        </div>
                        <div>
                            로그인을 통해 강의를 추천해드림
                        </div>
                    </div>
                    <button className='popUpBtn' onClick={quizEnd}>
                        로그인 하러가기</button>
                </div>
            </div>
        </div>
    )
}