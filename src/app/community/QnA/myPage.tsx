'use client'

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import "./QnA.scss";
import axios from 'axios';

export default function myPage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/api/post?colName=qna');
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
    <div id="QnAMain" className='myPageMain'>
        <Link className='writeBtn' href='./QnA/write'>글 쓰기</Link>
        <div className='MyPageContainer'>
            <div className='noWrite'>
                <div className='noWriteImg'></div>
                <h3>아직 질문글이 없군요!</h3>
                <Link href='./QnA/write'>새로운 질문 쓰기!</Link>
            </div>
        </div>
    </div>
    );
}