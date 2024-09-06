import Link from "next/link";
import React from "react";
import GooglePlayIcon from "@/app/icons/GooglePlay";
import AppStoreIcon from "@/app/icons/AppStore";

const Footer = () => {
  return (
    <footer>
      <div className="bg-bgPrimayr">
        <div className="container pt-8 pb-[63px] flex gap-[144px]">
          <div>
            <h3 className="font-bold text-xl mb-4">Платформа хақида</h3>
            <p className="text-lg font-normal mb-4 cursor-pointer">
              Liber ўзи нима?
            </p>
            <p className="text-lg font-normal mb-4 cursor-pointer">
              Фойдаланиш шартлари
            </p>
            <p className="text-lg font-normal mb-4 cursor-pointer">Ёрдам</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Обуна хақида</h3>
            <p className="text-lg font-normal mb-4 cursor-pointer">
              Обуна бўлиш
            </p>
            <p className="text-lg font-normal mb-4 cursor-pointer">
              Қандай тўлаш
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Китоблар</h3>
            <p className="text-lg font-normal mb-4 cursor-pointer">
              Аудио китоблар{" "}
            </p>
            <p className="text-lg font-normal mb-4 cursor-pointer">
              Электрон китоблар{" "}
            </p>
            <p className="text-lg font-normal mb-4 cursor-pointer">Китоблар </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Мобил илова</h3>
            <div className="mb-[17px]">
              <Link href={"/"}>
                <GooglePlayIcon />
              </Link>{" "}
            </div>
            <div>
              {" "}
              <Link href={"/"}>
                <AppStoreIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
