import axios from 'axios';
import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

const UserProvider = ({children}) => {
    
    const [token, setToken] = useState(()=> localStorage.getItem('token')? true: false);
    const apiLogin= 'http://localhost:5000/api/auth/login';
    const apiRegister = 'http://localhost:5000/api/auth/register';
    const navigate = useNavigate();
    const login=(data)=>{
        axios.post(apiLogin, {
            email: data.email,
            password : data.pass
        },{
            headers:{
                "Content-Type": "application/json",
            }
        })
        .then(function (response) {
            const data = response.data;
            alert("Sesion iniciada correctamente!");
            localStorage.setItem("token", data.token);
            setToken(true);
            console.log(data);
            navigate('/');
        })
        .catch(function (error) {
            console.log(error);
            alert('Usuario no valido');
        });
    }
    const register=(data)=>{
        axios.post(apiRegister, {
            email: data.email,
            password : data.pass
        },{
            headers:{
                "Content-Type": "application/json",
            }
        })
        .then(function (response) {
            const data = response.data;
            alert("Usuario registrado con exito!");
            localStorage.setItem("token", data.token);
            setToken(true);
            console.log(data.token);
            navigate('/');
        })
        .catch(function (error) {
            console.log(error);
            alert('Usuario no valido');
        });
    }
    const logOut=()=>{
        setToken(false);
        localStorage.removeItem("token");
        alert('Sesion finalizada')
        navigate('/');
    }

    return (
        <UserContext.Provider value={{login, register, logOut, token}}>
            {children}    
        </UserContext.Provider>
    )
}

export default UserProvider