import { googleSearchItem, naverSearchItem } from '@/types/datatype';
import './contentsFigure.scss';

interface contentsFigureType {
    result: googleSearchItem[] | naverSearchItem[] | null;
    option: number;
}

export default function ContentsFigure({ result, option }: contentsFigureType) {
    if (result === null) {
        return <div>검색 결과가 없습니다!</div>
    }

    return (
        result.map((item, i) => {
            // Google 검색 결과
            if (option === 1 && 'pagemap' in item) {
                const googleItem = item as googleSearchItem;
                return (
                    <figure className='contentsFigure' key={googleItem.title + i}>
                        <a href={googleItem.link} target='_blank'>
                            {
                                !googleItem.pagemap || !googleItem.pagemap.cse_thumbnail || !googleItem.pagemap.cse_thumbnail[0]
                                    ? <div className='noImage'></div>
                                    : <img src={googleItem.pagemap.cse_thumbnail[0].src} alt={googleItem.title} />
                            }
                            <figcaption>
                                <div className='figcaption'>
                                    <div className='top'>
                                        <p className='title'>{googleItem.title}</p>
                                        <p className='description'>{googleItem.snippet}</p>
                                    </div>
                                    <span className='author'>{null}</span>
                                </div>
                            </figcaption>
                        </a>
                    </figure>
                );
            }
            // Naver 검색 결과
            else if (option === 2) {
                const naverItem = item as naverSearchItem;
                return (
                    <figure className='contentsFigure' key={naverItem.title + i}>
                        <a href={naverItem.link} target='_blank'>
                            <figcaption>
                                <div className='figcaption'>
                                    <div className='top'>
                                        <p className='title'>{naverItem.title}</p>
                                        <p className='description'>{naverItem.description}</p>
                                    </div>
                                    <span className='author'>{naverItem.bloggername}</span>
                                </div>
                            </figcaption>
                        </a>
                    </figure>
                );
            }
            return null;
        })
    );
}