import React from "react";
import ReactDOM from "react-dom/client";

//react element
const jsx = (
  <h1 id="title" key="qw12">
    React with jsx
  </h1>
);

// diff way to write react component without return keyword
const Title = () => (
  <h1 id="title" key="qw12">
    react component without return
  </h1>
);

//functional component

const HeaderComponent = () => {
  return (
    <div>
      {/* way to write react element in react component as it is a variable*/}
      {jsx}
      {/* way to call or add react component inside react component */}
      {/* this is called component composition */}
      <Title /> 
      {/* way to call react component using {} */}
      {Title()}
      <h1>Hello Functional Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(jsx);
root.render(<HeaderComponent />);
