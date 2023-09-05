"use client";

import React from "react";
import { Button } from "antd";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <main className="flex flex-col items-center mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 text-center w-1/3"
      >
        <h3 className="font-bold text-3xl">Giriş Yap</h3>
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
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="border border-solid w-full mx-auto p-4 bg-black text-white font-bold text-sm md:text-xl rounded-lg"
          >
            Oturum Aç
          </button>
          <button
            type="submit"
            className="border border-solid w-full mx-auto p-4 bg-blue-600 text-white font-bold text-sm md:text-xl rounded-lg"
          >
            Facebook ile devam et
          </button>
        </div>

        <div className="my-3 flex flex-row justify-between">
          <hr className="w-2/5 mt-3" />
          <text>veya</text>
          <hr className="w-2/5 mt-3" />
        </div>

        <h3 className="font-bold md:text-3xl text-sm">Hesabım Yok</h3>
        <button
          type="submit"
          className="border border-solid w-full mx-auto my-10 p-4 bg-black text-white font-bold text-sm md:text-xl rounded-lg"
        >
          Bir hesap oluştur
        </button>
        <a href="/" className="text-sm font-medium">
          Üye olmadan devam et
        </a>
      </form>
    </main>
  );
}
