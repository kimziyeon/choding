//src/app/community/QnABest.tsx
"use client";

import Image from 'next/image';
import "./QnABest.scss"
import ArrowRight from '@/essets/arrowRight.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function QnABest() {

  const [data, setData] = useState([]);

  console.log(data, 'test');

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

    const sortedData = data.slice().sort((a, b) => b.like.length - a.like.length);

    return (
      <section id="communityQnAContainer" className="communityContainer">
        <div className="communityContHeader">
          <h2 className="containerTitle">관심받는 <span>QnA</span></h2>
          <div>
          <Link href='/community/QnA' className='more'>더보기
                      <Image
                          src={ArrowRight}
                          alt='arrow image'
                          width={20} height={20}
                      />
            </Link>
          </div>
        </div>
        <div className="containerContentsQnA">
          {
            sortedData.slice(0, 3).map((item, index) => (
              <div key={index} className='QnABsetContainer'>
                  <img src={item.content?.thumb} alt=""  />             
                <div className='BestContent'>
                  <div className='contentBox'>
                    <h2 className='title'>{item.title}</h2>
                    <p className='content'>{item.content.text?.textContent}</p>
                  </div>
                  <p className='Name'>{item.userName}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }