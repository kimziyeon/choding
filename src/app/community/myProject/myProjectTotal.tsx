//              mongodb get post delete test
"use client";

import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import serverStore from '@/lib/server/serverStore';
import { myProjectPostType } from '@/types/datatype';
import './myProjectTotal.scss';
import FigureComponent from "./components/FigureComponent";
import WriteMyProject from './components/WriteButton/WriteMyProject';

export default function MyProjectTotal() {
  const [result, setResult] = useState([]);
  const [postData, setPostData] = useState<myProjectPostType | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function dataCrl(type: string, idx?: number) {
    const res = await serverStore(type, 'myProject');

    if (res !== null) {
      setResult(res.data);
    }
  }

  useEffect(() => {
    dataCrl('get')
  }, [])

  useEffect(() => {
    if (submitting && postData !== null) {
      dataCrl('post');
      setSubmitting(false);
    }
  }, [postData, submitting]);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    let writeData: any = Object.fromEntries(formdata.entries());

    {/* 
    const newData: myProjectPostType = {
      postId: Date.now(),
      title: writeData.title,
      content: writeData.content,
      authorId: writeData.authorId,
      token: 'token',
      date: '2024년 2월 28일',
      comments: []
    };
    */}

    await setPostData(newData);
    setSubmitting(true);
    dataCrl('insert');
  }

  return (
    <section id="MyProjectTotal">
      <FigureComponent result={result} />

    </section>
  );
}
