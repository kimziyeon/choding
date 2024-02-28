// FilterComponent.tsx
import { useForm, UseFormRegister } from 'react-hook-form';
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
    const currentValues = watch(type);
    setValue(type, [...currentValues, option]);
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
