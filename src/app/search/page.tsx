"use client"
import Naver from './components/Naver';
import Google from './components/Google';
import Youtube from './components/Youtube';
import './search.scss';
import SearchInputSub from '@/components/searchSub/SearchInputSub';

export default function Search() {
    return (
        <section id="totalSearch">
            <section className='totalSearchHeader'>
                <SearchInputSub />
                <p><span>#리액트 훅</span> 검색 결과</p>
            </section>
            <section id="totalSearch1" className='totalSearchSection'>
                <p className='subheading'>동영상</p>
                <Youtube />
            </section>
            <section id="totalSearch2" className='totalSearchSection'>
                <p className='subheading'>웹문서</p>
                <Google />
            </section>
            <section id="totalSearch3" className='totalSearchSection'>
                <p className='subheading'>블로그</p>
                <Naver />
            </section>
        </section>
    );
}