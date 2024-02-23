import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/essets/LOGO.svg';
import './header.scss';

export default function Header() {
    return (
        <header id="mainHeader">
            <div className='headerTOP'>
                <ul>
                    <li>교육</li>
                    <li>커뮤니티</li>
                </ul>
                <h1 className='titleLogo'>
                    <Link href='/' className='logo'>
                        <Image src={Logo} alt='Logo' width={50} height={25}></Image>
                    </Link>
                </h1>
                <ul>
                    <li>회원가입</li>
                    <li>로그인</li>
                </ul>
            </div>
            <nav className='headerGNB'>
                <Link href='/community' className='link'>커뮤니티 홈</Link>
                <Link href='/community/QnA' className='link'>Q&A</Link>
                <Link href='/community/myProject' className='link'>내 프로젝트</Link>
            </nav>
        </header>
    );
}