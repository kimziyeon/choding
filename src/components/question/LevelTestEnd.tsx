"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import chocho from '@/essets/charactor/CHO.svg';
import { useRouter } from 'next/navigation'
import { useQuestion } from '@/context/questionStore';
import { useSession } from 'next-auth/react';

export default function LevelTestEnd({ score }) {

    const { data: session, status } = useSession();
    const router = useRouter();
    const { isOpenFunc } = useQuestion();

    function quizEndLogin() {
        isOpenFunc({ isOpen: false, isTest: false })
        router.push('/login');
    }

    function quizEndSearch() {
        isOpenFunc({ isOpen: false, isTest: false })
        router.push('/search');
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

                        {status === 'authenticated' ?
                            <div className='scoreBox'>
                                <span>{session.user.name}</span>님의<br></br>총 점수는 <span>{score}</span>점 입니다.</div> :
                            <div className='noNameTitle'>로그인 시<br></br>다양한 강의 정보를 추천해드립니다.</div>}


                        <div className='lvBox'>
                            <span>Lv.{levelValue()}</span>
                        </div>

                    </div>

                    {status === 'authenticated' ?
                        <button className='popUpBtn' onClick={quizEndSearch}>
                            공부 하러가기</button>
                        :
                        <button className='popUpBtn' onClick={quizEndLogin}>
                            로그인 하러가기</button>
                    }

                </div>
            </div>
        </div>
    )
}