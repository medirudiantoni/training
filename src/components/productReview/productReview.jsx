import React from "react";

const ProductReview = ({ img, name, rating, time, children }) => {
  return (
    <div className="w-full h-fit flex gap-4 text-sm">
      <div className="w-10 py-1.5">
        <div className="w-full aspect-square rounded-full overflow-hidden bg-teal-600 flex items-center justify-center">
          {img ? (
            <img
              src="https://source.unsplash.com/500x500"
              alt=""
              className="w-full object-cover"
            />
          ) : (
            <div className="text-xl">🙎‍♂️</div>
          )}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-2">
          <div className="name-star">
            <h4 className="font-semibold">{name ? name : "Someone"}</h4>
            <div className="flex items-center">
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
          <p className="text-xs text-slate-600">{time ? time : "2 minggu yang lalu"}</p>
        </div>
        <div className="text-review">
          {children ? children : (<p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic
            at, nihil quas beatae explicabo, nesciunt dolorum eius unde
            accusamus labore voluptatibus et.
          </p>)}
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
