"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { myProjectStore } from '@/app/community/myProject/context/myProject';
import detailStore from '@/lib/server/detailStore';
import { myProjectPostType } from '@/types/datatype';
import DetailComment from './DetailComment';
import Share from '@/essets/share.svg';
import Heart from '@/essets/heart.svg';
import { useSession } from 'next-auth/react';
import './MyProjectDetail.scss'
import swal from 'sweetalert';

export default function MyProjectDetail({ params }: any) {
  const [result, setResult] = useState<myProjectPostType>();
  const [isOnLikeClick, setOnLike] = useState(false);
  const [likeUserNum, setLikeUserNum] = useState(0);
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(result);
  }, [result]);

  async function fetchData() {
    const res = await detailStore('get', 'myProject', null, params.postId);
    if (res !== null) {
      setResult(res.data);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // --------------------------------- 공유 클릭
  const shareHandler = () => {
    if (result) {
      const url = encodeURIComponent(result.link);
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      window.open(facebookUrl, "_blank");
    }
  }

  // --------------------------------- 좋아요 클릭
  const onClicklikeHandler = (postId: number) => {
    if (!session?.user?.email) { // 비회원은 이용할 수 없어용!
      swal('잠깐!', '로그인 후 이용해주세요', 'warning')
      return
    }

    setOnLike(!isOnLikeClick) // css

    // myProject의 해당 아이템의 like[] 에 session.user.email을 객체로 push함
    const setUpdateResult = {
      field: "like",
      updateKey: "postId",
      updateValue: result.postId,
      updateType: "push",
      value: {
        email: session?.user?.email
      }
    }

    // const res = await detailStore('put', 'myProject', setUpdateResult, result.postId);
    // if (res && res.status === 200) {
    //   await fetchData();
    //   if (keyword === 'update') {
    //     setUpdate(!isOnUpdate)
    //   }
    // } else {
    //   console.error('--------------삭제 실패!!!', res);
    // }


    // 좋아요수 : get like[] 객체 length
  }

  return (
    <>
      {
        result && <section id="MyProjectDetail">
          <section className='mpDetailHeader'>
            <div className='mpdhTop'>
              <h3>{result.title}</h3>
              <div className='iconCont'>
                <button
                  type='button'
                  className='share'
                  onClick={shareHandler}>
                  <Image src={Share} width={25} height={24} alt="share icon" />
                </button>
                <button
                  type='button'
                  onClick={() => { onClicklikeHandler(result.postId) }}
                  className={isOnLikeClick ? 'active like' : 'like'}>
                  <p>♥ <span>{result.like.length}</span></p>
                </button>
              </div>
            </div>
            <div className='mpdhBottom'>
              <span className='userId'>{result.name}</span>
              <span className='postDate'>{result.date}</span>
            </div>
          </section>
          <section className='bodyText'>
            {
              result.image == null ? null : <Image src={result.image} width={480} height={480} alt="img" ></Image>
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
          <DetailComment result={result} fetchData={fetchData} />
        </section >
      }
    </>
  );
}