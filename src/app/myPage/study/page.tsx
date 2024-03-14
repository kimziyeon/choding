"use client";

import '../mypage.scss';
import Image from 'next/image';
import Link from 'next/link';
import arrowLeftGrayDark from '@/essets/arrowLeftGrayDark.svg';
import MyStudyEmpty from './commponents/Empty';
import MyStudyContents from './commponents/Contents';


export default function studyPage() {
    return (

        <section className="studyPage">
            {/* 마이페이지 / 책갈피 */}
            <div className='studyTitle'>
                <p>
                    <Image src={arrowLeftGrayDark} alt='arrowRight' />
                </p>
                <h3>내 책갈피</h3>
            </div>

            <MyStudyContents />
        </section>
    );
}