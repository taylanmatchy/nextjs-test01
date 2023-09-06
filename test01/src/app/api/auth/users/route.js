import { NextResponse } from "next/server";
import fakeData from "../../../../../fakeData";
import { getDataFromToken } from "../../../../../lib/generateToken";

export async function GET(req) {
  try {
    const userEposta = await getDataFromToken(req);

    const users = fakeData.filter((user) => {
      return user.Eposta === userEposta;
    });

    if (users.length > 0) {
      return NextResponse.json(
        { message: "User Found", data: users },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "User Not Found",
        },
        {
          status: 404,
        }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred while fetching users." },
      { status: 500 }
    );
  }
}
