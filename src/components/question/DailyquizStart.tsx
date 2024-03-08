"use client";

import { useQuestion } from '@/context/questionStore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';



export default function DailyquizStart({ startTest }) {

    const { quiz, isOpenFunc } = useQuestion();

    const router = useRouter();
    function loginGoGo() {
        isOpenFunc({ isOpen: false, isTest: false })
        router.push('/login');
    }

    const { data: session, status } = useSession();


    return (
        <div>
            <div className='popUp04'>
                <div className='popUpContents'>
                    <h3>오늘의 퀴즈</h3>
                    <div className='popUpSubTitle'>


                        {status === 'authenticated' ?
                            <div className='nameTitle'><span>{session.user.name}</span>님<br></br>퀴즈풀고 레벨업 해보세요!</div> :
                            <div className='noNameTitle'>로그인 후 이용이 가능합니다.</div>}

                        <div className='tagBoxOX'>
                            <span>#1포인트</span>
                            <span>레벨업</span>
                        </div>
                    </div>
                    {status === 'authenticated' ?
                        <button className='popUpBtn'
                            onClick={() => { startTest(2) }}>퀴즈 풀러가기</button> :
                        <button className='popUpBtn' onClick={loginGoGo}>로그인 하러가기</button>

                    }
                </div>
            </div>
        </div>
    )
}