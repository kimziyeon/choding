"use client";
import { useSession } from 'next-auth/react';
import './mainContentsSection.scss'
import Image from 'next/image';
import ArrowRight from '@/essets/arrowRight.svg';
import ContentsFigure from './ContentsFigure';
import mainData from '../mainData.json';
import { useEffect, useState } from 'react';
import { userDataType } from '@/types/user'

type HomeType = {
    subtext: string,
    title: string,
    option: number,
    loginData: userDataType[],
    result: []
}

export default function Home({ subtext, title, option, loginData, result }: HomeType) {

    const { data: session, status } = useSession();
    // const [result, setResult] = useState([]);
    const [subtitle, setSubtitle] = useState([]);

    const classname = `num${option}`;

    return (
        <section className={`contentsBox ${classname}`}>
            <div className='contLeft'>
                <p className='subtext'>{subtext}</p>
                <h3 className='title'>
                    {option === 4 ? '초보들의 ' : null}
                    <span>{title}</span>
                    {option === 4 ? null : ' 강의'}
                </h3>
                <span className='more'>더보기
                    <Image
                        src={ArrowRight}
                        alt='arrow image'
                        width={20} height={20}
                    />
                </span>
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