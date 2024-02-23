import Link from 'next/link';
import '@/styles/module/Header.module.css';

export default function Header() {
    return (
        <header id="header">
            <h1 className='titleLogo'>
                <Link href='/' className='logo'>초딩</Link>
            </h1>
            <nav className='subMenuBar'>
                <Link href='/community' className='link'>커뮤니티 홈</Link>
                <Link href='/community/QnA' className='link'>Q&A</Link>
                <Link href='/community/myProject' className='link'>내 프로젝트</Link>
            </nav>
        </header>
    );
}