"use client";

{/* 마이페이지 / 커뮤니티 */ }
import '../mypage.scss';
import Image from 'next/image';
import Link from 'next/link';
import arrowLeftGrayDark from '@/essets/arrowLeftGrayDark.svg';
import MyCommunityEmpty from './commponents/Empty';
import MyCommunityContents from './commponents/Contents';

export default function MyCommunity() {
    return (

        <section className='commuPage'>
            <div className='commuTitle'>
                <p>
                    <Image src={arrowLeftGrayDark} alt='arrowRight' />
                </p>
                <h3>커뮤니티</h3>
            </div>
            {/* <MyCommunityEmpty /> */}
            <MyCommunityContents />
        </section>

    );
}