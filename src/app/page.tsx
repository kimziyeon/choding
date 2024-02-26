//              src/app/page.tsx
//              메인 교육

import './home.scss';
import MainBanner from './components/MainBanner';
import MainContentsSection from './components/MainContentsSection';


export default function Home() {
  return (
    <main className="mainContainer">
      <MainBanner />
      <section className="padding popularContents">
        인기 강의
      </section>

      <MainContentsSection
        option={0}
        subtext={'유튜브 테스트에용'}
        title={'유튜브'} />

      <MainContentsSection
        option={1}
        subtext={'기본부터 쌓아가요'}
        title={'구글테스트'} />

      <MainContentsSection
        option={2}
        subtext={'네이버가 들어와용'}
        title={'네이버'} />

      <section className="padding bottomContents">
        <div className='community'>커뮤니티</div>
        <div className='quiz'>퀴즈</div>
      </section>
    </main>
  );
}
