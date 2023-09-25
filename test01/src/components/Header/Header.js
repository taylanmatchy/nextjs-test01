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
      <section className="flex flex-row justify-between gap-10 items-center sm:border-b sm:border-solid">
        <div className="sm:flex sm:flex-row justify-between items-end  p-3">
          <h1 className="max-sm:relative text-2xl font-extrabold">MATCHY</h1>
          <span className="max-sm:absolute max-sm:top-10 max-sm:left-16 sm:text-sm text-matchy-orange">
            Seller Central
          </span>
        </div>
        <div className="flex flex-row gap-8 items-center">
          <Image src={Home} alt="home_icon"></Image>
          <Navbar />
          <Image
            src={Notification}
            alt="notification_icon"
            className=""
          ></Image>
          <RxHamburgerMenu
            onClick={toggleHamburgerMenu}
            className="md:hidden hover:text-matchy-orange w-4 h-4"
          />
        </div>
      </section>
      {isMenuOpen && <HamburgerMenu />}
    </main>
  );
}
