import React, { Children } from "react";            //call the react libaray because we will use the react app
import ReactDOM from "react-dom/client";             // call the react-dom because we want to see the react componant on screen
import "./index.css"

//Mini Card project
//Css
//JSX Css
// JSX Javascript
//props - properties
//props - destructuring
//props - children
//Simple list
//propers list
//kye prop and spread operator
//even basic
//import and export statement 



const cars = [
  { 
    id : "1" ,
    name : "Probox" ,
    price : "64$" ,
    color : "yellow" },

  {
    id : "2" ,
    name : "mahar" ,
    price :  "82$" ,
    color : "green" 
  },
  {
    id : "3" ,
    name : "mahar" ,
    price :  "82$" ,
    color : "green" 
  },
  {
    id : "4" ,
    name : "mahar" ,
    price :  "82$" ,
    color : "green" 
    },
]



function CardList() {
    return (
    <main className="cardContainer" >
    {cars.map((car)=>{

      return (
        <Card key={car.id} {...car}/>
      )
    })}
    </main>)
};

function Card(prpos){
  console.log(prpos)
  const {name,price,color} = prpos;
  return (
    <section className="card">
      <img src="https://via.placeholder.com/150/92c952" alt="card-image"/>
      <h3 style={{marginTop : "10px"}}>{name}</h3>
      <p style={{marginTop : "1rem" }}>{price}</p>
      <p style={{marginTop : "1rem"}}>{color}</p>

    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardList/>) //  render = show the screen

