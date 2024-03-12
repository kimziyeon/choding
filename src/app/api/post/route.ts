import { connectToDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

let postIdCounter = 0;

export async function POST(req: NextRequest) { // QnA write에서 보낸 데이터값을 req로 받아서 쓴다
    const data = await req.json();    
    postIdCounter++; // postId 증가
    data.postId = postIdCounter; // 데이터에 postId 추가
    console.log(req)
    return NextResponse.json(await connectToDB('post', data, 'qna',null));
}

export async function GET(req: NextRequest) {
    const collection: any = req.nextUrl.searchParams.get('colName');
    const data = await connectToDB('get', 0, collection, null);
    return NextResponse.json(data)

}

