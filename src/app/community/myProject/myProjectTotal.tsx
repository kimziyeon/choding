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
      console.log(result)
    }
  }

  useEffect(() => {
    dataCrl('get')
  }, [])

  return (
    <section id="MyProjectTotal">
      <FigureComponent result={result} />

    </section>
  );
}
