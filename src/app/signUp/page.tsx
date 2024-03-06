"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUpType } from '@/types/user';
import './signUp.scss';

export default function SignUp() {
    const [isOnComplete, setComplete] = useState(false);
    const [email, setEmail] = useState('');
    const [domain, setDomain] = useState('google.com');

    const { formState: { errors }, register, watch, setValue, handleSubmit: handleFormSubmit } = useForm<signUpType>({
        defaultValues: {
            id: '비회원',
            password: '1234',
            email: 'choding@choding.com',
            imgSrc: 'https://firebasestorage.googleapis.com/v0/b/choding.appspot.com/o/writeImg%2FuserDefault.png?alt=media&token=21a6d29c-aa75-4f34-97a4-0935a44fbe2e'
        },
    });

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleDomainChange = (e) => {
        setDomain(e.target.value);
    };

    return (
        <article id='signUp'>
            <header>
                <h2>회원가입</h2>
            </header>
            <form>
                <div className='field'>
                    <label htmlFor='userId'><b>닉네임</b></label>
                    <div className='input-group'>
                        <input type="text" id="userId" placeholder='6자 이내' required {...register('id')} />
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
                        <input type="password" id="userPasswordConfirm" placeholder='비밀번호를 다시 한 번 입력해주세요!' required {...register('password')} />
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor='userEmail'><b>이메일 주소</b></label>
                    <div className='input-group'>
                        <input type="email" id="userEmail" placeholder='이메일을 입력해주세요' required {...register('email')} />
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