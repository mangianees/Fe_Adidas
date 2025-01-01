import { useEffect, useState } from "react";
import { getProducts } from "./assets/utilities/api";
import { Header } from "./Components/Header/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import { AdidasNavbar } from "./Components/AdidasNavbar/AdidasNavbar";



function App() {
  const [products, setProducts] = useState("");
  useEffect(() => {
    getProducts().then((productsFromAPI) => {
      setProducts(productsFromAPI);
    });
  }, []);
  
  return (
    <>
      <Header />
      <AdidasNavbar />
      <div>
        <ul>
          {!products
            ? null
            : products.map((product) => {
                return (
                  <div key={product.productId}>
                    <li>Product Id: {product.productId}</li>
                  </div>
                );
              })}
        </ul>
      </div>
    </>
  );
}

export default App;
