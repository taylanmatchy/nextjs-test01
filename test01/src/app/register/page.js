"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // onSubmit fonksiyonunun parametresi data olarak eklenmeli
    axios
      .post(`http://localhost:3000/api/auth/register`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main className="flex flex-col items-center mx-auto my-10">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <h3 className="font-bold text-3xl">Hesap Oluştur</h3>
        <input
          type="text"
          placeholder="E-posta"
          {...register("Eposta", { required: true })}
          className="border border-solid rounded-2xl p-3"
          name="Eposta"
        />
        <input
          type="password"
          placeholder="Şifre"
          {...register("Sifre", { min: 4 })}
          className="border border-solid rounded-2xl p-3"
          name="Sifre"
        />
        <span className="text-right text-sm font-bold">
          Parolanı mı Unuttun?
        </span>
        <div className="md:flex md:flex-row gap-3">
          <input
            type="text"
            placeholder="Isim"
            {...register("Isim", { required: true })}
            className="border border-solid rounded-2xl p-3 w-full"
            name="Isim"
          />
          <input
            type="text"
            placeholder="Soyisim"
            {...register("Soyisim", { required: true })}
            className="border border-solid rounded-2xl p-3 w-full"
            name="Soyisim"
          />
        </div>

        <input
          type="number"
          placeholder="Cep Telefonu"
          {...register("Cep_Telefonu", {})}
          className="border border-solid rounded-2xl p-3"
          name="Cep_Telefonu"
        />
        <input
          type="text"
          placeholder="Adres"
          {...register("Adres", {})}
          className="border border-solid rounded-2xl p-3"
          name="Adres"
        />
        <input
          type="text"
          placeholder="Daha Fazla Bilgi (opsiyonel)"
          {...register("Daha_Fazla_Bilgi", {})}
          className="border border-solid rounded-2xl p-3"
          name="Daha_Fazla_Bilgi"
        />
        <select
          {...register("Il")}
          className="border border-solid rounded-2xl p-3"
        >
          <option name="İstanbul" value="İstanbul">
            İstanbul
          </option>
          <option name="İzmir" value="İzmir">
            İzmir
          </option>
          <option name="Ankara" value="Ankara">
            Ankara
          </option>
        </select>
        <select
          {...register("Ilce")}
          className="border border-solid rounded-2xl p-3"
        >
          <option value="X">X</option>
          <option value="Y">Y</option>
          <option value="Z">Z</option>
        </select>
        <input
          className="border border-solid rounded-2xl p-3"
          type="number"
          placeholder="Posta Kodu"
          {...register("PostaKodu", {})}
          name="PostaKodu"
        />
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <input
              {...register("news")}
              type="radio"
              value="Pazarlama amaçlı elektronik ileti iznini onaylıyorum."
            />
            <label htmlFor="news">
              Pazarlama amaçlı elektronik ileti iznini onaylıyorum.
            </label>
          </div>
          <div className="flex flex-row gap-2">
            <input
              {...register("sms")}
              type="radio"
              value="Pazarlama ve tanıtım amaçlı sms iznini onaylıyorum."
            />
            <label htmlFor="sms">
              Pazarlama ve tanıtım amaçlı sms iznini onaylıyorum.
            </label>
          </div>
          <div className="flex flex-row gap-2">
            <input
              {...register("KVKK")}
              type="radio"
              value="Kişisel Veri Aydınlatma Metnini okudum ve Üyelik Sözleşmesini kabul ediyorum."
            />
            <label htmlFor="KVKK">
              <strong>
                <u>Kişisel Veri Aydınlatma Metni</u>
              </strong>
              'ni okudum ve
              <br />
              <strong>
                <u>Üyelik Sözleşmesi</u>
              </strong>
              'ni kabul ediyorum.
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="border border-solid w-1/2 mx-auto my-10 p-4 bg-black text-white font-bold text-xl rounded-lg"
        >
          Hesap Oluştur
        </button>
      </form>
    </main>
  );
}
