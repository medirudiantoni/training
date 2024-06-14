import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/button";
const dummyImg =
  "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Home = () => {
  return (
    <div className="pt-14">
      <div className="p-5">
        <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border">
          <img
            src={dummyImg}
            alt="gambar"
            className="w-full h-full object-cover"
          />
        </div>
        <Link to={"/products"}>
          {/* <div className="my-3 pt-1.5 pb-2 px-4 rounded-md bg-emerald-600 text-white font-semibold text-center hover:bg-emerald-700 active:bg-emerald-950">See Products</div> */}
          <Button className={'w-full flex justify-center my-2 items-center'} color="success">See Products</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
