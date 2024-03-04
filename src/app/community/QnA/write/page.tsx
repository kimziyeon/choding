"use client"

import React from 'react';
import dynamic from 'next/dynamic';
import "./QnAWrite.scss";

const QuillExample = dynamic(() => import('./components/QuillExample'), { ssr: false });

export default function QnAWrite() {
    const handleSaveContent = (title: string, content: string) => {
        console.log("제목:", title);
        console.log("내용:", content);
    };

    return (
        <>
            <section className='QnAWriteMain'>
                <form action="">
                    <QuillExample onSaveContent={handleSaveContent} />
                </form>
            </section>
        </>
    );
}