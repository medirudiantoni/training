import React, { useState } from "react";
import Button from "../Button/button";
import CusButton from "../Button/customStyled";

const ProductNote = ({ onClose, onDelete, noteData, data }) => {
  const [isNoteText, setNoteText] = useState(data);
  const handleNoteText = (text) => {
    setNoteText(text);
  };
  const handleSaveNote = () => {
    noteData(isNoteText);
    onClose();
  };
  return (
    <div className="absolute z-[101] top-0 left-0 w-full h-full flex items-end justify-center text-start">
      <div
        className="background w-full h-full absolute top-0 left-0 bg-black/60"
        onClick={onClose}
      ></div>
      <div className="w-full h-fit p-5 pb-20 rounded-t-2xl bg-white relative z-10">
      {/* <div className="w-5/6 h-fit p-5 rounded-lg bg-white relative z-10"> */}
        <h2 className="font-bold mb-2">Catatan anda</h2>
        <div>
          <form>
            <textarea
              name="note"
              id="note"
              className="w-full outline-none border p-2 bg-slate-100 rounded-md"
              value={isNoteText}
              onChange={(e) => handleNoteText(e.currentTarget.value)}
            ></textarea>
          </form>
        </div>
        {isNoteText && (
          <div className="w-full h-fit flex gap-2 items-center justify-between mt-5">
            <div className="flex-1 rounded-md">
              <CusButton
                color="error"
                variant="contained"
                onClick={onDelete}
                sx={{ width: "100%" }}
              >
                👎 Hapus
              </CusButton>
            </div>
            <div className="flex-1 rounded-md">
              <CusButton
                color="success"
                variant="contained"
                onClick={handleSaveNote}
                sx={{ width: "100%" }}
              >
                👌 Save
              </CusButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductNote;
