"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Image from 'next/image';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { myProjectCommentType } from '@/types/datatype';
import detailStore from '@/lib/server/detailStore';
import swal from 'sweetalert';
import './DetailComment.scss'

export default function DetailComment({ result, fetchData }) {
    const { data: session, status } = useSession();

  // 작성일 차이 계산
  dayjs.extend(customParseFormat);
  const now = dayjs();
  dayjs.locale('ko');
  const today = dayjs().format("YYYY년 MM월 DD일");

  const { formState: { errors }, register, watch, setValue, handleSubmit: handleFormSubmit } = useForm<myProjectCommentType>({
    defaultValues: {
      updateKey: 'postId',
      updateValue: result.postId,
      updateType: 'push',
      field: 'comments',
      value: {
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
          comment: '',
          date: today
      }
    },
  });

  const onSubmit = async (data: myProjectCommentType) => {
    if(status !== 'authenticated'){
      swal("비회원이시군요?", "로그인 후 댓글을 작성하실 수 있습니다 :)", "warning")
      return
    }
    
    const res = await detailStore('put', 'myProject', data, result.postId);

    if (res && res.status === 200) { 
      await fetchData();
    } else {
      console.error('DetailComment 54 업데이트 실패...', res);
    }

    setValue('value.comment', '');
  }

  return <section id="myProjectDetailComment">
    <section className='mpdInputComment'>
      <p><b>{result.comments ? result.comments.length : '0'}</b>개의 댓글</p>
      <form onSubmit={handleFormSubmit(onSubmit)}>
        <textarea
          placeholder='댓글을 작성해주세요'
          {...register('value.comment', {
            minLength: {
              value: 2,
              message: ''
            }
          })}
        />
        <div className='btnCont'>
          <button type='submit'>댓글 작성</button>
        </div>
      </form>
    </section>

    <section id="DetailComment">
      {
        result.comments.map((item, i) => {
          const itemCreatedDate = dayjs(item.date, 'YYYY년 MM월 DD일');
          if (!itemCreatedDate.isValid()) {
            console.error(`Invalid date format for comment at index ${i}:`, item.date);
            return '0';
          }
          const diffInDaysForItem = now.diff(itemCreatedDate, 'day');

          return <div className='mpdComment' key={i}>
            <div className='top'>
              <p className='mydUserPic'><Image src={item.image} width={36} height={36} alt="user profile" /></p>
              <p className='mydUserId'>{item.name}</p>
              <p className='mydCommentDate'>{diffInDaysForItem}일 전</p>
            </div>
            <div className='commentText'>{item.comment}</div>
          </div>
        })
      }
    </section>
  </section>
}