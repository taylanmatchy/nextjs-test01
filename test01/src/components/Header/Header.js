"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Home from "../../../public/Images/Home.png";
import Notification from "../../../public/Images/Notification.png";
import Hamburger from "../../../public/Images/Hamburger.png";
import Navbar from "../Navbar/Navbar";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { RxHamburgerMenu } from "react-icons/rx";

const onSearch = (value) => console.log(value);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="">
      <section className="flex flex-row justify-between gap-10 items-center lg:border-b lg:border-solid">
        <div className="lg:flex lg:flex-row justify-between items-end  p-3">
          <h1 className="max-lg:relative text-2xl font-extrabold">MATCHY</h1>
          <span className="max-lg:absolute max-lg:top-10 max-lg:left-16 lg:text-sm text-matchy-orange">
            Seller Central
          </span>
        </div>
        <div className="flex flex-row gap-8 items-center mr-3">
          <Image src={Home} alt="home_icon"></Image>
          <Navbar />
          <Image
            src={Notification}
            alt="notification_icon"
            className=""
          ></Image>
          <RxHamburgerMenu
            onClick={toggleHamburgerMenu}
            className="lg:hidden hover:text-matchy-orange w-4 h-4"
          />
        </div>
      </section>
      {isMenuOpen && <HamburgerMenu />}
    </main>
  );
}
