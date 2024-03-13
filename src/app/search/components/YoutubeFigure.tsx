import { youtubeSnippet } from '@/types/datatype';
import Image from 'next/image';
import './YoutubeFigure.scss'
import { useState } from 'react';
import study from '@/essets/study.png';
import studyChecked from '@/essets/studychecked.png';

interface youtubeFigureType {
    result: youtubeSnippet[]
}

export default function YoutubeFigure({ result }: youtubeFigureType) {
    const [studyStates, setStudyStates] = useState<Record<string, boolean>>({});

    if (result.length < 1) {
        return <div>검색 결과가 없습니다!</div>
    }

    const toggleStudyState = (videoId: string) => {
        setStudyStates(prev => ({ ...prev, [videoId]: !prev[videoId] }));
    }

    return (
        result && result.filter((item, i) => i < 6).map((item, i) => ( // 최대 6개까지만 출력!!!
            <figure className='contentsFigure' key={item.resourceId.videoId}>
                <button className='study' onClick={() => toggleStudyState(item.resourceId.videoId)}>
                    <Image src={studyStates[item.resourceId.videoId] ? studyChecked : study} alt='강의 책갈피 버튼' width="20" height="25" />
                </button>
                <a href={`https://www.youtube.com/watch?v=${item.resourceId.videoId}`} target='_blank'>
                    <img src={item.thumbnails.medium ? item.thumbnails.medium?.url : item.thumbnails.default.url} alt="썸네일 이미지" />
                    <figcaption>
                        <div className='figcaption'>
                            <div className='top'>
                                <p className='title'>{item.title}</p>
                                <p className='description'>{item.description}</p>
                            </div>
                            <span className='author'>{item.videoOwnerChannelTitle}</span>
                        </div>
                    </figcaption>
                </a>
            </figure>
        ))
    );
}
