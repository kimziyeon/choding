// FilterComponent.tsx
import { UseFormRegister } from 'react-hook-form';
import { myProjectPostType } from '@/types/datatype';

import ButtonComponent from './ButtonComponent';

type FilterComponentType = {
  type: string,
  title: string,
  options: string[],
  handleOptionClick: (option:string, title:string) => void,
  activeOptions: string[],
  register: UseFormRegister<myProjectPostType>;
}

export default function FilterComponent({ register, type, title, options, handleOptionClick, activeOptions }:FilterComponentType) {
  return (
    <section className={type}>
      <p className='titleBoldGray'>{title}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <ButtonComponent
            register={register}  
            label={option} 
            onClick={() => handleOptionClick(option, type)}
            isActive={activeOptions.includes(option)} 
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
