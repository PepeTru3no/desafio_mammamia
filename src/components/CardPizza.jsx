import React, { useContext } from "react";
import { FaPizzaSlice, FaCartArrowDown  } from "react-icons/fa6";
import { MdReadMore } from "react-icons/md";
import {formatNumber} from './funcionesJs.js'
import { CartContext } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

const CardPizza = ({ pizza }) => {  
  const {cart, setCart} = useContext(CartContext);
  const priceFormat = formatNumber(pizza.price);
  const navigate = useNavigate();

  const viewMore=()=>{
    navigate(`/pizza/${pizza.id}`);
  }

  const addToCart=()=>{
    const existingPizza= cart.find((p)=>p.id.toUpperCase()===pizza.id.toUpperCase());
    if(!existingPizza){
      const newPizza= {
        id: pizza.id, 
        name: pizza.name, 
        price: pizza.price, 
        count: 1, 
        img: pizza.img,
      };  
      setCart([...cart, newPizza]);
      alert(`Nueva pizza ${pizza.name.toUpperCase()} agregada al carrito `);
    }else{
      const updateCart = cart.map((p)=>
        p.id.toUpperCase() === pizza.id.toUpperCase() ? {...p, count: p.count + 1} : p
      );
      setCart([...updateCart]);
      alert(`Pizza de ${pizza.name.toUpperCase()} agregada`);
    }
  }
  return (
    <div style={{margin:"0.5em 0.5em 0.5em 0.5em"}} className="max-w-md rounded overflow-hidden shadow-lg">
      <img className="w-full" src={pizza.img} alt={pizza.name}/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{pizza.name}</div>
        <p style={{display:"flex"}} className="text-gray-700 text-base"><FaPizzaSlice/><span> Ingredientes:</span></p>
        <ul className="list-disc">
          {pizza.ingredients.join(", ")}
        </ul>
        <p className="text-gray-700 text-base">Precio: ${priceFormat}.-</p>
      </div>
      <div className="px-6 pt-4 pb-2">
      <button className="inline-flex bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        onClick={viewMore}>
          <span>Ver mas</span> <MdReadMore/>
        </button>
        <button className="inline-flex bg-green-100 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 "
        onClick={(addToCart)}>
          <span>Agregar</span> <FaCartArrowDown/>
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
