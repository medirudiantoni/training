import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import { AnimatePresence } from "framer-motion";
import CusButton from "../Button/customStyled";

const HeaderButton = ({children, onClick}) => {
  return (
    <div className="w-8 h-8 rounded-full flex items-center justify-center relative overflow-hidden">
      <CusButton sx={{ borderRadius: 10, padding: "10px 2px", position: "absolute" }} onClick={onClick}>
          {children}
        </CusButton>
    </div>
  )
}

const Header = () => {
  const [isNav, setIsNav] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="w-full h-fit p-5 flex items-center justify-between absolute z-[99] top-0 left-0">
      <AnimatePresence mode="wait">
        {isNav && <Navbar onClose={() => setIsNav(false)} />}
      </AnimatePresence>
      <div className="w-24 h-fit flex items-center">
        <HeaderButton onClick={() => setIsNav(true)}>🍔</HeaderButton>
      </div>
      <div className="flex-1 h-fit flex items-center justify-center">
        <Link to={"/"}>
          <h1 className="text-xl font-bold text-teal-800">Toko Tiki</h1>
        </Link>
      </div>
      <div className="w-24 h-fit flex items-center justify-end">
        <HeaderButton onClick={() => navigate("/notifications")}>🔔</HeaderButton>
        <HeaderButton onClick={() => navigate("/cart")}>🛒</HeaderButton>
      </div>
    </div>
  );
};

export default Header;
