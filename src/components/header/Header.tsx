import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/essets/LOGO.svg';
import './header.scss';

export default function Header() {
    return (
        <header id="mainHeader">
            <div className='headerTOP'>
                <div className='leftSide'>
                    <Link href='/' className='mainActiveTopMenu'>교육</Link>
                    <Link href='/community'>커뮤니티</Link>
                </div>
                <h1 className='titleLogo'>
                    <Link href='/' className='logo'>
                        <Image src={Logo} alt='Logo' width={50} height={25}></Image>
                    </Link>
                </h1>
                <div className='rightSide'>
                    <Link href='/signUp' className='signUp'>회원가입</Link>
                    <Link href='/login' className='login'>로그인</Link>
                </div>
            </div>
            <nav className='headerGNB'>
                <Link href='/community'>커뮤니티 홈</Link>
                <Link href='/community/QnA'>Q&A</Link>
                <Link href='/community/myProject'>내 프로젝트</Link>
            </nav>
        </header>
    );
}