"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "antd";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <main className="flex flex-col items-center mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <h3 className="font-bold text-3xl">Hesap Oluştur</h3>
        <input
          type="text"
          placeholder="E-posta"
          {...register("Eposta", { required: true })}
          className="border border-solid rounded-2xl p-3"
        />
        <input
          type="password"
          placeholder="Şifre"
          {...register("Şifre", { min: 4 })}
          className="border border-solid rounded-2xl p-3"
        />
        <span className="text-right text-sm font-bold">
          Parolanı mı Unuttun?
        </span>
        <div className="md:flex md:flex-row gap-3">
          <input
            type="text"
            placeholder="İsim"
            {...register("İsim", { required: true })}
            className="border border-solid rounded-2xl p-3 w-full"
          />
          <input
            type="text"
            placeholder="Soyisim"
            {...register("Soyisim", { required: true })}
            className="border border-solid rounded-2xl p-3 w-full"
          />
        </div>

        <input
          type="number"
          placeholder="Cep Telefonu"
          {...register("Cep Telefonu", {})}
          className="border border-solid rounded-2xl p-3"
        />
        <input
          type="text"
          placeholder="Adres"
          {...register("Adres", {})}
          className="border border-solid rounded-2xl p-3"
        />
        <input
          type="text"
          placeholder="Daha Fazla Bilgi (opsiyonel)"
          {...register("Daha Fazla Bilgi", {})}
          className="border border-solid rounded-2xl p-3"
        />
        <select
          {...register("İl")}
          className="border border-solid rounded-2xl p-3"
        >
          <option value="İstanbul">İstanbul</option>
          <option value="İzmir">İzmir</option>
          <option value="Ankara">Ankara</option>
        </select>
        <select
          {...register("İlçe")}
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
          {...register("Posta Kodu", {})}
        />
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <input
              {...register("news")}
              type="radio"
              value="Pazarlama amaçlı elektronik ileti iznini onaylıyorum."
            />
            <label for="news">
              Pazarlama amaçlı elektronik ileti iznini onaylıyorum.
            </label>
          </div>
          <div className="flex flex-row gap-2">
            <input
              {...register("sms")}
              type="radio"
              value="Pazarlama ve tanıtım amaçlı sms iznini onaylıyorum."
            />
            <label for="sms">
              Pazarlama ve tanıtım amaçlı sms iznini onaylıyorum.
            </label>
          </div>
          <div className="flex flex-row gap-2">
            <input
              {...register("KVKK")}
              type="radio"
              value="Kişisel Veri Aydınlatma Metnini okudum ve Üyelik Sözleşmesini kabul ediyorum."
            />
            <label for="KVKK">
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
