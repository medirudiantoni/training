import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../Button/button";
import CusButton from "../Button/customButton";

const NavbarList = ({title, to, sticker, onClose }) => (
  <Link to={to && to}>
    <CusButton
      noRounded={true}
      className="w-full py-3 px-5 hover:bg-slate-400/10"
      className2="w-full flex items-center justify-between"
      onClick={onClose}
    >
      <div className="flex items-center gap-1.5">
        <p>{sticker}</p>
        <p>{title}</p>
      </div>
      <div>{"➡️"}</div>
    </CusButton>
  </Link>
);

const Navbar = ({ onClose }) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ ease: "easeInOut" }}
      className="w-full h-screen bg-slate-800 text-white absolute z-[100] top-0 left-0"
    >
      <div className="w-full h-fit p-5 pr-1 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-xl text-teal-400 font-bold" onClick={onClose}>
            Toko Tiki
          </h1>
        </Link>
        <div className="">
          <Button onClick={onClose}>✖️</Button>
        </div>
      </div>
      <div className="flex flex-col">
        <NavbarList title={'Home'} to={'/'} sticker={'🏠'} onClose={onClose} />
        <NavbarList title={'Products'} to={'/products'} sticker={'📦'} onClose={onClose} />
        <NavbarList title={'Notifications'} to={'/notifications'} sticker={'🆕'} onClose={onClose} />
        <NavbarList title={'Cart'} to={'/cart'} sticker={'🛒'} onClose={onClose} />
        <NavbarList title={'Wishlist'} sticker={'💖'} onClose={onClose} />

      </div>
    </motion.div>
  );
};

export default Navbar;
