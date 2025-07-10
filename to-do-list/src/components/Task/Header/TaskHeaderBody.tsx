"use client";
import React, { useRef, useState } from "react";
import {
  ControlledMenu,
  MenuItem,
  useClick,
  RectElement,
} from "@szhsin/react-menu";
import Image from "next/image";
import "@szhsin/react-menu/dist/index.css";

interface User {
  name: string;
  email: string;
  picture: string;
}

export function TaskHeaderBody(props: User) {
  const { name, email, picture } = props;
  const ref = useRef<HTMLImageElement>(null);
  const [isOpen, setOpen] = useState(false);
  const anchorProps = useClick(isOpen, setOpen);

  return (
    <>
      <Image
        src={picture}
        alt="User"
        className="user-nav__user-photo"
        width={40}
        height={50}
        ref={ref}
        {...anchorProps}
      />

      <ControlledMenu
        state={isOpen ? "open" : "closed"}
        anchorRef={ref as React.RefObject<RectElement>}
        onClose={() => setOpen(false)}
      >
        <MenuItem className="menu-item">
          <span className="user-nav__user--text">{name}</span>
        </MenuItem>
        <MenuItem className="menu-item">
          <span className="user-nav__user--text">{email}</span>
        </MenuItem>
        <MenuItem className="menu-item">
          <a href="/auth/logout">Logout</a>
        </MenuItem>
      </ControlledMenu>
    </>
  );
}
