import React from "react";
import Link from "next/link";
import Image from "next/image";
import Home from "../../../public/Images/Home.png";
import Catalog from "../../../public/Images/Catalog.png";
import Inventory from "../../../public/Images/Inventory.png";
import Order from "../../../public/Images/Order.png";
import Account from "../../../public/Images/Account.png";
import Campaign from "../../../public/Images/Campaign.png";
import Summary from "../../../public/Images/Summary.png";
import Advertisement from "../../../public/Images/Advertisement.png";

const HamburgerMenu = () => {
  return (
    <>
      <section className="md:hidden flex flex-col p-3 gap-5">
        <Link href="/" className="flex flex-row gap-3">
          <Image src={Home} alt="Go to Catalog"></Image>
          Anasayfa
        </Link>
        <Link href="/" className="flex flex-row gap-3">
          <Image src={Catalog} alt="Go to Catalog"></Image>
          Katalog
        </Link>
        <Link href="/" className="flex flex-row gap-3">
          <Image src={Inventory} alt="Go to Inventory"></Image>
          Envanter
        </Link>
        <Link href="/" className="flex flex-row gap-3">
          <Image src={Order} alt="Go to Order"></Image>
          Sipariş
        </Link>
        <Link href="/" className="flex flex-row gap-3">
          <Image src={Account} alt="Go to Account"></Image>
          Muhasebe
        </Link>
        <Link href="/" className="flex flex-row gap-3">
          <Image src={Campaign} alt="Go to Campaign"></Image>
          Kampanya
        </Link>
        <Link href="/" className="flex flex-row gap-3">
          <Image src={Summary} alt="Go to Summary"></Image>
          Özet
        </Link>
        <Link href="/" className="flex flex-row gap-3">
          <Image src={Advertisement} alt="Go to Advertisement"></Image>
          Reklam
        </Link>
        <div className="border border-solid"></div>
        <span>Canlı Yardım</span>
        <span>Yardım Merkezi</span>
        <span>Sıkça Sorulan Sorular</span>
        <span className="mt-10">Çıkış</span>
      </section>
    </>
  );
};

export default HamburgerMenu;
