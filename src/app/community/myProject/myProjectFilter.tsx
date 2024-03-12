//src/app/community/myProject/MyProjectFilter.tsx
"use client";
import { useEffect, useRef, useState } from 'react';
import SearchInputSub from "@/components/searchSub/SearchInputSub";
import './myProjectFilter.scss'
import FilterComponent from './components/FilterComponent';
import { myProjectStore } from "./context/myProject";
import { myProjectPostType } from '@/types/datatype'

export default function MyProjectFilter() {
  const { setResult, result, originalData, setOriginalData } = myProjectStore();
  const [filteredData, setFilteredData] = useState<myProjectPostType[]>([]);
  const [activeOptions, setActiveOptions] = useState<string[]>([]);
  const [isOnButtonActive, setisOnButtonActive] = useState(false);
  const filterRef = useRef<HTMLHeadingElement | null>(null);



  // ----------- 필터 클릭 ------------
  const filterToggleBtn: React.MouseEventHandler<HTMLHeadingElement> = () => {
    filterRef.current?.classList.toggle("filterActive");
    setisOnButtonActive(!isOnButtonActive);
  }

  // 클릭한 옵션을 배열로 
  const handleOptionClick = (option: string) => {
    setActiveOptions(prevState => {
      if (prevState.includes(option)) {
        return prevState.filter(opt => opt !== option);
      } else {
        return [...prevState, option];
      }
    });
  }



  // --------------- 필터 시작 ----------------
  function filterData(dataset: myProjectPostType[], filters: string[]) {
    if (!filters.length) {
      return dataset;
    }

    const filteredData = dataset.filter((item) => {
      const memberFilters = filters.some(filter => item.member.includes(filter));
      const stackFilters = filters.some(filter => item.stack.includes(filter));
      return memberFilters || stackFilters;
    });

    return filteredData;
  }

  useEffect(() => {
    setFilteredData(filterData(result, activeOptions));
  }, [activeOptions, result]);

  useEffect(() => {
    setOriginalData(filteredData);
  }, [filteredData]);

  // --------------- 필터 끝 ----------------

  return (
    <section id="myProjectFilter" className="communityContainer" ref={filterRef}>
      <div className="myProjectFilterHeader">
        <h3 className="filterTitle" onClick={filterToggleBtn}>
          {isOnButtonActive ? '필터 정렬 ∨' : '필터 정렬 ∧'}
        </h3>
        <label htmlFor="myProjectSearch">dd?</label>
        <input type="text" id="myProjectSearch" />
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
          options={['HTML', 'CSS', 'JS', 'TS', 'React', 'Vue', 'Nextjs', 'Git']}
          handleOptionClick={handleOptionClick}
          activeOptions={activeOptions}
        />
      </div>
    </section>
  );
}