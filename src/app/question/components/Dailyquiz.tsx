"use client";

import { useEffect, useState } from "react";
import QuizData from '../daily.json';
import DailyquizEnd from "./DailyquizEnd";
import dayjs from 'dayjs';
import 'dayjs/locale/ko';


export default function Dailyquiz({ finishTest }) {

    const now = dayjs();
    dayjs.locale('ko');
    const today = dayjs().format("YYYY년 MM월 DD일");
    // const itemCreatedDate = dayjs(item.date, 'YYYY년 MM월 DD일');

    const [timer, setTimer] = useState(10);
    const [ingId, setIngId] = useState(0);
    const [ques, setQues] = useState(QuizData.dailyQuiz);
    const ingQues = ques[ingId];
    const [testValue, setTestValue] = useState(false);
    const [isValue, setIsvalue] = useState(null);


    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timer]);

    useEffect(() => {
        if (timer === 0) {
            setTestValue(true);
            setIsvalue(false);
        }
    }, [timer]);

    const formatTime = (time) => {
        return time < 10 ? '0' + time : time;
    };

    const handleAnswer = (userAnswer) => {
        if (userAnswer === ingQues.answer) {
            setIsvalue(true);
        } else {
            setIsvalue(false);
        }
    } setTestValue{ true};


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
                                                value={index + 1}
                                                onClick={() => handleAnswer(index + 1)}
                                            />
                                            {choice}
                                        </label>
                                    </p>
                                ))}

                                {/* <p><label className="radio_cus"><input type="radio" id="choice1" name="choice" value="1" />{ingQues.choice[0]}</label></p>
                                <p><label className="radio_cus"><input type="radio" id="choice2" name="choice" value="2" />{ingQues.choice[1]}</label></p>
                                <p><label className="radio_cus"><input type="radio" id="choice3" name="choice" value="3" />{ingQues.choice[2]}</label></p>
                                <p><label className="radio_cus"><input type="radio" id="choice4" name="choice" value="4" />{ingQues.choice[3]}</label></p>*/}

                            </form>
                        </div>
                        <p className='timer'>00:{formatTime(timer)}</p>
                        <button className='popUpBtn'
                            onClick={finishTest}>제출하기</button>
                    </div>
                </div>
            )}

            {testValue && <DailyquizEnd />}
        </>
    )
}