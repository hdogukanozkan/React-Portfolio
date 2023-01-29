import React, { memo } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { menuOpen } from "../../Redux/siteSettings";
import { HiMenu } from "react-icons/hi";
import { BsCodeSlash } from "react-icons/bs";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="logo">
        <h2 className="text-xl lg:text-2xl flex items-center gap-2 font-bold">
          H.DoğukanÖzkan
          <BsCodeSlash className="text-4xl" />
        </h2>
        <span
          onClick={() => {
            dispatch(menuOpen());
          }}
          className="burger-menu "
        >
          <HiMenu size={35} />
        </span>
      </div>
      <Navbar />
    </header>
  );
};

export default memo(Header);
