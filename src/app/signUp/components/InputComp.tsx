import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { signUpType } from '@/types/user';

type InputSectionType = {
    type: string;
    id: "id" | "password" | "email" | "imgSrc" | "passwordCheck";
    title: string;
    placeholder: string;
    register: UseFormRegister<signUpType>;
    errors: FieldErrors<signUpType>;
    watch: (type: string) => string,
};

export default function InputComp({ type, id, title, placeholder, register, errors, watch }: InputSectionType) {
    const watchPassword = watch('password');

    // 유효성 검사
    const getValidationRules = (id: string) => {
        switch (id) {
            case 'id':
                return {
                    minLength: {
                        value: 2,
                        message: '닉네임은 최소 2글자 이상이어야 합니다.'
                    },
                    maxLength: {
                        value: 6,
                        message: '닉네임은 최대 6글자 이하여야 합니다.'
                    }
                };
            case 'password':
                return {
                    pattern: {
                        value: /^(?:(?=.*[A-Za-z])(?=.*[\d@$!%*#?&])|(?=.*[\d@$!%*#?&])(?=.*[A-Za-z]))[\w@$!%*#?&]{6,20}$/,
                        message: '영문/숫자/특수문자 2가지 이상 조합, 6~20자 이내로 입력해주세요!'
                    }
                };
            case 'passwordCheck':
                return {
                    validate: value => value === watchPassword || '비밀번호가 일치하지 않습니다.'
                };
            case 'email':
                return {
                    pattern: {
                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: '유효하지 않은 이메일 주소입니다.'
                    }
                };
            default:
                return {};
        }
    }

    const validationRules = getValidationRules(id);

    return (
        <div className='field'>
            <label htmlFor={id}><b>{title}</b></label>
            <div className='input-group'>
                <input
                    type={type}
                    placeholder={placeholder}
                    {...register(id, {
                        required: '필수 입력 사항입니다!',
                        ...validationRules
                    })}
                />
                {id == "id" || id == "email" ? <button type="button">중복 확인</button> : null}
            </div>
            {errors[id] ? <p className='errorMsg On'>{errors[id].message}</p> : null}
        </div>
    )
}