"use client";
import { useRouter } from 'next/navigation';
import { storage } from '@/firebase/firebase-sdk';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ref, uploadBytes, getStorage, listAll, getDownloadURL, deleteObject } from 'firebase/storage'
import { myProjectPostType } from '@/types/datatype';
import './MyProjectWrite.scss';
import FilterComponent from './components/FilterComponent';
import InputSection from './components/InputSection';
import serverStore from '@/lib/server/serverStore';
import { myProjectStore } from '@/app/community/myProject/context/myProject';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

export default function MyProjectWrite() {
    const { totalPostId, setTotalPostId, originalData } = myProjectStore();
    const router = useRouter();
    const { formState: { errors }, register, watch, setValue, handleSubmit: handleFormSubmit } = useForm<myProjectPostType>({
        defaultValues: {
            title: '',
            postId: 0,
            goal: '',
            overview: '',
            link: '',
            position: [],
            member: [],
            stack: [],
            comments: [],
            imgSrc: '',
            like: 0
        },
    });
    const [activeOptions, setActiveOptions] = useState<string[]>([]);
    const [isOnButtonActive, setisOnButtonActive] = useState(false);
    const filterRef = useRef<HTMLHeadingElement | null>(null);
    const filterToggleBtn: React.MouseEventHandler<HTMLHeadingElement> = () => {
        filterRef.current?.classList.toggle("filterActive");
        setisOnButtonActive(!isOnButtonActive);
    }


    dayjs.locale('ko');
    const today = dayjs().format("YYYY년 MM월 DD일");


    // 이미지 주소 저장
    const imageSubmit = async (event) => {
        event.preventDefault();

        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            const storageRef = ref(storage, 'writeImg/' + file.name);

            try {
                await uploadBytes(storageRef, file)
                    .then(async snapshot => {
                        const url = await getDownloadURL(ref(storage, snapshot.metadata.fullPath));
                        setValue('imgSrc', url, { shouldValidate: true });
                    })
                console.log('이미지가 성공적으로 업로드되었습니다.');
            } catch (error) {
                console.error('업로드 중 에러가 발생했습니다:', error);
            }
        }
    };


    // 뒤로가기
    const onClickBackHandler = () => {
        router.back();
    }

    // 버튼(옵션)을 선택했을때
    const handleOptionClick = (option: string, type: string) => {
        setActiveOptions(prevState => {
            if (prevState.includes(option)) {
                // 이미 상태에 포함되어 있다면 제거
                return prevState.filter(opt => opt !== option);
            } else {
                // 그렇지 않다면 상태에 추가
                return [...prevState, option];
            }
        });
    }

    useEffect(() => {
        if (originalData) {
            const maxId = originalData.reduce(
                (max, item) => item.postId > max ? item.postId : max,
                originalData[0].postId
            );
            setTotalPostId(Number(maxId + 1));
            setValue('postId', totalPostId);
        } else {
            console.error('오류: 배열에 postId 속성이 누락된 아이템이 있습니다.');
        }
    }, [originalData])


    // 폼 전송
    const onSubmit = async (data: myProjectPostType) => {
        console.log('------------data------------')
        console.log(data)
        await serverStore('post', 'myProject', data);
        router.push('/community/myProject');
    };

    return (
        <section id="MyProjectWrite">
            <form onSubmit={handleFormSubmit(onSubmit)}>
                <input type="hidden" {...register('date')} value={today} />
                <input type="hidden" {...register('postId')} value={totalPostId} />
                <input type="hidden" {...register('comments')} />
                <section id="writeHeader">
                    <h4>새 프로젝트 작성</h4>
                    <input {...register('title')} placeholder='제목을 입력해주세요'></input>
                </section>
                <section id="myProjectWriteImage">
                    <input type="file" onChange={imageSubmit} />
                </section>
                <section id="writeStep1" className='writeStep'>
                    <InputSection
                        register={register}
                        num={1}
                        titleGuide={'어떤 프로젝트를 하셨나요?'}
                        classname={'overview'}
                        title={'개요'}
                        errors={errors}
                    />
                    <FilterComponent
                        setValue={setValue}
                        watch={watch}
                        register={register}
                        title={'개발 인원'}
                        type={'member'}
                        options={['개인', '팀']}
                        handleOptionClick={handleOptionClick}
                        activeOptions={activeOptions}
                    />
                    <FilterComponent
                        setValue={setValue}
                        watch={watch}
                        register={register}
                        title={'내 포지션'}
                        type={'position'}
                        options={['리드 개발자', '서브 개발자']}
                        handleOptionClick={handleOptionClick}
                        activeOptions={activeOptions}
                    />
                </section>
                <section id="writeStep2" className='writeStep'>
                    <InputSection
                        register={register}
                        num={2}
                        titleGuide={'프로젝트를 소개해주세요!'}
                        classname={'goal'}
                        title={'프로젝트 목표'}
                        errors={errors}
                    />
                    <FilterComponent
                        setValue={setValue}
                        watch={watch}
                        register={register}
                        title={'사용 기술'}
                        type={'stack'}
                        options={['HTML', 'CSS', 'JS', 'TS', 'React', 'Vue', 'Nextjs', 'GIT']}
                        handleOptionClick={handleOptionClick}
                        activeOptions={activeOptions}
                    />
                </section>
                <section id="writeStep3" className='writeStep'>
                    <InputSection
                        register={register}
                        num={3}
                        titleGuide={'링크를 입력해주세요.'}
                        classname={'link'}
                        title={''}
                        errors={errors}
                    />
                </section>
                <section className='submit'>
                    <button type="button" className='back' onClick={onClickBackHandler}>취소</button>
                    <button type="submit" className='confirm'>등록</button>
                </section>
            </form>
        </section>
    );
}