"use client";
//              src/app/page.tsx
//              메인 교육
"use client";
import './home.scss';
import { useSession } from 'next-auth/react';
import MainBanner from './components/MainBanner';
import MainContentsSection from './components/MainContentsSection';
import { useQuestion } from '@/context/questionStore';
import serverStore from '@/lib/server/serverStore';
import { useState, useEffect } from 'react';
import levelKeyword from '@/data/levelKeyword.json';
import cdData from '@/data/main/cd.json';
import jdData from '@/data/main/jd.json';
import gdData from '@/data/main/gd.json';
import ddData from '@/data/main/dd.json';
import zdData from '@/data/main/zd.json';


export default function Home() {
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
    </main>
  );
}
