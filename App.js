import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";


const RestuarantCard = () => {
  return (
    <>
      <div className="card">
        <img src="" alt="resImg" />
        <div className="cardInfo">
          <h3>McDonald's</h3>
          <h4>American</h4>
          <p>4.2 star</p>
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
