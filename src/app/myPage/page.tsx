"use client";

import './mypage.scss';
import Image from 'next/image';
import Link from 'next/link';
import heart from '../../essets/heart.svg';
import arrowRight from '@/essets/arrowRight.svg';
import { useSession } from 'next-auth/react';



export default function MyPage() {
    const { data: session, status } = useSession();

    const myImgStyle = status === 'authenticated' ? { backgroundImage: `url(${session.user.imgSrc})` } : {};


    return (

        <section className="myPageMain">

            <article className='myPageBack'>
                <article className='myPageTitle'>
                    <div className='myTitle1'>
                        {/* <span>{session.user.name}</span> */}님 어서오세요!</div>
                    <div className='myTitle2'>오늘은 <span>리액트 초급</span>을<br></br>공부해볼까요?</div>

                    <div className='myInfo'>
                        <div className='myLv'>
                            <p>레벨</p>
                            {/* <b>{session.user.level}</b> */}
                        </div>

                        <div className='myAct'>
                            <p>내 질문</p>
                            <b>1000</b>
                        </div>

                        <div className='myAct'>
                            <p>좋아요</p>
                            <b>2000</b>
                        </div>
                    </div>
                    <div className='myImg'>
                        <div style={myImgStyle}>
                        </div>
                    </div>
                </article>
            </article>

            <article className='myPageContents'>
                <div className='myTitleFlex'>
                    <h4>내 책갈피</h4>
                    <span>
                        <Link href='myPage/like'>더 보기</Link>
                        <Image
                            src={arrowRight} alt='arrowRight'
                            width={20} height={20}>
                        </Image>
                    </span>
                </div>
                <div className='likeThumb'>
                    <figure>
                        <div></div>
                        <figcaption>컨텐츠 타이틀을 ..</figcaption>
                    </figure>

                    <figure>
                        <div></div>
                        <figcaption>컨텐츠 타이틀을 ..</figcaption>
                    </figure>

                    <figure>
                        <div></div>
                        <figcaption>컨텐츠 타이틀을 ..</figcaption>
                    </figure>
                </div>
            </article>

            <article className='myPageContents'>
                <div className='myTitleFlex'>
                    <h4>커뮤니티</h4>
                    <span>
                        <Link href='myPage/community'>더 보기</Link>
                        <Image
                            src={arrowRight} alt='arrowRight'
                            width={20} height={20}>
                        </Image>
                    </span>
                </div>
                <div className='commuThumb'>
                    <figure>
                        <div></div>
                        <figcaption>
                            <div>Team</div>
                            <b>초년생을 위한 금융앱</b>
                            <p>개념부터 학습방법까지 한..</p>
                        </figcaption>
                        <p className='heart'>
                            <Image src={heart} alt='heart'
                                width={20} height={20}></Image>
                            <span>1000</span>
                        </p>
                    </figure>

                    <figure>
                        <div></div>
                        <figcaption>
                            <div>Personal</div>
                            <b>초년생을 위한 금융앱</b>
                            <p>개념부터 학습방법까지 한..</p>
                        </figcaption>
                        <p className='heart'>
                            <Image src={heart} alt='heart'
                                width={20} height={20}></Image>
                            <span>1000</span>
                        </p>
                    </figure>

                    <figure>
                        <div></div>
                        <figcaption>
                            <div>Team</div>
                            <b>초년생을 위한 금융앱</b>
                            <p>개념부터 학습방법까지 한..</p>
                        </figcaption>
                        <p className='heart'>
                            <Image src={heart} alt='heart'
                                width={20} height={20}></Image>
                            <span>1000</span>
                        </p>
                    </figure>





                </div>
            </article>

            <article className='myPageContents'>
                <div className='myCheck'>
                    <Link href='myPage/check'>출석체크</Link>
                </div>
            </article>
        </section >

    );
}