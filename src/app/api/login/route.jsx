"use server"

import { NextResponse } from "next/server"

export async function POST(request){
    return NextResponse.json({"message": "hello world!"}, {status:200})
}