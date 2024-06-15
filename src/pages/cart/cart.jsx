import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCart from "../../components/productCart/productCart";
import headset from "../../../public/contents/headset.webp";
import CusButton from "../../components/Button/customStyled";
import { styled } from "@mui/material/styles";
import { cyan } from "@mui/material/colors";
import { TextField } from "@mui/material";

const ColorButton = styled(CusButton)(({ theme }) => ({
  color: theme.palette.getContrastText(cyan[500]),
  backgroundColor: cyan[500],
  "&:hover": {
    backgroundColor: cyan[700],
  },
}));

const DiscountSet = () => {
  return (
    <div className="absolute z-[101] left-0 bottom-0 w-full h-screen bg-black/40 flex items-end">
      <div className="w-full h-fit p-5 pb-20 rounded-t-2xl bg-white">
        <h3 className="font-semibold mb-4 pb-2 border-b">Diskon</h3>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: "100%", marginBottom: "4px" }} />
        <ColorButton sx={{ width: "100%", color: "#fff" }}>Terapkan</ColorButton>
      </div>
    </div>
  )
}

const CheckoutInfo = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "-100%" }}
      exit={{ y: "100%" }}
      transition={{ ease: "easeInOut" }}
      className="absolute left-0 top-0 w-full h-fit p-5 pb-10 bg-slate-100 rounded-t-2xl -translate-y-full border-b-2"
    >
      <h3 className="font-semibold mb-4 pb-2 border-b">Ringkasan pesanan</h3>
      <table className="table-auto w-full">
        <tbody>
          <tr>
            <td>Sub Total</td>
            <td className="text-end">Rp 1.500.000,00</td>
          </tr>
          <tr>
            <td>
              <CusButton variant="text" sx={{ padding: 0 }}>Diskon</CusButton>
            </td>
            <td className="text-end">0</td>
          </tr>
        </tbody>
      </table>
      <div className="w-full h-2 my-2 border-b"></div>
      <table className="table-auto w-full">
        <tbody>
          <tr className="font-semibold">
            <td>Total</td>
            <td className="text-end">Rp 1.500.000,00</td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
};

const Cart = () => {
  const [isInfo, setInfo] = useState(false);
  return (
    <div className="w-full h-full pt-14 bg-slate-200 relative">
      <div className="w-full absolute z-10 bg-slate-100 shadow-lg left-0 bottom-0 ">
        <AnimatePresence mode="wait">
          {isInfo && <CheckoutInfo />}
          <DiscountSet />
        </AnimatePresence>
        <div className="w-full h-full bg-white relative z-10 py-2 px-5 border-t flex flex-col gap-2 items-center justify-between">
          <div className="w-full h-full flex items-center justify-between gap-2">
            <p className="">
              <span className="text-slate-500">Total:</span>{" "}
              <span className="font-semibold">Rp 1.500.000,00</span>
            </p>
            <CusButton
              onClick={() => setInfo(!isInfo)}
              sx={{
                borderRadius: 8,
                padding: "2px 20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>Detail</span>
              <span
                className={`ml-1 duration-100 delay-1000 ${
                  isInfo ? "" : "rotate-180"
                }`}
              >
                🔽
              </span>
            </CusButton>
          </div>
          <hr />
          <div className="w-full h-fit">
            <ColorButton sx={{ width: "100%", padding: "8px", color: "#fff" }}>
              Checkout
            </ColorButton>
          </div>
        </div>
      </div>
      <div className="w-full h-full overflow-y-auto no-scrollbar p-5 flex flex-col gap-2">
        <ProductCart img={headset} />
      </div>
    </div>
  );
};

export default Cart;
