import Image from "next/image";
import React, { useRef } from "react";
import { Carousel } from "antd";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Login_MainAdvertisement from "../../../public/Images/Login_MainAdvertisement.png";
import Catalog from "../../../public/Images/Catalog.png";
import Catalog_Error from "../../../public/Images/Catalog_Error.png";
import Catalog_Matches from "../../../public/Images/Catalog_Matches.png";

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
      <section className="w-full flex flex-col sm:flex sm:flex-row gap-5">
        <div className="relative w-full sm:w-2/3 object-contain">
          <Carousel draggable ref={ref}>
            {imageData.map((img) => (
              <Image
                key={img.key}
                src={img.src}
                alt={img.key}
                priority
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

        <div className="w-full sm:w-1/3 flex flex-col gap-3">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-xl font-bold text-matchy-black">Katalog</h2>
            <span className="text-sm font-medium text-matchy-orange">
              Yeni Ürün Ekle
            </span>
          </div>
          <div className="flex flex-row gap-10 border border-solid rounded-2xl p-3">
            <div className="flex flex-col gap-5">
              <Image src={Catalog} width={38} height={48} />
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
      </section>
    </main>
  );
};

export default MainScreen;
