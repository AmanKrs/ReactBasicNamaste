import Title from "./Title";


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

export default HeaderComponent;
