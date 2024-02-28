// components/QuillExample.tsx
"use client"

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface QuillExampleProps {
    onSaveContent: (title: string, content: string) => void;
}

export default function QuillExample({ onSaveContent }: QuillExampleProps) {
    const [value, setValue] = useState<string>('');
    const [title, setTitle] = useState<string>('');

    const handleChange = (content: string, delta: any, source: string, editor: any) => {
        setValue(content);
    };

    const handleSave = () => {
        onSaveContent(title, value);
    };

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'], // 이미지 삽입 버튼 추가
            ['clean']
        ],
    };

    return (
        <>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목"
                style={{padding:"0 18px"}}
                className='QnAWriteTitle'
            />
            <div className='BtnBox'>
                <button className='delete' onClick={handleSave}>취소</button>
                <button className='save' onClick={handleSave}>저장</button>
            </div>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={handleChange}
                placeholder="Write something..."
                style={{height:"500px" , margin:"18px"}}
                modules={modules}
            />
            
        </>
    );
}