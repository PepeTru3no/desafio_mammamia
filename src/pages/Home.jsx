import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import {PizzaContext} from "../context/PizzaContext"


const Home = () => {
  const {pizzas, isLoading, error} = useContext(PizzaContext);
  
  return (
    <>
      <Header />
      {isLoading?(
        <h1>Cargando...</h1>
      ):error?(
        <h1>Error: {error.message}</h1>
      ):(
        <div style={{display:'grid',alignContent:'center', gridTemplateColumns:'auto auto auto'}}>
          {pizzas.map((pizza, key)=>{
            return <CardPizza
              key={key}
              pizza={pizza}
            />
          })}        
        </div>
      )}
      
    </>
  );
};

export default Home;
