import { useEffect, useState } from "react";
import { getProducts } from "./assets/utilities/api";
import { Header } from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { AdidasNavbar } from "./Components/AdidasNavbar/AdidasNavbar";
import { SeasonalHeader } from "./Components/SeasonalHeader/SeasonalHeader";
import { ImageBanner } from "./Components/ImageBanner/ImageBanner";

import blueAdidas from "./assets/images/blueImage.jpg";
import adidasImage2 from "./assets/images/adidas.webp";
import TopOffers from "./Components/TopOffers/TopOffers";

function App() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    getProducts().then((productsFromAPI) => {
      setProducts(productsFromAPI);
    });
  }, []);

  const titleForIBOne = "GET SET, GROW.";
  const messageForIBOne =
    "Stronger. Faster. Fitter. Training again—grab the gear to keep progressing.";
  const link01ForIBOne = "SHOP NOW";
  const link02ForIBOne = "EXPLORE MORE";

  const titleForIBTwo = "SPARKLES, SWEATERS & SCROLLING";
  const messageForIBTwo = "Enjoy winter and the sale with up to 50% off.";
  const link01ForIBTwo = "SHOP MEN";
  const link02ForIBTwo = "SHOP WOMEN";

  return (
    <>
      <Header />
      <AdidasNavbar />
      <SeasonalHeader />
      <ImageBanner
        title={titleForIBOne}
        message={messageForIBOne}
        link01={link01ForIBOne}
        link02={link02ForIBOne}
        shopKids={false}
        backgroundImage={blueAdidas}
      />
      <ImageBanner
        title={titleForIBTwo}
        message={messageForIBTwo}
        link01={link01ForIBTwo}
        link02={link02ForIBTwo}
        shopKids={true}
        backgroundImage={adidasImage2}
      />
      <TopOffers />
      <div>
        <ul>
          {!products
            ? null
            : products.map((product) => (
                <div key={product.productId}>
                  <li>Product Id: {product.productId}</li>
                </div>
              ))}
        </ul>
      </div>
    </>
  );
}

export default App;
