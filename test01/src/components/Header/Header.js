"use client";

import React from "react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import Shipped from "../../../public/Images/Shipped.svg";
import Location from "../../../public/Images/Location.svg";
import Rectangle from "../../../public/Images/Rectangle.svg";
import User from "../../../public/Images/User.svg";
import Shopping_Bag from "../../../public/Images/Shopping_Bag.svg";

const onSearch = (value) => console.log(value);

export default function Header() {
  return (
    <main>
      <div className="h-11 border border-solid bg-[#282828] text-center p-2 text-white">
        Lorem ipsum dolor sit amet dolor lorem ipsum
      </div>
      <header className="flex flex-row justify-between">
        <Link href="/"> Brandys Logo</Link>
        <div className="flex flex-row bg-[#E9E7E7] border border-solid rounded-3xl">
          <button className="border border-solid bg-[#E9E7E7] p-3 rounded-3xl ">
            <BsSearch
              style={{
                fontSize: "2rem",
              }}
            />
          </button>
          <input
            placeholder="Ürün Arayın"
            className="border border-solid rounded-3xl bg-[#E9E7E7] p-3 w-full focus:outline-none"
          ></input>
        </div>
        <div className="flex flex-row gap-2">
          <Image src={Shipped} alt="truck" />
          <Image src={Location} alt="truck" />
          <Image src={User} alt="truck" />
          <Image src={Rectangle} alt="truck" />
          <Image src={Shopping_Bag} alt="truck" />
        </div>
      </header>
    </main>
  );
}
