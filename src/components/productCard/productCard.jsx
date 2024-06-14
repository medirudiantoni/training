import React, { useState } from "react";
import { Link } from "react-router-dom";
import logitech from "../../../public/contents/headset.webp";
import Button from "../Button/button";
import CusButton from "../Button/customButton";

const ProductCard = () => {
  const [isWishListed, setWishListed] = useState(false);
  return (
    <Link to="/product">
      <CusButton noPadding={true} className="w-[154px] h-fit rounded-lg bg-white p-2 cursor-pointer">
        <div className="w-full aspect-square">
          <img
            src={logitech}
            alt="product"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col text-start">
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
      </CusButton>
    </Link>
  );
};

export default ProductCard;
