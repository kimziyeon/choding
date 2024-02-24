//src/app/community.tsx
// "use client";
import QnABest from './QnABest';
import MyProjectBest from './myProjectBest';

export default function Community() {
  return (
      <section id="communityHome" className='contPadding'>
        <QnABest/>
        <MyProjectBest />
      </section>
    );
  }