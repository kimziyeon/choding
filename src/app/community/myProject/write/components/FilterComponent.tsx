// FilterComponent.tsx
import ButtonComponent from './ButtonComponent';

type FilterComponentType = {
  type: string,
  title: string,
  options: string[],
  handleOptionClick: (option:string, title:string) => void,
  activeOptions: string[]
}

export default function FilterComponent({ type, title, options, handleOptionClick, activeOptions }:FilterComponentType) {
  return (
    <section className={type}>
      <p className='titleBoldGray'>{title}</p>
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
    </section>
  );
}
