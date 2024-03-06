"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import chocho from '@/essets/charactor/CHO.svg';
import { useRouter } from 'next/navigation'
import { useQuestion } from '@/context/questionStore';




export default function DailyquizEnd({ isCorrect }) {

    const router = useRouter();
    const { isOpenFunc } = useQuestion();
    function quizEnd() {
        isOpenFunc({ isOpen: false, isTest: false })
        router.push('/search');
    }


    useEffect(() => {

    }, [isCorrect])


    return (

        <div className='popUp03'>
            <div className='popUpContents'>
                <div className='popUpContentsC'>
                    <Image
                        src={chocho} alt='chocho'>
                    </Image>
                </div>
                <div className='popUpSubTitle'>

                    {isCorrect ? (
                        <>
                            <div className='valueOOO'>+1</div>
                            <div className='lvBox'>
                                <span>Lv.&nbsp;</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='valueXXX'>아쉽네요 :&#40;<br />내일 다시 도전해주세요</div>
                            <div className='lvBox'>
                                <span>Lv.&nbsp;</span>
                            </div>
                        </>
                    )}

                </div>
                <button className='popUpBtn' onClick={quizEnd}>
                    강의 검색하기</button>
            </div>
        </div>

    )
}