//src/app/community/myProjectBest.tsx
// "use client";
import Link from 'next/link';
import Image from 'next/image';
import ArrowRight from '@/essets/arrowRight.svg';
import './myProjectBest.scss';

export default function myProjectBest() {
    return (
      <section id="communityMyProjectContainer" className="communityContainer">
        <div className="communityContHeader">
          <h2 className="containerTitle">최근 핫한 <span>프로젝트</span></h2>
          <div>
            <Link href='/community/myProject' className='more'>더보기
                      <Image
                          src={ArrowRight}
                          alt='arrow image'
                          width={20} height={20}
                      />
            </Link>
          </div>
        </div>
        <div className="containerContents">
          <div className='item1'>#HTML</div>
          <div className='item2'>#CSS</div>
          <div className='item3'>#JS</div>
          <div className='item4'>#TS</div>
          <div className='item5'>#React</div>
          <div className='item6'>#Vue</div>
          <div className='item7'>#Nextjs</div>
        </div>
      </section>
    );
  }