import { UseFormRegister } from 'react-hook-form';
import { myProjectPostType } from '@/types/datatype';

type InputSectionType = {
    num: number;
    classname: string;
    titleGuide: string;
    title: string;
    register: UseFormRegister<myProjectPostType>;
  };
  

export default function InputSection({ num, classname, titleGuide, title, register }: InputSectionType) {
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
            placetext = '';
            break;
    }


    return (
        <section className={classname}>
            <div className='top'>
                <h5><span className='mainBold'>STEP.{num}</span>&nbsp;{titleGuide}</h5>
            </div>
            <div className='topCont'>
                <p className='titleBoldGray'>{title}</p>
            </div>
            {classname === 'link' ? <button type="button" className="mainBold">+ 링크 추가</button> : null}
            <input
                {...register(classname)}
                type="text"
                placeholder={placetext} />
        </section>
    )
}