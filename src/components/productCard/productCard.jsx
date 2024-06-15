import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logitech from "../../../public/contents/headset.webp";
import { Button } from "@mui/material";

const ProductCard = () => {
  const [isWishListed, setWishListed] = useState(false);
  const navigate = useNavigate()
  return (
    <Button
      onClick={() => navigate('/product')}
      color="primary"
      sx={{
        fontFamily: "inherit",
        letterSpacing: "0px",
        textTransform: "none",
        color: "inherit",
        width: 154,
        height: "fit-content",
        borderRadius: 10,
        padding: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="w-full aspect-square">
        <img
          src={logitech}
          alt="product"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col text-start text-black">
        <h3 className="">Headset gaming</h3>
        <p className="font-bold mb-2">Rp 500.000,00</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <p>⭐</p>
            <p>4.5</p>
          </div>
          {/* <div
              onClick={(e) => {
                e.stopPropagation()
                setWishListed(!isWishListed);
              }}
              className={`font-bold text-slate-600 pt-[2px] pb-[4px] px-2 rounded-full text-xs ${
                isWishListed ? "bg-green-400" : "bg-slate-200"
              }`}
            >
              {isWishListed ? "💖" : "🖤"}
            </div> */}
        </div>
      </div>
    </Button>
  );
};

export default ProductCard;
