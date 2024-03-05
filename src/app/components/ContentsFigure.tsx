import Image from 'next/image';
import { googleSearchItem, myProjectPostType, naver } from '@/types/datatype';
import './contentsFigure.scss'

interface contentsFigureType {
    result: googleSearchItem[] | naver | null;
    option: number;
}
export default function ContentsFigure({ result, option }: contentsFigureType) {
    return (
        result && result.map((item, i) => (
            <figure className='contentsFigure' key={item.title + i}>
                <a href={item.link} target='_blank'>
                    {
                        (option == 2 || option == 3) || !item.pagemap || !item.pagemap.cse_thumbnail || !item.pagemap.cse_thumbnail[0] ? <div className='noImage'></div> : <img src={item.pagemap.cse_thumbnail[0].src} alt={item.title} />
                    }
                    <figcaption>
                        <div className='figcaption'>
                            <div className='top'>
                                <p className='title'>{item.title}</p>
                                <p className='description'>{option === 2 || option === 10 || item.description ? item.description : item.snippet}</p>
                            </div>
                            <span className='author'>글쓴이</span>
                        </div>
                    </figcaption>
                </a>
            </figure>
        ))
    );
}
