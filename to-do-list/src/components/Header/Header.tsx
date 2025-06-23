import Image from "next/image";

import NavLinks from "./NavLink";

const Header = () => {
  return (
    <header className="header">
      <Image
        src={"/Logo-9.png"}
        alt="ToDo logo"
        width={194}
        height={60}
        priority={true}
      />

      <NavLinks />
    </header>
  );
};

export default Header;
