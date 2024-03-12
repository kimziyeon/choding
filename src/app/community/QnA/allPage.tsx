"use client";

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

      //좋아요 좋아요 중소기업

    return (
    <div className="contPadding">
        <div className='QnAContentContainer'>
        {data && data.map((item, index)=>(
            <Link href={`./QnA/${item._id}`} className='QuestionBox' key={index}>
            <div className='QuestionText'>
                <div className='QnAcontent'>
                    <h2>{item.title}</h2>
                    <p dangerouslySetInnerHTML={{ __html:item.content}}></p>
                </div>
                <div className='QnAInfo'>
                    <p>이름 : {item.userName}</p>
                    <p>댓글 수 {item.comment.length}</p>
                    <p>좋아요 <span></span></p>
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