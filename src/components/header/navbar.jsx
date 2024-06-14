import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const NavbarButton = ({ title, to, sticker, onClose }) => {
  const navigate = useNavigate();
  return (
    <Button
      sx={{
        fontFamily: "inherit",
        fontSize: "inherit",
        letterSpacing: "0px",
        textTransform: "none",
        color: "inherit",
        width: "100%",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onClick={() => {
        navigate(to ? to : false);
        onClose();
      }}
    >
      <div className="flex items-center gap-1.5">
        <p>{sticker}</p>
        <p>{title}</p>
      </div>
      <div>{"➡️"}</div>
    </Button>
  );
};

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
        <NavbarButton title={"Homepage"} to={"/"} sticker={"🏠"} onClose={onClose} />
        <NavbarButton
          title={"Products"}
          to={"/products"}
          sticker={"📦"}
          onClose={onClose}
        />
        <NavbarButton
          title={"Notifications"}
          to={"/notifications"}
          sticker={"🆕"}
          onClose={onClose}
        />
        <NavbarButton
          title={"Cart"}
          to={"/cart"}
          sticker={"🛒"}
          onClose={onClose}
        />
        <NavbarButton title={"Wishlist"} sticker={"💖"} onClose={onClose} />
      </div>
    </motion.div>
  );
};

export default Navbar;
