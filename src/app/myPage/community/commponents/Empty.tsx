"use client";

import '../../mypage.scss';
import Image from 'next/image';
import empty from '@/essets/empty.png';


export default function MyCommunityEmpty() {
    return (
        <div className='commuEmpty'>
            <Image src={empty} alt='empty'>
            </Image>
        </div>
    )
}