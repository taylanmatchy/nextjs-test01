import { NextResponse } from "next/server";

export function checkAuth(request) {
  const token = request.cookies.get("token");
  return !!token;
}
