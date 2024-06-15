import React from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ProductCart from "../../components/productCart/productCart";
import headset from "../../../public/contents/headset.webp";
import CusButton from "../../components/Button/customStyled";
import { cyan } from '@mui/material/colors';

const ColorButton = styled(CusButton)(({ theme }) => ({
  color: theme.palette.getContrastText(cyan[500]),
  backgroundColor: cyan[500],
  '&:hover': {
    backgroundColor: cyan[700],
  },
}));

const Cart = () => {
  return (
    <div className="w-full h-full pt-14 bg-slate-200 relative">
      <div className="w-full absolute z-10 bg-slate-100 shadow-lg left-0 bottom-0 py-2 px-5 border-t flex flex-col gap-2 items-center justify-between">
        <div className="absolute left-0 top-0 w-full h-fit p-5 bg-slate-100 rounded-md -translate-y-full border-b-2">
          <h3 className="font-semibold">Ringkasan pesanan</h3>
        </div>
        <div className="w-full h-full flex items-center justify-between gap-2">
          <p className="">
            <span className="text-slate-500">Total:</span>{" "}
            <span className="font-semibold">Rp 1.500.000,00</span>
          </p>
          <button className="">Detail 🔽</button>
        </div>
        <hr />
        <div className="w-full h-fit">
          {/* <CusButton sx={{ width: "100%", padding: 0 }}>
            <div className="pt-1.5 pb-2 px-2 text-sm border font-medium border-emerald-600 rounded-md w-full text-center bg-emerald-600 text-white">
              Checkout
            </div>
          </CusButton> */}
          {/* <CusButton variant="contained" color="success" sx={{ width: "100%" }}>Success</CusButton> */}
          <ColorButton sx={{ width: "100%", padding: "8px" }}>Checkout</ColorButton>
        </div>
      </div>
      <div className="w-full h-full overflow-y-auto no-scrollbar p-5 flex flex-col gap-2">
        <ProductCart img={headset} />
      </div>
    </div>
  );
};

export default Cart;
