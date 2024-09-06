import Link from "next/link";
import React from "react";
import LogoIcon from "@/app/icons/Logo";

const Header = () => {
  return (
    <header className="flex py-5 container">
      <Link href={"/"}>
        <LogoIcon />
      </Link>
    </header>
  );
};

export default Header;
