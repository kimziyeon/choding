"use client"
import { useState } from 'react';
import './signUp.scss';

export default function SignUp() {
    const [isOnComplete, setComplete] = useState(false);
    const [email, setEmail] = useState('');
    const [domain, setDomain] = useState('google.com');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleDomainChange = (e) => {
        setDomain(e.target.value);
    };

    const getFullEmail = () => {
        return domain !== '직접입력' ? `${email}@${domain}` : email;
    };

    return (
        <article id='signUp'>
            <header>
                <h2>회원가입</h2>
            </header>
            <form>
                <div className='field'>
                    <label htmlFor='userId'><b>아이디</b></label>
                    <div className='input-group'>
                        <input type="text" id="userId" placeholder='6~12자 이내' required />
                        <button type='button'>중복확인</button>
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor='userPassword'><b>비밀번호</b></label>
                    <div className='input-group'>
                        <input type="password" id="userPassword" placeholder='영문/숫자/특수문자 2가지 이상 조합, 6~20자 이내' required />
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor='userPasswordConfirm'><b>비밀번호 확인</b></label>
                    <div className='input-group'>
                        <input type="password" id="userPasswordConfirm" placeholder='비밀번호를 다시 한 번 입력해주세요!' required />
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor='userEmail'><b>이메일 주소</b></label>
                    <div className='input-group'>
                        <input type="email" id="userEmail" placeholder='이메일을 입력해주세요' required />
                        <button type='button'>중복확인</button>
                    </div>
                </div>
                <div className="actions">
                    <button type="submit" className={isOnComplete ? 'on' : 'on'}>가입</button>
                </div>
            </form>
        </article >

    );
}