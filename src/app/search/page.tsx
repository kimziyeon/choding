// import axios from "axios";
// import YouTube, { YouTubeProps } from 'react-youtube';
// import "./search.scss"

// export default function Search() {

//     const iframeProps = {
//         id: "ytplayer",
//         type: "text/html",
//         width: "720",
//         height: "405",
//         src: "https://www.youtube.com/embed/g_VbJkbt64g",
//         frameborder: "0",
//         allowfullscreen: "allowfullscreen",
//     };

//     const onPlayerReady: YouTubeProps['onReady'] = (event) => {
//         event.target.pauseVideo();
//     }

//     const opts: YouTubeProps['opts'] = {
//         height: '390',
//         width: '640',
//         playerVars: {
//             autoplay: 1,
//         },
//     };

//     return (
//         <>
//             {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />; */}
//             <section>
//                 강의 전체 검색
//                 <div>
//                     <iframe {...iframeProps}></iframe>
//                 </div>
//             </section>
//         </>
"use client"
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Naver from './components/Naver';
import Google from './components/Google';
import Youtube from './components/Youtube';
import SearchInputSub from '@/components/searchSub/SearchInputSub';
import './search.scss';

export default function Search() {
    const [query, setQuery] = useState<string>('');

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const q = searchParams.get('key');
        setQuery(q)
    }, [pathname, searchParams]);

    const totalSearchFunc = (q: string) => {
        if (q.length > 2) {
            setQuery(q)
        }
    }

    return (
        <section id="totalSearch">
            <section className='totalSearchHeader'>
                <SearchInputSub
                    query={query}
                    totalSearchFunc={totalSearchFunc}
                />
                <p><span>{query}</span> 검색 결과</p>
            </section>
            <section id="totalSearch1" className='totalSearchSection'>
                <p className='subheading'>동영상</p>
                <Youtube />
            </section>
            <section id="totalSearch2" className='totalSearchSection'>
                <p className='subheading'>웹문서</p>
                <Google
                    query={query}
                />
            </section>
            <section id="totalSearch3" className='totalSearchSection'>
                <p className='subheading'>블로그</p>
                <Naver />
            </section>
        </section>
    );
}