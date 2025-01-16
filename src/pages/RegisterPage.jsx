import React, {useContext, useState} from 'react'
import { BiKey, BiPowerOff,BiAt } from "react-icons/bi";
import { UserContext } from '../context/UserContext';

const RegisterPage = () => {
    const [email, setEmail]= useState('');
    const [clave, setClave] = useState('');
    const [confClave, setConfClave] = useState('');
    const [error, setError] = useState(false);
    const { register } = useContext(UserContext);

    function validaForm(){
        if(!email.trim() || !clave.trim() || !confClave.trim()){
            alert("Todos los campos deben ser completados");
            return;
        }else{
            compararClave();
            register({'email':email, 'pass': clave})
            setEmail('');
            setClave('');
            setConfClave('');
        }
        
    }

    function compararClave(){
        if(clave !== confClave){
            setError(true);              
            setConfClave("");
            return
        }
        setError(false)    
    }

    function mideClave(){
        if(clave.length <6){
            alert("La clave debe tener al menos 6 caracteres");
            setClave('');
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
                <input type="password" name='clave' placeholder='Ingrese Clave' onChange={(e)=> setClave(e.target.value)}
                    className='peer block w-full py-3 px-3 border' value={clave} onBlur={()=>mideClave()}
                />
                <div className='flex items-center rounded-tl-none rounded-bl-none rounded px-3 py-3 border'>
                    <BiKey size="1rem"/>
                </div>
            </div>
            <div className="flex items-stretch w-full">
                <input type="password" name='confClave' placeholder='Confirmar Clave' onChange={(e)=> setConfClave(e.target.value)}
                    className='peer block w-full py-3 px-3 border' value={confClave} onBlur={()=>compararClave()} 
                />
                <div className='flex items-center rounded-tl-none rounded-bl-none rounded px-3 py-3 border'>
                    <BiKey size="1rem"/>
                </div>
            </div>
            {(error)?<p className='bg-red-700'>Las claves no coinciden</p>:""}
            <div className= 'w-full justify-items-center'>
                <button type="button" className='flex cursor-pointer items-center justify-center w-40 h-10 text-sm font-semibold transition-colors rounded-xl border'
                    onClick={()=>validaForm()}>
                    Regitrar <span><BiPowerOff/></span>
                </button>
            </div>            
        </form>
        </div>
    )
}

export default RegisterPage