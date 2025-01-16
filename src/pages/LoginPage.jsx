import React,{useContext, useEffect, useState} from 'react'
import { BiKey, BiPowerOff,BiAt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const LoginPage = () => {
    const [email, setEmail]= useState('');
    const [clave, setClave] = useState('');
    const { login } = useContext(UserContext);
    const navigate= useNavigate();

    function validaForm(){
        if(!email.trim() || !clave.trim()){
            alert("Todos los campos deben ser completados");
            return;
        }else{
            login({'email':email, 'pass': clave})
            setEmail('');
            setClave('');
        }
        
    }
    
    function mideClave(){
        if(clave.length < 6){
            alert("La clave debe tener al menos 6 caracteres");
            return;
        }
    }

    return (
        <div className='w-full justify-items-center'>
        <form className="flex flex-col bg-white w-2/4 p-5 sm:p-10 gap-8 rounded-md object-center" action="">
            <div className="flex items-stretch w-full">
                <input type="email" name='email' placeholder='Email' onChange={(e)=> setEmail(e.target.value)}
                    className='peer block w-full py-3 px-3 border' value={email} 
                />
                <div className='flex items-center rounded-tl-none rounded-bl-none rounded px-3 py-3 border'>
                    <BiAt size="1rem"/>
                </div>
            </div>
            <div className="flex items-stretch w-full">
                <input type="password" name='clave' placeholder='Clave' onChange={(e)=> setClave(e.target.value)}
                    className='peer block w-full py-3 px-3 border' value={clave} onBlur={()=>mideClave()}
                />
                <div className='flex items-center rounded-tl-none rounded-bl-none rounded px-3 py-3 border'>
                    <BiKey size="1rem"/>
                </div>
            </div>
            <div className= 'w-full justify-items-center'>
                <button type="button" className='flex cursor-pointer items-center justify-center w-40 h-10 text-sm font-semibold transition-colors rounded-xl border'
                    onClick={()=>validaForm()}>
                    Ingresar <span><BiPowerOff/></span>
                </button>
            </div>            
        </form>
        </div>
    )
}

export default LoginPage