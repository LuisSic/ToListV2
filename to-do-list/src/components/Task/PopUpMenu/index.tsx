"use client";
import "@szhsin/react-menu/dist/index.css";
import { useRef } from "react";
import {
  ControlledMenu,
  MenuItem,
  useMenuState,
  useClick,
} from "@szhsin/react-menu";

import Sunny from "../../../../public/task/sunny-outline.svg";
import MenuOption from "../../../../public/task/ellipsis-horizontal-outline.svg";
import Trash from "../../../../public/task/trash-outline.svg";
import Star from "../../../../public/task/star-outline.svg";
import CheckOutline from "../../../../public/task/ellipse-outline.svg";
import Check from "../../../../public/task/checkmark-outline.svg";
import { Todo } from "@/lib/todo.interfaces";
import DropdownItem from "./Item";

interface PopUpMenuProps {
  todo: Todo;
  callbackMyDay: () => void;
  callbackImportant: () => void;
  callbackCompleted: () => void;
  callbackDelete: () => void;
}
const PopUpMenu = ({
  todo,
  callbackCompleted,
  callbackImportant,
  callbackMyDay,
  callbackDelete,
}: PopUpMenuProps) => {
  const ref = useRef<Element>(null);
  const [menuState, toggleMenu] = useMenuState({ transition: false });
  const anchorProps = useClick(menuState.state, toggleMenu);
  return (
    <>
      <MenuOption
        className="icon-small tasks__item-arrowMenu"
        ref={ref}
        {...anchorProps}
      />
      <ControlledMenu
        {...menuState}
        anchorRef={ref as React.RefObject<Element>}
        onClose={() => toggleMenu(false)}
        direction="left"
        arrow={true}
        align="center"
        className="menu-container"
      >
        <MenuItem onClick={callbackMyDay} className="menu-item">
          {todo.isMyDay ? (
            <DropdownItem text="Remove From My Day" Svg={Sunny} />
          ) : (
            <DropdownItem text="Add to My Day" Svg={Sunny} />
          )}
        </MenuItem>
        <MenuItem onClick={callbackImportant} className="menu-item">
          {todo.isImportant ? (
            <DropdownItem text="Remove Importance" Svg={Star} />
          ) : (
            <DropdownItem text="Mark as Important" Svg={Star} />
          )}
        </MenuItem>
        <MenuItem onClick={callbackCompleted} className="menu-item">
          {todo.statusTask === "NOT_FINISH" ? (
            <DropdownItem text="Mark as Completed" Svg={Check} />
          ) : (
            <DropdownItem text="Mark as not Completed" Svg={CheckOutline} />
          )}
        </MenuItem>
        <MenuItem
          className="menu-item menu-item--delete"
          onClick={callbackDelete}
        >
          <DropdownItem text="Delete Task" Svg={Trash} />
        </MenuItem>
      </ControlledMenu>
    </>
  );
};

export default PopUpMenu;
