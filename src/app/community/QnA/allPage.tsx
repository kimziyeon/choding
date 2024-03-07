'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import "./QnA.scss";


export default async function allPage() {
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
    <div className="contPadding">
        <div className='QnAContentContainer'>
        {data && data.map((item, index)=>(
            <Link href='./QnA/postid' className='QuestionBox' key={index}>
            <div className='QuestionText'>
                <div className='QnAcontent'>
                    <h2>{item.title}</h2>
                    <p dangerouslySetInnerHTML={{ __html:item.content}}></p>
                </div>
                <div className='QnAInfo'>
                    <p>이름</p>
                    <p>댓글 수 0</p>
                </div>
            </div>
            <div className='QuestionImg'>
                <img src="" alt="" />
            </div>
        </Link>
        ))}
        
      </div>
    </div>
    );
}