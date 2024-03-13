"use client";

import serverStore from '@/lib/server/serverStore';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import '../../mypage.scss';
import Image from 'next/image';
import heart from '@/essets/heart.svg';




export default function MyCommunityContents() {


    const { data: session, status } = useSession();
    const [project, setProject] = useState([]);
    const [qna, setQnA] = useState([]);
    const [result, setResult] = useState([]);


    useEffect(() => {
        fetchProject();
        fetchQnA();
    }, [session]);

    const fetchProject = async () => {
        try {
            const response = await serverStore('get', 'myProject');
            if (response) {
                const result = response.data.filter(obj => obj.email === session?.user?.email);
                setProject(result);

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const fetchQnA = async () => {
        try {
            const response = await serverStore('get', 'qna');
            if (response) {
                const getQnA = response.data;
                // console.log(getQnA)
                setQnA(getQnA);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };




    return (
        <div >
            <div className='commuContents'>
                <figure>
                    <div></div>
                    <figcaption>
                        <div>{session?.user?.name}</div>
                        <b>{project.title}</b>
                        <p>개념부터 학습방법까지 한..</p>
                    </figcaption>
                    <p className='heart'>
                        <Image src={heart} alt='heart'
                            width={20} height={20}></Image>
                        <span>1000</span>
                    </p>
                </figure>

            </div>
        </div>
    )
}