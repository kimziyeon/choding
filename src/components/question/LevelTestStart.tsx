"use client";

import { useSession } from 'next-auth/react';



export default function LevelTestStart({ startTest }) {

    const { data: session, status } = useSession();

    return (
        <div>
            <div className='popUp01'>
                <div className='popUpContents'>
                    <h3>레벨 테스트</h3>
                    <div className='popUpSubTitle'>

                        {status === 'authenticated' ?
                            <div className='nameTitle'><span>{session.user.name}</span>님에게 더 잘 맞는<br></br>강의를 추천해 드릴께요</div> :
                            <div className='noNameTitle'>회원가입하면<br></br>맞춤 강의를 추천해드려요!</div>}

                        <div className='tagBox'>
                            <span>#10초</span>
                            <span>#OX퀴즈</span>
                        </div>
                    </div>
                    <button className='popUpBtn'
                        onClick={() => { startTest(2) }}
                    >테스트 시작하기</button>
                </div>
            </div>
        </div>

    )
}