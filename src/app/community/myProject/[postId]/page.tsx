"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { myProjectStore } from '@/app/community/myProject/context/myProject';
import serverStore from '@/lib/server/serverStore';
import { myProjectPostType } from '@/types/datatype';
import DetailComment from './DetailComment'; 
import Share from '@/essets/share.svg';
import Heart from '@/essets/heart.svg';
import './MyProjectDetail.scss'

export default function MyProjectDetail({ params }: any) {
  const [result, setResult] = useState<myProjectPostType>();
  
  useEffect(() => {
    console.log(result);
  }, [result]);
  
  useEffect(() => {
    async function fetchData() {
      const res = await serverStore('detail', 'myProject', null, params.postId);
      if (res !== null) {
        setResult(res.data);
      }
    }
  
    fetchData();
  }, []);

    return (
      <>
        {
        result && <section id="MyProjectDetail">
          <section className='mpDetailHeader'>
              <div className='mpdhTop'>
                <h3>{result.title}</h3>
                <div className='iconCont'>
                  <Image src={Share} width={25} height={24} alt="share icon" ></Image>
                  <Image src={Heart} width={29} height={24} alt="heart icon" ></Image>
                </div>
              </div>
              <div className='mpdhBottom'>
                <span className='userId'>{result.userId}</span>
                <span className='postDate'>{result.date}</span>
              </div>
            </section>
            <section className='bodyText'>
                {
                  result.imgSrc == null ? null : <Image src={result.imgSrc} width={480} height={480} alt="img" ></Image>
                }
              <div className='bodyTextBottom'>
                <ul>
                  <li>
                    <h5>개요</h5>
                    <div>
                      <p>{result.overview}</p>
                    </div>
                  </li>
                  <li>
                    <h5>프로젝트 목표</h5>
                    <div>
                      <p>{result.goal}</p>
                    </div>
                  </li>
                  <li>
                    <h5>사용 기술</h5>
                    <div>
                      {result.stack.map((stack, index) => (
                        <p className="tag" key={index}>#{stack}</p>
                      ))}
                    </div>
                  </li>
                  <li>
                    <h5>포지션</h5>
                    <div>
                      {result.position.map((stack, index) => (
                          <p className="tag" key={index}>#{stack}</p>
                      ))}
                    </div>
                  </li>
                  <li>
                    <h5>팀 구성</h5>
                    <div>
                      {result.member.map((stack, index) => (
                          <p className="tag" key={index}>#{stack}</p>
                      ))}
                    </div>
                  </li>
                </ul>
                <Link href={result.link} passHref target="_blank">
                      배포 링크 바로가기 ﹥
                </Link>
              </div>
            </section>
            <DetailComment result={result} />
          </section>
        }
        </>  
    );
}