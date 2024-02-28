"use client";
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
// import type { MyType } from "../app/types/datatype"/


const NaverSearch = () => {
    const [text, setText] = useState('');
    const [blog, setBlog] = useState([]);

    // useEffect(() => {
    //     search()
    // }, [text])

    // const search = async () => {
    //     const result = await axios.get('/api/', { params: { q: text } });
    //     setBlog(result.data.items);
    // };


    const search = async () => {
        const result = await axios.get('/api/', { params: { q: text } });
        setBlog(result.data.items.map(item => ({
            ...item,
            title: item.title.replace(/(<([^>]+)>)/ig, ""),
            description: item.description.replace(/(<([^>]+)>)/ig, "")
        })));
    };


    return (
        <>
            <div>
                <input type="text" onChange={(e) => setText(e.target.value)} />
                <button onClick={search}> 네이버 키워드 검색 </button>
            </div>
            <div>
                <h4>검색결과</h4>
                <ul>
                    {blog.map((item, index) => (
                        <li key={index}>
                            <h3><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h3>
                            <div>{item.description}</div>
                            <div>{item.bloggername}</div>
                        </li>
                    ))}
                </ul>
            </div >
        </>
    );
};

export default NaverSearch;