import React from 'react'
import ReactDOM from 'react-dom/client';


const parent = React.createElement("div", {id: "parent"},
[React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "I nameste react"), React.createElement("h2", {}, "I am an h2 tag")]), React.createElement("div", {id: "child2"}, [React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2", {}, "I am an h2 tag")])])

console.log('parent: ', parent);

// const heading = React.createElement("h1", {id: "heading"}, "hello from React");
// the blank object is used for attribut to the element
//React.createElement =>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

