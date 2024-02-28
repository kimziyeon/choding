"use client";

import { useState } from 'react';
import Image from 'next/image';
import Close from '@/essets/close.svg';
import './question.scss';
import LevelTestStart from './components/LevelTestStart';
import LevelTest from './components/LevelTest';
import LevelTestEnd from './components/LevelTestEnd';


export default function UserQuestion() {

    const [isOpen, setIsOpen] = useState(true);
    const [isTest, setIsTest] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleTestStart = () => {
        setIsTest(true)
    }

    return (
        <section className='question'>
            {isOpen && (

                <div className='popUpQues'>
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

                        {/* <LevelTestStart /> */}
                        {/* <LevelTest /> */}
                        {/* <LevelTestEnd /> */}

                        {isTest ? <LevelTest /> : <LevelTestStart startTest={handleTestStart} />}
                    </div>
                </div>

            )}

        </section>
    );
}
