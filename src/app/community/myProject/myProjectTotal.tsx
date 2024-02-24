//src/app/community/myProject/myProjectFilter.tsx
// "use client";
import './myProjectTotal.scss'

export default function myProjectTotal() {
    return (
      <section id="myProjectTotal" className="communityContainer">
        <div className="communityContHeader">
          <h2 className="containerTitle">myProjectFilter</h2>
          <button className="moreBtn">더보기</button>
        </div>
        <div className="containerContents">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </section>
    );
  }