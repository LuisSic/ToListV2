import React from "react";

import Link from "next/link";
import { TaskHeaderTypes, TaskMenuOptions } from "@/lib/constants";
import Image from "next/image";

interface MenuItemProps {
  item: {
    svg: string;
    tabId: TaskHeaderTypes;
    text: string;
  };
  index: number;
  tabSelected: TaskMenuOptions;
}
const MenuItem = ({ item, tabSelected, index }: MenuItemProps) => {
  const cantItems = [];

  return (
    <li
      className={`navbar__item ${
        tabSelected === `/task/${item.tabId}` ? "active" : ""
      }`}
      key={index}
    >
      <Image
        src={item.svg}
        alt={item.text}
        width={20}
        height={20}
        className={`navbar__item-icon navbar__item-icon--${index + 1}`}
      />

      <Link className="navbar__item-text" href={`/task/${item.tabId}`}>
        {item.text}
      </Link>
      {cantItems.length > 0 ? (
        <span className="navbar__item-cant">{cantItems.length}</span>
      ) : null}
    </li>
  );
};

export default MenuItem;
