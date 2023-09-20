/* eslint-disable no-unused-vars */
import eye from "../../assets/eye.svg";
import logo from "../../assets/logo.svg";
import cube from "../../assets/cube.png";
import stairs from "../../assets/stairs.png";

import { menus, smallDeviceMenus } from "../../utils/data";

const NavBar = () => {

  return (
    <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5">
      <img src={logo} alt="logo" className="cursor-pointer" />
      <div className="hidden gap-4 text-[12px] font-semibold uppercase leading-[18px] tracking-wider lg:flex cursor-pointer">
        {menus?.map((menu) => (
          <a href={menu.link} className="hover:text-[#00D54B]" key={menu.name}>
            {menu.name}
          </a>
        ))}
      </div>
      <div className="hidden gap-4 text-[12px] font-semibold uppercase leading-[18px] tracking-wider sm:flex lg:hidden">
        {smallDeviceMenus.map((menu) => (
          <a href={menu.link} className="hover:text-[#00D54B]" key={menu.name}>
            {menu.name}
          </a>
        ))}
      </div>
      <div className="flex gap-4 text-[12px] font-semibold uppercase leading-[18px] tracking-wider sm:hidden">
        <p>Sign in</p>
        <p>Legal</p>
      </div>
      <img src={eye} alt="eye" className="hidden cursor-pointer sm:flex" />
      <img
        src={cube}
        alt="Cube"
        className="absolute left-10 top-24 sm:left-24 sm:top-20 lg:left-40 lg:top-16"
      />
      <img
        src={stairs}
        alt="Stairs"
        className="absolute right-20 top-16 hidden lg:flex"
      />
    </div>
  );
};

export default NavBar;
