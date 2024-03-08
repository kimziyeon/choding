import { NextResponse } from 'next/server';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from "next-auth/providers/github";
import NaverProvider from "next-auth/providers/naver";
import Providers from "next-auth/providers";
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
            id: "credentials",
            name: 'Credentials',
            credentials: {
                email: { label: "userEmail", type: "email" },
                password: { label: "userPassaword", type: "password" },
            },
            authorize: async (credentials, req) => {
                const userObject = await JSON.parse(credentials.body);
                const { email, password } = userObject;
                const user = { name: password, email: email }
                if (userObject) { return userObject }
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
