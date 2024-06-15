import React, { useState } from "react";
import ProductNote from "../productNote/productNote";
import CusButton from "../Button/customStyled";

const ProductCart = ({ img }) => {
  const [count, setCount] = useState(0);
  const [isNote, setIsNote] = useState(false);
  const [isNoteData, setNoteData] = useState("");

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      false;
    }
  };

  const handleGetNoteData = (e) => {
    setNoteData(e);
  };

  const handleDeleteData = () => {
    const trueDelete = confirm("Apakah anda yakin?");
    trueDelete ? setNoteData("") : false;
    setIsNote(false);
  };

  return (
    <div className="w-full h-fit max-w-lg rounded-lg p-2 bg-white shadow-md text-sm">
      {isNote && (
        <ProductNote
          data={isNoteData}
          noteData={(e) => handleGetNoteData(e)}
          onDelete={handleDeleteData}
          onClose={() => setIsNote(false)}
        />
      )}
      <div className="flex gap-2">
        <div className="w-fit h-fit">
          <input type="checkbox" className="w-5 h-5 rounded-md" />
        </div>
        <div className="w-24 aspect-square rounded-md overflow-hidden bg-white">
          <img src={img} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="text-start">
            <h3 className="">Headset Gaming</h3>
            <p className="font-bold">Rp 1.500.000,00</p>
          </div>
          <div className="w-full h-fit flex gap-2 items-center justify-between">
            <div className="w-8 h-8 rounded-full flex items-center justify-center relative overflow-hidden">
              <CusButton
                sx={{ borderRadius: 4 }}
                onClick={() => setIsNote(true)}
              >
                📝
              </CusButton>
            </div>
            <div className="pt-[1px] pb-[2px] px-0.5 rounded-full border-2 flex gap-1.5 items-center justify-between">
              <div className="w-8 h-8 rounded-full flex items-center justify-center relative overflow-hidden">
                <CusButton sx={{ borderRadius: 4 }} onClick={handleMinus}>
                  -
                </CusButton>
              </div>
              <div className="">{count}</div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center relative overflow-hidden">
                <CusButton sx={{ borderRadius: 4 }} onClick={handlePlus}>
                  +
                </CusButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
