"use client";

import '../../mypage.scss';
import Image from 'next/image';
import empty from '@/essets/empty.svg';


export default function MyCommunityEmpty() {
    return (
        <div className='commuEmpty'>

            <Image src={empty} alt='empty'></Image>
            <p>작성한 글이 없습니다.</p>
            <div>프로젝트 작성하기</div>
        </div>
    )
}