import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { myProjectPostType } from '@/types/datatype';
import './DetailComment.scss'

interface DetailCommentProps {
    result: myProjectPostType;
}
  
export default function DetailComment({ result }: DetailCommentProps) { 
    // 작성일 차이 계산
    dayjs.extend(customParseFormat);
    const now = dayjs();

    return <section id="myProjectDetailComment">
                <section className='mpdInputComment'>
                  <p><b>{result.comments ? result.comments.length : '0'}</b>개의 댓글</p>
            <textarea placeholder='댓글을 작성해주세요' />
            <div className='btnCont'>
                  <button>댓글 작성</button>
            </div>
                </section>
    
                <section id="DetailComment">    
                {
                result.comments.map((item, i) => {
                    const itemCreatedDate = dayjs(item.date, 'YYYY년 MM월 DD일');
                    if (!itemCreatedDate.isValid()) {
                        console.error(`Invalid date format for comment at index ${i}:`, item.date);
                        return null;
                      }
                      const diffInDaysForItem = now.diff(itemCreatedDate, 'day');
                      
                    return <div className='mpdComment' key={i}>
                      <div className='top'>
                        <p className='mydUserId'>{item.userId}</p>
                        <p className='mydCommentDate'>{diffInDaysForItem}일 전
                        </p>
                      </div>
                      <div className='commentText'>{item.comment}</div>
                    </div>
                  })
                }
        </section>
    </section>
}