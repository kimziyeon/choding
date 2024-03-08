import { connectToDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) { // QnA write에서 보낸 데이터값을 req로 받아서 쓴다
    const data = await req.json();    
    console.log(req , 'post콘솔 확인용')
    return NextResponse.json(await connectToDB('post', data, 'qna',null));
}