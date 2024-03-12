'use client'

import axios from 'axios';
import './post.scss'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import detailStore from '@/lib/server/detailStore';
import swal from 'sweetalert';
import DetailComment from './detailComment';

export default function QnADetail({ params }: any) {
    const [data, setData] = useState();
    const [comments, setComments] = useState<any[]>([]);
    const [isOnLikeClick, setOnLike] = useState(true);
    const { data: session, status } = useSession();
    const id = params.postId;
    const name = session?.user?.name;
    const email = session?.user?.email;
    const postId = data?.[0]?.postId;
    const img = session?.user?.image;
    const today = new Date();
    const month: number = today.getMonth() + 1;
    const day: number = today.getDate();
    const thisDay = (month + '월' + day + '일')

    console.log(data?.[0].like.length)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formdata: any) => {
        // console.log(formdata)
        const commentText = formdata.comment;
        const comment = {
            field: "comment",
            updateKey: "postId",
            updateValue: postId,
            updateType: "push",
            value: { commentText, name, email, img, thisDay }
        }


        if (status !== 'authenticated') {
            swal("비회원이시군요?", "로그인 후 댓글을 작성하실 수 있습니다 :)", "warning")
            return
        }



        const res = await detailStore('put', 'qna', comment, postId)

        await fetchData();
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/post?colName=qna`);
            const d = response.data.filter((obj: any) => obj._id == id)
            const e = d[0].comment

            // console.log(e)

            setData(d);
            setComments(prevComments => [...prevComments, ...e]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const likedAlready = data?.[0]?.like.some(obj => obj.email === session?.user?.email)
    const onClicklikeHandler = async () => {
        if (!session?.user?.email) {
            swal('잠깐!', '로그인 후 이용해주세요', 'warning');
            return;
        }

        const filtered = data?.[0].like.filter((value) => {
            return value.email !== email
        })

        console.log(filtered)

        const updateResult = {
            field: "like",
            updateKey: "postId",
            updateValue: postId,
            updateType: likedAlready ? 'set' : 'push',
            value: likedAlready ? filtered : { email: email }
        };

        const res = await detailStore('put', 'qna', updateResult, postId);
        if (res && res.status === 200) {
            await fetchData();
            setOnLike(!isOnLikeClick);
        } else {
            console.error('myProject like error', res);
        }
    }

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
                        {
                            comments && (
                                <>
                                    <div className='commentLength'>{comments.length}개의 댓글</div>
                                </>
                            )
                        }

                        <button
                            type='button'
                            onClick={() => { onClicklikeHandler(data.postId) }}
                            className={isOnLikeClick && likedAlready ? 'active like' : 'like'}>
                            <p>♥ <span>{data?.[0].like.length}</span></p>
                        </button>

                        <textarea {...register('comment', { required: true })} placeholder='여러분들의 소중한 의견을 부탁드립니다!' />
                        <div className='qnapostBtn'>
                            <button type='submit'>댓글 작성</button>
                        </div>
                    </form>
                </div>
                )
            }
            <div className='commentContainer'>
                {
                    comments.map((comment, index) => (
                        <article key={index} className='commentbox'>
                            <div className='commentinfo'>
                                <p>{comment.img}</p>
                                <p>{comment.name}</p>
                            </div>
                            <div className='textbox'>
                                <p className='commentText'>{comment.commentText}</p>
                                <p>{comment.thisDay}</p>
                            </div>
                            <div>답글 한숟가락</div>
                            <DetailComment />
                        </article>
                    ))
                }
            </div>


        </>
    );
}