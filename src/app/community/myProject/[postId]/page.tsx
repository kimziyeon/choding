"use client";
import { useEffect } from 'react';
import './MyProjectDetail.scss'
import { myProjectStore } from '@/app/community/myProject/context/myProject';

export default function MyProjectDetail({ params }: any) {
    const { result } = myProjectStore();
    console.log(params.postId)

    return (
        <section id="MyProjectDetail">

        </section>
    );
}