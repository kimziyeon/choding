"use client";

import '../../mypage.scss';
import Image from 'next/image';
import heart from '@/essets/heart.svg';



export default function MyCommunityContents() {
    return (
        <div >
            <div className='commuContents'>
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
        </div>
    )
}