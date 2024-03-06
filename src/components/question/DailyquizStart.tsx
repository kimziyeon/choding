"use client";


export default function DailyquizStart({ startTest }) {

    return (
        <div>
            <div className='popUp04'>
                <div className='popUpContents'>
                    <h3>오늘의 퀴즈</h3>
                    <div className='popUpSubTitle'>
                        &nbsp;님<br></br>
                        퀴즈풀고 레벨업 해보세요!
                        <div className='tagBoxOX'>
                            <span>#1포인트</span>
                            <span>레벨업</span>
                        </div>
                    </div>
                    <button className='popUpBtn'
                        onClick={() => { startTest(2) }}>퀴즈 풀러가기</button>
                </div>
            </div>
        </div>
    )
}