/*
uploadBytes(ref(storage, '파일명'), file)
getDownloadURL(ref(storage, '파일명'), file)
deleteObject(ref(storage, '파일명'), file)
listAll(ref(storage, '폴더이름'))
*/
"use client";

import { storage } from '@/firebase/firebase-sdk';
import {ref, uploadBytes, listAll, getDownloadURL, deleteObject } from 'firebase/storage'
import { useEffect, useState } from 'react';

export default function ImageInput() {
  const [imgList, setImgList] = useState([]);

  function upload(e){
    e.preventDefault();
    const formdata = new FormData(e.target);
    const file = formdata.get('photo');
    const storageRef = ref(storage, 'myProject_' + file.name);

    uploadBytes(storageRef, file)
    .then(async snapshot => {
      const url = await getDownloadURL(ref(storage, snapshot.metadata.fullPath));
      setImgList([...imgList, {url, fullPath: snapshot.metadata.fullPath}])
    })
  }

//   async function getImages(){
//     const storageRef = ref(storage, 'test-gom/');
//     listAll(storageRef)
//     .then(async (res)=>{
//       let imgArr = [];
//       for(let value of res.items){
//         const url = await getDownloadURL(value);
//         imgArr.push({url, fullPath: value.fullPath})
//       }
//       setImgList(imgArr);
//     }) 
//   }

//   useEffect(()=>{
//     getImages();
//   }, [])

  return (
    <section id="myProjectWriteImage">
      <input type="file" id="photo" name="photo" style={{ display: 'none' }} />
      <label htmlFor="photo" className="custom-file-upload">대표 이미지를 업로드해주세요</label>
      <button type="submit">등록</button>
    </section>
  );
}
