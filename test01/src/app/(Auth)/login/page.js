"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import Login_MainAdvertisement from "../../../../public/Images/Login_MainAdvertisement.png";
import Services from "../../../../public/Images/Services.png";
import Prod_Advert from "../../../../public/Images/Prod_Advert.png";
import Influencers from "../../../../public/Images/Influencers.png";
import { Carousel } from "antd";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const imgSources = [Login_MainAdvertisement, Services, Login_MainAdvertisement];

export default function LoginPage() {
  const ref = useRef();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/api/auth/login", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <main className="flex flex-col sm:flex sm:flex-row sm:items-center h-screen">
      <section className="sm:w-1/2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10 p-10"
        >
          <h3 className="font-bold text-3xl">MATCHY</h3>
          <input
            type="text"
            placeholder="E-posta"
            {...register("Eposta", { required: true })}
            className="focus:outline-none border border-solid rounded-xl p-3"
          />
          <input
            type="password"
            placeholder="Şifre"
            {...register("Sifre", { min: 4 })}
            className="focus:outline-none border border-solid rounded-xl p-3"
          />
          <span className="text-right text-sm text-matchy-orange">
            Şifremi unuttum
          </span>
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="border border-solid w-full mx-auto p-4 rounded-xl bg-black text-white font-bold text-sm md:text-xl"
            >
              Giriş
            </button>
            <button
              type="submit"
              className="border border-solid w-full mx-auto p-4 rounded-xl bg-matchy-orange text-white font-bold text-sm md:text-xl"
            >
              Yeni Satıcı Başvurusu
            </button>
          </div>
        </form>
      </section>

      <section className="sm:w-1/2 sm:bg-[#F9F9F9] flex flex-col gap-5 p-10">
        <div className="relative">
          <Carousel draggable ref={ref}>
            <div>
              <Image
                src={Login_MainAdvertisement}
                alt="Advertisement_1"
                priority={true}
              />
            </div>
            <div>
              <Image
                src={Login_MainAdvertisement}
                alt="Advertisement_1"
                priority={true}
              />
            </div>
            <div>
              <Image
                src={Login_MainAdvertisement}
                alt="Advertisement_1"
                priority={true}
              />
            </div>
          </Carousel>
          <IoIosArrowForward
            style={{ color: "white", fontSize: "30" }}
            onClick={() => {
              ref.current.next();
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2"
          >
            İleri
          </IoIosArrowForward>
          <IoIosArrowBack
            style={{ color: "white", fontSize: "30" }}
            onClick={() => {
              ref.current.prev();
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2"
          >
            İleri
          </IoIosArrowBack>
        </div>
        <div className="flex flex-wrap gap-5 justify-between">
          <Image src={Services} alt="Services Advertisement"></Image>
          <Image src={Prod_Advert} alt="Production Advertisement"></Image>
          <Image src={Influencers} alt="Influencer Amount"></Image>
        </div>
      </section>
    </main>
  );
}
