"use client";

import Image from 'next/image';
import Close from '@/essets/close.svg';
import './question.scss';
import LevelTestStart from './components/LevelTestStart';
import LevelTest from './components/LevelTest';
import LevelTestEnd from './components/LevelTestEnd';


export default function UserQuestion() {
    

    return (
        
        <section className='question'>
            <div className='popUpBg'>
                        <button className='popUpX'>
                            <Image
                                className='close'
                                src={Close}
                                alt='close Image'
                                width={25} height={25}
                            ></Image>
                        </button>

                        {/* <LevelTestStart/> */}
                        <LevelTest/>
                        {/* <LevelTestEnd/> */}
            </div>
        </section>
    );
}
