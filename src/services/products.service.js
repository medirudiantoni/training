import axios from "axios";

export const getProducts = (callback) => {
  axios
    .get("https://test-official-store.vercel.app/data/products.json")
    // .get("https://fakestoreapi.com/products")
    .then((res) => callback(res.data))
    .catch((err) => console.log(err));
};
