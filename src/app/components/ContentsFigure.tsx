import Image from 'next/image';

export default function ContentsFigure({ result, option }) {
    let imgSrc = '';

    switch (option) {
        case 0:
            imgSrc = 'pagemap.cse_thumbnail[0].src';
            break;
        case 1:
            imgSrc = 'pagemap.cse_thumbnail[0].src';
            break;

        default:
            break;
    }

    return (
        result.map((item, i) => (
            <figure className='contentsFigure' key={item.title + i}>
                {
                    option == 2 || 3 ? <></> : <img src={item.image} alt={item.title} />
                }
                <figcaption>
                    <div className='figcaption'>
                        <div className='top'>
                            <p className='title'>{item.title}</p>
                            <p className='description'>{option === 2 ? item.description : item.snippet}</p>
                        </div>
                        <span className='author'>글쓴이</span>
                    </div>
                </figcaption>
            </figure>
        ))
    );
}
