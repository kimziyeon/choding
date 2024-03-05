// src/app/search/components/Naver.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { naverSearchItem } from '@/types/datatype';
import ContentsFigure from '@/app/components/ContentsFigure';


interface naverSearchType {
    query: string
}

export default function Naver({ query }: naverSearchType) {

    // const [text, setText] = useState('');
    const [result, setResult] = useState<naverSearchItem[] | null>(null)

    const [blog, setBlog] = useState([]);


    const search = async () => {
        const result = await axios.get('/api/naver', { params: { q: query } });
        setResult(result.data.items.map(item => ({
            ...item,
            title: item.title.replace(/(<([^>]+)>)/ig, ""),
            description: item.description.replace(/(<([^>]+)>)/ig, "")
        })));
    };


    useEffect(() => { //검색결과 콘솔
        console.log(result);
    }, [result]);

    return (// className="innerResults" == 공통 스타일(search.scss)
        <section id="totalSearchNaverSection" className="innerResults">
            <ContentsFigure
                result={result}
                option={2}
            />
        </section>
    )
}

