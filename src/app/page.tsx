//              src/app/page.tsx
//              메인 교육

import './home.scss';
import MainBanner from './components/MainBanner';
import MainContentsSection from './components/MainContentsSection';


export default function Home() {
  return (
    <main className="mainContainer contPadding">
      <MainBanner />
      <MainContentsSection
        option={3}
        subtext={'초딩들이 스크랩한 강의에요'}
        title={'요즘 인기있는'} />

      <MainContentsSection
        option={0}
        subtext={'유튜브 테스트에용'}
        title={'넥스트 라우팅'} />

      <MainContentsSection
        option={1}
        subtext={'기본부터 쌓아가요'}
        title={'리액트 훅'} />

      <MainContentsSection
        option={2}
        subtext={'네이버가 들어와용'}
        title={'넥스트 기초'} />

      <section className="bottomContents">
        <MainContentsSection
          option={4}
          subtext={'모두와 공유해요'}
          title={'커뮤니티'} />
        <section id="mainTodayQuiz" className="num5">
          <div className='contLeft'>
            <p className='subtext'>열심히 공부했다면?</p>
            <h3 className='title'>오늘의
              <span>&nbsp;퀴즈</span>
            </h3>
          </div>
          <div className="contRight"></div>
        </section>
      </section>
    </main>
  );
}
