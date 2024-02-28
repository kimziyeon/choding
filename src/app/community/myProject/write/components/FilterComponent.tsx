// FilterComponent.tsx
import { useForm, UseFormRegister } from 'react-hook-form';
import { myProjectPostType, FilterComponentType } from '@/types/datatype';
import ButtonComponent from './ButtonComponent';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

type ButtonComponentType = {
  label: string;
  onClick: () => void;
  isActive: boolean;
  register: UseFormRegister<myProjectPostType>;
};

export default function FilterComponent({ setValue, watch, type, title, options, handleOptionClick, activeOptions }: FilterComponentType) {
  const handleClick = (option: string, type: string) => {
    dayjs.locale('ko');
    const today = dayjs().format("YYYY년 MM월 DD일");

    handleOptionClick(option, type);
    const currentValues = watch(type) || [];

    const newValues = {}; // 새로운 값들을 저장할 객체를 초기화합니다.

    if (currentValues.includes(option)) {
      newValues[type] = currentValues.filter(item => item !== option);
    } else {
      newValues[type] = [...currentValues, option];
    }

    newValues['date'] = today;
    newValues['postId'] = 5;
    newValues['imgSrc'] = 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/646/15fd24a290e3154d44f486b0720b0692_res.jpeg';

    Object.keys(newValues).forEach(key => {
      setValue(key, newValues[key], { shouldValidate: true });
    });
  };

  return (
    <section className={type}>
      <p className='titleBoldGray'>{title}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <ButtonComponent
              label={option}
              onClick={() => handleClick(option, type)}
              isActive={activeOptions.includes(option)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
