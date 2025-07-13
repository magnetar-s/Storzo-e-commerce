import { NavLink } from "react-router-dom";
import { FaBoxArchive } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

const Nav = () => {
  return (
    <nav className="bg-[#FFFFFF] flex justify-center items-center gap-x-5 p-4 mb-5">
      {/* home */}
      <NavLink to="/">
        <img
          className="w-30"
          src="logo.png"
          alt="logo"
        />
      </NavLink>
      {/* products */}
      <NavLink
        className="flex items-center justify-center gap-2"
        to="/products"
      >
        <FaBoxArchive />
        Products
      </NavLink>
      {/* login */}
      <NavLink to="/login" className="group flex items-center justify-center gap-2 px-2 py-3 rounded-[8px] hover:bg-[#2A55E5] hover:text-[#FFFFFF]">
        <CgProfile className="text-2xl" />
        Login
        <IoIosArrowDown className="transition-transform duration-300 group-hover:rotate-180 " />
      </NavLink>
    </nav>
  );
};

export default Nav;
