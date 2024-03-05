import { connectToDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params, query }: any) {
    // const collection: string | null = query.colName;
    // const postId: number = params.postId;
    // console.log('[postId]/route.ts', collection, postId);
    // await connectToDB('delete', { postId: postId }, collection);
  
    // return NextResponse.json({ success: true, message: 'Data deleted successfully' });
  }