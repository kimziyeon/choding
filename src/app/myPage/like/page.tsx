"use client";

import '../mypage.scss';
import Image from 'next/image';
import Link from 'next/link';
import arrowLeftGrayDark from '@/essets/arrowLeftGrayDark.svg';
import MyLikeEmpty from './commponents/Empty';
import MyLikeContents from './commponents/Contents';


export default function MyLike() {
    return (

        <section className="likePage">
            {/* 마이페이지 / 책갈피 */}
            <div className='likeTitle'>
                <p>
                    <Image src={arrowLeftGrayDark} alt='arrowRight' />
                </p>
                <h3>내 책갈피</h3>
            </div>

            <MyLikeContents />
            {/* <MyLikeEmpty /> */}
        </section>
    );
}