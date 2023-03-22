import React from "react";            //call the react libaray because we will use the react app
import ReactDOM from "react-dom";             // call the react-dom because we want to see the react componant on screen

// function Greeting () {                                                         //react conponant
//   return (<div>
//             <h1> Hello react , My name is mis thu khaing,thanks  learnign me</h1>
//             <p> Min thu khaing</p>
//           </div>) ;       //JSX
// }

// alway return single element
// div / section / article ot Fragment
// use camelCase for html attribute
// use class name instead of class
// close every elemnt
// formatting

// we call the html as JSX in react;

function Greeting() {
  return React.createElement( "div" , {} , React.createElement("h1" , {} , " Min Thu Khaing")) //same the upper function
}

ReactDOM.render(<Greeting/> , document.getElementById("root") );     //  render = show the screen

