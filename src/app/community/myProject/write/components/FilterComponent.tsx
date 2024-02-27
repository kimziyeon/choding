// FilterComponent.tsx
import ButtonComponent from './ButtonComponent';

type FilterComponentType = {
  sectionName: string,
  type: string,
  title: string,
  options: string[],
  handleOptionClick: (option:string, title:string) => void,
  activeOptions: string[]
}

export default function FilterComponent({ sectionName, type, title, options, handleOptionClick, activeOptions }:FilterComponentType) {
  return (
    <div className={sectionName}>
      <b className='titleBoldGray'>{title}</b>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <ButtonComponent 
            label={option} 
            onClick={() => handleOptionClick(option, type)}
            isActive={activeOptions.includes(option)} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
