"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";
import Advertisement_Banner from "../../../../public/Images/Advertisement_Banner.png";
import Announcement_Banner from "../../../../public/Images/Announcement_Banner.png";
import Announcement_Banner_Small from "../../../../public/Images/Announcement_Banner_Small.png";
//to prevent SSR for images
import dynamic from "next/dynamic";
const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

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
    <main className="h-screen">
      <section className="cursor-pointer mx-auto">
        <MediaQuery maxWidth={414}>
          <Image src={Announcement_Banner_Small} alt="Campaign Banner" />
          <h2 className="text-center font-bold text-2xl mb-5 mt-5">MATCHY</h2>
        </MediaQuery>
        <MediaQuery minWidth={414}>
          <Image
            src={Announcement_Banner}
            alt="Campaign Announcement"
            className="w-full"
          />
        </MediaQuery>
      </section>
      <section className="w-full flex flex-col lg:flex lg:flex-row justify-between">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-20 lg:ml-20"
        >
          <section className="flex flex-col lg:flex lg:flex-row gap-5">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="AdSoyad" className="font-bold">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  placeholder="Ad Soyad"
                  {...register("AdSoyad", { required: true })}
                  className="focus:outline-none border border-solid rounded-2xl p-3 w-full"
                  name="AdSoyad"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="Eposta" className="font-bold">
                  E-posta Adresiniz
                </label>
                <input
                  type="text"
                  placeholder="E-posta adresi"
                  {...register("Eposta", { required: true })}
                  className="focus:outline-none border border-solid rounded-2xl p-3"
                  name="Eposta"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="SirketTuru" className="font-bold">
                  Şirket Türü
                </label>
                <select
                  {...register("SirketTuru")}
                  className="border border-solid rounded-2xl p-3"
                >
                  <option name="Ticaret" value="Ticaret">
                    Ticaret
                  </option>
                  <option name="Kozmetik" value="Kozmetik">
                    Kozmetik
                  </option>
                  <option name="Tekstil" value="Tekstil">
                    Tekstil
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="ReferansKodu" className="font-bold">
                  Referans Kodu
                </label>
                <input
                  type="password"
                  placeholder="Referans Kodu"
                  {...register("ReferansKodu", { min: 4 })}
                  className="focus:outline-none border border-solid rounded-2xl p-3"
                  name="Sifre"
                />
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="Cep_Telefonu" className="font-bold">
                  Cep Telefonu
                </label>
                <input
                  type="number"
                  placeholder="Cep Telefonu"
                  {...register("Cep_Telefonu", {})}
                  className="focus:outline-none border border-solid rounded-2xl p-3"
                  name="Cep_Telefonu"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="Kategori" className="font-bold">
                  Satılacak Ürün Kategorisi
                </label>
                <select
                  {...register("Kategori")}
                  className="border border-solid rounded-2xl p-3"
                >
                  <option value="X">X</option>
                  <option value="Y">Y</option>
                  <option value="Z">Z</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="SirketIsmi" className="font-bold">
                  Şirket İsmi
                </label>
                <input
                  type="text"
                  placeholder="Şirket İsmi"
                  {...register("SirketIsmi", {})}
                  className="focus:outline-none border border-solid rounded-2xl p-3"
                  name="SirketIsmi"
                />
              </div>
            </div>
          </section>
          <div className="flex flex-col lg:flex lg:flex-row mb-6 gap-3">
            <div className="flex flex-row gap-2 items-center">
              <input
                {...register("news")}
                type="checkbox"
                value="focus:outline-none Aydinlanma Metnini Okudum ve anladım."
              />
              <label htmlFor="news" className="text-sm">
                <strong className="text-matchy-orange underline">
                  Aydınlanma Metni
                </strong>
                'ni okudum ve anladım.
              </label>
            </div>
            <button
              type="submit"
              className="w-full md:w-1/2 p-4 bg-black text-white font-bold text-xl rounded-lg"
            >
              Hesap Oluştur
            </button>
          </div>
        </form>

        <section className="flex flex-col gap-10">
          <Image
            src={Advertisement_Banner}
            width={500}
            height={500}
            alt="Advertisement_Banner"
          ></Image>
          <h2 className="text-2xl lg:text-right mt-5 font-bold">MATCHY</h2>
        </section>
      </section>
    </main>
  );
}
