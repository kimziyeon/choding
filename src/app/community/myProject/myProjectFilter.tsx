//src/app/community/myProject/MyProjectFilter.tsx
"use client";
import { useEffect, useRef, useState } from 'react';
import SearchInputSub from "@/components/searchSub/SearchInputSub";
import './myProjectFilter.scss'
import FilterComponent from './components/FilterComponent';

export default function MyProjectFilter() {
  const [activeOptions, setActiveOptions] = useState<string[]>([]);
  const [isOnButtonActive, setisOnButtonActive] = useState(false);
  const filterRef = useRef<HTMLHeadingElement | null>(null);
  const filterToggleBtn:React.MouseEventHandler<HTMLHeadingElement> = () => {
    filterRef.current?.classList.toggle("filterActive");
    setisOnButtonActive(!isOnButtonActive);
  }

const handleOptionClick = (option: string) => {
  setActiveOptions(prevState => {
    if (prevState.includes(option)) {
      // 이미 상태에 포함되어 있다면 제거
      return prevState.filter(opt => opt !== option);
    } else {
      // 그렇지 않다면 상태에 추가
      return [...prevState, option];
    }
  });
}

useEffect(()=>{ // 선택 옵션 콘솔 확인용도 :)
  console.log('~~~~~~~ MyProjectFilter ~~~~~~~~');
  console.log('클릭한 옵션 -->', activeOptions);
},[activeOptions])


    return (
      <section id="myProjectFilter" className="communityContainer" ref={filterRef}>
        <div className="myProjectFilterHeader">
          <h3 className="filterTitle" onClick={filterToggleBtn}>
            {isOnButtonActive ? '검색필터 ∨' : '검색필터 ∧'}
            </h3>
          <SearchInputSub />
        </div>
        <div className="containerContents">
           <FilterComponent
           sectionName="filterTotalMember"
           title="개발 인원"
           options={['개인', '팀']}
           handleOptionClick={handleOptionClick} 
           activeOptions={activeOptions}
           />
          <FilterComponent 
          sectionName="filterSkills"
          title="사용 기술"
          options={['전체', 'HTML', 'CSS', 'JS', 'TS', 'React', 'Vue', 'Nextjs', 'Git']}
          handleOptionClick={handleOptionClick}
          activeOptions={activeOptions}
          />
        </div>
      </section>
    );
  }