"use client";

import { useEffect, useState } from "react";
import QuizData from './daily.json';
import DailyquizStart from "./DailyquizStart";
import DailyquizEnd from "./DailyquizEnd";
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useQuestion } from '@/context/questionStore';



export default function Dailyquiz() {

    const now = dayjs();
    dayjs.locale('ko');
    const today = dayjs().format("YYYY년 MM월 DD일");

    const [timer, setTimer] = useState(10);
    const [ingId, setIngId] = useState(0);
    const [ques, setQues] = useState(QuizData.dailyQuiz);
    const ingQues = ques[ingId];
    // const [testValue, setTestValue] = useState(false);
    const [userValue, setUserValue] = useState(null);
    //test state
    const [testState, setTestState] = useState(1);

    useEffect(() => {
        let intervalId: any;
        if (testState == 2) {
            intervalId = setInterval(() => {
                if (timer > 0) {
                    setTimer(timer - 1);
                } else {
                    clearInterval(intervalId);
                    setTestState(3);
                }
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [timer, testState]);



    const formatTime = (time) => {
        return time < 10 ? '0' + time : time;
    };

    // const handleSubmit = () => {
    //     setTestValue(true);
    //     // 제출하기 버튼을 누르면 퀴즈 종료
    // };


    const handleAnswer = (index) => {
        // console.log('====================================');
        // console.log(index);
        // console.log('====================================');
        setUserValue(index);
    };






    return (
        <>
            {testState === 1 && <DailyquizStart startTest={setTestState} />}
            {testState === 2 &&

                <div className='popUp02'>
                    <div className='popUpContents'>
                        <h3 className='dailyNum'>{today}</h3>
                        <div className='qQuestion'>{ingQues.question}</div>
                        <div className='qAnswer'>
                            <form>

                                {ingQues.choice.map((choice, index) => (
                                    <p key={index}>
                                        <label className="radio_cus">
                                            <input
                                                type="radio"
                                                name="choice"
                                                value={index}
                                                onChange={() => handleAnswer(index)}
                                            />
                                            {choice}
                                        </label>
                                    </p>
                                ))}

                            </form>
                        </div>
                        <p className='timer'>00:{formatTime(timer)}</p>

                        <button className='popUpBtn'
                            onClick={() => { setTestState(3) }}>제출하기</button>
                    </div>
                </div>
            }

            {testState === 3 && <DailyquizEnd />}

            {/* {testValue && <DailyquizEnd isCorrect={userValue == ingQues.answer} />} */}
        </>
    )
}