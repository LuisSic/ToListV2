"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "../Button/Button";
import Image from "next/image";

const buttonsHeader = [
  {
    text: "Home",
    ruta: "/",
  },
  {
    text: "Premium",
    ruta: "/premiun",
  },
  {
    text: "Meet the Team",
    ruta: "/team",
  },
  {
    text: "Support",
    ruta: "/support",
  },
];

function NavLinks() {
  const [click, setClick] = useState(false);
  const pathname = usePathname();

  const callback = () => {
    setClick(!click);
  };
  const render = buttonsHeader.map((item, index) => {
    return (
      <Link
        className={`btn btn__header ${
          pathname === item.ruta ? "activate" : ""
        }`}
        href={item.ruta}
        key={index}
        onClick={() => callback()}
      >
        {item.text}
      </Link>
    );
  });

  return (
    <>
      <Image
        src={"/task/menu-outline.svg"}
        alt="Menu"
        className="header__hamburguerMenu"
        onClick={() => setClick(!click)}
        width={40}
        height={40}
      />
      <div className={`header__nav header__nav${click ? "--active" : ""}`}>
        {render}
        <Button
          className="btn btn__header"
          text="Login"
          callback={() => console.log("click")}
        />
      </div>
    </>
  );
}

export default NavLinks;
