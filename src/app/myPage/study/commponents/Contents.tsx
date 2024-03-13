"use client";

import '../../mypage.scss';
import serverStore from '@/lib/server/serverStore';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';



export default function MyStudyContents() {

    const { data: session, status } = useSession();
    const [project, setProject] = useState([]);
    const [qna, setQnA] = useState([]);


    useEffect(() => {
        fetchProject();
        fetchQnA();
    }, []);

    const fetchProject = async () => {
        try {
            const response = await serverStore('get', 'myProject');
            if (response) {
                const getProject = response.data;
                console.log(getProject)
                setProject(getProject);
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
                console.log(getQnA)
                setQnA(getQnA);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // useEffect(() => {
    //     async function myProjectPick() {
    //         const myProjectInfo: any = await axios.get(`/api/myProject?email=${session?.user?.email}`);

    //     }
    // }, [])


    return (
        <div className='studyContents'>
            <div>동영상</div>
            <div>
                <div></div>
                <p>웹 개발자라면 한 번쯤 써..</p>
                <b>농담곰TV</b>
            </div>
        </div>
    )
}