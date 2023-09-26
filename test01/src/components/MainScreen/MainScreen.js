import Image from "next/image";
import React, { useRef } from "react";
import { Carousel } from "antd";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import Login_MainAdvertisement from "../../../public/Images/Login_MainAdvertisement.png";
import Catalog from "../../../public/Images/Catalog.png";
import Catalog_Error from "../../../public/Images/Catalog_Error.png";
import Catalog_Matches from "../../../public/Images/Catalog_Matches.png";
import Order_WatchIcon from "../../../public/Images/Order_WatchIcon.png";
import Order_LatesWarning from "../../../public/Images/Order_LatesWarning.png";
import Customer_QuestionsIcon from "../../../public/Images/Customer_QuestionsIcon.png";
import Payment_Icon from "../../../public/Images/Payment_Icon.png";
import Calendar_Icon from "../../../public/Images/Calendar_Icon.png";

const MainScreen = () => {
  const ref = useRef();

  const imageData = [
    {
      key: "main_advertisement",
      src: Login_MainAdvertisement,
    },
    {
      key: "advertisement2",
      src: Login_MainAdvertisement,
    },
  ];

  return (
    <main className="mt-5 sm:p-10">
      <section className="flex flex-col gap-5">
        <div className="w-full flex flex-col lg:flex lg:flex-row gap-20">
          <div className="relative w-full lg:w-2/3 object-contain">
            <Carousel draggable ref={ref}>
              {imageData.map((img) => (
                <Image
                  key={img.key}
                  src={img.src}
                  alt={img.key}
                  className="w-[52rem] h-[16rem]"
                ></Image>
              ))}
            </Carousel>

            <IoIosArrowForward
              style={{ color: "white", fontSize: "30" }}
              onClick={() => {
                ref.current.next();
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black"
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
          {/*Catalog_Part*/}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-xl font-bold text-matchy-black">Katalog</h2>
              <span className="text-sm font-medium text-matchy-orange">
                Yeni Ürün Ekle
              </span>
            </div>
            <div className="flex flex-row gap-10 border border-solid rounded-2xl p-3">
              <div className="flex flex-col gap-5">
                <Image
                  src={Catalog}
                  width={38}
                  height={48}
                  alt="Catalog Icon"
                />
                <span className="text-4xl font-bold text-matchy-black">58</span>
                <span className="text-matchy-gray font-normal text-base">
                  Tüm Ürünler
                </span>
              </div>
              <div className="border border-solid"></div>
              <div className="flex flex-col gap-8 items-center p-2">
                <div className="w-full flex flex-row gap-2">
                  <Image
                    src={Catalog_Error}
                    className="w-7 h-7 object-contain "
                  ></Image>
                  <div className="flex flex-col">
                    <span className="text-matchy-gray font-normal text-base">
                      Eksik Bilgi
                    </span>
                    <span>2</span>
                  </div>
                </div>
                <div className="w-full flex flex-row gap-2">
                  <Image
                    src={Catalog_Matches}
                    className="w-7 h-7 object-contain "
                  ></Image>
                  <div className="flex flex-col">
                    <span className="text-matchy-gray font-normal text-base">
                      Eşleşen
                    </span>
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd row */}
        <div className="flex flex-col lg:flex lg:flex-row gap-5">
          {/*Orders part_1*/}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            <h2 className="text-xl font-bold text-matchy-black">Siparişler</h2>
            <div className="flex flex-col border border-solid p-3 rounded-2xl gap-5">
              <div className="flex flex-row justify-between rounded-2xl">
                <div className="flex flex-col gap-5">
                  <span className="text-4xl font-bold text-matchy-black">
                    5
                  </span>
                  <span className="text-matchy-gray font-normal text-base">
                    Gelen Sipariş
                  </span>
                </div>
                <a
                  href="/"
                  className="text-matchy-orange flex flex-row items-center"
                >
                  Tümünü göster
                  <MdArrowRight />
                </a>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <Image
                    src={Order_WatchIcon}
                    alt="Orders_WatchIcon"
                    className="object-contain"
                  ></Image>
                  <div className="flex flex-col">
                    <span className="text-matchy-gray font-normal text-base">
                      Son gün
                    </span>
                    <span>3</span>
                  </div>
                </div>

                <div className="border border-solid"></div>
                <div className="flex flex-row gap-3">
                  <Image
                    src={Order_LatesWarning}
                    alt="Orders_WarningIcon"
                    className="object-contain"
                  ></Image>
                  <div className="flex flex-col">
                    <span className="text-matchy-gray font-normal text-base">
                      Son gün
                    </span>
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Orders part_2*/}
          <div className="w-full lg:w-1/3 flex flex-col gap-10">
            <h2 className="text-xl font-bold text-matchy-black"></h2>
            <div className="flex flex-col border border-solid p-3 rounded-2xl gap-5">
              <div className="flex flex-row justify-between rounded-2xl">
                <div className="flex flex-col gap-5">
                  <span className="text-4xl font-bold text-matchy-black">
                    12
                  </span>
                  <span className="text-matchy-gray font-normal text-base">
                    Paketlenmiş
                  </span>
                </div>
                <a
                  href="/"
                  className="text-matchy-orange flex flex-row items-center"
                >
                  Tümünü göster
                  <MdArrowRight />
                </a>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <Image
                    src={Order_WatchIcon}
                    alt="Orders_WatchIcon"
                    className="object-contain"
                  ></Image>
                  <div className="flex flex-col">
                    <span>Son gün</span>
                    <span>3</span>
                  </div>
                </div>

                <div className="border border-solid"></div>
                <div className="flex flex-row gap-3">
                  <Image
                    src={Order_LatesWarning}
                    alt="Orders_WarningIcon"
                    className="object-contain"
                  ></Image>
                  <div className="flex flex-col">
                    <span>Son gün</span>
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Customers part_1*/}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            <h2 className="text-xl font-bold text-matchy-black">
              Müşteri Soruları
            </h2>
            <div className="flex flex-row gap-10 border border-solid rounded-2xl p-3">
              <div className="flex flex-col gap-12">
                <Image src={Customer_QuestionsIcon} alt="Customer Questions" />
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-matchy-black">
                    0
                  </span>
                  <span className="text-matchy-gray font-normal text-base">
                    Cevap Bekleyenler
                  </span>
                </div>
              </div>

              <div className="border border-solid"></div>
            </div>
          </div>
        </div>
        {/*3rd row */}
        <div className="flex flex-col lg:flex lg:flex-row gap-5">
          {/*Customer part_2 */}
          <div className="flex flex-col lg:w-1/3">
            <h2 className="text-xl font-bold text-matchy-black">
              Müşteri Talepleri
            </h2>
            <div className="border border-solid rounded-2xl flex flex-row p-3 justify-between">
              <div className="flex flex-col gap-6">
                <h2 className="text-4xl font-bold text-matchy-orange">5</h2>
                <span className="text-matchy-gray font-normal text-base">
                  Yeni Talepler
                </span>
                <a
                  href="/"
                  className="flex flex-row items-center text-xs font-semibold"
                >
                  Tümünü göster
                  <MdArrowRight />
                </a>
              </div>
              <div className="border border-solid"></div>
              <div className="flex flex-col gap-6">
                <h2 className="text-4xl font-bold text-matchy-black">0</h2>
                <span className="text-matchy-gray font-normal text-base">
                  Aksiyon Bekleyen
                </span>
                <a
                  href="/"
                  className="flex flex-row items-center text-xs font-semibold"
                >
                  Tümünü göster <MdArrowRight />
                </a>
              </div>
            </div>
          </div>
          {/*Payment/Allowance */}
          <div className="flex flex-col lg:w-2/3">
            <h2 className="text-xl font-bold text-matchy-black">Hakediş</h2>
            <div className="border border-solid rounded-2xl flex flex-col sm:flex sm:flex-row p-3 justify-between gap-10">
              <div className="flex flex-col gap-5">
                <Image src={Payment_Icon} alt="Payment Icon"></Image>
                <h2 className="text-4xl font-bold text-matchy-orange">$180</h2>
                <span className="text-matchy-gray font-normal text-base">
                  Yeni Talepler
                </span>
              </div>
              <div className="border border-solid"></div>
              <div className="flex flex-col gap-5">
                <Image src={Order_WatchIcon} alt="Watch"></Image>
                <h2 className="text-4xl font-bold text-matchy-orange">
                  18-24 Ekim 2022
                </h2>
                <span className="text-matchy-gray font-normal text-base">
                  Hakediş Dönemi
                </span>
              </div>
              <div className="border border-solid"></div>
              <div className="flex flex-col gap-5">
                <Image src={Calendar_Icon} alt="Calendar"></Image>
                <h2 className="text-4xl font-bold text-matchy-orange">
                  24 Ekim 2022
                </h2>
                <span className="text-matchy-gray font-normal text-base">
                  Öngörülen Ödeme Tarihi
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainScreen;
