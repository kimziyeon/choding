"use client"

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import "./QnAWrite.scss";
import { connectToDB } from '@/lib/mongodb';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const QuillExample = dynamic(() => import('./components/QuillExample'), { ssr: false });

export default function QnAWrite() {

    const { data: session, status } = useSession();
    const [postId, setPostId] = useState<number>(0);

    const handleSaveContent = (title: string, content: string) => {
        console.log(title, content);
        // 데이터베이스에 데이터 저장 로직을 직접 구현하거나, 외부 함수를 호출하여 처리할 수 있습니다.
        saveToDatabase(title, content);
    };

    console.log(session)

    const saveToDatabase = async (title: string, content: string, images: string[]) => {
        try {
            const Email = session?.user?.email;
            const userName = session?.user?.name;
            const comment:any = [];
            setPostId(postId + 1);

            const data = { title, content, Email, userName, comment, postId};
            // // 데이터베이스 연결 및 데이터 저장
            axios.post('/api/post',data); // axios로 api서버로 데이터를 보낸다
            console.log('데이터가 성공적으로 저장되었습니다.');
            // 성공적으로 데이터가 저장된 후 수행할 작업 추가
        } catch (error) {
            console.error('데이터 저장 중 오류 발생:', error);
            // 데이터 저장 중 오류 처리 로직 추가
        }
    };

    return (
        <>
            <section className='QnAWriteMain'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <QuillExample onSaveContent={handleSaveContent} />
                </form>
            </section>
        </>
    );
}