"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Close from '@/essets/close.svg';
import './question.scss';

import LevelTest from './LevelTest';
import Dailyquiz from './Dailyquiz';
import { useQuestion } from '@/context/questionStore';



export default function UserQuestion() {

    const { quiz, isOpenFunc } = useQuestion();
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        isOpenFunc({ isOpen: false, isTest: false });
    };

    const oneDayHandleClose = () => {
        isOpenFunc({ isOpen: false, isTest: false });
        localStorage.setItem('popupClosedTime', String(new Date().getTime()));
    }


    useEffect(() => {
        const lastClosedTime = localStorage.getItem('popupClosedTime');
        if (lastClosedTime) {
            const oneDay = 24 * 60 * 60 * 1000; // milliseconds
            const currentTime = new Date().getTime();
            const timeDifference = currentTime - Number(lastClosedTime);


            if (timeDifference < oneDay) {
                isOpenFunc({ isOpen: false, isTest: false });
                console.log(isOpen)
            } else {
                isOpenFunc({ isOpen: true, isTest: false });
            }
        }
    }, []);



    if (!quiz.isOpen) return null;



    return (
        <>

            <section className={`question ${quiz.isOpen ? 'active' : ''}`}>
                <div className='popUpBg'>
                    <button className='popUpX'
                        onClick={handleClose}>
                        <Image
                            className='close'
                            src={Close}
                            alt='close Image'
                            width={25} height={25}
                        ></Image>
                    </button>

                    {
                        quiz.isTest ? <LevelTest /> : <Dailyquiz />
                    }

                </div>

                <label className='popUpCloseBtn' onClick={oneDayHandleClose}>
                    하루동안 열지 않기
                </label>
            </section >
        </>

    );
}

