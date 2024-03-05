"use client"

import React from 'react';
import dynamic from 'next/dynamic';
import "./QnAWrite.scss";
import createPost from '@/post/create';

const QuillExample = dynamic(() => import('./components/QuillExample'), { ssr: false });

export default function QnAWrite() {
    const handleSaveContent = async (title: string, content: string) => {
        try {
            await createPost({ title, content }); // 게시물 저장 함수 호출
        } catch (error) {
            console.error("게시물 저장 중 오류가 발생했습니다:", error);
            // 오류 처리 코드 추가
        }
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