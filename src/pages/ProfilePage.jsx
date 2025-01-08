import React from 'react'
import { FaBackward, FaShoppingBag, FaSplotch, FaUserCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
    return (
        <div className="max-w-md rounded overflow-hidden shadow-lg">
            <img className="w-full" src="" alt='Imagen del usuario'/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Nombre del Usuario</div>
                <p style={{display:"flex"}} className="text-gray-700 text-base"><FaUserCheck /><span> Biografia:</span></p>
                <p className="text-gray-700 text-base">Una breve biografia del usuario, entregada pro el mismo</p>
                <p style={{display:"flex"}} className="text-gray-700 text-base"><FaSplotch /><span> Favoritas:</span></p>
                <p className="text-gray-700 text-base">una lista de las mas elegidas o seleccionadas por el usuario</p>
                <p style={{display:"flex"}} className="text-gray-700 text-base"><FaShoppingBag /><span> Ultimas Compras:</span></p>
                <p className="text-gray-700 text-base">un listado de las ultimas comras hechas por el usuario</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link className="inline-flex bg-red-200 rounded-full px-7 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                to='/'>
                    <FaBackward /> <span>Volver</span>
                </Link>
            </div>
        </div>
    )
}

export default ProfilePage