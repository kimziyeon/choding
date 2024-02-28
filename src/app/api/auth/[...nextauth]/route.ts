import { NextResponse } from 'next/server';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from "next-auth/providers/github";
import NaverProvider from "next-auth/providers/naver";


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
                if (user) { return user }
                else { return null }
            },
        })
    ], callbacks: {
        async jwt({ token, user }:any) {

            console.log(user)
            
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
const handler = NextAuth(option)

export { handler as GET, handler as POST }

