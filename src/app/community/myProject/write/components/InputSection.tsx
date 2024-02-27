import Image from 'next/image';
import linkIcon from '@/essets/linkIcon.png';

type InputSectionType = {
    num : number,
    classname: string,
    titleGuide: string
    title: string
}

export default function InputSection({ num, classname, titleGuide, title }: InputSectionType) {
    let placetext;

    switch (classname) {
        case 'overview':
            placetext = '예) 투두투두는 투두리스트를 직관적으로 관리할 수 있는 웹 서비스입니다.';
            break;
        case 'goal':
            placetext = '예) 복습';
            break;
        case 'link':
            placetext = 'http://, https://를 포함해 작성해주세요';
            break;
    
        default:
            break;
    }
    return (
        <section className={classname}>
            <div className='top'>
                <h5><span>STEP.{num}</span>&nbsp;{titleGuide}</h5>
            </div>
            <div className='topCont'>
                <b className='titleBoldGray'>{title}</b>
            </div>
            {classname === 'link' ? <Image src={linkIcon} alt="icon" width={40} height={40} /> : null}
            <input type="text" name={title} placeholder={placetext} />
        </section>
    )
}