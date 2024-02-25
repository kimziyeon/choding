//src/app/community/myProject/MyProjectFilter.tsx
"use client";
import { useEffect, useRef, useState } from 'react';
import SearchInputSub from "@/components/searchSub/SearchInputSub";
import './myProjectFilter.scss'

export default function MyProjectFilter() {
  const [isOnButtonActive, setisOnButtonActive] = useState(false);
  const filterRef = useRef<HTMLHeadingElement | null>(null);
  const filterToggleBtn:React.MouseEventHandler<HTMLHeadingElement> = () => {
    filterRef.current?.classList.toggle("filterActive");
    setisOnButtonActive(!isOnButtonActive);
  }

useEffect(() => {
  const filterElement = filterRef.current;
  if (filterElement) {
    const buttonElements = filterElement.getElementsByTagName('button');

    const toggleActiveClass = (e) => {
      e.target.classList.toggle('active');
    };

    Array.from(buttonElements).forEach((buttonElement) => {
      buttonElement.addEventListener('click', toggleActiveClass);
    });

    return () => { //클린업
      Array.from(buttonElements).forEach((buttonElement) => {
        buttonElement.removeEventListener('click', toggleActiveClass);
      });
    };
  }

  return () => {};
}, [])

    return (
      <section id="myProjectFilter" className="communityContainer" ref={filterRef}>
        <div className="myProjectFilterHeader">
          <h3 className="filterTitle" onClick={filterToggleBtn}>
            {isOnButtonActive ? '검색필터 ∨' : '검색필터 ∧'}
            </h3>
          <SearchInputSub />
        </div>
        <div className="containerContents">
          <div className="filterTotalMember">
            <b>인원</b>
            <ul className="member">
              <li>
                <button>전체</button>
              </li>
              <li>
                <button>개인</button>
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
                <button>전체</button>
              </li>
              <li>
                <button>HTML</button>
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