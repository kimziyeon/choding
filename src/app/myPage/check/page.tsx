"use client";

import '../mypage.scss';
import Image from 'next/image';
import Link from 'next/link';
import arrowLeftGrayDark from '@/essets/arrowLeftGrayDark.svg';


export default function MyCheck() {
    return (
        <section className='checkPage'>
            {/* 마이페이지 / 출석체크 */}
            <div className='checkTitle'>
                <p>
                    <Image src={arrowLeftGrayDark} alt='arrowRight' />
                </p>
                <h3>출석체크</h3>
            </div>

        </section>
    );
}