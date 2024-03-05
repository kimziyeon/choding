// "use client"
// import { useState } from 'react';

// export default function Youtube() {
//     const [playlistid, setId] = useState('');

//     const handleChange = (event) => {
//         setId(event.currentTarget.value);
//     };

//     const submit = async (e) => {
//         e.preventDefault();
//         handleSearch;
//     }

//     async function handleSearch() {
//         if (typeof window === 'undefined') {
//             const { youtubeSearch } = await import('@/app/api/youtube/route');
//             const result = await youtubeSearch(playlistid);
//             return console.log(result);
//         }
//     }

//     return (
//         <section style={{ paddingTop: '6rem', minHeight: '90vh' }}>
//             <form onSubmit={submit} style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
//                 <input type="text" style={{ display: 'block', padding: '0.2rem', border: '1px solid gray' }} placeholder='플레이리스트 id를 적어주세용' onChange={handleChange} value={playlistid} />
//                 <button type="submit" style={{ padding: '0.2rem', border: '1px solid gray' }}>검색!!</button>
//             </form >
//         </section>
//     )
// }