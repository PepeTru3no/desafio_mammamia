import React, { useContext } from "react";
import {GiShoppingCart,} from "react-icons/gi";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import { formatNumber } from "./funcionesJs.js";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import { navigation } from "../data/navigation.jsx"; 
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { TokenContext } from "../context/TokenContext.jsx";

const NavBar = () => {
  const{token}= useContext(TokenContext);
  const nav = navigation(token);
  const {cart} =useContext(CartContext);
  const calculaTotal=()=>cart.reduce((total, pizza) => total + pizza.price * pizza.count,0);
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {nav.map((item, index) => (                  
                    <NavLink
                      style={{ display: "flex" }}
                      key={index}
                      to={item.href}
                      className={index > 0 ? setActiveClass : 'active'}
                    >
                      {index > 0 ? item.icon : ""}
                      <span>{item.name}</span>
                    </NavLink>                  
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to='/cart'
              className="inline-flex relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <GiShoppingCart size={"2em"} color="yellow" />
              <span>${formatNumber(calculaTotal())}.-</span>
            </Link>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {nav.map((item, index) => (                  
                    <NavLink
                      style={{ display: "flex" }}
                      key={index}
                      to={item.href}
                      className={index > 0 ? setActiveClass : 'active'}
                    >
                      {index > 0 ? item.icon : ""}
                      <span>{item.name}</span>
                    </NavLink>                  
                ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavBar;
