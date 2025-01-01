import axios from "axios";

const adidasAPI = axios.create({
  baseURL: "http://localhost:9090",
});

export const getProducts = () => {
  return adidasAPI
    .get("/products")
    .then((products) => {
      // handle success
      console.log(products);
      return products.data;
    })
    .catch((err) => {
      // handle success
      console.log(err);
    });
};
