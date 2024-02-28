"use client";

import Image from 'next/image';
import Close from '@/essets/close.svg';
import './question.scss';
import LevelTestStart from './components/LevelTestStart';
import LevelTest from './components/LevelTest';
import LevelTestEnd from './components/LevelTestEnd';
import { useState } from 'react';


export default function UserQuestion() {

    const [isOpen, setIsOpen] = useState(true);
    const handleClose = () => {
        setIsOpen(false);
    };

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
                        <LevelTestEnd />
                    </div>
                </div>

            )}

        </section>
    );
}
