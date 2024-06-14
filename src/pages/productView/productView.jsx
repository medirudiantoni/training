import React from "react";
import logitech from "../../../public/contents/headset.webp";
import ProductReview from "../../components/productReview/productReview";

const ProductView = () => {
  return (
    <div className="w-full h-full relative pt-14">
      <div className="w-full absolute z-10 bg-slate-100 shadow-lg left-0 bottom-0 py-2 px-5 border-t flex gap-1 items-center justify-between">
        <button className="pt-1.5 pb-2 px-2 text-sm border font-medium border-slate-600 rounded-md">
          ✉️
        </button>
        <button className="pt-1.5 pb-2 px-2 text-sm border font-medium border-emerald-600 rounded-md flex-1 text-center text-emerald-600">
          Beli Langsung
        </button>
        <button className="pt-1.5 pb-2 px-2 text-sm border font-medium border-emerald-600 rounded-md flex-1 text-center bg-emerald-600 text-white">
          + Keranjang
        </button>
      </div>
      <div className="w-full h-full overflow-y-auto no-scrollbar relative">
        <div className="w-full h-fit p-5 pb-40">
          <div className="w-full h-fit pb-5 border-b">
            <div className="w-full aspect-square rounded-lg overflow-hidden">
              <img
                src={logitech}
                alt="logi tek tek"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="">
                  <h1 className="text-lg">Headset Gaming</h1>
                </div>
                <div className="mb-2">
                  <p className="font-bold text-xl">Rp 1.500.000,00</p>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores recusandae doloremque consectetur minus eveniet quae
              dolores cumque exercitationem tempora alias.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi deserunt ipsa doloribus corrupti ipsam quod iusto.
              Nostrum cupiditate repudiandae temporibus omnis minus eaque,
              dolorem, aperiam quas inventore reprehenderit illo praesentium
              nesciunt culpa maxime laborum?
            </p>
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
