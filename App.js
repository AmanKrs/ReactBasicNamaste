import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const mcDonald = {
  name: "McDonald's",
  img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/9c9ca5f0-b219-46b5-bbba-ea2594524624_804248.JPG",
  cusines: ["Burger", "American"],
  rating: "4.2",
};

const RestuarantCard = () => {
  return (
    <>
      <div className="card">
        <img src={mcDonald.img} alt="resImg" />
        <div className="cardInfo">
          <h3>{mcDonald.name}</h3>
          <h4>{mcDonald.cusines}</h4>
          <p>{mcDonald.rating}star</p>
        </div>
      </div>
    </>
  );
};
const Title = () => (
  <h1 id="title" key="qw12">
    FoodAPP
  </h1>
);

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <Title />
        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

const Body = () => (
  <h1 id="title" key="qw12">
    <RestuarantCard />
  </h1>
);
const Footer = () => (
  <h1 id="title" key="qw12">
    Footer
  </h1>
);

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
