"use client"
import { useEffect, useState } from 'react';
import youtubeResult from '@/app/youtubeResult0.json'
import Link from 'next/link';

export default function Youtube() {
    const [result, setResult] = useState([]);

    const youtubeSetting = () => {
        let itemArray = [];
        youtubeResult.forEach((obj) => {
            if (obj.items) {
                obj.items.forEach((obj) => {
                    itemArray.push(obj.snippet)
                })
            }
        })
        setResult(itemArray);
    }

    useEffect(() => {
        youtubeSetting();
    }, [])

    console.log(result);

    // const result = youtubeResult.items;

    return (
        <section style={{ paddingTop: '6rem', minHeight: '90vh' }}>
            {
                result.map((item) => {
                    return <Link href={`https://youtu.be/${item.resourceId.videoId}`} key={item.resourceId.videoId}>
                        <figure>
                            <img src={item.thumbnails.medium.url}></img>
                            <figcaption>
                                <h3>{item.title}</h3>
                                {/* <p>{item.description}</p> */}
                            </figcaption>
                        </figure>
                    </Link>
                })
            }
        </section>
    )
}