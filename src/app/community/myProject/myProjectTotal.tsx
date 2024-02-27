//              mongodb get post delete test
"use client";

import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { myProjectPostType } from '@/types/datatype';
import './myProjectTotal.scss';
import FigureComponent from "./components/FigureComponent";
import WriteMyProject from './components/WriteButton/WriteMyProject';

export default function Home() {
  const [result, setResult] = useState([]);
  const [postData, setPostData] = useState<myProjectPostType | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function dataCrl(type: string, idx?: number) {
    let res: AxiosResponse | null = null;

    switch (type) {
      case 'all':
        res = await axios.get('/api/mongodb');
        break;
      case 'insert':
        res = await axios.post('/api/mongodb', postData);
        break;
      case 'delete':
        res = await axios.delete(`/api/mongodb/${idx}`);
        break;
      case 'put':
        res = await axios.put(`/api/mongodb/${idx}`, postData);
        break;
    }

    if (res !== null) {
      console.log(res.data);
      setResult(res.data);
    }
  }

  useEffect(() => {
    dataCrl('all')
  }, [])

  useEffect(() => {
    if (submitting && postData !== null) {
      dataCrl('insert');
      setSubmitting(false);
    }
  }, [postData, submitting]);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    let writeData: any = Object.fromEntries(formdata.entries());

    const newData: myProjectPostType = {
      postId: Date.now(),
      title: writeData.title,
      content: writeData.content,
      authorId: writeData.authorId,
      token: 'token',
      date: new Date().getTime(),
      comments: []
    };

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
