'use client'

import axios from 'axios';
import './post.scss'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import detailStore from '@/lib/server/detailStore';

export default function QnADetail({ params }: any) {
    const [data, setData] = useState();
    const [comment, setComment] = useState<any>('');
    const { data: session, status } = useSession();
    const id = params.postId
    const name = session?.user?.name

    console.log(data)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(); 
    

    const onSubmit = async (formdata:any) =>{
        // console.log(formdata)
        const commentText = formdata.comment;
        const comment = {commentText, name}

        // console.log(comment)

        const res = await detailStore('put','qna',comment)
        await fetchData();
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/post?colName=qna`);
            const d = response.data.filter((obj: any) => obj._id == id)
            const e = d[0].comment

            // console.log(e)

            setData(d);
            setComment(e);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {
                data && (<div className="postMain">
                    <div className="postContainer">
                        <h2>{data[0].title}</h2>
                        <p>{data[0].userName}</p>
                        <div className="postDetail">
                            <p dangerouslySetInnerHTML={{ __html: data[0].content }}></p>
                        </div>
                    </div>
                    <form action="" className='postForm' onSubmit={handleSubmit(onSubmit)}>
                        <textarea {...register('comment', { required: true })} placeholder='여러분들의 소중한 의견을 부탁드립니다!'/>
                        <div className='qnapostBtn'>
                            <button type='submit'>댓글 작성</button>
                        </div>
                    </form>
                </div>
                )
            }
                <div className='commentContainer'>
                    {
                        // comment &&(
                        //     <div></div>
                        // )
                    }
                </div>


        </>
    );
}