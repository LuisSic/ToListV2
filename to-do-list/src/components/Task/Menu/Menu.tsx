"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TaskHeaderId, TaskMenuOptions } from "@/lib/constants";
import MenuItem from "./MenuItem";

const svgList = [
  {
    svg: "/task/sunny-outline.svg",
    tabId: TaskHeaderId.MY_DAY,
    text: "My Day",
  },
  {
    svg: "/task/star-outline.svg",
    tabId: TaskHeaderId.IMPORTANT,
    text: "Important",
  },
  {
    svg: "/task/calendar-outline.svg",
    tabId: TaskHeaderId.PLANNED,
    text: "Planned",
  },
  {
    svg: "/task/person-outline.svg",
    tabId: TaskHeaderId.ASIGNED_TO_ME,
    text: "Assigned to you",
  },
  {
    svg: "/task/home-outline.svg",
    tabId: TaskHeaderId.INBOX,
    text: "Task",
  },
];
export const Menu = () => {
  const pathname = usePathname();

  const [sideNavExpanded, setSideNavExpanded] = useState<boolean>(true);
  const [newList, setNewList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const hanldeKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (!inputValue) {
        return;
      }

      setNewList((oldArray) => [...oldArray, inputValue]);
      setInputValue("");
    }
  };

  const renderList = newList.map((value, index) => {
    return (
      <li className="navbar__item" key={index}>
        <Image
          src={"/features/list-outline.svg"}
          alt={"List"}
          width={20}
          height={20}
          className="navbar__item-icon navbar__item-icon--morado"
        />

        <span className="navbar__item-text">{value}</span>
      </li>
    );
  });

  const renderOptions = svgList.map((svgItem, index) => {
    return (
      <MenuItem
        key={index}
        item={svgItem}
        index={index}
        tabSelected={pathname as TaskMenuOptions}
      />
    );
  });

  return (
    <div className={`sidebar sidebar-${sideNavExpanded ? "expand" : "exited"}`}>
      <div className="sidebar__header">
        <button
          className="menu"
          onClick={() => setSideNavExpanded((prevState) => !prevState)}
        >
          <Image
            src={"/task/menu-outline.svg"}
            alt={"Menu"}
            width={22}
            height={22}
            className="hamburguerMenu"
          />
        </button>
      </div>
      <div className="sidebar__body">
        <div className="sidebar__body--scroll">
          <ul className="navbar">
            {renderOptions}
            <div className="navbar-lastStaticList"></div>
            {renderList}
          </ul>
        </div>

        <div className="sidebar__body--addList">
          <div className="addTask">
            <Image
              src={"/features/add-outline.svg"}
              alt={"Add"}
              width={20}
              height={20}
              className="addTask__icon"
            />

            <input
              value={inputValue}
              className="addTask__input"
              type="text"
              placeholder="New List"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.currentTarget.value)
              }
              onKeyPress={hanldeKeyPress}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
