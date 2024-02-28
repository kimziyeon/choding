"use client";
import { useEffect } from 'react';
import './MyProjectDetail.scss'
import { myProjectStore } from '@/app/community/myProject/context/myProject';

export default function MyProjectDetail({ params }: any) {
    const { selectItem } = myProjectStore();
    console.log(params.postId)

    return (
        <section id="MyProjectDetail">
            내 프로젝트 {selectItem.postId}번째 게시글 디테일
        </section>
    );
}