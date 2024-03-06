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
                username: { label: 'Username', type: 'text', placeholder: 'yicha7' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                const user = { id: '1', name: 'yicha7', email: 'yicha7@gmail.com' }
                if (user) {
                    const existingUser = await findUserByEmail(user.email);
                    if (existingUser) {
                        // 사용자 정보가 존재하면 해당 사용자 정보를 업데이트
                        await updataeUser(existingUser._id, { /* 업데이트할 데이터 */ }); // MongoDB에서 사용자 정보를 업데이트하는 함수
                      }
                     return user 
                    }
                else { return null }
            },
        })
    ], callbacks: {
        async jwt({ token, user }:any) {
            // MongoDB에 사용자 정보 저장
            await saveUserToMongoDB(user);
            return { ...token, ...user };
        },
        async session({ session, token }:any) {
            session.user = token;
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
}

async function findUserByEmail(email:string) {
    const user = await connectToDB('find',{email},'users',null);
    return user;
}

async function updataeUser(UserId:string, updataData:string) {
    await connectToDB('updata',{_id:userId},'users',null)
}

async function saveUserToMongoDB(user: any) {
    connectToDB('post', user, 'LoginData',null)
    
}

const handler = NextAuth(option)

export { handler as GET, handler as POST }
