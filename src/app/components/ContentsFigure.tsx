import Image from 'next/image';

export default function ContentsFigure({ result, option }) {
    return (
        result.map((item, i) => (
            <figure className='contentsFigure' key={item.title + i}>
                {
                    option == 2 || option == 3 ? null : <img src={item.pagemap.cse_thumbnail[0].src} alt={item.title} />
                }
                <figcaption>
                    <div className='figcaption'>
                        <div className='top'>
                            <p className='title'>{item.title}</p>
                            <p className='description'>{option === 2 || option === 10 ? item.description : item.snippet}</p>
                        </div>
                        <span className='author'>글쓴이</span>
                    </div>
                </figcaption>
            </figure>
        ))
    );
}
