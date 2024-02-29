"use client";
import { useEffect, useState } from 'react';
import { myProjectStore } from '@/app/community/myProject/context/myProject';
import serverStore from '@/lib/server/serverStore';
import './MyProjectDetail.scss'

export default function MyProjectDetail({ params }: any) {
  const [result, setResult] = useState();
  
  async function dataCrl(type: string, postId: number) {
        const res = await serverStore(type, 'myProject', null, postId);
    
        if (res !== null) {
            console.log('--------res---------')
            console.log(res.data)
            // setResult(res.data);
        }
      }
    
    useEffect(() => {
          console.log(params.postId)
          dataCrl('detail', params.postId)
      }, [params.postId])
    
      if (!Array.isArray(result)) {
        return <div id="Loading">~ 로딩중입니다 ~</div>;
      }
      console.log(result)

    return (
        <section id="MyProjectDetail">
            디테일 페이지
        </section>
    );
}