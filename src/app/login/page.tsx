'use client';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { signIn, useSession, signOut } from 'next-auth/react';
import axios from "axios";
import './login.scss'

export default function Login() {


    // useEffect(() => {
    //     const code = location.search;
    //     if (code) {
    //         console.log('실행');
    //         axios.post('/api', { param: code.substr(1) })
    //             .then(res => {
    //                 console.log(res.data);
    //             });
    //     }
    // }, []);

    // const goNaverLogin = () => {
    //     window.location.href =
    //         "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=0kFzpuisNF_m9ApdMXrl&redirect_uri=http://localhost:3000/login&state=asd2222222";
    // };

    // const handleGithubLogin = () => {
    //     const router = useRouter();
    //     router.push(
    //         `${process.env.NEXT_PUBLIC_GITHUB_ORIGIN_URI}/login?client_id=${process.env.NEXT_PUBLIC_GITHUB_AUTHORIZE_CLIENT_ID}`
    //     );
    // };

    async function loginGit() {
        const result = await signIn("github", {
            redirect: true,
            callbackUrl: "/login",
        });
    }
    async function loginNaver() {
        const result = await signIn("naver", {
            redirect: true,
            credentials: { id: 10000 },
            callbackUrl: "/login",
        });
    }

    async function aaaa() {
        const result = await signIn("credentials", {
            redirect: true,
            callbackUrl: "/login",
            body: JSON.stringify({ id: 10000, name: '홍길동' })
        });
    }
    //next auth
    const { data: session, status } = useSession();

    // console.log(session);


    if (status === 'authenticated') {
        return <section>
            <p>Signed in as {session.user?.name}</p>
            <button onClick={() => { signOut() }}>logout</button>
        </section>
    }
    return (
        <section>
            <div className="loginMain">
                <h2>로그인</h2>
                <button onClick={() => { aaaa() }}>aaaaa</button>
                <form action="">
                    <div className="EmailContainer">
                        <label htmlFor="">이메일</label>
                        <input type="text" id="userEmail" name="Email" />
                    </div>
                    <div className="passwordContainer">
                        <label htmlFor="">비밀번호</label>
                        <input type="text" id="userPassaword" name="passaword" />
                    </div>
                    <button type="submit">로그인</button>
                </form>

                <div className="centerLine">
                    <span>소셜 로그인</span>
                </div>
                <div className="apiLogin">
                    <button className="naverBtn" onClick={loginNaver}></button>
                    <button className="GitBtn" onClick={loginGit}></button>
                </div>
                <div className="joinMembership">
                    <a href="/signUp">아직 회원이 아니십니까? <span>회원가입하기</span></a>
                </div>
            </div>
            <div className="backgroundCharactor">
                <div className="cho"></div>
                <div className="ding"></div>
            </div>
        </section>

    );
}
