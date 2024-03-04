import { connectToDB } from '@/lib/mongodb';
import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const collection: any = req.nextUrl.searchParams.get('colName');
    const data = await connectToDB('get', 0, collection);
    return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
    const collection: any = req.nextUrl.searchParams.get('colName');
    const data = await req.json()
    return NextResponse.json(await connectToDB('post', data, collection));
}