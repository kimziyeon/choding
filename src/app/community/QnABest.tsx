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
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

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
            data.map((item, index) => (
              <div key={index} className='QnABsetContainer'>
                <div className='BestContent'>
                  <div>
                    <p className='title'>{item.title}</p>
                    <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
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