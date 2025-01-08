import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TokenContext } from '../context/TokenContext';

const LogoutPage = () => {
    const navigate = useNavigate();
    const {setToken} = useContext(TokenContext);

    useEffect(() => {
        const logOut=()=>{
            alert('Cerrando sesion.')
            setToken(false);
            navigate('/');
        }
        
        return logOut;
    }, []);

    

    return (
        <>
            <p>Cerrando Session</p>
        </>
    )
}

export default LogoutPage