// FilterComponent.tsx
import { useForm, UseFormRegister } from 'react-hook-form';
import 'dayjs/locale/es';
import { myProjectPostType, FilterComponentType } from '@/types/datatype';

import ButtonComponent from './ButtonComponent';

type ButtonComponentType = {
  label: string;
  onClick: () => void;
  isActive: boolean;
  register: UseFormRegister<myProjectPostType>;
};

export default function FilterComponent({ setValue, watch, type, title, options, handleOptionClick, activeOptions }: FilterComponentType) {
  const handleClick = (option: string, type: string) => {
    handleOptionClick(option, type);
    const currentValues = watch(type) || [];

    const newValues = {}; // 새로운 값들을 저장할 객체를 초기화합니다.

    if (currentValues.includes(option)) {
      newValues[type] = currentValues.filter(item => item !== option);
    } else {
      newValues[type] = [...currentValues, option];
    }

    newValues['date'] = '2024년 2월 28일';
    newValues['postId'] = 111;
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
