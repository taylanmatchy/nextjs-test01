import { NextResponse } from "next/server";
import fakeData from "../../../../../fakeData";

export async function GET(req) {
  try {
    return NextResponse.json({ fakeData }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred while fetching users." },
      { status: 500 }
    );
  }
}
