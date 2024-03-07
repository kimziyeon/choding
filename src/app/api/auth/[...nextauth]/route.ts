import { NextResponse } from 'next/server';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from "next-auth/providers/github";
import NaverProvider from "next-auth/providers/naver";
import { connectToDB } from '@/lib/mongodb';

export const option = {
    providers: [
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string,
        }),
        NaverProvider({
            clientId: process.env.NEXT_PUBLIC_NAVER_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_NAVER_SECRET as string,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: '회원' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                const dd = JSON.parse(credentials.body);
                const user = { id: dd.id, name: dd.name, email: dd.email }
                if (user) { return user }
                else { return null }
            },
        })

    ], callbacks: {
        async jwt({ token, user }: any) {
            // MongoDB에 사용자 정보 저장
            await saveUserToMongoDB(user);
            return { ...token, ...user };
        },
        async session({ session, token }: any) {
            session.user = token;
            console.log(session.user.email, "로그확인")
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
}
async function saveUserToMongoDB(user: any) {
    connectToDB('post', user, 'LoginData', null);
}


const handler = NextAuth(option)

export { handler as GET, handler as POST }
