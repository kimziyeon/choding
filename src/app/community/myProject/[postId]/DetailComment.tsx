import { useState } from 'react';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Image from 'next/image';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { myProjectCommentType } from '@/types/datatype';
import detailStore from '@/lib/server/detailStore';
import './DetailComment.scss'

export default function DetailComment({ result, fetchData }) {
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
          userId: '비회원',
          comment: '',
          date: today
      }
    },
  });

  const onSubmit = async (data: myProjectCommentType) => {
    console.log('-----------댓글 데이터------------')
    console.log(data)
    console.log('-------------------------------')
    
    const res = await detailStore('put', 'myProject', data, result.postId);

    if (res && res.status === 200) { 
      await fetchData(); // 데이터 업데이트 !!
    } else {
      console.error('DetailComment 41 업데이트 실패...', res);
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
              <p className='mydUserPic'><Image src="https://blog.kakaocdn.net/dn/czXMO9/btrVoGszPDd/HXN5TVHM4d6AbXlQN0tdkK/img.jpg" width={36} height={36} alt="user profile" /></p>
              <p className='mydUserId'>{item.userId}</p>
              <p className='mydCommentDate'>{diffInDaysForItem}일 전</p>
            </div>
            <div className='commentText'>{item.comment}</div>
          </div>
        })
      }
    </section>
  </section>
}