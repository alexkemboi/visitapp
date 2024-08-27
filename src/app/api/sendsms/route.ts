import {NextResponse } from 'next/server';
import sendMessage from '../dbconnection';
export async function POST(req:Request, res:any) {
  const requestData =  await req.json();
   sendMessage( requestData.message,  requestData.phone);
  return NextResponse.json({ message:  "Success" });
}


