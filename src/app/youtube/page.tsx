"use client"
import { useState } from 'react';
import youtubeResult from '@/app/youtubeResult.json'
import Link from 'next/link';

export default function Youtube() {

    console.log(youtubeResult)
    return (
        <section style={{ paddingTop: '6rem', minHeight: '90vh' }}>
            {
                youtubeResult.map((item) => {
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