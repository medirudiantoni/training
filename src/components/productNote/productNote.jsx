import React, { useState } from "react";
import Button from "../Button/button";

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
    <div className="absolute z-[101] top-0 left-0 w-full h-full flex items-center justify-center text-start">
      <div
        className="background w-full h-full absolute top-0 left-0 bg-black/60"
        onClick={onClose}
      ></div>
      <div className="w-5/6 h-fit p-5 rounded-lg bg-white relative z-10">
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
            <Button
              className="py-2 px-4 flex-1 rounded-md border-2 border-red-500 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white"
              onClick={onDelete}
            >
              👎 Hapus
            </Button>
            <Button
              className="py-2 px-4 flex-1 rounded-md border-2 active:bg-blue-100"
              onClick={handleSaveNote}
            >
              👌 Save
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductNote;
