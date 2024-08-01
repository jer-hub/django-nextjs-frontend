"use server";

const LOGIN_URL =
  "https://bookish-invention-65gp7v9r45vh57ww-8000.app.github.dev/api/token/pair";

import {
  getToken,
  getRefreshToken,
  setRefreshToken,
  setToken,
} from "@/lib/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  const myAuthRefreshToken = getRefreshToken();
  const myAuthToken = getToken();

  const requestData = await request.json();
  const jsonData = JSON.stringify(requestData);
  const response = await fetch(LOGIN_URL, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  });

  const rData = await response.json();
  
  if (response.ok) {
    const { access, refresh } = rData;
    setToken(access);
    setRefreshToken(refresh);
    return NextResponse.json({ LoggedIn: true, ...rData }, { status: 200 });
  }
  return NextResponse.json({ LoggedIn: false, ...rData }, { status: 500 });
}
