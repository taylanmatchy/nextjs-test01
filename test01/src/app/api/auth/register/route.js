// api/auth/register ile kullanıcı oluşacak.

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const response = await request.json();
    const {
      Eposta,
      Sifre,
      İsim,
      Soyisim,
      Cep_Telefonu,
      Adres,
      Daha_Fazla_Bilgi,
      İl,
      İlçe,
      PostaKodu,
      news,
      sms,
      KVKK,
    } = response;
    return NextResponse.json(
      { message: "User created", data: response },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
