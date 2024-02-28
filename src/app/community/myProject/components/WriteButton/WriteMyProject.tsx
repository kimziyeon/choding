import Link from 'next/link';

export default function WriteMyProject() {
    return (
        <aside id="WriteMyProject">
            <Link href="/community/myProject/write" className='writeBtn'>+</Link>
        </aside>
    )
}