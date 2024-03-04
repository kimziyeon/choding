import Link from 'next/link';
import Image from 'next/image';
import plusSVG from '@/essets/plus.svg';

export default function WriteMyProject() {
    return (
        <aside id="WriteMyProject">
            <Link href="/community/myProject/write" className='writeBtn'>
                <Image src={plusSVG} alt="write icon" width={20} height={20} />
            </Link>
        </aside>
    )
}