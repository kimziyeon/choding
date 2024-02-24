//src/app/community/myProject/MyProjectFilter.tsx
"use client";
import { useRef, useState } from 'react';
import SearchInputSub from "@/components/searchSub/SearchInputSub";
import './myProjectFilter.scss'

export default function MyProjectFilter() {
  const [isOnFilterActive, setIsOnFilterActive] = useState(false);
  const filterRef = useRef<HTMLHeadingElement | null>(null);
  const filterToggleBtn:React.MouseEventHandler<HTMLHeadingElement> = () => {
    filterRef.current?.classList.toggle("filterActive");
    setIsOnFilterActive(!isOnFilterActive);
  }
  

    return (
      <section id="myProjectFilter" className="communityContainer" ref={filterRef}>
        <div className="myProjectFilterHeader">
          <h3 className="filterTitle" onClick={filterToggleBtn}>
            {isOnFilterActive ? '검색필터 ∨' : '검색필터 ∧'}
            </h3>
          <SearchInputSub />
        </div>
        <div className="containerContents">
          <div className="filterTotalMember">
            <b>인원</b>
            <ul className="member">
              <li>
                <button className="active">개인</button>
              </li>
              <li>
                <button>팀</button>
              </li>
            </ul>
          </div>
          <div className="filterSkills">
            <b>사용 기술</b>
            <ul className="skills">
              <li>
                <button className="active">HTML</button>
              </li>
              <li>
                <button>CSS</button>
              </li>
              <li>
                <button>JS</button>
              </li>
              <li>
                <button>TS</button>
              </li>
              <li>
                <button>React</button>
              </li>
              <li>
                <button>Vue</button>
              </li>
              <li>
                <button>Nextjs</button>
              </li>
              <li>
                <button>Git</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }