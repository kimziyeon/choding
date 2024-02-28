// 내 프로젝트 리스트
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { myProjectStore } from '@/app/community/myProject/context/myProject';
import { myProjectPostType } from '@/types/datatype';
import './figureComponent.scss';
import { useEffect } from 'react';

export default function FigureComponent() {
    const router = useRouter();
    const { setResult, result } = myProjectStore();

    const onClickHandler = async (num: number) => {
        router.push(`/community/myProject/${num}`)
    }

    useEffect(() => {
        console.log(result)
    }, [result])

    return (
        result.map((item) => (
            <figure className='contentsFigure'
                onClick={() => { onClickHandler(item.postId) }}
                key={item.postId}>
                {
                    item.imgSrc === null ? <div className='noImage'></div> : <img src={item.imgSrc} alt={item.title} />
                }
                <figcaption>
                    <div className='figcaption'>
                        <div className='top'>
                            <span className='goal'>#{item.goal}</span>
                            <p className='title'>{item.title}</p>
                            <p className='overview'>{item.overview}</p>
                        </div>
                        <div className='bottom'>
                            <span className='date'>{item.date}</span>
                            <span className='userId'>{item.userId}</span>
                        </div>
                    </div>
                </figcaption>
            </figure>
        ))
    );
}
