import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CusButton = ({
  children,
  onClick,
  className2,
  className,
  outlined,
  noPadding,
  noRounded,
  style,
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
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className={`${className} relative group overflow-hidden ${
        noRounded ? "" : "rounded-md"
      } ${noPadding ? "" : "py-2 px-4"} ${outlined && "border-2"}`}
      style={style}
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
      <div className={`w-full relative z-10 ${className2}`}>
        {children ? children : "Click me"}
      </div>
    </button>
  );
};

export default CusButton;