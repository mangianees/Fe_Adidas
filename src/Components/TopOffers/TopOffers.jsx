import React from "react";
import "./TopOffers.css";
import { Card, Button } from "react-bootstrap";

// Import Swiper and its required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const shoes = [
  {
    name: "Running Shoe",
    category: "Sports",
    price: 120,
    discount: 20,
    image: "../../assets/images/adidas01.jpeg",
  },
  {
    name: "Casual Sneaker",
    category: "Casual",
    price: 80,
    discount: 15,
    image: "../../assets/images/adidas01.jpeg",
  },
  {
    name: "Basketball Shoe",
    category: "Sports",
    price: 150,
    discount: 30,
    image: "../../assets/images/adidas01.jpeg",
  },
  {
    name: "Formal Shoe",
    category: "Formal",
    price: 100,
    discount: 10,
    image: "../../assets/images/adidas01.jpeg",
  },
  {
    name: "Hiking Boot",
    category: "Outdoor",
    price: 200,
    discount: 25,
    image: "../../assets/images/adidas01.jpeg",
  },
  {
    name: "Skater Shoe",
    category: "Casual",
    price: 95,
    discount: 18,
    image: "../../assets/images/adidas01.jpeg",
  },
];

export const TopOffers = () => {
  return (
    <div className="topOffers">
      <h2 className="topOffersTitle">Top Offers</h2>
      <Swiper
        modules={[Navigation, Pagination]} // Include the modules
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={5}
      >
        {shoes.map((shoe, index) => {
          const discountedPrice = shoe.price - (shoe.price * shoe.discount) / 100;
          return (
            <SwiperSlide key={index}>
              <Card className="offerCard">
                <Card.Img variant="top" src={shoe.image} alt={shoe.name} />
                <Card.Body>
                  <Card.Title>{shoe.name}</Card.Title>
                  <Card.Text>Category: {shoe.category}</Card.Text>
                  <Card.Text>Original Price: ${shoe.price.toFixed(2)}</Card.Text>
                  <Card.Text>Discount: {shoe.discount}%</Card.Text>
                  <Card.Text>Discounted Price: ${discountedPrice.toFixed(2)}</Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TopOffers;
