"use client";
import React from "react";
import Store_Score from "../../../../public/Images/Store_Score.png";
import Overall_Performance from "../../../../public/Images/Overall_Performance.png";
import Product_Comments from "../../../../public/Images/Product_Comments.png";
import Image from "next/image";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Summary = () => {
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <main className="p-3">
      <h2 className="text-xl font-bold">Mağaza Performansı</h2>
      <br />
      <section className="flex flex-col border-2 border-solid rounded-xl w-full gap-5">
        <section className="flex flex-col sm:flex sm:flex-row gap-10">
          <div className="flex flex-col gap-5 border border-solid p-5 w-full sm:w-1/2">
            <p className="flex flex-row gap-5 items-center">
              <Image
                src={Store_Score}
                alt="Score_Icon"
                className="object-contain"
              />
              <span className="text-lg font-medium text-matchy-black">
                Mağaza Puanı
              </span>
            </p>
            <p>
              <span>Bar grafik</span>
              <span className="font-bold text-xl ml-3">
                <span className="text-matchy-orange text-6xl font-bold">
                  8.7
                </span>
                /10
              </span>
            </p>
          </div>
          <div className="border border-solid p-5 w-full sm:w-1/2">
            <div className="flex flex-row justify-between items-center">
              <span className="flex flex-row gap-5">
                <Image
                  src={Overall_Performance}
                  alt="Genel Performans"
                  className="object-contain"
                />
                <h2 className="text-lg font-medium text-matchy-black">
                  Genel Performans
                </h2>
              </span>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a
                  onClick={(e) => e.preventDefault()}
                  className="border border-solid rounded-2xl p-3 "
                >
                  Click me
                  <DownOutlined />
                </a>
              </Dropdown>
            </div>
            <br />
            <div className="flex flex-row justify-between">
              <span className="flex flex-col">
                <h2 className="text-sm font-medium text-matchy-gray">
                  Satış adedi
                </h2>
                <h1 className="text-matchy-black text-4xl font-bold">0</h1>
              </span>
              <span className="flex flex-col">
                <h2 className="text-sm font-medium text-matchy-gray">
                  İade adedi
                </h2>
                <h1 className="text-matchy-black text-4xl font-bold">0</h1>
              </span>
              <span className="flex flex-col">
                <h2 className="text-sm font-medium text-matchy-gray">
                  İptal adedi
                </h2>
                <h1 className="text-matchy-black text-4xl font-bold">0</h1>
              </span>
            </div>
          </div>
        </section>
        <section className="mb-5 border border-solid p-5 flex flex-row justify-between">
          <div className="flex flex-row gap-5 items-center">
            <Image
              src={Product_Comments}
              alt="Ürün yorumları ikonu"
              className="object-contain"
            />
            <span className="text-lg font-medium text-matchy-black">
              Ürün Değerlendirmeleri
            </span>
          </div>
          <Dropdown
            className="border border-solid rounded-2xl p-3"
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              Click me
              <DownOutlined />
            </a>
          </Dropdown>
        </section>
      </section>
    </main>
  );
};

export default Summary;
