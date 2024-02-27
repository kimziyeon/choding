import Link from "next/link"

type ListComponentType = {
    options: string[],
    href: string[],
    onClickMenu: (value: boolean) => void
}

export default function List({ options, onClickMenu, href }: ListComponentType) {
    return (
        <ul className='MenuGroup'>
            {options.map((item, index) => (
                <li key={index} onClick={onClickMenu}>
                    <Link href={href[index]}>{item}</Link>
                </li>
            ))}
        </ul>
    )
}