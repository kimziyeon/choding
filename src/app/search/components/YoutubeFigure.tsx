import { youtubeSnippet } from '@/types/datatype';
import './YoutubeFigure.scss'

interface youtubeFigureType {
    result: youtubeSnippet[]
}

export default function YoutubeFigure({ result }: youtubeFigureType) {
    if (result.length < 1) {
        return <div>검색 결과가 없습니다!</div>
    }
    return (
        result && result.filter((item, i) => i < 6).map((item, i) => ( // 최대 6개까지만 출력!!!
            <figure className='contentsFigure' key={item.channelId + i}>
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
