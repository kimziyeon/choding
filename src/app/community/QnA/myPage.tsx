'use client'

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import "./QnA.scss";
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Login from '@/app/login/page';
import { AnyPtrRecord } from 'dns';

export default function myPage() {

  const [data, setData] = useState([]);
  const { data: session, status } = useSession();
  const LoginCheck = session?.user?.email; // 현재 로그인한 이메일 확인
  let MyQnAList = data.filter(item => item.Email === LoginCheck); //현재 로그인한 이메일과 동일한 값의 글 뽑기

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/post?colName=qna');

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



  if (status === 'authenticated') {
    if (MyQnAList.length !== 0) {
      return <div className='myPageMain'>
        <div className='writeBtnBox'><Link className='writeBtn' href='./QnA/write'>글 쓰기</Link></div>
        {MyQnAList && MyQnAList.map((item, index) => (
          <Link href={`./QnA/${item._id}`} className='QuestionBox' key={index}>
            <div className='QuestionText'>
              <div className='QnAcontent'>
                <h2>{item.title}</h2>
                <p>{item.content.text?.textContent}</p>
              </div>
              <div className='QnAInfo'>
                <p>이름 : {item.userName}</p>
                <p>댓글 수 {item.comment.length}</p>
                <p>좋아요<span>{item.like.length}</span> </p>
              </div>
            </div>
            <div className='QuestionImg'>
              <img src={item.content?.thumb} alt=""  /> 
            </div>
          </Link>
        ))}
      </div>
    } else {
      return <div className='myPageMain'>
        <Link className='writeBtn' href='./QnA/write'>글 쓰기</Link>
        <div className='MyPageContainer'>
          <div className='noWrite'>
            <div className='noWriteImg'></div>
            <h3>아직 질문글이 없군요!</h3>
            <Link href='./QnA/write'>새로운 질문 쓰기!</Link>
          </div>
        </div>
      </div>
    }

  }

  return (
    <div id="QnAMain" className='myPageMain'>
      <p>로그인 해주세요</p>
      <Link href="../login">Login</Link>
    </div>
  );
}