import React, { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import MenuModal from "./MenuModal";
const Submenu = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex lg:hidden">
      {menu ? (
        ""
      ) : (
        <TbMenu2
          className="cursor-pointer text-3xl"
          onClick={() => setMenu(true)}
        />
      )}
      {menu ? <MenuModal setMenu={setMenu} /> : ""}
    </div>
  );
};

export default Submenu;
