import React, { useEffect, useState } from "react";
import logitech from "../../../public/contents/headset.webp";
import ProductReview from "../../components/productReview/productReview";
import CusButton from "../../components/Button/customStyled";
import { styled } from "@mui/material/styles";
import { cyan } from "@mui/material/colors";
import { useParams } from "react-router";

const ColorButton = styled(CusButton)(({ theme }) => ({
  color: theme.palette.getContrastText(cyan[500]),
  backgroundColor: cyan[500],
  "&:hover": {
    backgroundColor: cyan[700],
  },
}));

const ProductView = () => {
  const [isProducts, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const idParams = useParams();

  useEffect(() => {
    fetch("http://localhost:5173/data/products.json")
      .then((res) => {
        if(!res.ok) {
          throw new Error("Unable to fetch data");
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
  }, []);

  const product = isProducts.find(pro => pro.id == idParams.productId)

  if (error) {
    return <div className="w-full h-full text-center pt-20">Error: {error}</div>;
  }

  return (
    <div className="w-full h-full relative pt-14">
      <div className="w-full absolute z-10 bg-slate-100 shadow-lg left-0 bottom-0 py-2 px-5 border-t flex gap-1 items-center justify-between">
        <CusButton
          variant="outlined"
          sx={{ width: "fit-content", padding: "8px 10px", borderRadius: 4 }}
        >
          ✉️
        </CusButton>
        <div className="flex-1">
          <ColorButton
            variant="contained"
            sx={{
              width: "100%",
              padding: "8px 10px",
              borderRadius: 4,
              color: "#fff",
              boxShadow: "none",
            }}
          >
            Tambahkan ke Keranjang
          </ColorButton>
        </div>
      </div>
      <div className="w-full h-full overflow-y-auto no-scrollbar relative">
        <div className="w-full h-fit p-5 pb-40">
          <div className="w-full h-fit pb-5 border-b">
            <div className="w-full aspect-square rounded-lg overflow-hidden">
              <img
                src={product && product.image}
                alt="logi tek tek"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="">
                  <h1 className="text-lg">{product && product.name}</h1>
                </div>
                <div className="mb-2">
                  <p className="font-bold text-xl">{product && product.price}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <div className="pt-0.5 pb-1 px-2 border rounded-md">
                    <p>Terjual 10</p>
                  </div>
                  <div className="pt-0.5 pb-1 px-2 border rounded-md flex items-center gap-1.5">
                    <p>⭐</p>
                    <p>4.5</p>
                    <p>(10)</p>
                  </div>
                </div>
              </div>
              <div className="w-fit pt-1.5 pb-2 px-4 rounded-full bg-slate-200">
                🖤
              </div>
            </div>
          </div>
          <div className="w-full h-fit py-5">
            <h3 className="font-semibold mb-2">Deskripsi Produk</h3>
            {product && product.description}
          </div>
          <hr />
          <div className="w-full h-fit py-5">
            <h3 className="font-semibold mb-2">Ulasan</h3>
            <div className="w-full h-fit flex flex-col gap-1">
              <ProductReview>Lorem ipsum dolor sit amet.</ProductReview>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
