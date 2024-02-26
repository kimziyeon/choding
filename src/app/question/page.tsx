"use client";

import React, { useEffect, useState } from 'react';
import Quizdata from './level.json';

export default function UserQuestion() {
    const [score, setScore] = useState(0);
    const [ingId, setIngId] = useState(0);
    const [ques, setQues] = useState(Quizdata.oxQuiz);
    const ingQues = ques[ingId];


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
            setIngId(nextId)
    }else{
        {}
    }
        
    }



    return (
        <>
            <section>레벨 측정</section>
            <div className='id'>{ingQues.number}</div>
            <div className='question'>{ingQues.question}</div>
            <div className='answer'>
                <button onClick={()=>{btnHandler(true)}}>O</button>
                <button onClick={()=>{btnHandler(false)}}>X</button>
                <div>점수는 {score}</div>
            </div>
        </>
    );
}