"use client";

import './mainContentsSection.scss'
import Image from 'next/image';
import ArrowRight from '@/essets/arrowRight.svg';
import ContentsFigure from './ContentsFigure';
import data from '../mainData.json';
import { useEffect, useState } from 'react';

export default function Home({ subtext, title, option }) {
    const [result, setResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            switch (option) {
                case 0:
                    await setResult(data.youtube);
                    break;
                case 1:
                    await setResult(data.google);
                    break;
                case 2:
                    await setResult(data.naver);
                    break;
                default:
                    break;
            }
        }
        fetchData();
        console.log(option, '의 데이터는', result)
    }, [option])

    return (
        <section className="padding googleContents contentsBox">
            <div className='contLeft'>
                <p>{subtext}</p>
                <h3>{title}</h3>
                <span>더보기
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