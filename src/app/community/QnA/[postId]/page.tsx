'use client'

import axios from 'axios';
import './post.scss'
import { useEffect, useState } from 'react';

export default function QnADetail() {
    const [data, setData] = useState([]);
    const [result, setResult] = useState([]);
    // const nowList = (data.findIndex((itme)=>itme._id))
    const nowList = (data.findIndex((itme)=>itme._id))

    console.log(data[0])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/post?colName=qna');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>{
            data && data.map((item, index) => (
                <div className="postMain" key={index}>
                    <div className="postContainer">
                        <h2>{item.title}</h2>
                        <p>{item.name}</p>
                        <div className="postDetail">
                            <p dangerouslySetInnerHTML={{ __html:item.content}}></p>
                        </div>
                    </div>
                    <form action="">
                        <input type='' name='title' required />
                        <input type="text" />
                    </form>
                </div>
            ))
        }

        </>
    );
}