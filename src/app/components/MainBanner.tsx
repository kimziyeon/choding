import Image from 'next/image';
import MainCharactor from '@/essets/mainCharactor.png';
import './mainBanner.scss';
import SearchInputSub from '@/components/searchSub/SearchInputSub';

export default function MainBanner() {
    return (
        <section className="mainBanner">
            <div className="contents">
                <div className='text'>
                    <p>
                        <span className='mainColor'>농담곰</span>님&nbsp;어서오세요!
                    </p>
                    <p className='textMain'>오늘은&nbsp;
                        <span className='mainColor box'>리액트 초급</span>
                        을<br></br>공부해볼까요?
                    </p>
                </div>
                <SearchInputSub />
            </div>
            <Image
                className='bg'
                src={MainCharactor}
                alt='charactor Image'
                width={333} height={234}
            ></Image>
        </section>
    )
}