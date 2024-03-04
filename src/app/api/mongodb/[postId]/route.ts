// src/app/api/mongodb/[postId]/route.ts
import { connectToDB } from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: any) {
  try {
    const collection: string | null = req.nextUrl.searchParams.get('colName');
    const postId: number = params.postId;
    const data = await connectToDB('detail', { postId: postId }, collection);
    return NextResponse.json(data);

  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const collection: any = req.nextUrl.searchParams.get('colName');
  const data = await req.json()
  return NextResponse.json(await connectToDB('post', data, collection));
}


export async function DELETE(req: NextRequest, { params, query }: any) {
  // const collection: string | null = query.colName;
  // const postId: number = params.postId;
  // console.log('[postId]/route.ts', collection, postId);
  // await connectToDB('delete', { postId: postId }, collection);

  // return NextResponse.json({ success: true, message: 'Data deleted successfully' });
}

export async function PUT(req: NextRequest, res: NextResponse) {
  const data = await connectToDB('put', await req.json());
  return NextResponse.json(data);
}
