//src/app/community/myProjectBest.tsx
"use client";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ArrowRight from '@/essets/arrowRight.svg';
import './myProjectBest.scss';
import HTML from '@/essets/myProjectBG/HTML.png';
import { useEffect, useState } from 'react';
import serverStore from '@/lib/server/serverStore';

export default function myProjectBest() {
  const router = useRouter();
  const [result, setResult] = useState();
  const [likePost, setLikePost] = useState([]);

  useEffect(() => {
    dataCrl('get');
  }, []);

  const dataCrl = async (type: string) => {
    try {
      const res = await serverStore(type, 'myProject');
      if (res !== null) {
        await setResult(res.data);
        const likePost = await res.data.sort((a, b) => {
          if (a.like.length === b.like.length) {
            return b.comments.length - a.comments.length;
          } else {
            return b.like.length - a.like.length;
          }
        });
        setLikePost(likePost);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const clickBestFigure = () => {
    router.push(`/community/myProject/${likePost[0].postId}`)
  }

  console.log('------------------------------')
  console.log(likePost)

  return (
    <section id="communityMyProjectContainer" className="communityContainer">
      <header className="communityContHeader">
        <h2 className="containerTitle">최근 핫한 프로젝트</h2>
        <div>
          <Link href='/community/myProject' className='more'>더보기
            <Image
              src={ArrowRight}
              alt='arrow image'
              width={20} height={20}
            />
          </Link>
        </div>
      </header>
      <section className="containerContents">
        <figure className='ccitem best1' onClick={clickBestFigure}>
          {
            likePost.length > 0 && <>
              <img src={likePost[0].image} alt="" />
              <figcaption>
                <h3>{likePost[0].title}</h3>
                <div className='bottom'>
                  <p className='name'>{likePost[0].name}</p>
                  <span className='like'>♥ {likePost[0].like.length}</span>
                </div>
              </figcaption>
            </>
          }
        </figure>
        <div className='ccitem bestCont'>
          <figure className='best2'></figure>
          <figure className='best3'></figure>
        </div>
      </section>
    </section>
  );
}