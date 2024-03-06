"use client";

import { useEffect, useState } from "react";
import QuizData from './daily.json';
import DailyquizEnd from "./DailyquizEnd";
import dayjs from 'dayjs';
import 'dayjs/locale/ko';


export default function Dailyquiz() {

    const now = dayjs();
    dayjs.locale('ko');
    const today = dayjs().format("YYYY년 MM월 DD일");
    // const itemCreatedDate = dayjs(item.date, 'YYYY년 MM월 DD일');

    const [timer, setTimer] = useState(10);
    const [ingId, setIngId] = useState(0);
    const [ques, setQues] = useState(QuizData.dailyQuiz);
    const ingQues = ques[ingId];
    const [testValue, setTestValue] = useState(false);
    const [userValue, setUserValue] = useState(null);


    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            } else {
                setTestValue(true);
                clearInterval(intervalId);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timer]);


    // useEffect(() => {
    //     console.log(userValue, typeof (userValue))
    // }, [userValue])


    const formatTime = (time) => {
        return time < 10 ? '0' + time : time;
    };

    const handleSubmit = () => {
        console.log('====================================');
        console.log(userValue);
        console.log('====================================');
        if (userValue == null) {
            setTestValue(true);
        }
    };

    const handleAnswer = (index) => {
        // console.log(testValue)
        setUserValue(index);
    };


    console.log('====================================');
    console.log(testValue);
    console.log('====================================');

    return (
        <>
            {!testValue && (

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
                            onClick={handleSubmit}>제출하기</button>
                    </div>
                </div>
            )}

            {testValue && <DailyquizEnd isCorrect={userValue == ingQues.answer} />}
        </>
    )
}