"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import "./QnA.scss";


export default async function allPage() {
    const [data, setData] = useState([]);

    const findMaxPostId = (data:any) => {
      // 초기값으로 postId 값을 -Infinity로 설정
      const maxPostId = data.reduce((max:any, item:any) => {
          // 현재 요소의 postId가 현재 최대값보다 크다면 해당 postId를 최대값으로 설정
          return item.postId > max ? item.postId : max;
      }, -Infinity);
  
      return maxPostId;
  };
  
  // data 배열에서 제일 큰 postId 값을 찾기
  const maxPostId = findMaxPostId(data);
  
  console.log("제일 큰 postId:", maxPostId);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/api/post?colName=qna');

            // let resObj = [];
            response.data.forEach((obj:any)=>{

              const tag:any = document.createElement('div');
              tag.innerHTML = obj.content;
              
              const tumb = tag.querySelector('img');
              
              
              const text = [];  
              tag.childNodes.forEach((node:any)=>{
                  node.childNodes.forEach((child:any)=>{
                    if(child.tagName == undefined){
                      text.push(child)
                    }
                  });
              })
              // resObj.push({tumb, text:text[0]});
              obj.content = {thumb:tumb?.src, text:text[0]}
            })
           
             


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
                    <p>{item.content.text?.textContent}</p>
                </div>
                <div className='QnAInfo'>
                    <p>by {item.userName}</p>
                    <p>💬 {item.comment.length}</p>
                    <p>♥ <span>{item.like.length}</span></p>
                </div>
            </div>
            
            <div className='QuestionImg'>
                <img src={item.content?.thumb} alt=""  />                
                
            </div>
        </Link>
        ))}
        
      </div>
    </div>
    );
}