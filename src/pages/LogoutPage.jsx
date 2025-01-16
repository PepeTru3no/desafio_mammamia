import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';

const LogoutPage = () => {
    const {logOut} = useContext(UserContext);

    useEffect(() => {
        
        return logOut();

    }, []);

    

    return (
        <>
            <p>Cerrando Session</p>
        </>
    )
}

export default LogoutPage