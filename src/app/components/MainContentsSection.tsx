"use client";

import './mainContentsSection.scss'
import Image from 'next/image';
import ArrowRight from '@/essets/arrowRight.svg';
import ContentsFigure from './ContentsFigure';
import data from '../mainData.json';
import { useEffect, useState } from 'react';

export default function Home({ subtext, title, option }) {
    const [result, setResult] = useState([]);
    const [subtitle, setSubtitle] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let dataResult;
            switch (option) {
                case 0:
                    dataResult = data.youtube;
                    break;
                case 1:
                    dataResult = data.google;
                    break;
                case 2:
                    dataResult = data.naver;
                    break;
                case 3:
                    dataResult = data.popular;
                    break;
                case 4:
                dataResult = data.community;
                    break;
                default:
                    dataResult = data.youtube;
                    break;
            }
            await setResult(dataResult);
            console.log(option, '의 데이터는', dataResult);
        }
        fetchData();
    }, [option])

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