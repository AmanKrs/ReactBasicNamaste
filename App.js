import React from "react";
import ReactDOM from "react-dom/client";

const reactHeading = React.createElement(
  "h1",  //this called react element
  { style: { color: "red" }, id: "head1", key: "he1" }, //props
  "Hello from React from parcel" //content if muliple then we use array
);
console.log(reactHeading);
const reactHeading2 = React.createElement(
  "h2",
  { style: { color: "blue" }, id: "head2", key: "he2" },
  "Hello from React secnd child"
);
// console.log(reactHeading);
const container = React.createElement("div", { id: "con" }, [
  reactHeading,
  reactHeading2,
]);

const jsx = (
  <h1 id="title" key="qw12">
    React with jsx
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(reactHeading); working only one time
//reactHeading.props.children = "Welcome to Namaste course from javaScript";
console.log(container);
console.log(jsx); 
//root.render(container);
root.render(jsx);
// document.getElementById("root").append(reactHeading);
