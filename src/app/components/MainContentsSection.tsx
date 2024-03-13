"use client";
import { useSession } from 'next-auth/react';
import './mainContentsSection.scss'
import Image from 'next/image';
import ArrowRight from '@/essets/arrowRight.svg';
import ContentsFigure from './ContentsFigure';
import { useEffect, useState } from 'react';
import { userDataType } from '@/types/user'
import { useRouter } from 'next/navigation';

type HomeType = {
    subtext: string,
    title: string,
    option: number,
    loginData: userDataType[],
    result: []
}

export default function Home({ subtext, title, option, loginData, result }: HomeType) {
    const router = useRouter();

    const { data: session, status } = useSession();
    // const [result, setResult] = useState([]);
    const [subtitle, setSubtitle] = useState([]);

    const classname = `num${option}`;

    const clickMore = (t) => {
        router.push(`http://localhost:3000/search?key=${t}`)
    }

    return (
        <section className={`contentsBox ${classname}`}>
            <div className='contLeft'>
                <p className='subtext'>{subtext}</p>
                <h3 className='title'>
                    {option === 4 ? '초보들의 ' : null}
                    <span>{title}</span>
                    {option === 4 ? null : ' 강의'}
                </h3>
                {
                    option !== 4 ? <span className='more' onClick={() => { clickMore(title) }}>더보기
                        <Image
                            src={ArrowRight}
                            alt='arrow image'
                            width={20} height={20}
                        />
                    </span> : null
                }
            </div>
            <div className="contRight">
                <ContentsFigure
                    result={result}
                    option={option}
                />
            </div>
        </section>
    )
}