"use server";

import { getToken } from "@/lib/auth";
import { NextResponse } from "next/server";

const WAITLISTS_API_URL = "https://bookish-invention-65gp7v9r45vh57ww-8000.app.github.dev/api/waitlist/"

export async function GET(request) {
  const authToken = getToken();

  if (!authToken) {
    return NextResponse.json({}, { status: 401 });
  }

  const response = await fetch(WAITLISTS_API_URL, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
        "Authorization": `Bearer ${authToken}`,
    },  
});
    const result = await response.json()
    let status = result.status
    return NextResponse.json({...result}, {status:status})
}
