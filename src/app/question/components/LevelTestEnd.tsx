"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import chocho from '@/essets/charactor/CHO.svg';

export default function LevelTestEnd() {



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
                        &nbsp;님의 총 점수는 &nbsp;점 입니다.
                        <div className='lvBox'>
                            <span>Lv.&nbsp;</span>
                        </div>
                        <div>
                            로그인을 통해 강의를 추천해드림
                        </div>
                    </div>
                    <button className='popUpBtn'>
                        로그인 하러가기</button>
                </div>
            </div>
        </div>
    )
}