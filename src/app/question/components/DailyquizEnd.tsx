"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import chocho from '@/essets/charactor/CHO.svg';

export default function DailyquizEnd() {
    return (

        <div className='popUp03'>
            <div className='popUpContents'>
                <div className='popUpContentsC'>
                    <Image
                        src={chocho} alt='chocho'>
                    </Image>
                </div>
                <div className='popUpSubTitle'>
                    <div className='valueOOO'>+1</div>
                    <div className='valueXXX'>아쉽네요 :&#40;<br />
                        내일 다시 도전해주세요</div>
                    <div className='lvBox'>
                        <span>Lv.&nbsp;</span>
                    </div>
                </div>
                <button className='popUpBtn'>
                    추천 강의 보러가기</button>
            </div>
        </div>

    )
}