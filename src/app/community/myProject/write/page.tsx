"use client";
import './MyProjectWrite.scss';
import FilterComponent from './components/FilterComponent';
import { useEffect, useRef, useState } from 'react';
import InputSection from './components/InputSection';

export default function MyProjectWrite() {
    const [activeOptions, setActiveOptions] = useState<string[]>([]);
    const [isOnButtonActive, setisOnButtonActive] = useState(false);
    const filterRef = useRef<HTMLHeadingElement | null>(null);
    const filterToggleBtn: React.MouseEventHandler<HTMLHeadingElement> = () => {
        filterRef.current?.classList.toggle("filterActive");
        setisOnButtonActive(!isOnButtonActive);
    }

    const handleOptionClick = (option: string, title: string) => {
        console.log('title: ', title, ',   option: ', option);
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

    // useEffect(() => { // 선택 옵션 콘솔 확인용도 :)
    //     console.log('~~~~~~~ MyProjectFilter ~~~~~~~~');
    //     console.log('클릭한 옵션 -->', activeOptions);
    // }, [activeOptions])

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <section id="MyProjectWrite">
            <form onSubmit={handleSubmit}>
                <section id="writeHeader">
                    <h4>새 프로젝트 작성</h4>
                    <input placeholder='제목을 입력해주세요'></input>
                </section>
                <section id="writeStep1" className='writeStep'>
                    <InputSection
                        num={1}
                        titleGuide={'어떤 프로젝트를 하셨나요?'}
                        classname={'overview'}
                        title={'개요'}
                    />
                    <FilterComponent
                        title={'개발 인원'}
                        type={'member'}
                        options={['개인', '팀']}
                        handleOptionClick={handleOptionClick}
                        activeOptions={activeOptions}
                    />
                    <FilterComponent
                        title={'내 포지션'}
                        type={'position'}
                        options={['리드 개발자', '서브 개발자']}
                        handleOptionClick={handleOptionClick}
                        activeOptions={activeOptions}
                    />
                </section>
                <section id="writeStep2" className='writeStep'>
                    <InputSection
                        num={2}
                        titleGuide={'프로젝트를 소개해주세요!'}
                        classname={'goal'}
                        title={'프로젝트 목표'}
                    />
                    <FilterComponent
                        title={'사용 기술'}
                        type={'stack'}
                        options={['HTML', 'CSS', 'JS', 'TS', 'React', 'Vue', 'Nextjs', 'GIT']}
                        handleOptionClick={handleOptionClick}
                        activeOptions={activeOptions}
                    />
                </section>
                <section id="writeStep3" className='writeStep'>
                <InputSection
                        num={3}
                        titleGuide={'링크를 입력해주세요.'}
                        classname={'link'}
                        title={''}
                    />
                </section>
                <section className='submit'>
                    <button type="button" className='back'>취소</button>
                    <button type="submit" className='confirm'>등록</button>
                </section>
            </form>
        </section>
    );
}