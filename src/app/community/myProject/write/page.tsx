"use client";
import './MyProjectWrite.scss';
import FilterComponent from '../components/FilterComponent';
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

    useEffect(() => { // 선택 옵션 콘솔 확인용도 :)
        console.log('~~~~~~~ MyProjectFilter ~~~~~~~~');
        console.log('클릭한 옵션 -->', activeOptions);
    }, [activeOptions])

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
                <section id="writeStep1">
                    <div className='top'>
                        <h5><span>STEP.1</span> 어떤 프로젝트를 하셨나요?</h5>
                    </div>
                    <InputSection
                        classname={'overview'}
                        title={'개요'}
                    />
                    <div>
                        <div className='member'>
                            <b className='titleBoldGray'>인원</b>
                            <FilterComponent
                                options={['개인', '팀']}
                                handleOptionClick={handleOptionClick}
                                activeOptions={activeOptions}
                            />
                        </div>
                        <div className='myPosition'>
                            <b className='titleBoldGray'>내 포지션</b>
                            <FilterComponent
                                options={['리드 개발자', '서브 개발자']}
                                handleOptionClick={handleOptionClick}
                                activeOptions={activeOptions}
                            />
                        </div>
                    </div>
                </section>
                <section id="writeStep2">
                    <div className='top'>
                        <h5><span>STEP.2</span> 프로젝트를 소개해주세요!</h5>
                    </div>
                    <InputSection
                        classname={'goal'}
                        title={'프로젝트 목표'}
                    />
                    <div className="stack">
                        <FilterComponent
                            options={['HTML', 'CSS', 'JS', 'TS', 'React', 'Vue', 'Nextjs', 'GIT']}
                            handleOptionClick={handleOptionClick}
                            activeOptions={activeOptions}
                        />
                    </div>

                </section>
                <section id="writeStep3">
                    <div className='top'>
                        <h5><span>STEP.3</span> 링크를 입력해주세요!</h5>
                    </div>
                    <div className='link'>
                        <section className='linkCont'>
                            <div className='inputCont'>
                                <img className='linkIcon' />
                                <div>
                                    <input placeholder='링크 제목을 입력해주세요' name='linkTitle' />
                                    <input placeholder='http://, https://를 포함해 작성해주세요' name='linkSrc' />
                                </div>
                            </div>
                            <button type="button" className='smallBoldMain'>+ 링크 추가</button>
                        </section>
                    </div>
                </section>
                <section className='submit'>
                    <button type="button" className='back'>취소</button>
                    <button type="submit" className='confirm'>등록</button>
                </section>
            </form>
        </section>
    );
}