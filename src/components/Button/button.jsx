import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Button = ({
  children,
  onClick,
  className,
  outlined,
  noPadding,
  noRounded,
  color,
  slow
}) => {
  const objectHover = useRef(null);
  const [rippleCoords, setRippleCoords] = useState({ x: 0, y: 0 });
  const [isRippling, setIsRippling] = useState(false);

  const handleMouseDown = (e) => {
    const objectHoverRect = objectHover.current.getBoundingClientRect();
    const x = e.clientX - objectHoverRect.left;
    const y = e.clientY - objectHoverRect.top;

    setRippleCoords({ x, y });
    setIsRippling(true);
  };

  const handleMouseUp = () => {
    setIsRippling(false);
    if (onClick) onClick();
  };

  const handleMouseLeave = () => {
    setIsRippling(false);
  };

  return (
    <button
      data-cursor="-hidden"
      ref={objectHover}
      // onMouseDown={handleMouseDown}
      onMouseOver={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className={`w-fit h-fit relative overflow-hidden ${
        color === "primary"
          ? "bg-blue-600 text-white"
          : color === "success"
          ? "bg-emerald-600 text-white"
          : color === "alert"
          ? "bg-orange-600 text-white"
          : ""
      } ${noRounded ? "" : "rounded-md"} ${
        noPadding ? "" : "py-2 px-4"
      } ${outlined && "border-2"} ${className}`}
    >
      <AnimatePresence>
        {isRippling && (
          <motion.div
            className="absolute bg-slate-400/30 rounded-full"
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 5 }}
            exit={{ opacity: 0 }}
            style={{
              width: 200,
              height: 200,
              top: rippleCoords.y - 100,
              left: rippleCoords.x - 100,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-10 no-copy">
        {children ? children : "Click me"}
      </div>
    </button>
  );
};

export default Button;
