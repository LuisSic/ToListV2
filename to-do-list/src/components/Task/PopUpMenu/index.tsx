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
import Form from "next/form";
import ButtonForm from "../ButtonForm";

interface PopUpMenuProps {
  todo: Todo;
  callbackUpdate: (type: "status" | "myday" | "important" | "delete") => void;
}
const PopUpMenu = ({ todo, callbackUpdate }: PopUpMenuProps) => {
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
        <Form action={callbackUpdate.bind(null, "myday")}>
          <MenuItem className="menu-item">
            <ButtonForm>
              {todo.isMyDay ? (
                <DropdownItem text="Remove From My Day" Svg={Sunny} />
              ) : (
                <DropdownItem text="Add to My Day" Svg={Sunny} />
              )}
            </ButtonForm>
          </MenuItem>
        </Form>
        <Form action={callbackUpdate.bind(null, "important")}>
          <MenuItem className="menu-item">
            <ButtonForm>
              {todo.isImportant ? (
                <DropdownItem text="Remove Importance" Svg={Star} />
              ) : (
                <DropdownItem text="Mark as Important" Svg={Star} />
              )}
            </ButtonForm>
          </MenuItem>
        </Form>
        <Form action={callbackUpdate.bind(null, "status")}>
          <MenuItem className="menu-item">
            <ButtonForm>
              {todo.statusTask === "NOT_FINISH" ? (
                <DropdownItem text="Mark as Completed" Svg={Check} />
              ) : (
                <DropdownItem text="Mark as not Completed" Svg={CheckOutline} />
              )}
            </ButtonForm>
          </MenuItem>
        </Form>
        <Form action={callbackUpdate.bind(null, "delete")}>
          <MenuItem className="menu-item menu-item--delete">
            <ButtonForm>
              <DropdownItem text="Delete Task" Svg={Trash} />
            </ButtonForm>
          </MenuItem>
        </Form>
      </ControlledMenu>
    </>
  );
};

export default PopUpMenu;
