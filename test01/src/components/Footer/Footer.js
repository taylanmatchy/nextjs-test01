import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaPinterest,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <main className="flex flex-row justify-around bg-[#F6F6F6] text-[#898989] p-3">
      <section className="flex flex-col justify-between ">
        <h1 className="text-black font-medium">Brandy's Club'a Üye Olun</h1>
        <div className="flex sm:flex-row flex-col gap-5">
          <input
            type="text"
            placeholder="E-Mailiniz"
            className="w-1/2 border border-solid focus:outline-none rounded-3xl p-3"
          ></input>
          <button
            type="button"
            className="w-1/2 border border-solid bg-white rounded-3xl p-2 text-center"
          >
            Üye Olun
          </button>
        </div>

        <div className="flex flex-row justify-around text-black">
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaFacebookF />
          <FaPinterest />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-black">Mağazalar</h2>
          <button
            type="button"
            className="bg-white text-black border border-solid rounded-3xl p-3 "
          >
            Mağaza Bul
          </button>
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="text-black font-medium">Brandy's</h2>
        <text>Hakkımızda</text>
        <text>Hesap Bilgileri</text>
        <text>İletişim</text>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="text-black font-medium">Müşteri Hakları</h2>
        <text>Sık Sorulan Sorular</text>
        <text>İade ve Değişim</text>
        <text>Satış Sözleşmesi</text>
        <text>Tüketici Hakları</text>
        <text>Gizlilik Bildirimi</text>
        <text>Güvenlik</text>
        <text>KVKK</text>
      </section>
    </main>
  );
}
