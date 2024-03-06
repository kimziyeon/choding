"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUpType } from '@/types/user';
import InputComp from './components/InputComp';
import './signUp.scss';

export default function SignUp() {
    const [isOnComplete, setComplete] = useState(false);
    const [email, setEmail] = useState('');
    const [domain, setDomain] = useState('google.com');
    const { setError } = useForm();

    const { formState: { errors }, register, watch, setValue, handleSubmit: handleFormSubmit } = useForm<signUpType>({
        defaultValues: {
            id: '',
            password: '',
            email: '',
            imgSrc: 'https://firebasestorage.googleapis.com/v0/b/choding.appspot.com/o/writeImg%2FuserDefault.png?alt=media&token=21a6d29c-aa75-4f34-97a4-0935a44fbe2e'
        },
    });

    const onSubmit = (data: signUpType) => {
        if (data.password !== data.passwordCheck) { // 비밀번호 확인 체크
            setError('passwordCheck', {
                type: 'manual',
                message: '비밀번호가 일치하지 않습니다.'
            });
        }

        console.log(data)
    }

    return (
        <article id='signUp'>
            <header>
                <h2>회원가입</h2>
            </header>
            <form onSubmit={handleFormSubmit(onSubmit)}>
                <InputComp
                    type={'text'}
                    id={'id'}
                    title={'닉네임'}
                    placeholder={'6자 이내'}
                    register={register}
                    errors={errors}
                    watch={watch}
                />
                <InputComp
                    type={'password'}
                    id={'password'}
                    title={'비밀번호'}
                    placeholder={'영문/숫자/특수문자 2가지 이상 조합, 6~20자 이내'}
                    register={register}
                    errors={errors}
                    watch={watch}
                />
                <InputComp
                    type={'password'}
                    id={'passwordCheck'}
                    title={'비밀번호 확인'}
                    placeholder={'비밀번호를 다시 한 번 입력해주세요!'}
                    register={register}
                    errors={errors}
                    watch={watch}
                />
                <InputComp
                    type={'email'}
                    id={'email'}
                    title={'이메일 주소'}
                    placeholder={'이메일을 입력해주세요'}
                    register={register}
                    errors={errors}
                    watch={watch}
                />
                <div className="actions">
                    <button type="submit" className={isOnComplete ? 'on' : 'on'}>가입</button>
                </div>
            </form>
        </article >

    );
}