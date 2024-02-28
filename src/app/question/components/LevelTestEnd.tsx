"use client";

import Image from 'next/image';
import Link from 'next/link';
import chocho from '@/essets/charactor/CHO.svg';

export default function LevelTestEnd() {
    return (

                <div className='popUp03'>
                    <div className='popUpContents'>
                        <div className='popUpContentsC'>
                            <Image
                            src={chocho}>
                            </Image>
                        </div>
                        <div className='popUpSubTitle'>
                            &nbsp;님의<br></br>
                            총 점수는 &nbsp;점 입니다.
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