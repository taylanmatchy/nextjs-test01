// api/auth/register ile kullanıcı oluşacak.

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import fakeData from "../../../../../fakeData";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const hashedPassword = await bcrypt.hash(reqBody.Sifre, 10);
    const newUser = {
      Eposta: reqBody.Eposta,
      Sifre: hashedPassword,
      Isim: reqBody.Isim,
      Soyisim: reqBody.Soyisim,
      Cep_Telefonu: reqBody.Cep_Telefonu,
      Adres: reqBody.Adres,
      Daha_Fazla_Bilgi: reqBody.Daha_Fazla_Bilgi,
      Il: reqBody.Il,
      Ilce: reqBody.Ilce,
      PostaKodu: reqBody.PostaKodu,
      news: reqBody.news,
      sms: reqBody.sms,
      KVKK: reqBody.KVKK,
    };

    fakeData.push(newUser);

    return NextResponse.json(
      { message: "User created", data: fakeData },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
