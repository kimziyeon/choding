import Image from 'next/image';

export default function ContentsFigure({ result, option }) {
    return (
        result.map((item, i) => (
            <figure className='contentsFigure' key={item.title + i}>
                {/* Uncomment the following line if you want to use an image */}
                {/* <img src={item.image} alt={item.title} /> */}
                <figcaption>
                    <p className='title'>{item.title}</p>
                    <p className='description'>{option === 2 ? item.description : item.snippet}</p>
                    <span className='author'>글쓴이</span>
                </figcaption>
            </figure>
        ))
    );
}
