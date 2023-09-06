import { NextResponse } from "next/server";
import { generateToken } from "../../../../../lib/generateToken";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const token = await generateToken(reqBody);
    const { Eposta, Sifre } = reqBody;

    const response = NextResponse.json(
      { message: "User logged in", token: token },
      { status: 201 }
    );
    response.cookies.set("token", token);
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while loggin procedure." },
      { status: 500 }
    );
  }
}
