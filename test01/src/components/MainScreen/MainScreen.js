import Image from "next/image";
import React, { useRef } from "react";
import { Carousel } from "antd";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Login_MainAdvertisement from "../../../public/Images/Login_MainAdvertisement.png";

const MainScreen = () => {
  const ref = useRef();

  return (
    <main className="p-10">
      <div className="relative border border-solid">
        <Carousel draggable ref={ref}>
          <div>
            <Image
              src={Login_MainAdvertisement}
              alt="Advertisement_1"
              priority={true}
              className="w-full"
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
    </main>
  );
};

export default MainScreen;
