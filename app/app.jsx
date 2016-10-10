var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: "Hung",
  email: "a@gmail.com"
}

var objTwo = {
  age: 30,
  ...objOne
}

console.log(objTwo);

ReactDOM.render(
  <h1>BoilerPlate App!</h1>,
  document.getElementById('app')
);
