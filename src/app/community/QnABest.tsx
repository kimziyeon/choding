//src/app/community/QnABest.tsx
// "use client";

import Image from 'next/image';
import ArrowRight from '@/essets/arrowRight.svg';
import Link from 'next/link';

export default function QnABest() {
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
        <div className="containerContents">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </section>
    );
  }