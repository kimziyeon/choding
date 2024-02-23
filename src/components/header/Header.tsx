import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/essets/LOGO.svg';
import './header.scss';

export default function Header() {
    return (
        <header id="mainHeader">
            <div className='headerTOP'>
                <div className='leftSide'>
                    <Link href='/'><p className='mainActiveTopMenu'>교육</p>
                    </Link>
                    <Link href='/community'><p>커뮤니티</p></Link>
                </div>
                <h1 className='titleLogo'>
                    <Link href='/' className='logo'>
                        <Image src={Logo} alt='Logo' width={50} height={25}></Image>
                    </Link>
                </h1>
                <div className='rightSide'>
                    <p className='signUp'>회원가입</p>
                    <p className='login'>로그인</p>
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