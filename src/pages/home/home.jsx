import React from "react";
import { useNavigate } from "react-router-dom";
import CusButton from "../../components/Button/customStyled";
import { styled } from '@mui/material/styles';

const ColorButton = styled(CusButton)(({ theme }) => ({
  color: theme.palette.getContrastText("#10b981"),
  backgroundColor: "#10b981",
  '&:hover': {
    backgroundColor: "#10b981",
  },
}));

const dummyImg =
  "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Home = () => {
  const navigate = useNavigate()
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
        <ColorButton variant="contained" onClick={() => navigate("/products")} sx={{ width: "100%", height: "fit-content", textAlign: "center", padding: 1, borderRadius: 4, overflow: "hidden", margin: "10px 0", boxShadow: 0 }}>
          <p className="text-white">See Products</p>
        </ColorButton>
      </div>
    </div>
  );
};

export default Home;
