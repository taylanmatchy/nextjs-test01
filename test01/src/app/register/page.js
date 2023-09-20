"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";
import Advertisement_Banner from "../../../public/Images/Advertisement_Banner.png";
import Register_Announcement from "../../../public/Images/Register_Announcement.png";
import Announcement_Banner from "../../../public/Images/Announcement_Banner.png";
import Announcement_Banner_Small from "../../../public/Images/Announcement_Banner_Small.png";
import MediaQuery from "react-responsive";

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
    <main className="flex flex-col mx-auto h-screen">
      <section className="cursor-pointer mx-auto">
        <MediaQuery maxWidth={414}>
          <Image
            src={Announcement_Banner_Small}
            alt="Announcement_Banner_Small"
          ></Image>
        </MediaQuery>
        <MediaQuery minWidth={414}>
          <Image src={Announcement_Banner} alt="Announcement_Banner"></Image>
        </MediaQuery>
      </section>
      <section className="w-full flex flex-col lg:flex lg:flex-row lg:justify-around">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-20 border-yellow-600"
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
                  className="border border-solid rounded-2xl p-3 w-full"
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
                  className="border border-solid rounded-2xl p-3"
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
                  className="border border-solid rounded-2xl p-3"
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
                  className="border border-solid rounded-2xl p-3"
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
                  className="border border-solid rounded-2xl p-3"
                  name="SirketIsmi"
                />
              </div>
            </div>
          </section>
          <div className="flex flex-col lg:flex lg:flex-row lg:items-center gap-2 mb-6">
            <div className="flex flex-row gap-2">
              <input
                {...register("news")}
                type="checkbox"
                value="Aydinlanma Metnini Okudum ve anladım."
              />
              <label htmlFor="news" className="text-sm">
                <strong className="text-matchy-orange underline">
                  Aydınlanma Metni
                </strong>
                'ni Okudum ve anladım.
              </label>
            </div>
            <button
              type="submit"
              className="lg:w-1/2 border border-solid p-4 bg-black text-white font-bold text-xl rounded-lg"
            >
              Hesap Oluştur
            </button>
          </div>
        </form>

        <section className="flex flex-col gap-10">
          <Image src={Advertisement_Banner} width={500} height={500}></Image>
          <h2 className="text-2xl lg:text-right mt-5 font-bold">MATCHY</h2>
        </section>
      </section>
    </main>
  );
}
