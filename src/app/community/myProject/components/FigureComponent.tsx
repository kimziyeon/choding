// 내 프로젝트 리스트

import Image from 'next/image';
import Link from 'next/link';
import { myProjectPostType } from '@/types/datatype';
import './figureComponent.scss';

interface FigureComponentProps {
    result: myProjectPostType[];
}

// export type myProjectPostType = {
//     date: string,
//     overview: string,
//     position: string[],
//     postId: number,
//     title: string,
//     userId: string,
//     goal: string,
//     link: string[],
//     member: string[],
//     stack: string[],
//     imgSrc: string,
//     comments: myProjectCommentType[]
// }


export default function FigureComponent({ result }: FigureComponentProps) {
    return (
        result.map((item) => (
            <Link href={`/community/myProject/${item.postId}`} key={item.postId}>
                <figure className='contentsFigure'>
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
            </Link>
        ))
    );
}
