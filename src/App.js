import HeaderComponent from "./component/HeaderComponent";
import Body from "./component/Body";
import Footer from "./component/Footer";

const mcDonald = {
  name: "McDonald's",
  img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/9c9ca5f0-b219-46b5-bbba-ea2594524624_804248.JPG",
  cusines: ["Burger", "American"],
  rating: "4.2",
};

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

export default App;
