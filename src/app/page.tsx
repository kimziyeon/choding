//              src/app/page.tsx
//              메인 교육
"use client";
import './home.scss';
import axios from 'axios';
import { useQuestion } from '@/context/questionStore';
import { useSession } from 'next-auth/react';
import MainBanner from './components/MainBanner';
import MainContentsSection from './components/MainContentsSection';
import MainSlide from './components/MainSlide';
import serverStore from '@/lib/server/serverStore';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import levelTestBtn from '@/essets/levelTestBtn.svg';
import levelKeyword from '@/data/levelKeyword.json';
import cdData from '@/data/mainContents/cd.json';
import jdData from '@/data/mainContents/jd.json';
import gdData from '@/data/mainContents/gd.json';
import ddData from '@/data/mainContents/dd.json';
import zdData from '@/data/mainContents/zd.json';
import community from '@/data/community.json';


export default function Home() {
  const { isOpenFunc } = useQuestion();
  const { data: session, status } = useSession();
  const [loginData, setLoginData] = useState([]);
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState<string[]>([]);


  useEffect(() => {
    dataCrl('get')
    if (status !== 'authenticated') {
      setTitle(levelKeyword[0].cd)
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
    // console.log(session?.user?.email)
    const res = await axios.get(`/api/mongodb?colName=myPoint&email=${session?.user?.email}`);
    if (res !== null) {
      setLoginData(res.data)
    }
  }

  const loadData = async () => {
    let nowUser = await loginData.find(obj => obj.email === session.user?.email);

    if (!nowUser) {
      setTitle(levelKeyword[0].cd)
      setResult(cdData)
      console.log('nowUser 값이 없음!')
      console.log('레벨 테스트를 해야하는 유저')
      return;
    };

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
      <MainSlide />
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
          result={community}
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
