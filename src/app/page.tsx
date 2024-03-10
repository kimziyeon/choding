//              src/app/page.tsx
//              메인 교육
"use client";
import './home.scss';
import { useQuestion } from '@/context/questionStore';
import { useSession } from 'next-auth/react';
import MainBanner from './components/MainBanner';
import MainContentsSection from './components/MainContentsSection';
import serverStore from '@/lib/server/serverStore';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import levelTestBtn from '@/essets/levelTestBtn.svg';
import levelKeyword from '@/data/levelKeyword.json';
import cdData from '@/data/main/cd.json';
import jdData from '@/data/main/jd.json';
import gdData from '@/data/main/gd.json';
import ddData from '@/data/main/dd.json';
import zdData from '@/data/main/zd.json';


export default function Home() {
  const { isOpenFunc } = useQuestion();
  const { data: session, status } = useSession();
  const [loginData, setLoginData] = useState([]);
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState<string[]>([]);


  useEffect(() => {
    dataCrl('get')
    if (status !== 'authenticated') {
      setTitle(['리액트 초급', '리액트 훅', '넥스트 라우팅']);
      setResult(cdData)
    }
  }, [status])

  useEffect(() => {
    if (status === 'authenticated') {
      loadData()
    }
  }, [loginData])

  // 데이터 가져오기  
  async function dataCrl(type: string) {
    const res = await serverStore(type, 'LoginData');
    if (res !== null) {
      setLoginData(res.data)
    }
  }


  const loadData = async () => {
    let nowUser = await loginData.find(obj => obj.email === session.user?.email);

    if (!nowUser) return;
    console.log('-----------------nowUser')
    console.log(nowUser)
    console.log('------------------------')

    switch (nowUser.level) {
      case '초딩':
        setTitle(levelKeyword[0].cd)
        setResult(cdData)
        break;
      case '중딩':
        setTitle(levelKeyword[0].jd)
        setResult(jdData)
        break;
      case '고딩':
        setTitle(levelKeyword[0].gd)
        setResult(gdData)
        break;
      case '대딩':
        setTitle(levelKeyword[0].dd)
        setResult(ddData)
        break;
      case '직딩':
        setTitle(levelKeyword[0].zd)
        setResult(zdData)
        break;
      default:
        setTitle(levelKeyword[0].cd)
        setResult(cdData)
        break;
    }
  }




  // console.log('---------------result')
  // console.log(result)

  return (
    <main className="mainContainer">
      <MainBanner
        title={title}
      />
      <MainContentsSection
        option={3}
        subtext={'초딩들이 스크랩한 강의에요'}
        title={'요즘 인기있는'}
        loginData={loginData}
        result={result.popular}
      />

      <MainContentsSection
        option={0}
        subtext={'유튜브 테스트에용'}
        title={title[0]}
        loginData={loginData}
        result={result.youtube}
      />

      <MainContentsSection
        option={1}
        subtext={'기본부터 쌓아가요'}
        title={title[1]}
        loginData={loginData}
        result={result.google}
      />

      <MainContentsSection
        option={2}
        subtext={'네이버가 들어와용'}
        title={title[2]}
        loginData={loginData}
        result={result.naver}
      />

      <section className="bottomContents">
        <MainContentsSection
          option={4}
          subtext={'모두와 공유해요'}
          title={'커뮤니티'}
          loginData={loginData}
          result={result.community}
        />
        <section id="mainTodayQuiz" className="num5">
          <div className='contLeft'>
            <p className='subtext'>열심히 공부했다면?</p>
            <h3 className='title'>오늘의
              <span>&nbsp;퀴즈</span>
            </h3>
          </div>
          <div className="contRight" onClick={() => { isOpenFunc({ isOpen: true, isTest: false }) }}></div>
        </section>
      </section>

      <div className="lvTestBtn">
        <p className='dot'></p>
        <div onClick={() => { isOpenFunc({ isOpen: true, isTest: true }) }}>
          <Image src={levelTestBtn} alt='levelTestBtn' />
        </div>

      </div>
    </main>

  );
}
