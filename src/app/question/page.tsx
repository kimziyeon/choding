"use client";

import React, { useEffect, useState } from 'react';
import QuizData from './level.json';

export default function UserQuestion() {
    const [score, setScore] = useState(0);
    const [ingId, setIngId] = useState(0);
    const [timer, setTimer] = useState(10);
    const [ques, setQues] = useState(QuizData.oxQuiz);
    const ingQues = ques[ingId];

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            if(timer>0){
                setTimer(timer -1);
            }
        }, 1000);
            return()=>clearInterval(intervalId);
        }, [timer]);
    

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextQuestion();
        }, 10000);

        return () => clearInterval(intervalId);
    }, [ingId, ques]);

    

    const btnHandler = (res)=>{
        if(res === ingQues.answer){
            setScore(score+1);
        } nextQuestion();
    };

    const nextQuestion = ()=>{
        const nextId = ingId+1;
        if(ingId < ques.length){
            setIngId(nextId);
            setTimer(10);
    }else{
        {}
    }}

    const formatTime = (time) => {
        return time < 10 ? '0' + time : time;
    };

    return (
        <>
            <section>레벨 측정</section>
            <div className='id'>{ingQues.number}</div>
            <div className='question'>{ingQues.question}</div>
            <div className='answer'>
                <button onClick={()=>{btnHandler(true)}}>O</button>
                <button onClick={()=>{btnHandler(false)}}>X</button>
                <div>점수는 {score}</div>
                <div className='timer'>00:{formatTime(timer)}</div>
            </div>
        </>
    );
}
