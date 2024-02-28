//              mongodb get post delete test
"use client";

import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import serverStore from '@/lib/server/serverStore';
import { myProjectPostType } from '@/types/datatype';
import './myProjectTotal.scss';
import FigureComponent from "./components/FigureComponent";
import WriteMyProject from './components/WriteButton/WriteMyProject';
import { myProjectStore } from "./context/myProject";

export default function MyProjectTotal() {
  const { setResult, result } = myProjectStore();

  async function dataCrl(type: string, idx?: number) {
    const res = await serverStore(type, 'myProject');

    if (res !== null) {
      setResult(res.data);
    }
  }

  useEffect(() => {
    dataCrl('get')
  }, [])

  if (!Array.isArray(result)) {
    dataCrl('get');
    return <div id="Loading">~ 로딩중입니다 ~</div>;
  }

  return (
    <section id="MyProjectTotal">
      <FigureComponent />
    </section>
  );
}
