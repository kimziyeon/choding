import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB } from '@/lib/mongodb';

export default async function createPost(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { title, content } = req.body;
        
        try {
            // MongoDB에 데이터 저장
            await connectToDB('post', { title, content }, 'LoginData');
            console.log("게시물이 성공적으로 저장되었습니다.");
            res.status(201).json({ success: true, message: "게시물이 성공적으로 저장되었습니다." });
        } catch (error) {
            console.error("게시물 저장 중 오류가 발생했습니다:", error);
            res.status(500).json({ success: false, message: "게시물 저장 중 오류가 발생했습니다." });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}