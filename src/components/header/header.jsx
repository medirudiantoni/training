import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { AnimatePresence } from "framer-motion";
import Button from "../Button/button";

const Header = () => {
  const [isNav, setIsNav] = useState(false);
  return (
    <div className="w-full h-fit p-5 flex items-center justify-between absolute z-[99] top-0 left-0">
      <AnimatePresence mode="wait">
        {isNav && <Navbar onClose={() => setIsNav(false)} />}
      </AnimatePresence>
      <div className="w-20 h-fit flex items-center">
        <Button noPadding={true} className={'py-1 px-2'} onClick={() => setIsNav(true)}>
          🍔
        </Button>
      </div>
      <div className="flex-1 h-fit flex items-center justify-center">
        <Link to={"/"}>
          <h1 className="text-xl font-bold text-teal-800">Toko Tiki</h1>
        </Link>
      </div>
      <div className="w-20 h-fit flex items-center justify-end">
        <Link to={"/notifications"}>
          <Button noPadding={true} className={'py-1 px-2'}>🔔</Button>
        </Link>
        <Link to="/cart">
          <Button noPadding={true} className={'py-1 px-2'}>🛒</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
