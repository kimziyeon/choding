"use client";

import '../../mypage.scss';
import serverStore from '@/lib/server/serverStore';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { myStudyType } from '@/types/datatype';
import Image from 'next/image';
import study from '@/essets/study.png';
import studyChecked from '@/essets/studychecked.png';
import axios from 'axios';
import swal from 'sweetalert';



export default function MyStudyContents() {

    const { data: session, status } = useSession();
    const [studyData, setStudyData] = useState<myStudyType[]>([]);
    const [studyStates, setStudyStates] = useState<Record<string, boolean>>({});


    const toggleStudyState = (videoId: string, bookMarkId: number) => {
        setStudyStates(prev => ({ ...prev, [videoId]: !prev[videoId] }));

        if (!session?.user?.email) {
            swal('잠깐!', '로그인 후 이용해주세요', 'warning');
            return;
        }

        const desiredVideo = videoId;
        const study = result.find(item => item.resourceId.videoId === desiredVideo)
        const email = session.user.email;
        setStudyData(prevData => [...prevData, study])

        const data = { email, study, bookMarkId }

        axios.post('/api/bookmark', data)
    }



    useEffect(() => {
        fetchMyStudy();
    }, [session]);


    const fetchMyStudy = async () => { //내 책갈피(myStudy) 불러오기
        try {
            const res = await serverStore('get', 'myStudy', null, null);
            if (res) {
                const getstudy = res.data.filter((obj: myStudyType) => obj.email === session?.user?.email);
                console.log("====================")
                console.log(getstudy)
                console.log("====================")
                setStudyData(getstudy);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    studyData.map((data, i) => (
        console.log(data.study)
    )

    )

    return (
        <div className='studyContents'>
            {studyData.map((data, i) => (
                <figure className='contentsFigure' key={data.study.resourceId.videoId}>
                    <button className='study'>
                        {/* <button className='study' onClick={() => toggleStudyState(data.study.resourceId.videoId)}> */}
                        <Image src={studyStates[data.study.resourceId.videoId] ? studyChecked : study} alt='강의 책갈피 버튼' width="20" height="25" />
                    </button>
                    <a href={`https://www.youtube.com/watch?v=${data.study.resourceId.videoId}`} target='_blank'>
                        <img src={data.study.thumbnails.medium ? data.study.thumbnails.medium?.url : data.study.thumbnails.default.url} alt="썸네일 이미지" />
                        <figcaption>
                            <div className='figcaption'>
                                <div className='top'>
                                    <p className='title'>{data.study.title}</p>
                                    <p className='description'>{data.study.description}</p>
                                </div>
                                <span className='author'>{data.study.videoOwnerChannelTitle}</span>
                            </div>
                        </figcaption>
                    </a>
                </figure>
            ))}
        </div>
    )
}